import i18n from "../../locales/i18n";
const t = i18n.t.bind(i18n);
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Wifi, Wind, Star, Users, Bath, Mountain, ArrowRight, Check, Tv, ShieldCheck, UtensilsCrossed, AirVent, TreePine, BedDouble, Layers } from "lucide-react";

// Ruta de las Flores page assets
import rutaHeroPhoto from "@/imports/RutaFloresMapPageDesktop/850dde4affad5f2560eb4e5d70ef9add7b7d9ff3.png";
import rutaJuayua from "@/imports/RutaFloresMapPageDesktop/dbb8d5036dc30326df8b5297904a5b53b0cfb5f8.png";
import rutaApaneca from "@/imports/RutaFloresMapPageDesktop/f23c47939fd00eae014ff37746cb0058f242c565.png";
import rutaAtaco from "@/imports/RutaFloresMapPageDesktop/fce5276ce245dee3f5c2fdfd286db078a60800e0.png";
import rutaSalcoatitan from "@/imports/RutaFloresMapPageDesktop/828973c65dab400d9481607663e04c1e6267bbca.png";
import rutaNahuizalco from "@/imports/RutaFloresMapPageDesktop/f5b5961e54952719ffe5e43d303abb6cd7bd7565.png";
import rutaSonsonate from "@/imports/RutaFloresMapPageDesktop/a846ec44cc9d1a94bdbcbeb391dfc00b91a5018a.png";

