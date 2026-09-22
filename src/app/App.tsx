import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import NavBar from "@/imports/NavBar";
import Footer from "@/imports/Footer";
import MobileFooterLight from "@/imports/NarBar";
import MobileFooterDark from "@/imports/NarBar-1";
import { rooms, Room } from "./data";
import RoomModal from "./components/RoomModal";
import RoomCard from "./components/RoomCard";
import HomePage from "./views/HomePage";
import RutaFloresPage from "./views/RutaFloresPage";

import { useTheme } from "./hooks/useTheme";
import { useLanguage } from "./hooks/useLanguage";
import { useAppNavigation } from "./hooks/useAppNavigation";

export default function App() {
  const { isDark, t, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLanguage();
  const { 
    location, 
    currentPage, 
    goHome, 
    goRooms, 
    goRuta, 
    handleNavLink, 
    handleFooterLink 
  } = useAppNavigation();

  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.div
      className="min-h-screen w-full"
      animate={{ backgroundColor: t.pageBg }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Nav — fixed on mobile (overlays hero), sticky on desktop */}
      <div
        className="fixed md:sticky z-40 w-full transition-colors duration-300"
        style={{
          top: "env(safe-area-inset-top)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          background: mobileMenuOpen
            ? (isDark ? "#0c1a10" : "#f2f4f3")
            : (isDark ? "rgba(12,26,16,0.82)" : "rgba(242,244,243,0.88)"),
          borderBottom: isDark ? "1px solid rgba(237,232,216,0.07)" : "1px solid rgba(28,36,32,0.10)",
        }}
      >
        <NavBar
          style={isDark ? "dark" : "light"}
          lang={lang}
          currentPage={currentPage}
          onToggleMode={toggleTheme}
          onToggleLang={toggleLang}
          onMenuChange={setMobileMenuOpen}
          onLogoClick={goHome}
          onNavLink={handleNavLink}
          className="w-full relative"
        />
      </div>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <HomePage
                t={t} isDark={isDark} rooms={rooms}
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
                  ← Back to Home
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
                  style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: t.muted, background: "none", border: "none", cursor: "pointer" }}
                >
                  ← Back to Home
                </button>
                <h1 className="font-black leading-tight mb-4 italic" style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(32px,5vw,56px)", color: t.heading, fontVariationSettings: '"SOFT" 0,"WONK" 1' }}>
                  Find Your Casa
                </h1>
              </div>
              <main>
                {rooms.map((room, i) => (
                  <RoomCard key={room.id} room={room} t={t} index={i} onOpenModal={setSelectedRoom} />
                ))}
              </main>
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>

      {/* Footer */}
      <div className="hidden md:block">
        <Footer
          style={isDark ? "dark" : "light"}
          onLinkClick={handleFooterLink}
        />
      </div>
      <div className="block md:hidden">
        {isDark ? <MobileFooterDark /> : <MobileFooterLight />}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <RoomModal room={selectedRoom} t={t} onClose={() => setSelectedRoom(null)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
