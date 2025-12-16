"""
Script de tradução automática para arquivos JSON de idiomas
Organiza as chaves por ordem de componentes (top-down do site)
Usa Google Tradutor para tradução dinâmica
"""

import json
import sys
import time
from pathlib import Path

try:
    from google.cloud import translate_v2
    GOOGLE_TRANSLATE_AVAILABLE = True
except ImportError:
    try:
        from deep_translator import GoogleTranslator
        GOOGLE_TRANSLATE_AVAILABLE = True
        print("✓ GoogleTranslator (deep_translator) disponível")
    except ImportError:
        GOOGLE_TRANSLATE_AVAILABLE = False
        print("⚠️  Instale: pip install google-cloud-translate ou pip install deep-translator")

COMPONENT_ORDER = [
    "name",
    "header",
    "hero",
    "about-me",
    "projects",
    "contact",
    "qr",
    "components",
    "curriculum",
    "gradients",
    "routes",
    "footer",
    "scrolltop",
    "modal"
]

def sort_by_component_order(data: dict) -> dict:
    """Reordena um dicionário seguindo a ordem de componentes"""
    sorted_data = {}
    for key in COMPONENT_ORDER:
        if key in data:
            sorted_data[key] = data[key]
    # Adiciona qualquer chave restante que não esteja na ordem
    for key in data:
        if key not in sorted_data:
            sorted_data[key] = data[key]
    return sorted_data


def translate_text(text: str, target_language: str, source_language: str = "en") -> str:
    """Traduz um texto usando Google Tradutor"""
    if not text or text.isspace():
        return text
    
    try:
        from deep_translator import GoogleTranslator
        
        translator = GoogleTranslator(source_language=source_language, target_language=target_language)
        translated = translator.translate(text)
        return translated
    except Exception as e:
        print(f"⚠️  Erro ao traduzir para {target_language}: {str(e)}")
        return text


def translate_dict_recursive(data: dict, target_language: str, source_language: str = "en") -> dict:
    """Traduz recursivamente um dicionário inteiro"""
    translated = {}
    
    for key, value in data.items():
        if isinstance(value, dict):
            # Recursivamente traduz dicionários aninhados
            translated[key] = translate_dict_recursive(value, target_language, source_language)
        elif isinstance(value, str):
            # Traduz strings (incluindo o campo "name")
            print(f"  Traduzindo: {key}...", end=" ", flush=True)
            time.sleep(0.3)  # Rate limiting para não sobrecarregar a API
            translated[key] = translate_text(value, target_language, source_language)
            print("✓")
        else:
            translated[key] = value
    
    return translated


def process_language_files(base_dir: str):
    """Processa todos os arquivos de idioma com Google Tradutor"""
    if not GOOGLE_TRANSLATE_AVAILABLE:
        print("❌ Google Tradutor não está disponível!")
        print("Instale com: pip install deep-translator")
        sys.exit(1)
    
    i18n_dir = Path(base_dir) / "src" / "i18n"
    
    # Lê o arquivo base em inglês
    en_file = i18n_dir / "en.json"
    with open(en_file, "r", encoding="utf-8") as f:
        en_data = json.load(f)
    
    # Ordena o arquivo base
    en_data = sort_by_component_order(en_data)
    with open(en_file, "w", encoding="utf-8") as f:
        json.dump(en_data, f, ensure_ascii=False, indent=2)
    print(f"✓ {en_file.name} reorganizado com sucesso!")
    
    # Processa outros idiomas
    language_codes = ["pt", "de", "es", "fr", "hi", "ja", "ko", "ru", "zh"]
    language_map = {
        "pt": "pt",
        "de": "de", 
        "es": "es",
        "fr": "fr",
        "hi": "hi",
        "ja": "ja",
        "ko": "ko",
        "ru": "ru",
        "zh": "zh"
    }
    
    for lang_code in language_codes:
        lang_file = i18n_dir / f"{lang_code}.json"
        
        print(f"\n📝 Traduzindo para {lang_code.upper()}...")
        
        # Traduz usando Google Tradutor
        translated_data = translate_dict_recursive(en_data, language_map[lang_code], "en")
        
        # Ordena os dados traduzidos
        translated_data = sort_by_component_order(translated_data)
        
        # Escreve o arquivo
        with open(lang_file, "w", encoding="utf-8") as f:
            json.dump(translated_data, f, ensure_ascii=False, indent=2)
        
        print(f"✓ {lang_file.name} atualizado com sucesso!")
    
    print("\n✅ Todos os arquivos de tradução foram processados com Google Tradutor!")


if __name__ == "__main__":
    base_directory = str(Path.cwd())
    print(f"📁 Processando arquivos em: {base_directory}\n")
    process_language_files(base_directory)
