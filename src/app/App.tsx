import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import NavBar from "@/imports/NavBar";
import Footer from "@/imports/Footer";
import MobileFooterLight from "@/imports/NarBar";
import MobileFooterDark from "@/imports/NarBar-1";
import { DARK, LIGHT } from "./theme";
import { rooms, Room } from "./data";
import RoomModal from "./components/RoomModal";
import RoomCard from "./components/RoomCard";
import HomePage from "./views/HomePage";
import RutaFloresPage from "./views/RutaFloresPage";

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "ES">("EN");
  const t = isDark ? DARK : LIGHT;

  const navigate = useNavigate();
  const location = useLocation();

  let page = "home";
  if (location.pathname === "/rooms") page = "rooms";
  if (location.pathname === "/ruta") page = "ruta";

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
          currentPage={page}
          onToggleMode={() => setIsDark((d) => !d)}
          onToggleLang={() => setLang((l) => l === "EN" ? "ES" : "EN")}
          onMenuChange={setMobileMenuOpen}
          onLogoClick={() => navigate("/")}
          onNavLink={(link) => {
            if (link === "Rooms") navigate("/rooms");
            else if (link === "Our Story" || link === "Story" || link === "Find Us") navigate("/");
          }}
          className="w-full relative"
        />
      </div>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <HomePage
                t={t} isDark={isDark} rooms={rooms}
                onExploreRooms={() => navigate("/rooms")}
                onOpenModal={setSelectedRoom}
                onExploreRuta={() => navigate("/ruta")}
              />
            </motion.div>
          } />
          
          <Route path="/ruta" element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <div className="flex items-center px-6 md:px-[80px] pt-8 pb-2">
                <button
                  onClick={() => navigate("/")}
                  className="flex items-center gap-1.5 uppercase tracking-widest"
                  style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "#54625d", background: "none", border: "none", cursor: "pointer" }}
                >
                  ← Back to Home
                </button>
              </div>
              <RutaFloresPage onExploreRooms={() => navigate("/rooms")} />
            </motion.div>
          } />
          
          <Route path="/rooms" element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              {/* Rooms page header */}
              <div className="flex flex-col items-center text-center pt-16 pb-12 px-6">
                <button
                  onClick={() => navigate("/")}
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
          onLinkClick={(link) => {
            if (link === "FAQ") {
              navigate("/ruta");
              setTimeout(() => {
                document.getElementById("ruta-faq")?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }
          }}
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
