import i18n from "../locales/i18n";
const t = i18n.t.bind(i18n);
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import NavBar from "@/imports/NavBar";
import Footer from "@/imports/Footer";
import MobileFooterLight from "@/imports/NarBar";
import MobileFooterDark from "@/imports/NarBar-1";
import { Room } from "./data";
import RoomModal from "./components/RoomModal";

import { useTheme } from "./hooks/useTheme";
import { useLanguage } from "./hooks/useLanguage";
import { useAppNavigation } from "./hooks/useAppNavigation";
import AppRoutes from "./AppRoutes";

export default function App() {
  const { isDark, theme, toggleTheme } = useTheme();
  const {
    lang,
    toggleLang
  } = useLanguage();
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
  return <motion.div className="min-h-screen w-full" animate={{
    backgroundColor: theme.pageBg
  }} transition={{
    duration: 0.55,
    ease: [0.22, 1, 0.36, 1]
  }}>
      {/* Nav — fixed on mobile (overlays hero), sticky on desktop */}
      <div className="fixed md:sticky z-40 w-full transition-colors duration-300" style={{
      top: "env(safe-area-inset-top)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      background: mobileMenuOpen ? isDark ? "#0c1a10" : "#f2f4f3" : isDark ? "rgba(12,26,16,0.82)" : "rgba(242,244,243,0.88)",
      borderBottom: isDark ? "1px solid rgba(237,232,216,0.07)" : "1px solid rgba(28,36,32,0.10)"
    }}>
        <NavBar style={isDark ? "dark" : "light"} lang={lang} currentPage={currentPage} onToggleMode={toggleTheme} onToggleLang={toggleLang} onMenuChange={setMobileMenuOpen} onLogoClick={goHome} onNavLink={handleNavLink} onBookNow={() => window.open('https://api.whatsapp.com/send?phone=50370917674', '_blank')} className="w-full relative" />
      </div>

      <AppRoutes 
        location={location}
        theme={theme}
        isDark={isDark}
        goHome={goHome}
        goRooms={goRooms}
        goRuta={goRuta}
        setSelectedRoom={setSelectedRoom}
      />

      {/* Footer */}
      <div className="hidden md:block">
        <Footer style={isDark ? "dark" : "light"} onLinkClick={handleFooterLink} />
      </div>
      <div className="block md:hidden">
        {isDark ? <MobileFooterDark onLinkClick={handleFooterLink} /> : <MobileFooterLight onLinkClick={handleFooterLink} />}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedRoom && <RoomModal room={selectedRoom} theme={theme} onClose={() => setSelectedRoom(null)} />}
      </AnimatePresence>
    </motion.div>;
}
