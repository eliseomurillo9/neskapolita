import json
import re
import os

# Dictionary containing old_key -> { 'new_key', 'en', 'es' }
translations = {
    "data_1": {"key": "room_nieves_name", "es": "Casa Nieves"},
    "data_2": {"key": "room_nieves_type", "es": "Habitación Privada"},
    "data_3": {"key": "room_nieves_hover", "es": "Habitación doble con baño privado y vistas a la montaña"},
    "data_4": {"key": "room_nieves_desc", "es": "Una acogedora habitación en planta baja con dos camas, aire acondicionado y baño privado. Relájate con TV de pantalla plana y Netflix, y luego sal a la zona de comedor al aire libre situada en el jardín tropical."},
    "data_5": {"key": "room_nieves_size", "es": "15 m²"},
    "data_6": {"key": "amenity_ac", "es": "A/C"},
    "data_7": {"key": "amenity_bath", "es": "Baño"},
    "data_8": {"key": "amenity_tv", "es": "TV"},
    "data_9": {"key": "category_comfort", "es": "Comodidad y Conveniencia"},
    "data_10": {"key": "category_bathroom", "es": "Baño y Lavandería"},
    "data_11": {"key": "category_entertainment", "es": "Entretenimiento y Conectividad"},
    "data_12": {"key": "category_outdoor", "es": "Espacio al Aire Libre"},
    "data_13": {"key": "category_rules", "es": "Reglas de la Casa"},
    "data_14": {"key": "room_mochila_name", "es": "Casa Mochila"},
    "data_15": {"key": "room_mochila_type", "es": "Dormitorio Mixto"},
    "data_16": {"key": "room_mochila_hover", "es": "Habitación de Dormitorio Mixto"},
    "data_17": {"key": "room_mochila_desc", "es": "Un amplio dormitorio mixto construido para mochileros y viajeros en grupo. Cinco camas, baño compartido con secador de pelo, cajas fuertes y lavandería en el lugar. Sal a la terraza comedor comunitaria e intercambia historias bajo el cielo."},
    "data_18": {"key": "room_mochila_size", "es": "21 m²"},
    "data_19": {"key": "amenity_1bed", "es": "1 cama"},
    "data_20": {"key": "amenity_4bunks", "es": "4 literas"},
    "data_21": {"key": "category_comfort_mochila", "es": "Comodidad y Conveniencia"},
    "data_22": {"key": "category_shared_bathroom", "es": "Baño Compartido y Lavandería"},
    "data_23": {"key": "category_connectivity", "es": "Conectividad y Exteriores"},
    "data_24": {"key": "category_rules_mochila", "es": "Reglas de la Casa"},
    "data_25": {"key": "room_flores_name", "es": "Casa Flores"},
    "data_26": {"key": "room_flores_type", "es": "Habitación Doble con Patio"},
    "data_27": {"key": "room_flores_hover", "es": "Habitación doble con patio privado y vistas al jardín"},
    "data_28": {"key": "room_flores_desc", "es": "Luminosa y cómoda con acceso privado a un patio bañado por el sol y una terraza. Despierta con vistas al jardín y al patio interior, disfruta de tu mañana al aire libre, y vuelve a un baño privado con todas las comodidades del hogar."},
    "data_29": {"key": "room_flores_size", "es": "19 m²"},
    "data_30": {"key": "amenity_garden_view", "es": "vista al jardín"},
    "data_31": {"key": "amenity_patio", "es": "Patio"},
    "data_32": {"key": "amenity_bath_flores", "es": "Baño"},
    "data_33": {"key": "category_room_details", "es": "Detalles y Distribución de la Habitación"},
    "data_34": {"key": "category_comfort_flores", "es": "Comodidad y Conveniencia"},
    "data_35": {"key": "category_bathroom_flores", "es": "Baño y Lavandería"},
    "data_36": {"key": "category_connectivity_flores", "es": "Conectividad y Espacio al Aire Libre"},
    "data_37": {"key": "category_rules_flores", "es": "Reglas de la Casa"},
    "data_38": {"key": "room_volcan_name", "es": "Casa Volcán"},
    "data_39": {"key": "room_volcan_type", "es": "Habitación Doble con Balcón"},
    "data_40": {"key": "room_volcan_hover", "es": "Habitación Doble con balcón y vistas a la montaña"},
    "data_41": {"key": "room_volcan_desc", "es": "Una habitación escénica con balcón privado y terraza que enmarca vistas a la montaña, al jardín y a la ciudad. Con aire acondicionado, TV de pantalla plana y Netflix. Duérmete viendo la silueta del volcán, despierta con el canto de los pájaros sobre la Ruta de las Flores."},
    "data_42": {"key": "room_volcan_size", "es": "19 m²"},
    "data_43": {"key": "amenity_mountain_view", "es": "Vistas a la montaña"},
    "data_44": {"key": "amenity_courtyard", "es": "Patio Interior"},
    "data_45": {"key": "amenity_bath_volcan", "es": "Baño"},
    "data_46": {"key": "category_climate", "es": "Comodidad y Clima"},
    "data_47": {"key": "category_bathroom_volcan", "es": "Baño y Lavandería"},
    "data_48": {"key": "category_entertainment_volcan", "es": "Entretenimiento y Conectividad"},
    "data_49": {"key": "category_leisure", "es": "Exteriores y Ocio"},
    "data_50": {"key": "category_rules_volcan", "es": "Reglas de la Casa"},
    "text_51": {"key": "per_night_slash", "es": "/ noche"},
    "text_52": {"key": "size", "es": "Tamaño"},
    "text_53": {"key": "google", "es": "Google"},
    "text_54": {"key": "key_amenities", "es": "Servicios Clave"},
    "text_55": {"key": "amenities", "es": "Servicios"},
    "text_56": {"key": "highlights", "es": "Destacados"},
    "text_57": {"key": "book_this_room", "es": "Reservar esta Habitación"},
    "text_58": {"key": "close", "es": "Cerrar"},
    "text_59": {"key": "per_night", "es": "por noche"},
    "text_60": {"key": "explore", "es": "Explorar"},
    "text_61": {"key": "book", "es": "Reservar"},
    "text_62": {"key": "most_popular", "es": "Más popular"},
    "text_63": {"key": "per_night_short", "es": "/noche"},
    "text_64": {"key": "explore_card", "es": "Explorar"},
    "data_65": {"key": "feature_garden", "es": "Jardín"},
    "data_66": {"key": "feature_kitchen", "es": "Cocina Comunitaria"},
    "data_67": {"key": "feature_lounge", "es": "Área de Sala Compartida"},
    "data_68": {"key": "feature_laundry", "es": "Lavandería de Autoservicio"},
    "text_69": {"key": "hero_title", "es": "Neskapolita"},
    "text_70": {"key": "hero_subtitle", "es": "Tu refugio en la Ruta de las flores"},
    "text_71": {"key": "nav_explore_rooms", "es": "Explorar Habitaciones"},
    "text_72": {"key": "nav_our_story", "es": "Nuestra Historia"},
    "text_73": {"key": "booking_rating_1", "es": "Puntuación de Booking"},
    "text_74": {"key": "booking_rating_2", "es": "Puntuación en Booking"},
    "text_75": {"key": "hero_title_2", "es": "Neskapolita"},
    "text_76": {"key": "hero_subtitle_2", "es": "Tu refugio en la Ruta de las flores"},
    "text_77": {"key": "nav_explore_rooms_2", "es": "Explorar Habitaciones"},
    "text_78": {"key": "nav_our_story_2", "es": "Nuestra Historia"},
    "text_79": {"key": "story_title_1", "es": "Neskapolita: La Historia de la"},
    "text_80": {"key": "story_title_2", "es": "\"Chica Bonita\""},
    "text_81": {"key": "story_desc", "es": "Adéntrate en la casa familiar que inspiró un legado de hospitalidad."},
    "text_82": {"key": "story_cta", "es": "Leer la Historia Completa"},
    "text_83": {"key": "find_your", "es": "Encuentra tu"},
    "text_84": {"key": "casa", "es": "Casa"},
    "text_85": {"key": "everything_you_need", "es": "Todo lo que necesitas para una estadía perfecta"},
    "text_86": {"key": "traveler_community", "es": "Comunidad de Viajeros"},
    "text_87": {"key": "traveler_desc", "es": "Eventos semanales, cenas y encuentros para nómadas globales modernos."},
    "data_88": {"key": "ruta_desc_1", "es": "Famoso por su festival gastronómico de fin de semana, las cascadas de Los Chorros y la tierra volcánica activa perfecta para el café."},
    "data_89": {"key": "ruta_desc_2", "es": "El pueblo más alto de la ruta, con fincas de café veladas por la niebla, tirolesa extrema y la hermosa Laguna Verde."},
    "data_90": {"key": "ruta_desc_3", "es": "Un pueblo vibrante lleno de murales callejeros en tonos pastel, tiendas boutique de artesanía y microcervecerías de gran altura."},
    "data_91": {"key": "ruta_desc_4", "es": "Famoso por la yuca al vapor tradicional servida en hojas de plátano, altas vistas a la montaña y galerías de madera locales."},
    "data_92": {"key": "ruta_desc_5", "es": "Hogar de la cestería ancestral en mimbre y un hermoso mercado nocturno a la luz de las velas donde venden cálidas pupusas."},
    "data_93": {"key": "ruta_desc_6", "es": "La puerta histórica a las tierras altas, rica en monumentos coloniales y piscinas termales volcánicas naturales."},
    "data_94": {"key": "place_1", "es": "Cascadas Los Chorros"},
    "data_95": {"key": "place_2", "es": "Festival Gastronómico"},
    "data_96": {"key": "place_3", "es": "Laguna Las Ninfas"},
    "data_97": {"key": "place_4", "es": "Laguna Verde"},
    "data_98": {"key": "place_5", "es": "Canopy Apaneca"},
    "data_99": {"key": "place_6", "es": "Finca Santa Leticia"},
    "data_100": {"key": "place_7", "es": "Distrito Histórico de Murales"},
    "data_101": {"key": "place_8", "es": "Mercado de Artesanías"},
    "data_102": {"key": "place_9", "es": "Parque Nacional El Imposible"},
    "data_103": {"key": "place_10", "es": "Parque Central"},
    "data_104": {"key": "place_11", "es": "Mercado de Yuca al Vapor"},
    "data_105": {"key": "place_12", "es": "Galerías de Arte en Madera"},
    "data_106": {"key": "place_13", "es": "Mercado Nocturno"},
    "data_107": {"key": "place_14", "es": "Talleres de Mimbre"},
    "data_108": {"key": "place_15", "es": "Iglesia de Nahuizalco"},
    "data_109": {"key": "place_16", "es": "Catedral de Sonsonate"},
    "data_110": {"key": "place_17", "es": "Aguas Termales"},
    "data_111": {"key": "place_18", "es": "Cascada El Escuco"},
    "text_112": {"key": "top_places", "es": "Mejores Lugares"},
    "text_113": {"key": "tap_place", "es": "Toca un lugar para abrir en Google Maps"},
    "text_114": {"key": "cozy_refuge", "es": "Un Refugio Acogedor en la"},
    "text_115": "text_115", # We'll populate this later
    "text_116": {"key": "set_in_heart", "es": "Ubicado en el corazón de Juayúa, Neskapolita hace que explorar la región sea fácil."},
    "text_117": {"key": "see_all_rooms_1", "es": "Ver Todas las Habitaciones"},
    "text_118": {"key": "explore_ruta", "es": "Explora la Ruta de las Flores"},
    "text_119": {"key": "discover_best", "es": "Descubre lo mejor de Juayúa y los pueblos de montaña vecinos — desde el famoso festival de comida y fincas de café hasta cascadas ocultas y mercados coloniales."},
    "text_120": {"key": "ready_to_explore", "es": "¿Listo para explorar la Ruta de las Flores?"},
    "text_121": {"key": "book_your_stay", "es": "Reserva tu estadía en Neskapolita en Juayúa — la base perfecta y céntrica para todas tus aventuras en las montañas occidentales."},
    "text_122": {"key": "see_all_rooms_2", "es": "Ver Todas las Habitaciones"},
    "text_123": {"key": "ruta_quick_tips", "es": "Consejos Rápidos de la Ruta"},
    "text_124": {"key": "back_to_home_1", "es": "← Volver al Inicio"},
    "text_125": {"key": "back_to_home_2", "es": "← Volver al Inicio"},
    "text_126": {"key": "find_your_casa", "es": "Encuentra tu Casa"}
}
translations["text_115"] = {"key": "ruta_de_las_flores", "es": "Ruta de las Flores"}

# Read original english json
with open('src/en.json', 'r') as f:
    en_json = json.load(f)

new_en_json = {}
new_es_json = {}

for old_key, val in en_json.items():
    if old_key in translations:
        new_key = translations[old_key]["key"]
        new_en_json[new_key] = val
        new_es_json[new_key] = translations[old_key]["es"]
    else:
        new_en_json[old_key] = val
        new_es_json[old_key] = val + " (ES)" # Fallback if I missed any

with open('src/en.json', 'w') as f:
    json.dump(new_en_json, f, indent=2, ensure_ascii=False)

with open('src/es.json', 'w') as f:
    json.dump(new_es_json, f, indent=2, ensure_ascii=False)

# Now rewrite App.tsx
with open('src/app/App.tsx', 'r') as f:
    app_tsx = f.read()

for old_key, data in translations.items():
    new_key = data["key"]
    # We replace t("old_key") with t("new_key")
    app_tsx = app_tsx.replace(f't("{old_key}")', f't("{new_key}")')

with open('src/app/App.tsx', 'w') as f:
    f.write(app_tsx)

print("Done renaming keys and updating translations!")
