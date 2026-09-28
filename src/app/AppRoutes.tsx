import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import i18n from "../locales/i18n";
import {Route, Routes} from "react-router-dom";
import {AnimatePresence, motion} from "motion/react";
import {getRooms, Room} from "./data";
import HomePage from "./views/HomePage";
import RutaFloresPage from "./views/RutaFloresPage";
import RoomsPage from "./views/RoomsPage";
import {Theme} from "./theme";
import { Helmet } from "react-helmet-async";

const tStatic = i18n.t.bind(i18n);

interface AppRoutesProps {
  location: any;
  theme: Theme;
  isDark: boolean;
  goHome: () => void;
  goRooms: () => void;
  goRuta: () => void;
  setSelectedRoom: (room: Room | null) => void;
}

const resetWindowScroll = () => {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  const root = document.getElementById("root");
  if (root) root.scrollTop = 0;
};

export default function AppRoutes({
  location,
  theme,
  isDark,
  goHome,
  goRooms,
  goRuta,
  setSelectedRoom,
}: AppRoutesProps) {
  const {t} = useTranslation();

  let titleKey = "page_titles.home";
  let descKey = "page_descriptions.home";
  if (location.pathname === "/ruta") {
    titleKey = "page_titles.ruta";
    descKey = "page_descriptions.ruta";
  } else if (location.pathname === "/rooms") {
    titleKey = "page_titles.rooms";
    descKey = "page_descriptions.rooms";
  }
  const pageTitle = `Neskapolita | ${t(titleKey)}`;
  const pageDescription = t(descKey);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="twitter:title" content={pageTitle} />
      </Helmet>
      <AnimatePresence mode="wait" onExitComplete={resetWindowScroll}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <HomePage
                theme={theme} isDark={isDark} rooms={getRooms()}
              onExploreRooms={goRooms}
              onOpenModal={setSelectedRoom}
              onExploreRuta={goRuta}
            />
          </motion.div>
        } />

        <Route path="/ruta" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className="max-w-[1920px] mx-auto w-full flex items-center px-6 md:px-14 lg:px-[80px] pt-24 md:pt-28 pb-2">
              <button
                onClick={goHome}
                className="flex items-center gap-1.5 uppercase tracking-widest"
                style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "#54625d", background: "none", border: "none", cursor: "pointer" }}
              >
                {tStatic("common.back_to_home_1")}
              </button>
            </div>
            <RutaFloresPage onExploreRooms={goRooms} />
          </motion.div>
        } />

        <Route path="/rooms" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <RoomsPage
              theme={theme}
              rooms={getRooms()}
              goHome={goHome}
              onOpenModal={setSelectedRoom}
            />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
    </>
  );
}
