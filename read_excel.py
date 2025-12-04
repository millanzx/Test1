import pandas as pd
import json

# Читаем Excel файл
df = pd.read_excel('/workspace/pars.xlsx')

print("Структура данных из Excel файла:")
print("Колонки:", df.columns.tolist())
print("\nПервые 5 строк:")
print(df.head())

print("\nИнформация о данных:")
print(df.info())

# Преобразуем даты в строки для JSON сериализации
df = df.astype(str)  # Преобразуем все данные в строки для избежания проблем с сериализацией
data = df.to_dict('records')

# Сохраняем данные в JSON формате для последующего использования
with open('/workspace/parsed_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"\nВсего записей: {len(data)}")
print("Данные сохранены в parsed_data.json")