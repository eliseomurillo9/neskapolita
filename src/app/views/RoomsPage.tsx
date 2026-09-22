import i18n from "../../locales/i18n";
const t = i18n.t.bind(i18n);
import { motion } from "motion/react";
import { Room } from "../data";
import { Theme } from "../theme";
import RoomCard from "../components/RoomCard";

interface RoomsPageProps {
  theme: Theme;
  rooms: Room[];
  goHome: () => void;
  onOpenModal: (room: Room | null) => void;
}

export default function RoomsPage({ theme, rooms, goHome, onOpenModal }: RoomsPageProps) {
  return (
    <div className="w-full">
      {/* Rooms page header */}
      <div className="max-w-[1920px] mx-auto w-full flex flex-col items-center text-center pt-16 pb-12 px-6 md:px-14">
        <button
          onClick={goHome}
          className="self-start flex items-center gap-1.5 mb-8 uppercase tracking-widest"
          style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: theme.muted, background: "none", border: "none", cursor: "pointer" }}
        >
          {t("common.back_to_home_1")}
        </button>
        <h1 className="font-black leading-tight mb-4 italic" style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(32px,5vw,56px)", color: theme.heading, fontVariationSettings: '"SOFT" 0,"WONK" 1' }}>
          {t("common.find_your_casa")}
        </h1>
      </div>
      <main>
        {rooms.map((room, i) => (
          <RoomCard key={room.id} room={room} theme={theme} index={i} onOpenModal={onOpenModal} />
        ))}
      </main>
    </div>
  );
}