export default function RutaFloresPage({
  onExploreRooms
}: {
  onExploreRooms: () => void;
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activePopIn, setActivePopIn] = useState<string | null>(null);

    const RUTA_STOPS = [{
        stop: "STOP 1",
        distance: "0 km — you're here!",
        imageLeft: true,
        city: "Juayúa",
        subtitle: "Food Festival & Waterfalls",
        description: t("ruta.desc_1"),
        image: rutaJuayua
    }, {
        stop: "STOP 2",
        distance: "8 km north",
        imageLeft: false,
        city: "Apaneca",
        subtitle: "Coffee Farms & Adventure",
        description: t("ruta.desc_2"),
        image: rutaApaneca
    }, {
        stop: "STOP 3",
        distance: "12 km north",
        imageLeft: true,
        city: "Ataco",
        subtitle: "Street Art & Handcrafts",
        description: t("ruta.desc_3"),
        image: rutaAtaco
    }, {
        stop: "STOP 4",
        distance: "5 km south",
        imageLeft: false,
        city: "Salcoatitán",
        subtitle: "Art Galleries & Yucca Cuisine",
        description: t("ruta.desc_4"),
        image: rutaSalcoatitan
    }, {
        stop: "STOP 5",
        distance: "15 km south",
        imageLeft: true,
        city: "Nahuizalco",
        subtitle: "Candlelit Night Market",
        description: t("ruta.desc_5"),
        image: rutaNahuizalco
    }, {
        stop: "STOP 6",
        distance: "25 km south",
        imageLeft: false,
        city: "Sonsonate",
        subtitle: "Colonial Gateway & Thermal Pools",
        description: t("ruta.desc_6"),
        image: rutaSonsonate
    }];
    const RUTA_FAQS = [{
        q: "How many days do you need for Ruta de las Flores?",
        a: "We recommend 2 to 3 days to fully explore the food markets, hike to waterfalls, and tour coffee farms at a relaxed highland pace."
    }, {
        q: "What is the best town to visit in Ruta de las Flores?",
        a: "Juayúa is the perfect culinary and adventure hub, while Ataco shines with its street art, and Apaneca offers high-altitude nature."
    }, {
        q: "Can you visit Ruta de las Flores without a car?",
        a: "Yes! Colorful local buses (called 'chicken buses') run constantly between all towns for just a few cents, and tuk-tuks are easy to hail."
    }, {
        q: "What is the best time of year to visit Ruta de las Flores?",
        a: "The dry season from November to April offers beautiful sunny weather, but the green season (May to October) makes waterfalls spectacular."
    }];

  const YellowCTA = ({
    label,
    onClick
  }: {
    label: string;
    onClick?: () => void;
  }) => <button onClick={onClick} className="self-start flex items-center gap-[8px] px-[30px] py-[14px] rounded-[4px] cursor-pointer border-0 drop-shadow-[0px_4px_6px_rgba(242,177,56,0.2)] transition-colors shrink-0" style={{
    background: "#f2b138"
  }} onMouseEnter={e => e.currentTarget.style.background = "#d49a1f"} onMouseLeave={e => e.currentTarget.style.background = "#f2b138"}>
      <span style={{
      fontFamily: "'DM Sans',sans-serif",
      fontSize: 11.2,
      fontWeight: 700,
      letterSpacing: "1.34px",
      color: "#0c1a10",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      fontVariationSettings: '"opsz" 14'
    }}>{label}</span>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="#0c1a10" strokeLinecap="round" strokeWidth="2" />
      </svg>
    </button>;
  return <div className="w-full" style={{
    background: "#f2f4f3"
  }}>

      {/* ── Hero ── */}
      <section className="w-full" style={{
      background: "#f2f4f3"
    }}>
        <div className="max-w-[1920px] mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 px-6 py-12 md:px-14 lg:px-[80px] md:py-[80px]">

          {/* Left: text */}
          <div className="flex flex-col gap-6 md:w-[500px] shrink-0">
            <h1 className="font-black leading-tight" style={{
            fontFamily: "'Fraunces',serif",
            fontSize: "clamp(32px,4vw,48px)",
            lineHeight: 1.12,
            fontVariationSettings: '"SOFT" 0, "WONK" 1',
            color: "#1c2420"
          }}>{t("common.cozy_refuge")}{" "}
              <em style={{
              color: "#3d9e72",
              fontStyle: "italic"
            }}>{t("common.ruta_de_las_flores")}</em>
            </h1>
            <p style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 15,
            lineHeight: 1.6,
            color: "#54625d",
            fontVariationSettings: '"opsz" 14'
          }}>{t("common.set_in_heart")}</p>
            <button onClick={onExploreRooms} className="self-start flex items-center gap-[8px] px-[30px] py-[14px] rounded-[4px] cursor-pointer border-0 drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)] transition-colors" style={{
            background: "#3d9e72"
          }} onMouseEnter={e => e.currentTarget.style.background = "#2d8a60"} onMouseLeave={e => e.currentTarget.style.background = "#3d9e72"}>
              <span style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 11.2,
              fontWeight: 700,
              letterSpacing: "1.34px",
              color: "white",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              fontVariationSettings: '"opsz" 14'
            }}>{t("common.see_all_rooms_1")}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="white" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </button>
          </div>

          {/* Right: Juayúa photo */}
          <div className="w-full md:flex-1 rounded-2xl overflow-hidden" style={{
          height: "clamp(220px, 40vw, 460px)",
          border: "1px solid #d5dad7"
        }}>
            <img src={rutaHeroPhoto} alt="Juayúa" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ── Destinations ── */}
      <section className="w-full" style={{
      background: "#ffffff"
    }}>
        <div className="max-w-[1920px] mx-auto w-full px-6 py-12 md:px-14 lg:px-[80px] md:py-[80px] flex flex-col gap-12 md:gap-[80px]">

          {/* Intro */}
          <div className="text-center flex flex-col gap-3 items-center">
            <h2 className="font-black" style={{
            fontFamily: "'Fraunces',serif",
            fontSize: "clamp(24px,3vw,36px)",
            lineHeight: 1.2,
            color: "#1c2420",
            fontVariationSettings: '"SOFT" 0, "WONK" 1'
          }}>{t("common.explore_ruta")}</h2>
            <p style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 15,
            lineHeight: 1.6,
            color: "#54625d",
            maxWidth: 600,
            fontVariationSettings: '"opsz" 14'
          }}>{t("common.discover_best")}</p>
          </div>

          {/* Alternating stops */}
          {RUTA_STOPS.map((stop, i) => <div key={stop.city} className={`flex flex-col ${stop.imageLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-[64px] items-center`}>
              {/* Image */}
              <div className="w-full md:w-[560px] shrink-0 rounded-2xl overflow-hidden" style={{
            height: "clamp(220px, 50vw, 360px)"
          }}>
                <img src={stop.image} alt={stop.city} className="w-full h-full object-cover" />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-4 flex-1">
                {/* Eyebrow */}
                <div className="flex items-center gap-2">
                  <span className="font-bold uppercase" style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 12,
                letterSpacing: "1px",
                color: "#4c6e58",
                fontVariationSettings: '"opsz" 14'
              }}>
                    {stop.stop}
                  </span>
                  <span style={{
                color: "#54625d",
                fontSize: 10
              }}>•</span>
                  <span className="font-bold" style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 12,
                color: "#f2b138",
                fontVariationSettings: '"opsz" 14'
              }}>
                    {stop.distance}
                  </span>
                </div>

                <h3 className="font-black" style={{
              fontFamily: "'Fraunces',serif",
              fontSize: "clamp(24px,2.5vw,32px)",
              lineHeight: 1.15,
              color: "#1c2420",
              fontVariationSettings: '"SOFT" 0, "WONK" 1'
            }}>
                  {stop.city}
                </h3>
                <p className="italic" style={{
              fontFamily: "'Fraunces',serif",
              fontSize: 16,
              color: "#54625d",
              fontVariationSettings: '"SOFT" 0, "WONK" 1'
            }}>
                  {stop.subtitle}
                </p>
                <p style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 15,
              lineHeight: 1.6,
              color: "#54625d",
              fontVariationSettings: '"opsz" 14'
            }}>
                  {stop.description}
                </p>
                <YellowCTA label="Top Places" onClick={() => setActivePopIn(stop.city)} />
              </div>
            </div>)}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="w-full" style={{
      background: "#ede8d8"
    }}>
        <div className="max-w-[1920px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-12 md:px-14 lg:px-[64px] md:py-[64px]">
          <div className="flex flex-col gap-3 md:max-w-[700px]">
            <h2 className="font-black" style={{
            fontFamily: "'Fraunces',serif",
            fontSize: "clamp(24px,3vw,36px)",
            lineHeight: 1.2,
            color: "#0c1a10",
            fontVariationSettings: '"SOFT" 0, "WONK" 1'
          }}>{t("common.ready_to_explore")}</h2>
            <p style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 16,
            lineHeight: 1.6,
            color: "#0c1a10",
            opacity: 0.8,
            fontVariationSettings: '"opsz" 14'
          }}>{t("common.book_your_stay")}</p>
          </div>
          <button onClick={onExploreRooms} className="flex items-center gap-[8px] px-[30px] py-[14px] rounded-[4px] cursor-pointer border-0 drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)] transition-colors shrink-0" style={{
          background: "#3d9e72"
        }} onMouseEnter={e => e.currentTarget.style.background = "#2d8a60"} onMouseLeave={e => e.currentTarget.style.background = "#3d9e72"}>
            <span style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 11.2,
            fontWeight: 700,
            letterSpacing: "1.34px",
            color: "white",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            fontVariationSettings: '"opsz" 14'
          }}>{t("common.see_all_rooms_1")}</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="white" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </section>

      {/* ── Quick Tips FAQ ── */}
      <section id="ruta-faq" className="w-full" style={{
      background: "#f2f4f3",
      borderTop: "1px solid #d5dad7",
      borderBottom: "1px solid #d5dad7"
    }}>
        <div className="max-w-[1920px] mx-auto w-full px-6 py-12 md:px-14 lg:px-[80px] md:py-[80px] flex flex-col gap-10 md:gap-12">
          <h2 className="font-black text-center" style={{
          fontFamily: "'Fraunces',serif",
          fontSize: "clamp(24px,3vw,36px)",
          lineHeight: 1.2,
          color: "#1c2420",
          fontVariationSettings: '"SOFT" 0, "WONK" 1'
        }}>{t("common.ruta_quick_tips")}</h2>
          <div className="flex flex-col gap-4">
            {RUTA_FAQS.map((faq, i) => <div key={i} className="rounded-xl overflow-hidden cursor-pointer" style={{
            background: "#ffffff",
            border: "1px solid #d5dad7"
          }} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="flex items-center justify-between gap-4 p-6">
                  <p className="font-black flex-1" style={{
                fontFamily: "'Fraunces',serif",
                fontSize: "clamp(15px,1.5vw,18px)",
                lineHeight: 1.3,
                color: "#1c2420",
                fontVariationSettings: '"SOFT" 0, "WONK" 1'
              }}>
                    {faq.q}
                  </p>
                  <span className="shrink-0 font-bold transition-transform duration-300" style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 18,
                color: "#4c6e58",
                display: "inline-block",
                transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)"
              }}>
                    ↓
                  </span>
                </div>
                {openFaq === i && <div className="px-6 pb-6">
                    <p style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 14,
                lineHeight: 1.6,
                color: "#54625d",
                fontVariationSettings: '"opsz" 14'
              }}>
                      {faq.a}
                    </p>
                  </div>}
              </div>)}
          </div>
        </div>
      </section>


      {/* City pop-in modal */}
      <AnimatePresence>
        {activePopIn && <CityPopIn city={activePopIn} onClose={() => setActivePopIn(null)} />}
      </AnimatePresence>

    </div>;
}

