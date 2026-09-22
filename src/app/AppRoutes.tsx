import i18n from "../locales/i18n";
const t = i18n.t.bind(i18n);
import { Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { rooms, Room } from "./data";
import HomePage from "./views/HomePage";
import RutaFloresPage from "./views/RutaFloresPage";
import RoomsPage from "./views/RoomsPage";
import { Theme } from "./theme";

interface AppRoutesProps {
  location: any;
  theme: Theme;
  isDark: boolean;
  goHome: () => void;
  goRooms: () => void;
  goRuta: () => void;
  setSelectedRoom: (room: Room | null) => void;
}

export default function AppRoutes({
  location,
  theme,
  isDark,
  goHome,
  goRooms,
  goRuta,
  setSelectedRoom,
}: AppRoutesProps) {
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <HomePage
              theme={theme} isDark={isDark} rooms={rooms}
              onExploreRooms={goRooms}
              onOpenModal={setSelectedRoom}
              onExploreRuta={goRuta}
            />
          </motion.div>
        } />
        
        <Route path="/ruta" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className="max-w-[1920px] mx-auto w-full flex items-center px-6 md:px-14 lg:px-[80px] pt-8 pb-2">
              <button
                onClick={goHome}
                className="flex items-center gap-1.5 uppercase tracking-widest"
                style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "#54625d", background: "none", border: "none", cursor: "pointer" }}
              >
                {t("common.back_to_home_1")}
              </button>
            </div>
            <RutaFloresPage onExploreRooms={goRooms} />
          </motion.div>
        } />
        
        <Route path="/rooms" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <RoomsPage 
              theme={theme} 
              rooms={rooms} 
              goHome={goHome} 
              onOpenModal={setSelectedRoom} 
            />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}
