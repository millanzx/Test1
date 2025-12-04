import pandas as pd
import json

# Read the CSV file with proper dtype specification to prevent date conversion
df = pd.read_csv('/workspace/pars.csv', dtype={
    'id': str,
    'macrogroup_id': str,
    'macrogroup_name': str,
    'education_level': str,
    'fgos_code': str,  # Keep as string to prevent date conversion
    'program_name': str,
    'institution_name': str,
    'region': str,
    'budget_seats': str,
    'url': str
})

print("Структура данных из CSV файла:")
print("Колонки:", df.columns.tolist())
print("\nПервые 5 строк:")
print(df.head())

print("\nТипы данных:")
print(df.dtypes)

print(f"\nВсего записей: {len(df)}")

# Clean the data
df['id'] = df['id'].fillna('').astype(str).str.replace('.0', '', regex=False)
df['fgos_code'] = df['fgos_code'].fillna('').astype(str).str.strip()

# Fix the fgos_code format if it's been parsed as date
# If the format is like "2001-03-09 00:00:00", convert it back to "09.03.01" format
def fix_fgos_code(code):
    if pd.isna(code) or code == 'nan':
        return '—'
    code_str = str(code).strip()
    
    # Check if it looks like a date that was incorrectly parsed
    if '-' in code_str and len(code_str) > 10 and ' ' in code_str:
        # This was probably parsed as a date, try to convert back
        # But we need to be careful - if it's already in the correct format like "09.03.01", leave it
        import re
        date_match = re.match(r'(\d{4})-(\d{2})-(\d{2})', code_str)
        if date_match:
            year, month, day = date_match.groups()
            # If this was originally like "09.03.01", it would have been converted to 2001-03-09
            # So we convert back to day.month.year format (09.03.01)
            return f"{day}.{month}.{year[-2:]}"
    
    # If it's already in the correct format or doesn't match date pattern, return as is
    return code_str

df['fgos_code'] = df['fgos_code'].apply(fix_fgos_code)

# Convert to dictionary records
data = df.to_dict('records')

# Function to map regions to federal districts
def get_district_by_region(region):
    if pd.isna(region):
        return "РФ"
    
    region = str(region).lower().strip()
    
    # Словарь соответствия регионов федеральному округу
    region_to_district = {
        # Центральный федеральный округ
        "москва": "ЦФО", "московская": "ЦФО", "белгород": "ЦФО", "брянск": "ЦФО",
        "владимир": "ЦФО", "воронеж": "ЦФО", "иваново": "ЦФО", "калуга": "ЦФО", 
        "кострома": "ЦФО", "курск": "ЦФО", "липецк": "ЦФО", "орёл": "ЦФО",
        "рязань": "ЦФО", "смоленск": "ЦФО", "тамбов": "ЦФО", "тверь": "ЦФО", 
        "тула": "ЦФО", "ярославль": "ЦФО", "тверская": "ЦФО", "владимирская": "ЦФО",
        
        # Северо-Западный федеральный округ
        "санкт-петербург": "СЗФО", "ленинградская": "СЗФО", "архангельск": "СЗФО",
        "вологда": "СЗФО", "калиниград": "СЗФО", "мурманск": "СЗФО", "новгород": "СЗФО",
        "псков": "СЗФО", "ненецкий": "СЗФО", "коми": "СЗФО", "ка렐": "СЗФО",
        
        # Южный федеральный округ
        "ростов-на-дону": "ЮФО", "астрахань": "ЮФО", "волгоград": "ЮФО", "краснодар": "ЮФО",
        "сочи": "ЮФО", "крым": "ЮФО", "адыгея": "ЮФО", "калмыкия": "ЮФО", "карачаево-черкесия": "ЮФО",
        "кабардино-балкария": "ЮФО", "северная осетия": "ЮФО", "ингушетия": "ЮФО", "чечня": "ЮФО",
        "дагестан": "ЮФО",
        
        # Северо-Кавказский федеральный округ
        "ставрополь": "СКФО", "ставропольский": "СКФО",
        
        # Приволжский федеральный округ
        "нижний": "ПФО", "костромская": "ПФО", "нижегородская": "ПФО", "казань": "ПФО", "татарстан": "ПФО", 
        "самара": "ПФО", "саратов": "ПФО", "улус": "ПФО", "пермь": "ПФО", "киров": "ПФО", 
        "оренбург": "ПФО", "пенза": "ПФО", "удмурт": "ПФО", "чуваш": "ПФО", "башкортостан": "ПФО", 
        "мордов": "ПФО", "хакас": "ПФО", "марий": "ПФО",
        
        # Уральский федеральный округ
        "екатеринбург": "УФО", "челябинск": "УФО", "тюмень": "УФО", "ханты-мансийский": "УФО",
        "ямало-ненецкий": "УФО", "курганская": "УФО", "свердловская": "УФО", "тюменская": "УФО",
        
        # Сибирский федеральный округ
        "новосибирск": "СФО", "омск": "СФО", "томск": "СФО", "кемерово": "СФО",
        "алтай": "СФО", "алтайский": "СФО", "красноярск": "СФО", "республика тыва": "СФО", 
        "республика алтай": "СФО", "иркутск": "СФО", "буряти": "СФО", "забайкальский": "СФО",
        
        # Дальневосточный федеральный округ
        "владивосток": "ДФО", "хабаровск": "ДФО", "приморский": "ДФО", "амурская": "ДФО",
        "камчатка": "ДФО", "магаданская": "ДФО", "сахалинская": "ДФО",
        "чукотка": "ДФО", "саха": "ДФО", "якутия": "ДФО",
    }
    
    # Check if region contains any of the federal district keywords
    for reg, dist in region_to_district.items():
        if reg in region:
            return dist
    
    # Default return
    return "РФ"

# Process each record to map regions to federal districts
for record in data:
    for key, value in record.items():
        if pd.isna(value):
            record[key] = ""
        elif key == 'id':
            # Convert id to integer if possible
            try:
                record[key] = str(int(float(value))) if value != '' else ""
            except:
                record[key] = str(value) if value != '' else ""
        elif key == 'region':
            # Map the region to federal district
            record[key] = get_district_by_region(value)
        else:
            record[key] = str(value) if value != '' else ""

# Save data in JSON format for the web application
with open('/workspace/parsed_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"\nДанные успешно сохранены в parsed_data.json")
print(f"Количество записей: {len(data)}")

# Print sample of fixed data
print("\nПримеры исправленных данных:")
for i in range(min(5, len(data))):
    print(f"ID: {data[i]['id']}, FGOS Code: {data[i]['fgos_code']}, Region: {data[i]['region']}, Program: {data[i]['program_name'][:50]}...")