const CITY_PLACES: Record<string, {
    name: string;
    desc: string;
    mapsUrl: string;
}[]> = {
    "Juayúa": [{
        name: t("ruta.place_1"),
        desc: "A series of stunning cascades fed by volcanic springs, ideal for swimming.",
        mapsUrl: "https://www.google.com/maps/search/Los+Chorros+Waterfalls+Juayua+El+Salvador"
    }, {
        name: t("ruta.place_2"),
        desc: "Open-air market every weekend overflowing with local pupusas, grilled meats, and fresh juices.",
        mapsUrl: "https://www.google.com/maps/search/Juayua+Food+Festival+El+Salvador"
    }, {
        name: t("ruta.place_3"),
        desc: "A peaceful volcanic lagoon surrounded by lush highland forest — perfect for sunrise hikes.",
        mapsUrl: "https://www.google.com/maps/search/Laguna+Las+Ninfas+El+Salvador"
    }],
    "Apaneca": [{
        name: t("ruta.place_4"),
        desc: "A striking emerald-green crater lake cradled inside an extinct volcanic caldera.",
        mapsUrl: "https://www.google.com/maps/search/Laguna+Verde+Apaneca+El+Salvador"
    }, {
        name: t("ruta.place_5"),
        desc: "High-altitude zip-line adventure through cloud-forest canopy with panoramic ridge views.",
        mapsUrl: "https://www.google.com/maps/search/Canopy+Apaneca+El+Salvador"
    }, {
        name: t("ruta.place_6"),
        desc: "Award-winning coffee farm offering guided tours from seed to cup.",
        mapsUrl: "https://www.google.com/maps/search/Finca+Santa+Leticia+Apaneca+El+Salvador"
    }],
    "Ataco": [{
        name: t("ruta.place_7"),
        desc: "Cobblestone streets lined with vivid pastel murals painted by local and international artists.",
        mapsUrl: "https://www.google.com/maps/search/Ataco+Mural+District+El+Salvador"
    }, {
        name: t("ruta.place_8"),
        desc: "A colorful artisan market selling handwoven textiles, ceramics, and woodwork.",
        mapsUrl: "https://www.google.com/maps/search/Mercado+Artesanias+Ataco+El+Salvador"
    }, {
        name: t("ruta.place_9"),
        desc: "Cloud forest reserve with rare wildlife, volcanic lookouts, and challenging trails nearby.",
        mapsUrl: "https://www.google.com/maps/search/El+Imposible+National+Park+El+Salvador"
    }],
    "Salcoatitán": [{
        name: t("ruta.place_10"),
        desc: "The tranquil central park framed by colonial architecture and flowering gardens.",
        mapsUrl: "https://www.google.com/maps/search/Parque+Central+Salcoatitan+El+Salvador"
    }, {
        name: t("ruta.place_11"),
        desc: "Open-air stalls serving the town's famous yucca wrapped in banana leaves with local curtido.",
        mapsUrl: "https://www.google.com/maps/search/Salcoatitan+yucca+market+El+Salvador"
    }, {
        name: t("ruta.place_12"),
        desc: "Family-run galleries showcasing intricate hand-carved furniture and traditional wooden crafts.",
        mapsUrl: "https://www.google.com/maps/search/Salcoatitan+artisan+wood+gallery+El+Salvador"
    }],
    "Nahuizalco": [{
        name: t("ruta.place_13"),
        desc: "El Salvador's only candlelit night market — warm pupusas, live marimba, and local craft stalls.",
        mapsUrl: "https://www.google.com/maps/search/Mercado+Nocturno+Nahuizalco+El+Salvador"
    }, {
        name: t("ruta.place_14"),
        desc: "Watch master artisans weave ancestral Nahua basketry and furniture using tule reed.",
        mapsUrl: "https://www.google.com/maps/search/Nahuizalco+wicker+workshop+El+Salvador"
    }, {
        name: t("ruta.place_15"),
        desc: "Colonial-era church with a distinctive white façade, central to the town's indigenous festivals.",
        mapsUrl: "https://www.google.com/maps/search/Iglesia+Nahuizalco+El+Salvador"
    }],
    "Sonsonate": [{
        name: t("ruta.place_16"),
        desc: "An imposing Baroque cathedral built in the 18th century with ornate gold-leaf altarpieces.",
        mapsUrl: "https://www.google.com/maps/search/Cathedral+Sonsonate+El+Salvador"
    }, {
        name: t("ruta.place_17"),
        desc: "Natural volcanic thermal pools with mineral-rich waters — a perfect post-hike recovery spot.",
        mapsUrl: "https://www.google.com/maps/search/thermal+hot+springs+Sonsonate+El+Salvador"
    }, {
        name: t("ruta.place_18"),
        desc: "A hidden multi-tiered waterfall deep in the Nahuaterique mountains, reached via jungle trail.",
        mapsUrl: "https://www.google.com/maps/search/Cascada+El+Escuco+Sonsonate+El+Salvador"
    }]
};

