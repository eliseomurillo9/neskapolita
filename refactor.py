import re
import os

with open('src/app/App.tsx', 'r') as f:
    lines = f.readlines()

# 1-46: Imports
imports = lines[0:46]
# 47-120: Theme
theme = lines[46:120]
# 121-316: Data (Icons, rooms, types)
data = lines[120:315]
# 317-448: RoomModal
room_modal = lines[315:447]
# 449-565: RoomCard
room_card = lines[447:564]
# 566-728: FigmaRoomCard
figma_room_card = lines[564:727]
# 729-1250: HomePage
home_page = lines[727:1250]
# 1251-1475: RutaFloresPage
ruta_flores_page = lines[1250:1474]
# 1476-end: App
app = lines[1474:]

# We need to make sure the imports are copied over to the files that need them.
# The easiest way is to just put all imports in all files, and let TS/eslint complain about unused (or just ignore it), 
# or we can write them out properly. But wait, `App.tsx` will only need a few imports now!

def write_file(path, content, include_imports=True, extra_imports=[]):
    with open(path, 'w') as f:
        if include_imports:
            f.writelines(imports)
        for ei in extra_imports:
            f.write(ei + '\n')
        f.writelines(content)

write_file('src/app/theme.ts', theme, include_imports=False)
write_file('src/app/data.ts', data, include_imports=True, extra_imports=["import { DARK, LIGHT } from './theme';", "export type Theme = typeof DARK;"])
write_file('src/app/components/RoomModal.tsx', room_modal, include_imports=True, extra_imports=["import { Theme } from '../theme';", "import { Room, AmenityItem } from '../data';"])
write_file('src/app/components/RoomCard.tsx', room_card, include_imports=True, extra_imports=["import { Theme } from '../theme';", "import { Room, AmenityItem } from '../data';", "import RoomModal from './RoomModal';"])
write_file('src/app/components/FigmaRoomCard.tsx', figma_room_card, include_imports=True, extra_imports=["import { Theme } from '../theme';", "import { Room, AmenityItem } from '../data';"])
write_file('src/app/views/HomePage.tsx', home_page, include_imports=True, extra_imports=["import { Theme } from '../theme';", "import { Room, AmenityItem, features } from '../data';", "import RoomCard from '../components/RoomCard';", "import FigmaRoomCard from '../components/FigmaRoomCard';"])
write_file('src/app/views/RutaFloresPage.tsx', ruta_flores_page, include_imports=True, extra_imports=[])

app_imports = [
    'import { useState, useEffect } from "react";',
    'import { Routes, Route, useNavigate, useLocation } from "react-router-dom";',
    'import { motion, AnimatePresence } from "motion/react";',
    'import NavBar from "@/imports/NavBar";',
    'import Footer from "@/imports/Footer";',
    'import MobileFooterLight from "@/imports/NarBar";',
    'import MobileFooterDark from "@/imports/NarBar-1";',
    'import { DARK, LIGHT } from "./theme";',
    'import { rooms, Room } from "./data";',
    'import RoomModal from "./components/RoomModal";',
    'import RoomCard from "./components/RoomCard";',
    'import HomePage from "./views/HomePage";',
    'import RutaFloresPage from "./views/RutaFloresPage";'
]

with open('src/app/App.tsx', 'w') as f:
    for ai in app_imports:
        f.write(ai + '\n')
    f.writelines(app)

