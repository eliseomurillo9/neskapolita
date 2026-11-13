import i18n from "../../locales/i18n";
const t = i18n.t.bind(i18n);
import { useEffect } from "react";
import { motion } from "motion/react";
import { Room } from "../data";
import { Theme } from "../theme";
import RoomCard from "../components/RoomCard";

interface RoomsPageProps {
  theme: Theme;
  rooms: Room[];
  onOpenModal: (room: Room | null) => void;
}

export default function RoomsPage({ theme, rooms, onOpenModal }: RoomsPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const root = document.getElementById("root");
    if (root) root.scrollTop = 0;
  }, []);

  return (
    <div className="w-full">
      {/* Rooms page header */}
      <div className="max-w-[1920px] mx-auto w-full flex flex-col items-center text-center pt-12 pb-12 px-6 md:px-14">
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