function CityPopIn({
                       city,
                       onClose
                   }: {
    city: string;
    onClose: () => void;
}) {
    const places = CITY_PLACES[city] || [];
    return <motion.div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center" initial={{
        opacity: 0
    }} animate={{
        opacity: 1
    }} exit={{
        opacity: 0
    }} transition={{
        duration: 0.22
    }} onClick={onClose}>
        {/* Backdrop */}
        <div className="absolute inset-0" style={{
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)"
        }} />

        {/* Panel */}
        <motion.div className="relative z-10 w-full sm:max-w-[448px] bg-white flex flex-col overflow-hidden rounded-t-[20px] sm:rounded-[16px] max-h-[90vh] sm:max-h-[85vh]" style={{
            boxShadow: "0px 25px 50px -12px rgba(0,0,0,0.25)"
        }} initial={{
            opacity: 0,
            y: 60
        }} animate={{
            opacity: 1,
            y: 0
        }} exit={{
            opacity: 0,
            y: 40
        }} transition={{
            duration: 0.38,
            ease: [0.22, 1, 0.36, 1]
        }} onClick={e => e.stopPropagation()}>
            {/* Drag handle — mobile only */}
            <div className="flex sm:hidden justify-center pt-3 pb-1 shrink-0">
                <div className="w-10 h-1 rounded-full" style={{
                    background: "#d5dad7"
                }} />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 shrink-0" style={{
                borderBottom: "1px solid #d5dad7"
            }}>
                <div className="flex flex-col gap-0.5">
                    <p style={{
                        fontFamily: "'DM Sans',sans-serif",
                        fontWeight: 700,
                        fontSize: 11,
                        letterSpacing: "2px",
                        color: "#3d9e72",
                        textTransform: "uppercase",
                        fontVariationSettings: '"opsz" 14'
                    }}>{t("common.top_places")}</p>
                    <p style={{
                        fontFamily: "'Fraunces',serif",
                        fontWeight: 900,
                        fontSize: 22,
                        lineHeight: "27.5px",
                        color: "#1c2420",
                        fontVariationSettings: '"SOFT" 0, "WONK" 1'
                    }}>
                        {city}
                    </p>
                </div>
                <button onClick={onClose} className="flex items-center justify-center rounded-full shrink-0 transition-colors" style={{
                    width: 32,
                    height: 32,
                    background: "transparent"
                }} onMouseEnter={e => e.currentTarget.style.background = "#f2f4f3"} onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                    <X size={16} color="#54625D" strokeWidth={1.33} />
                </button>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-3 pt-3 pb-4 overflow-y-auto">
                {/* Instruction */}
                <div className="flex items-center gap-3 justify-center px-6 py-1">
                    <div className="flex items-center justify-center rounded-full shrink-0" style={{
                        width: 28,
                        height: 28,
                        background: "rgba(61,158,114,0.09)"
                    }}>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path d="M6.5 1C4.567 1 3 2.567 3 4.5c0 2.625 3.5 7.5 3.5 7.5S10 7.125 10 4.5C10 2.567 8.433 1 6.5 1Z" stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.083" />
                            <circle cx="6.5" cy="4.5" r="1.3" stroke="#3D9E72" strokeWidth="1.083" />
                        </svg>
                    </div>
                    <p style={{
                        fontFamily: "'Nunito',sans-serif",
                        fontWeight: 800,
                        fontSize: 14,
                        letterSpacing: "0.5px",
                        color: "#3d9e72",
                        whiteSpace: "nowrap"
                    }}>{t("common.tap_place")}</p>
                </div>

                {/* Places list */}
                <div className="flex flex-col">
                    {places.map((place, i) => <a key={place.name} href={place.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-4 items-start px-6 py-4 transition-colors cursor-pointer no-underline" style={{
                        borderBottom: i < places.length - 1 ? "1px solid #f2f4f3" : "none"
                    }} onMouseEnter={e => e.currentTarget.style.background = "#fafbfa"} onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                        <div className="shrink-0 pt-0.5">
                            <div className="flex items-center justify-center rounded-full" style={{
                                width: 28,
                                height: 28,
                                background: "rgba(61,158,114,0.09)"
                            }}>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                                    <path d="M6.5 1C4.567 1 3 2.567 3 4.5c0 2.625 3.5 7.5 3.5 7.5S10 7.125 10 4.5C10 2.567 8.433 1 6.5 1Z" stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.083" />
                                    <circle cx="6.5" cy="4.5" r="1.3" stroke="#3D9E72" strokeWidth="1.083" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                            <p style={{
                                fontFamily: "'DM Sans',sans-serif",
                                fontWeight: 700,
                                fontSize: 14,
                                lineHeight: "21px",
                                color: "#1c2420",
                                fontVariationSettings: '"opsz" 14'
                            }}>
                                {place.name}
                            </p>
                            <p style={{
                                fontFamily: "'DM Sans',sans-serif",
                                fontWeight: 400,
                                fontSize: 13,
                                lineHeight: "19.5px",
                                color: "#54625d",
                                fontVariationSettings: '"opsz" 14'
                            }}>
                                {place.desc}
                            </p>
                        </div>
                    </a>)}
                </div>
            </div>
        </motion.div>
    </motion.div>;
}
