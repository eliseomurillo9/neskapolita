import { lazy, Suspense } from "react";
import {useTranslation} from "react-i18next";
import {Route, Routes} from "react-router-dom";
import {AnimatePresence, motion} from "motion/react";
import {getRooms, Room} from "./data";
import {Theme} from "./theme";
import PageMetadata from "./PageMetadata";

const HomePage = lazy(() => import("./views/HomePage"));
const RutaFloresPage = lazy(() => import("./views/RutaFloresPage"));
const RoomsPage = lazy(() => import("./views/RoomsPage"));
const StoryPage = lazy(() => import("./views/StoryPage"));
const NotFoundPage = lazy(() => import("./views/NotFoundPage"));

interface AppRoutesProps {
  location: any;
  theme: Theme;
  isDark: boolean;
  goHome: () => void;
  goRooms: () => void;
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
  setSelectedRoom,
}: AppRoutesProps) {
  const {t} = useTranslation();

  return (
    <>
      <PageMetadata pathname={location.pathname} />
      <AnimatePresence initial={false} mode="wait" onExitComplete={resetWindowScroll}>
        <Suspense fallback={<div style={{ height: "100vh" }} />}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <HomePage
                theme={theme} isDark={isDark} rooms={getRooms()}
              onExploreRooms={goRooms}
              onOpenModal={setSelectedRoom}
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
              rooms={getRooms()}
              onOpenModal={setSelectedRoom}
            />
          </motion.div>
        } />

        <Route path="/story" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <StoryPage
              theme={theme}
              isDark={isDark}
            />
          </motion.div>
        } />

        <Route path="*" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <NotFoundPage
              theme={theme}
              goHome={goHome}
            />
          </motion.div>
        } />
      </Routes>
        </Suspense>
    </AnimatePresence>
    </>
  );
}
