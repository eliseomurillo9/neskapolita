import i18n from "../i18n";
const t = i18n.t.bind(i18n);
import { Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { rooms, Room } from "./data";
import HomePage from "./views/HomePage";
import RutaFloresPage from "./views/RutaFloresPage";
import RoomCard from "./components/RoomCard";
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
                {t("back_to_home_2")}
              </button>
            </div>
            <RutaFloresPage onExploreRooms={goRooms} />
          </motion.div>
        } />
        
        <Route path="/rooms" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            {/* Rooms page header */}
            <div className="max-w-[1920px] mx-auto w-full flex flex-col items-center text-center pt-16 pb-12 px-6 md:px-14">
              <button
                onClick={goHome}
                className="self-start flex items-center gap-1.5 mb-8 uppercase tracking-widest"
                style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: theme.muted, background: "none", border: "none", cursor: "pointer" }}
              >
                {t("back_to_home_2")}
              </button>
              <h1 className="font-black leading-tight mb-4 italic" style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(32px,5vw,56px)", color: theme.heading, fontVariationSettings: '"SOFT" 0,"WONK" 1' }}>
                {t("find_your_casa")}
              </h1>
            </div>
            <main>
              {rooms.map((room, i) => (
                <RoomCard key={room.id} room={room} theme={theme} index={i} onOpenModal={setSelectedRoom} />
              ))}
            </main>
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}
