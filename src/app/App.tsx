import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X, Wifi, Wind, Star, Users, Bath, Mountain, ArrowRight, Check,
  Tv, ShieldCheck, UtensilsCrossed, AirVent, TreePine, BedDouble, Layers,
} from "lucide-react";
import NavBar from "@/imports/NavBar";
import Footer from "@/imports/Footer";
import MobileFooterLight from "@/imports/NarBar";
import MobileFooterDark from "@/imports/NarBar-1";
import SavingsBannerSection from "@/imports/SavingsBannerSection";
import BookingPayments from "@/imports/BookingPayments";
import ButtonPrimary from "@/imports/ButtonPrimary";
// Ruta de las Flores — 4 variants (desktop/mobile × light/dark)
import rutaDesktopLight from "@/imports/ruta-de-las-flores-light-desktop-image-light.jpg";
import rutaDesktopDark  from "@/imports/ruta-de-las-flores-light-desktop-image-dark.jpg";
import rutaMobileLight  from "@/imports/ruta-de-las-flores-mobile-image-light.jpg";
import rutaMobileDark   from "@/imports/ruta-de-las-flores-mobile-image-dark.jpg";
import room1Img from "@/imports/Document/6c88d1ade3e7b7f98af20a56562688e565b1e477.png";
import room2Img from "@/imports/Document/2cbaef43d2ebac70a3bdec47dfc3e0e8b7f8a628.png";
import room3Img from "@/imports/Document/6f13b43bff73692f3535ad9ee71e65d34379edcf.png";
import room4Img from "@/imports/Document/851cd36c23ad4da155b6cf0f50ec6693c5ab0088.png";
// Ruta de las Flores page assets
import rutaMapImg      from "@/imports/RutaFloresMapPageDesktop/a59195a9e27cccf80d5295fb9bf15ac226f28f11.png";
import rutaHeroPhoto   from "@/imports/RutaFloresMapPageDesktop/850dde4affad5f2560eb4e5d70ef9add7b7d9ff3.png";
import rutaJuayua      from "@/imports/RutaFloresMapPageDesktop/dbb8d5036dc30326df8b5297904a5b53b0cfb5f8.png";
import rutaApaneca     from "@/imports/RutaFloresMapPageDesktop/f23c47939fd00eae014ff37746cb0058f242c565.png";
import rutaAtaco       from "@/imports/RutaFloresMapPageDesktop/fce5276ce245dee3f5c2fdfd286db078a60800e0.png";
import rutaSalcoatitan from "@/imports/RutaFloresMapPageDesktop/828973c65dab400d9481607663e04c1e6267bbca.png";
import rutaNahuizalco  from "@/imports/RutaFloresMapPageDesktop/f5b5961e54952719ffe5e43d303abb6cd7bd7565.png";
import rutaSonsonate   from "@/imports/RutaFloresMapPageDesktop/a846ec44cc9d1a94bdbcbeb391dfc00b91a5018a.png";
// Homepage assets
import heroBg from "@/imports/DesktopV1/1a87c5d486772503401990064608c4940c7da7fc.png";
import storyPortrait from "@/imports/DesktopV1/c06fcb3e51191a325985054ce1370bf867d176ef.png";
import logoImg from "@/imports/DesktopV1/7a4368b70120d47e02aec91da9b968e1f2acd65c.png";
import heroForest from "@/imports/DesktopV1/4ee5ecf8eb8baa6d95d45aecc608f95006973ad4.png";
import heroMobile from "@/imports/Variation3FullBleedOverlay/4ee5ecf8eb8baa6d95d45aecc608f95006973ad4.png";
import bgLight from "@/imports/DesktopV1/302c2113c9e9de6558ff52e0df271ec24307bdf2.png";
import bgFlowers from "@/imports/DesktopV1/0b3cdd2aed1034c1d0964bb9eb901d692e980bec.png";
import svgPaths from "@/imports/DesktopV1/svg-a56cgiz6y";
// Room number badge images (from Figma DesktopV1)
import badge01 from "@/imports/DesktopV1/c06fcb3e51191a325985054ce1370bf867d176ef.png";
import badge02 from "@/imports/DesktopV1/5df5da27dcee43241fc35f4a3e842b4708328f40.png";
import badge16 from "@/imports/DesktopV1/146d43f51e15479edc5b6567ca17c752c93c098a.png";
import badge17 from "@/imports/DesktopV1/1a3d1e56d1305cc21af19544fb8fab9094a03110.png";

// ─── Theme tokens ─────────────────────────────────────────────────────────────

const DARK = {
  pageBg: "#0c1a10",
  cardBg: "#0a1209",
  navBg: "rgba(12,26,16,0.92)",
  navBorder: "rgba(237,232,216,0.07)",
  sectionBorder: "rgba(237,232,216,0.06)",
  heading: "#ede8d8",
  body: "rgba(237,232,216,0.62)",
  muted: "rgba(237,232,216,0.32)",
  faint: "rgba(237,232,216,0.06)",
  gold: "#f2b138",
  green: "#3d9e72",
  greenHover: "#2d8a60",
  tag: { bg: "#f2f2f2", border: "#d9d9d9", text: "#595961" },
  divider: "rgba(237,232,216,0.06)",
  pillBg: "rgba(255,255,255,0.04)",
  pillBorder: "rgba(255,255,255,0.07)",
  amenityBg: "rgba(255,255,255,0.03)",
  amenityBorder: "rgba(255,255,255,0.06)",
  highlightBg: "rgba(61,158,114,0.07)",
  highlightBorder: "rgba(61,158,114,0.15)",
  btnOutlineBorder: "rgba(255,255,255,0.15)",
  btnOutlineColor: "rgba(237,232,216,0.55)",
  btnOutlineHoverBorder: "rgba(255,255,255,0.38)",
  btnOutlineHoverColor: "rgba(237,232,216,1)",
  starColor: "#f2b138",
  indexColor: "rgba(242,177,56,0.55)",
  lineColor: "rgba(61,158,114,0.15)",
  watermark: "rgba(255,255,255,0.04)",
  footerText: "rgba(237,232,216,0.18)",
  btnPrimary: "#3D9E72",
  btnPrimaryHover: "#2d8a60",
  btnPrimaryText: "#ffffff",
} as const;

const LIGHT = {
  pageBg: "#f2f4f3",
  cardBg: "#ffffff",
  navBg: "rgba(242,244,243,0.94)",
  navBorder: "rgba(28,36,32,0.09)",
  sectionBorder: "rgba(28,36,32,0.07)",
  heading: "#1c2420",
  body: "#131f16",
  muted: "rgba(84,98,93,0.55)",
  faint: "rgba(28,36,32,0.04)",
  gold: "#d49a1f",
  green: "#2d7a56",
  greenHover: "#1e6040",
  tag: { bg: "#f0f0f0", border: "#d5dad7", text: "#595961" },
  divider: "rgba(28,36,32,0.07)",
  pillBg: "rgba(28,36,32,0.04)",
  pillBorder: "rgba(28,36,32,0.08)",
  amenityBg: "rgba(28,36,32,0.03)",
  amenityBorder: "#d5dad7",
  highlightBg: "rgba(45,122,86,0.07)",
  highlightBorder: "rgba(45,122,86,0.18)",
  btnOutlineBorder: "#d5dad7",
  btnOutlineColor: "rgba(28,36,32,0.5)",
  btnOutlineHoverBorder: "rgba(28,36,32,0.45)",
  btnOutlineHoverColor: "rgba(28,36,32,1)",
  starColor: "#d49a1f",
  indexColor: "rgba(212,154,31,0.5)",
  lineColor: "#d5dad7",
  watermark: "rgba(28,36,32,0.04)",
  footerText: "rgba(84,98,93,0.35)",
  btnPrimary: "#3D9E72",
  btnPrimaryHover: "#2d8a60",
  btnPrimaryText: "#ffffff",
} as const;

type Theme = typeof DARK;

// ─── Custom SVG icon paths from Figma (Room 01) ───────────────────────────────

const ROOM01_ICONS = {
  area:    { path: "M18.25 5H5.75C5.41848 5 5.10054 5.12292 4.86612 5.34171C4.6317 5.5605 4.5 5.85725 4.5 6.16667V17.8333C4.5 18.1428 4.6317 18.4395 4.86612 18.6583C5.10054 18.8771 5.41848 19 5.75 19H18.25C18.5815 19 18.8995 18.8771 19.1339 18.6583C19.3683 18.4395 19.5 18.1428 19.5 17.8333V6.16667C19.5 5.85725 19.3683 5.5605 19.1339 5.34171C18.8995 5.12292 18.5815 5 18.25 5ZM18.25 17.8333H5.75V6.16667H18.25V17.8333Z", viewBox: "0 0 24 24" },
  ac:      { path: "M19.6062 13.8349C19.6262 13.9162 19.63 14.0007 19.6173 14.0835C19.6047 14.1663 19.5758 14.2458 19.5325 14.3174C19.4891 14.3891 19.432 14.4515 19.3645 14.501C19.297 14.5506 19.2205 14.5864 19.1391 14.6064L17.1753 15.0846L17.6902 17.0062C17.7119 17.0871 17.7174 17.1715 17.7065 17.2545C17.6955 17.3375 17.6684 17.4176 17.6265 17.4902C17.5846 17.5627 17.5288 17.6263 17.4623 17.6772C17.3959 17.7282 17.32 17.7656 17.2391 17.7872C17.1854 17.8027 17.13 17.8113 17.0741 17.8127C16.9338 17.8126 16.7975 17.7662 16.6863 17.6808C16.5751 17.5953 16.4951 17.4756 16.4588 17.3401L15.8435 15.0448L12.6109 13.179V16.9113L14.3372 18.6368C14.3965 18.696 14.4435 18.7664 14.4755 18.8438C14.5076 18.9212 14.5241 19.0041 14.5241 19.0879C14.5241 19.1717 14.5076 19.2546 14.4755 19.332C14.4435 19.4094 14.3965 19.4798 14.3372 19.539C14.278 19.5982 14.2077 19.6452 14.1303 19.6773C14.0529 19.7094 13.9699 19.7259 13.8861 19.7259C13.8024 19.7259 13.7194 19.7094 13.642 19.6773C13.5646 19.6452 13.4943 19.5982 13.435 19.539L11.9733 18.0765L10.5117 19.539C10.4524 19.5982 10.3821 19.6452 10.3047 19.6773C10.2273 19.7094 10.1443 19.7259 10.0606 19.7259C9.97678 19.7259 9.89382 19.7094 9.81642 19.6773C9.73902 19.6452 9.66869 19.5982 9.60946 19.539C9.55022 19.4798 9.50323 19.4094 9.47117 19.332C9.43911 19.2546 9.4226 19.1717 9.4226 19.0879C9.4226 19.0041 9.43911 18.9212 9.47117 18.8438C9.50323 18.7664 9.55022 18.696 9.60946 18.6368L11.3357 16.9113V13.179L8.10393 15.0448L7.48865 17.3401C7.45232 17.4757 7.37225 17.5955 7.26086 17.681C7.14946 17.7665 7.01297 17.8128 6.87258 17.8127C6.81663 17.8126 6.76092 17.8054 6.7068 17.7912C6.62588 17.7696 6.55002 17.7322 6.48356 17.6812C6.41709 17.6302 6.36131 17.5667 6.31942 17.4941C6.27753 17.4216 6.25034 17.3415 6.23941 17.2585C6.22847 17.1754 6.23401 17.091 6.2557 17.0101L6.77056 15.0886L4.80677 14.6104C4.64253 14.57 4.50105 14.4661 4.41346 14.3214C4.32588 14.1767 4.29935 14.0031 4.33973 13.8389C4.3801 13.6747 4.48406 13.5332 4.62875 13.4456C4.77343 13.358 4.94698 13.3315 5.11122 13.3719L7.45837 13.9481L10.6982 12.0744L7.45916 10.2046L5.11201 10.7808C5.06222 10.7932 5.01109 10.7993 4.95979 10.7992C4.80389 10.7993 4.65335 10.7423 4.53664 10.6389C4.41992 10.5355 4.34512 10.393 4.32638 10.2382C4.30763 10.0835 4.34624 9.92719 4.43491 9.79895C4.52357 9.67072 4.65614 9.57942 4.80756 9.5423L6.77136 9.06411L6.2565 7.13857C6.21274 6.97517 6.23569 6.80109 6.32029 6.65461C6.40488 6.50814 6.5442 6.40127 6.7076 6.35751C6.87099 6.31376 7.04507 6.3367 7.19155 6.4213C7.33803 6.5059 7.4449 6.64522 7.48865 6.80861L8.10393 9.10396L11.3357 10.9697V7.23739L9.60946 5.5119C9.48982 5.39226 9.4226 5.23 9.4226 5.0608C9.4226 4.97703 9.43911 4.89407 9.47117 4.81667C9.50323 4.73927 9.55022 4.66894 9.60946 4.6097C9.66869 4.55046 9.73902 4.50347 9.81642 4.47141C9.89382 4.43935 9.97678 4.42285 10.0606 4.42285C10.2297 4.42285 10.392 4.49006 10.5117 4.6097L11.9733 6.07219L13.435 4.6097C13.5547 4.49006 13.7169 4.42285 13.8861 4.42285C14.0553 4.42285 14.2176 4.49006 14.3372 4.6097C14.4569 4.72934 14.5241 4.89161 14.5241 5.0608C14.5241 5.23 14.4569 5.39226 14.3372 5.5119L12.6109 7.23739V10.9697L15.8428 9.10396L16.458 6.80861C16.5018 6.64522 16.6087 6.5059 16.7551 6.4213C16.9016 6.3367 17.0757 6.31376 17.2391 6.35751C17.4025 6.40127 17.5418 6.50814 17.6264 6.65461C17.711 6.80109 17.7339 6.97517 17.6902 7.13857L17.1753 9.06012L19.1391 9.53832C19.2948 9.57156 19.4323 9.66181 19.5248 9.79132C19.6173 9.92084 19.658 10.0803 19.639 10.2383C19.6199 10.3963 19.5424 10.5414 19.4217 10.6452C19.3011 10.749 19.146 10.8039 18.9869 10.7992C18.9356 10.7993 18.8845 10.7932 18.8347 10.7808L16.4875 10.2046L13.2485 12.0744L16.4875 13.9441L18.8347 13.3679C18.916 13.3479 19.0005 13.3441 19.0832 13.3567C19.166 13.3694 19.2455 13.3982 19.3172 13.4416C19.3888 13.4849 19.4512 13.542 19.5008 13.6095C19.5504 13.677 19.5862 13.7536 19.6062 13.8349Z", viewBox: "0 0 24 24" },
  bath:    { path: "M3.78871 13.9704C3.78871 14.1109 3.74704 14.2482 3.66899 14.365C3.59093 14.4818 3.47999 14.5729 3.35019 14.6267C3.22039 14.6804 3.07756 14.6945 2.93976 14.6671C2.80197 14.6397 2.67539 14.572 2.57605 14.4727C2.4767 14.3733 2.40905 14.2467 2.38164 14.109C2.35423 13.9712 2.3683 13.8283 2.42206 13.6985C2.47583 13.5687 2.56688 13.4578 2.68369 13.3797C2.80051 13.3017 2.93785 13.26 3.07835 13.26C3.26675 13.26 3.44743 13.3349 3.58065 13.4681C3.71386 13.6013 3.78871 13.782 3.78871 13.9704ZM4.97264 11.3657C4.83214 11.3657 4.6948 11.4074 4.57798 11.4854C4.46116 11.5635 4.37012 11.6744 4.31635 11.8042C4.26259 11.934 4.24852 12.0769 4.27593 12.2147C4.30334 12.3525 4.37099 12.479 4.47034 12.5784C4.56968 12.6777 4.69626 12.7454 4.83405 12.7728C4.97185 12.8002 5.11468 12.7861 5.24448 12.7324C5.37428 12.6786 5.48522 12.5876 5.56328 12.4707C5.64133 12.3539 5.68299 12.2166 5.68299 12.0761C5.68299 11.8877 5.60815 11.707 5.47493 11.5738C5.34172 11.4406 5.16103 11.3657 4.97264 11.3657ZM1.18406 11.3657C1.04357 11.3657 0.906225 11.4074 0.789408 11.4854C0.67259 11.5635 0.581542 11.6744 0.527776 11.8042C0.474011 11.934 0.459944 12.0769 0.487353 12.2147C0.514762 12.3525 0.582417 12.479 0.681762 12.5784C0.781108 12.6777 0.907681 12.7454 1.04548 12.7728C1.18327 12.8002 1.3261 12.7861 1.4559 12.7324C1.5857 12.6786 1.69665 12.5876 1.7747 12.4707C1.85276 12.3539 1.89442 12.2166 1.89442 12.0761C1.89442 11.8877 1.81958 11.707 1.68636 11.5738C1.55314 11.4406 1.37246 11.3657 1.18406 11.3657ZM3.07835 9.47144C2.93785 9.47144 2.80051 9.5131 2.68369 9.59115C2.56688 9.66921 2.47583 9.78015 2.42206 9.90995C2.3683 10.0398 2.35423 10.1826 2.38164 10.3204C2.40905 10.4582 2.4767 10.5847 2.57605 10.6841C2.67539 10.7834 2.80197 10.8511 2.93976 10.8785C3.07756 10.9059 3.22039 10.8918 3.35019 10.8381C3.47999 10.7843 3.59093 10.6933 3.66899 10.5764C3.74704 10.4596 3.78871 10.3223 3.78871 10.1818C3.78871 9.99339 3.71386 9.81271 3.58065 9.67949C3.44743 9.54628 3.26675 9.47144 3.07835 9.47144ZM15.1544 2.36786C15.1544 2.49346 15.1045 2.61391 15.0157 2.70272C14.9269 2.79154 14.8065 2.84143 14.6809 2.84143H12.9825L11.3339 4.49064L10.0517 11.9962C10.0228 12.1676 9.94733 12.3279 9.83345 12.4593C9.71957 12.5907 9.57171 12.6882 9.40609 12.7411C9.24046 12.7941 9.06345 12.8004 8.89446 12.7594C8.72548 12.7185 8.57103 12.6317 8.44806 12.5088L2.64681 6.70755C2.52368 6.58448 2.43685 6.42985 2.39587 6.26066C2.35488 6.09146 2.36132 5.91424 2.41448 5.74846C2.46764 5.58269 2.56546 5.43477 2.6972 5.32096C2.82893 5.20715 2.98949 5.13185 3.16122 5.10333L10.6638 3.82054L12.4515 2.03281C12.4955 1.98884 12.5478 1.95398 12.6053 1.93021C12.6628 1.90645 12.7244 1.89424 12.7866 1.89429H14.6809C14.8065 1.89429 14.9269 1.94418 15.0157 2.03299C15.1045 2.12181 15.1544 2.24226 15.1544 2.36786ZM10.3127 4.84168L3.31513 6.03804L9.11639 11.8393L10.3127 4.84168Z", viewBox: "0 0 15.1543 15.1543" },
  tv:      { path: "M16.3103 3.1366H3.76392C3.26479 3.1366 2.78611 3.33487 2.43317 3.68781C2.08024 4.04075 1.88196 4.51943 1.88196 5.01855V13.801C1.88196 14.3002 2.08024 14.7788 2.43317 15.1318C2.78611 15.4847 3.26479 15.683 3.76392 15.683H16.3103C16.8094 15.683 17.2881 15.4847 17.641 15.1318C17.994 14.7788 18.1923 14.3002 18.1923 13.801V5.01855C18.1923 4.51943 17.994 4.04075 17.641 3.68781C17.2881 3.33487 16.8094 3.1366 16.3103 3.1366ZM16.9376 13.801C16.9376 13.9674 16.8715 14.127 16.7539 14.2446C16.6362 14.3623 16.4767 14.4283 16.3103 14.4283H3.76392C3.59754 14.4283 3.43798 14.3623 3.32033 14.2446C3.20269 14.127 3.1366 13.9674 3.1366 13.801V5.01855C3.1366 4.85218 3.20269 4.69262 3.32033 4.57497C3.43798 4.45733 3.59754 4.39124 3.76392 4.39124H16.3103C16.4767 4.39124 16.6362 4.45733 16.7539 4.57497C16.8715 4.69262 16.9376 4.85218 16.9376 5.01855V13.801ZM13.1737 17.5649C13.1737 17.7313 13.1076 17.8909 12.99 18.0085C12.8723 18.1262 12.7128 18.1923 12.5464 18.1923H7.52783C7.36146 18.1923 7.2019 18.1262 7.08425 18.0085C6.96661 17.8909 6.90051 17.7313 6.90051 17.5649C6.90051 17.3986 6.96661 17.239 7.08425 17.1214C7.2019 17.0037 7.36146 16.9376 7.52783 16.9376H12.5464C12.7128 16.9376 12.8723 17.0037 12.99 17.1214C13.1076 17.239 13.1737 17.3986 13.1737 17.5649Z", viewBox: "0 0 20.0742 20.0742" },
};

type FigmaIcon = { path: string; viewBox: string };
type AmenityItem = { label: string } & ({ icon: React.ComponentType<{ size?: number; color?: string }> } | { figma: FigmaIcon });

function AmenityIcon({ item, size, color }: { item: AmenityItem; size: number; color: string }) {
  if ("figma" in item) {
    return (
      <svg width={size} height={size} viewBox={item.figma.viewBox} fill="none">
        <path d={item.figma.path} fill={color} />
      </svg>
    );
  }
  const Icon = item.icon;
  return <Icon size={size} color={color} />;
}

// ─── Room data ────────────────────────────────────────────────────────────────

const rooms = [
  {
    id: 1, index: "01", badge: badge01,
    name: "Casa Nieves",
    type: "Private Room",
    tagline: "",
    hoverDescription: "Twin room with private bathroom and mountain views",
    price: 45,
    tag: "Most popular",
    image: room1Img,
    description: "A cozy ground-floor room with two beds, air conditioning, and a private bathroom. Unwind with flat-screen TV and Netflix, then step outside to the outdoor dining area nestled in the tropical garden.",
    guests: 2, size: "15 m²",
    amenities: [
      { figma: ROOM01_ICONS.area, label: "15 m²" },
      { figma: ROOM01_ICONS.ac,   label: "A/C" },
      { figma: ROOM01_ICONS.bath, label: "Bath" },
      { figma: ROOM01_ICONS.tv,   label: "TV" },
    ],
    highlights: ["Air conditioning", "Flat-screen TV & Netflix", "Private bathroom", "Outdoor dining area"],
    detailedAmenities: [
      {
        title: "Comfort & Convenience",
        items: ["Air conditioning", "Bed linen provided", "Socket near the bed", "Clothes rack & Drying rack"],
      },
      {
        title: "Bathroom & Laundry",
        items: ["Private bathroom", "Washing machine & Clothes dryer", "Iron & Ironing facilities", "Cleaning products"],
      },
      {
        title: "Entertainment & Connectivity",
        items: ["Free High-Speed Wi-Fi", "Flat-screen TV with Satellite & Cable channels", "Streaming services (e.g., Netflix)"],
      },
      {
        title: "Outdoor Space",
        items: ["Outdoor dining area"],
      },
      {
        title: "House Rules",
        items: ["Smoking Policy: Non-smoking room"],
      },
    ] as DetailedAmenityCategory[],
  },
  {
    id: 2, index: "02", badge: badge02,
    name: "Casa Mochila",
    type: "Mixed Dormitory",
    tagline: "",
    hoverDescription: "Mixed Dormitory Room",
    price: 18,
    tag: null,
    image: room2Img,
    description: "A spacious mixed dormitory built for backpackers and group travelers. Five beds, shared bathroom with hairdryer, safe deposit boxes, and laundry on site. Step outside to the communal dining terrace and swap stories under the sky.",
    guests: 5, size: "21 m²",
    amenities: [
      { figma: { path: svgPaths.p19aa6f00, viewBox: "0 0 24 24" }, label: "21 m²" },
      { figma: { path: svgPaths.pfbef580, viewBox: "0 0 18.8457 18.8457" }, label: "1 bed" },
      { figma: { path: svgPaths.p1d5bb000, viewBox: "0 0 13.6212 9.98889" }, label: "4 bunks" },
    ],
    highlights: ["Safe deposit box", "Laptop safe", "Shared bathroom & hairdryer", "Outdoor dining area"],
    detailedAmenities: [
      {
        title: "Comfort & Convenience",
        items: ["Fan (Ventilador)", "Bed linen provided", "Socket near the bed", "Safe deposit box & Laptop safe", "Clothes rack & Drying rack"],
      },
      {
        title: "Shared Bathroom & Laundry",
        items: ["Shared bathroom with shower and hairdryer", "Free toiletries", "Washing machine & Clothes dryer", "Iron & Ironing facilities", "Cleaning products"],
      },
      {
        title: "Connectivity & Outdoor",
        items: ["Free High-Speed Wi-Fi", "Outdoor dining area"],
      },
      {
        title: "House Rules",
        items: ["Smoking Policy: Non-smoking room"],
      },
    ] as DetailedAmenityCategory[],
  },
  {
    id: 3, index: "16", badge: badge16,
    name: "Casa Flores",
    type: "Double Room with Patio",
    tagline: "",
    hoverDescription: "Double Room with private patio and garden views",
    price: 55,
    tag: null,
    image: room3Img,
    description: "Bright and comfortable with private access to a sun-drenched patio and terrace. Wake up to garden and inner courtyard views, enjoy your morning in the open air, and return to a private bathroom with all the comforts of home.",
    guests: 2, size: "19 m²",
    amenities: [
      { figma: { path: svgPaths.p19aa6f00, viewBox: "0 0 24 24" }, label: "19 m²" },
      { figma: { path: svgPaths.p3a99c600, viewBox: "0 0 18.8457 18.8457" }, label: "view to garden" },
      { figma: { path: svgPaths.p76b4680, viewBox: "0 0 20.6426 20.6426" }, label: "Patio" },
      { figma: { path: svgPaths.p83e8080, viewBox: "0 0 15.1543 15.1543" }, label: "Bath" },
    ],
    highlights: ["Private patio & terrace", "Garden & courtyard views", "Safe deposit box", "Outdoor dining area"],
    detailedAmenities: [
      {
        title: "Room Details & Layout",
        items: ["Room size: 19 m²", "1 Single Bed + 1 Double Bed (2 beds total)", "Views: Garden, Inner courtyard, Patio & Terrace", "Entire unit on the ground floor"],
      },
      {
        title: "Comfort & Convenience",
        items: ["Fan (Ventilador)", "Bed linen provided", "Socket near the bed", "Safe deposit box & Laptop safe", "Clothes rack & Drying rack"],
      },
      {
        title: "Bathroom & Laundry",
        items: ["Private bathroom with shower", "Washing machine & Clothes dryer", "Iron & Ironing facilities", "Cleaning products"],
      },
      {
        title: "Connectivity & Outdoor Space",
        items: ["Free High-Speed Wi-Fi", "Terrace & Private Patio", "Outdoor dining area"],
      },
      {
        title: "House Rules",
        items: ["Smoking Policy: Non-smoking room"],
      },
    ] as DetailedAmenityCategory[],
  },
  {
    id: 4, index: "17", badge: badge17,
    name: "Casa Volcán",
    type: "Double Room with Balcony",
    tagline: "",
    hoverDescription: "Double Room with balcony and mountain views",
    price: 65,
    tag: null,
    image: room4Img,
    description: "A scenic room with a private balcony and terrace framing mountain, garden, and city views. Air-conditioned with flat-screen TV and Netflix. Fall asleep to the silhouette of the volcano, wake to birdsong over the Ruta de las Flores.",
    guests: 2, size: "19 m²",
    amenities: [
      { figma: { path: svgPaths.p17a34d00, viewBox: "0 0 24 24" }, label: "19 m²" },
      { figma: { path: svgPaths.p25eecaf0, viewBox: "0 0 16.6426 16.6426" }, label: "View mountains" },
      { figma: { path: svgPaths.p183483e0, viewBox: "0 0 24 24" }, label: "Courtyard" },
      { figma: { path: svgPaths.p83e8080, viewBox: "0 0 15.1543 15.1543" }, label: "Bath" },
    ],
    highlights: ["Private balcony & terrace", "Mountain & city views", "Air conditioning", "Flat-screen TV & Netflix"],
    detailedAmenities: [
      {
        title: "Comfort & Climate",
        items: ["Air conditioning", "Bed linen provided", "Socket near the bed"],
      },
      {
        title: "Bathroom & Laundry",
        items: ["Private bathroom", "Washing machine & Clothes dryer", "Iron & Ironing facilities", "Clothes rack & Drying rack", "Cleaning products"],
      },
      {
        title: "Entertainment & Connectivity",
        items: ["Free High-Speed Wi-Fi", "Flat-screen TV with Satellite & Cable channels", "Streaming services (e.g., Netflix)"],
      },
      {
        title: "Outdoor & Leisure",
        items: ["Private Balcony & Terrace", "Outdoor dining area"],
      },
      {
        title: "House Rules",
        items: ["Smoking: Non-smoking room"],
      },
    ] as DetailedAmenityCategory[],
  },
];

type DetailedAmenityCategory = {
  title: string;
  items: string[];
};

type Room = (typeof rooms)[number];

// ─── Modal ────────────────────────────────────────────────────────────────────

function RoomModal({ room, t, onClose }: { room: Room; t: Theme; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 backdrop-blur-sm" style={{ background: "rgba(0,0,0,0.65)" }} />
      <motion.div
        className="relative z-10 w-full sm:max-w-2xl max-h-[93vh] overflow-y-auto flex flex-col"
        style={{ background: t.cardBg, borderRadius: 4, border: `1px solid ${t.amenityBorder}` }}
        initial={{ opacity: 0, y: 56, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 36, scale: 0.97 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero */}
        <div className="relative overflow-hidden shrink-0" style={{ height: 260 }}>
          <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(10,18,9,0) 40%,rgba(10,18,9,0.88) 100%)" }} />
          <button onClick={onClose} className="absolute top-4 right-4 size-9 rounded-full flex items-center justify-center transition-colors" style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.12)", color: "#ede8d8" }}>
            <X size={15} />
          </button>
          <div className="absolute bottom-5 left-6">
            <span className="block font-bold mb-1" style={{ fontFamily: "'Fraunces',serif", fontSize: 11, letterSpacing: "0.12em", color: "#f2b138" }}>{room.index}</span>
            <h2 className="font-black leading-none italic" style={{ fontFamily: "'Fraunces',serif", fontSize: 30, color: "#ede8d8" }}>{room.name}</h2>
            <p className="uppercase tracking-widest mt-1" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: "rgba(237,232,216,0.5)" }}>{room.type}</p>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-6 p-6">
          {/* Price row */}
          <div className="flex items-center justify-between pb-5" style={{ borderBottom: `1px solid ${t.divider}` }}>
            <div className="flex items-baseline gap-2">
              <span className="font-bold" style={{ fontFamily: "'Fraunces',serif", fontSize: 32, color: t.gold }}>${room.price}</span>
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: t.muted }}>/ night</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end gap-0.5">
                <span className="uppercase tracking-widest" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8, color: t.muted }}>Size</span>
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: t.heading }}>{room.size}</span>
              </div>
              <div className="w-px h-7" style={{ background: t.divider }} />
              <div className="flex items-center gap-1.5">
                <Star size={11} fill={t.starColor} stroke="none" />
                <span className="font-bold" style={{ fontFamily: "'Fraunces',serif", fontSize: 14, color: t.starColor }}>4.9</span>
                <span className="uppercase tracking-widest" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8, color: t.muted }}>Google</span>
              </div>
            </div>
          </div>

          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: t.body, lineHeight: 1.7 }}>{room.description}</p>

          {/* Amenities */}
          {"detailedAmenities" in room && room.detailedAmenities ? (
            <div className="flex flex-col gap-5">
              <p className="uppercase tracking-widest" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: t.muted }}>Key Amenities</p>
              {(room.detailedAmenities as DetailedAmenityCategory[]).map((cat) => (
                <div key={cat.title}>
                  <p className="mb-2" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 600, color: t.heading }}>{cat.title}</p>
                  <div className="flex flex-col gap-1.5">
                    {cat.items.map((item) => (
                      <div key={item} className="flex items-center gap-2.5">
                        <Check size={10} color={t.green} strokeWidth={2.5} />
                        <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: t.body }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <p className="uppercase tracking-widest mb-3" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: t.muted }}>Amenities</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {room.amenities.map((item) => (
                  <div key={item.label} className="flex items-center gap-2 px-3 py-2.5" style={{ background: t.amenityBg, border: `1px solid ${t.amenityBorder}`, borderRadius: 3 }}>
                    <AmenityIcon item={item} size={12} color={t.green} />
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: t.body }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          <div>
            <p className="uppercase tracking-widest mb-3" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: t.muted }}>Highlights</p>
            <div className="flex flex-wrap gap-2">
              {room.highlights.map((h) => (
                <div key={h} className="flex items-center gap-1.5 px-3 py-1.5" style={{ background: t.highlightBg, border: `1px solid ${t.highlightBorder}`, borderRadius: 100 }}>
                  <Check size={10} color={t.green} strokeWidth={2.5} />
                  <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: t.body }}>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex gap-3 pt-1">
            <motion.button
              className="flex-1 flex items-center justify-center gap-[8px] px-[30px] py-[14px] rounded-[4px] cursor-pointer border-0 drop-shadow-[0px_4px_6px_rgba(242,177,56,0.2)]"
              style={{ background: "#f2b138" }}
              whileHover={{ backgroundColor: "#d49a1f" }}
              whileTap={{ scale: 0.98 }}
            >
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11.2, fontWeight: 700, letterSpacing: "1.34px", color: "#0c1a10", textTransform: "uppercase", whiteSpace: "nowrap", fontVariationSettings: '"opsz" 14' }}>Book This Room</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="#0c1a10" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </motion.button>
            <motion.button
              className="flex items-center justify-center px-[30px] py-[14px] rounded-[4px] cursor-pointer border-0"
              style={{ background: "transparent", border: `1px solid ${t.btnOutlineBorder}`, color: t.btnOutlineColor }}
              whileHover={{ borderColor: t.btnOutlineHoverBorder, color: t.btnOutlineHoverColor }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
            >
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11.2, fontWeight: 700, letterSpacing: "1.34px", textTransform: "uppercase", whiteSpace: "nowrap", fontVariationSettings: '"opsz" 14' }}>Close</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Room stack card ──────────────────────────────────────────────────────────

function RoomCard({ room, t, index, onOpenModal }: { room: Room; t: Theme; index: number; onOpenModal: (r: Room) => void }) {
  const imageRight = index % 2 !== 0;

  return (
    <motion.div
      className="relative flex flex-col md:flex-row overflow-hidden"
      style={{ borderBottom: `1px solid ${t.sectionBorder}`, minHeight: "min(520px, 72vw)" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Image half */}
      <motion.div
        className={`relative overflow-hidden md:w-1/2 shrink-0 ${imageRight ? "md:order-2" : ""}`}
        style={{ minHeight: 300 }}
        initial="rest" whileHover="hover" animate="rest"
      >
        <motion.img
          src={room.image} alt={room.name}
          className="w-full h-full object-cover absolute inset-0"
          variants={{ rest: { scale: 1 }, hover: { scale: 1.04 } }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* directional fade toward content */}
        <div className="absolute inset-0" style={{
          background: imageRight
            ? "linear-gradient(270deg,rgba(10,18,9,0) 55%,rgba(10,18,9,0.4) 100%)"
            : "linear-gradient(90deg,rgba(10,18,9,0) 55%,rgba(10,18,9,0.4) 100%)",
        }} />
        {/* room number watermark */}
        <span
          className="absolute bottom-4 right-5 font-black select-none pointer-events-none leading-none italic"
          style={{ fontFamily: "'Fraunces',serif", fontSize: 88, color: t.watermark }}
        >
          {room.index}
        </span>
      </motion.div>

      {/* Content half */}
      <div
        className={`relative flex flex-col justify-center gap-6 px-10 md:px-14 py-12 md:w-1/2 ${imageRight ? "md:order-1" : ""}`}
        style={{ background: t.cardBg }}
      >
        {/* Index + tag */}
        <div className="flex items-center gap-3">
          <span className="font-bold" style={{ fontFamily: "'Fraunces',serif", fontSize: 12, letterSpacing: "0.12em", color: t.gold }}>{room.index}</span>
          {room.tag && (
            <span className="px-2 py-0.5 uppercase tracking-widest" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8, borderRadius: 2, background: t.tag.bg, border: `1px solid ${t.tag.border}`, color: t.tag.text }}>
              {room.tag}
            </span>
          )}
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-1.5">
          <h2 className="font-black italic" style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(24px,3vw,32px)", lineHeight: 1.2, color: t.heading, fontVariationSettings: '"SOFT" 0,"WONK" 1' }}>
            {room.name}
          </h2>
          <p className="uppercase tracking-[0.22em]" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: t.green }}>{room.type}</p>
          {room.tagline && <p className="italic mt-0.5" style={{ fontFamily: "'Fraunces',serif", fontSize: 13, color: t.muted }}>{room.tagline}</p>}
          <div className="flex items-baseline gap-1.5 mt-2">
            <span className="font-bold leading-none" style={{ fontFamily: "'Fraunces',serif", fontSize: 24, color: t.gold }}>${room.price}</span>
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: t.muted }}>per night</span>
          </div>
        </div>

        {/* Description */}
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, color: t.body, lineHeight: 1.7, maxWidth: 400 }}>
          {room.description}
        </p>

        {/* Amenity pills */}
        <div className="flex flex-wrap gap-1.5">
          {room.amenities.slice(0, 4).map((item) => (
            <div key={item.label} className="flex items-center gap-1.5 px-2.5 py-1" style={{ background: t.pillBg, border: `1px solid ${t.pillBorder}`, borderRadius: 100 }}>
              <AmenityIcon item={item} size={10} color={t.green} />
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: t.body }}>{item.label}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-4 pt-2" style={{ borderTop: `1px solid ${t.divider}` }}>
          <div className="flex gap-3">
            <motion.button
              className="flex-1 flex items-center justify-center gap-[8px] px-[30px] py-[14px] rounded-[4px] cursor-pointer border-0 drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)]"
              style={{ background: "#3d9e72" }}
              whileHover={{ backgroundColor: "#2d8a60" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onOpenModal(room)}
            >
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11.2, fontWeight: 700, letterSpacing: "1.34px", color: "white", textTransform: "uppercase", whiteSpace: "nowrap", fontVariationSettings: '"opsz" 14' }}>Explore</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="white" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </motion.button>
            <motion.button
              className="flex-1 flex items-center justify-center gap-[8px] px-[30px] py-[14px] rounded-[4px] cursor-pointer border-0 drop-shadow-[0px_4px_6px_rgba(242,177,56,0.2)]"
              style={{ background: "#f2b138" }}
              whileHover={{ backgroundColor: "#d49a1f" }}
              whileTap={{ scale: 0.97 }}
            >
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11.2, fontWeight: 700, letterSpacing: "1.34px", color: "#0c1a10", textTransform: "uppercase", whiteSpace: "nowrap", fontVariationSettings: '"opsz" 14' }}>Book</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="#0c1a10" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Figma-style room card with hover state ───────────────────────────────────

function FigmaRoomCard({ room, t, isDark, onExplore }: { room: Room; t: Theme; isDark: boolean; onExplore: () => void }) {
  const [hovered, setHovered] = useState(false);

  const cardBg   = isDark ? "#0d1b11" : "#ffffff";
  const nameFg   = isDark ? "#ede8d8" : "#0c1a10";
  const priceFg  = isDark ? "#ede8d8" : "#0c1a10";
  const bodyFg   = isDark ? "rgba(237,232,216,0.62)" : "#0a1209";
  const iconBg   = "rgba(61,158,114,0.2)";
  const border   = isDark ? "rgba(61,158,114,0.14)" : "rgba(61,158,114,0.12)";

  return (
    <div
      className="relative overflow-hidden"
      style={{ background: cardBg, border: `1px solid ${border}`, minHeight: 416, cursor: "default" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden shrink-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ height: hovered ? 216 : 302 }}
      >
        <img
          src={room.image}
          alt={room.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(12,26,16,0.4)", mixBlendMode: "multiply" }}
        />
        {/* Tag */}
        {room.tag && (
          <div
            className="absolute top-0 right-0"
            style={{
              background: "#f2f2f2",
              border: "0.716px solid #d9d9d9",
              borderRadius: 2,
              padding: "5px 7px",
              margin: "0.12px 0.12px 0 0",
            }}
          >
            <p
              className="uppercase whitespace-nowrap"
              style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 6.64, letterSpacing: "0.928px", color: "#595961", fontVariationSettings: '"opsz" 9' }}
            >
              Most popular
            </p>
          </div>
        )}
        {/* Room number badge image */}
        <img
          src={room.badge}
          alt={room.index}
          className="absolute pointer-events-none"
          style={{ width: 54, height: 57, top: 11, left: 12, objectFit: "contain" }}
        />
      </div>

      {/* Divider */}
      <div style={{ borderTop: "0.716px solid rgba(61,158,114,0.1)" }} />

      {/* Content */}
      <div
        className="flex flex-col px-3 pt-[10.716px] pb-[10px] gap-4 overflow-hidden"
        style={{ flex: 1 }}
      >
        {/* Name + Price */}
        <div className="flex items-start justify-between w-full">
          <p
            className="font-bold whitespace-nowrap"
            style={{ fontFamily: "'Fraunces',serif", fontSize: 12.6, lineHeight: "18.9px", color: nameFg, fontVariationSettings: '"SOFT" 0,"WONK" 1' }}
          >
            {hovered ? room.name : room.name}
          </p>
          <div className="flex flex-col items-end shrink-0 ml-2">
            <p
              className="font-bold whitespace-nowrap"
              style={{ fontFamily: "'Fraunces',serif", fontSize: 17.2, lineHeight: "17.2px", color: priceFg, fontVariationSettings: '"SOFT" 0,"WONK" 1' }}
            >
              ${room.price}
            </p>
            <p
              className="opacity-40 whitespace-nowrap"
              style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 6.9, lineHeight: "10.3px", color: isDark ? "#ede8d8" : "#0c1a10", fontVariationSettings: '"opsz" 9' }}
            >
              /night
            </p>
          </div>
        </div>

        {/* Description / amenity icons (hover) / full-width button */}
        <div className="flex flex-col gap-3 w-full">
          {/* Description */}
          <p
            className="relative shrink-0"
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 9.3,
              lineHeight: "14.3px",
              color: bodyFg,
              width: "100%",
              fontVariationSettings: '"opsz" 14',
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: hovered ? 4 : 2,
              WebkitBoxOrient: "vertical",
            } as React.CSSProperties}
          >
            {hovered ? room.hoverDescription : room.type}
          </p>

          {/* Amenity icons row — hover only */}
          {hovered && (
            <div className="flex gap-2 items-start w-full">
              {room.amenities.slice(0, 4).map((item) => (
                <div key={item.label} className="flex flex-col gap-1 items-center flex-1 min-w-0">
                  <div
                    className="flex items-center justify-center rounded-[6px] shrink-0"
                    style={{ width: 24, height: 24, background: iconBg }}
                  >
                    <AmenityIcon item={item} size={13} color="#3D9E72" />
                  </div>
                  <p
                    className="text-center font-bold"
                    style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8, color: nameFg, fontVariationSettings: '"opsz" 14', lineHeight: "normal", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "100%" }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Explore button — always full width */}
          <button
            className="w-full flex items-center justify-center gap-[8px] cursor-pointer border-0 rounded-[4px] drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)]"
            style={{ background: "#3d9e72", padding: "14px 30px", transition: "background 0.2s" }}
            onClick={onExplore}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#2d8a60")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#3d9e72")}
          >
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11.2, fontWeight: 700, letterSpacing: "1.34px", color: "white", textTransform: "uppercase", whiteSpace: "nowrap", fontVariationSettings: '"opsz" 14' }}>Explore</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="white" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Outer border overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ border: `1px solid ${border}` }}
      />
    </div>
  );
}

// ─── Homepage ────────────────────────────────────────────────────────────────

const features = [
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" width="24" height="24">
        <path d={svgPaths.p1f220c80} stroke="#F2B138" strokeLinecap="round" strokeWidth="2" />
      </svg>
    ),
    title: "Garden",
    desc: "A lush, tranquil green oasis to unwind, read, or enjoy morning coffee.",
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" width="24" height="24">
        <path d={svgPaths.p3075da00} stroke="#F2B138" strokeLinecap="round" strokeWidth="2" />
      </svg>
    ),
    title: "Communal Kitchen",
    desc: "Fully equipped space to cook, share recipes, and connect over food.",
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" width="24" height="24">
        <path d={svgPaths.p2794d100} stroke="#F2B138" strokeLinecap="round" strokeWidth="2" />
      </svg>
    ),
    title: "Shared Lounge Area",
    desc: "Cozy community space with deep couches, books, and vinyl records.",
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" width="24" height="24">
        <path d={svgPaths.pa962300} stroke="#F2B138" strokeLinecap="round" strokeWidth="2" />
      </svg>
    ),
    title: "Self-Service Laundry",
    desc: "24/7 washers and dryers so you can pack light and stay fresh.",
  },
];


function HomePage({ t, isDark, rooms, onExploreRooms, onOpenModal, onExploreRuta }: {
  t: Theme; isDark: boolean; rooms: Room[];
  onExploreRooms: () => void; onOpenModal: (r: Room) => void; onExploreRuta: () => void;
}) {
  return (
    <div>
      {/* ── Hero — Desktop ── */}
      <section className="hidden md:block relative w-full overflow-hidden" style={{ background: "#0c1a10", minHeight: 600 }}>
        <img src={heroForest} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" style={{ opacity: 0.8 }} />
        <img src={heroForest} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" style={{ opacity: 0.8 }} />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(181.76deg, rgba(12,26,16,0.21) 18.55%, rgba(12,26,16,0.49) 71.94%, rgba(12,26,16,0.665) 102.8%)" }}
        />
        <div className="relative z-10 flex flex-col justify-center gap-10 px-[90px] pt-20 pb-[112px]" style={{ minHeight: 600 }}>
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease: [0.22,1,0.36,1] }}
          >
            <p
              className="font-black italic leading-none whitespace-nowrap"
              style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(42px,4.65vw,67px)", color: "#f2b138", fontVariationSettings: '"SOFT" 0,"WONK" 1' }}
            >
              Neskapolita
            </p>
            <p
              className="font-black leading-tight"
              style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(20px,2.08vw,30px)", color: "#ffffff", fontVariationSettings: '"SOFT" 0,"WONK" 1', maxWidth: 520 }}
            >
              Your refuge on the Ruta de las flores
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-[60px]"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.18, ease: [0.22,1,0.36,1] }}
          >
            <div className="flex flex-wrap gap-5 items-center">
              <button
                onClick={onExploreRooms}
                className="flex items-center gap-[8px] px-[30px] py-[14px] rounded-[4px] cursor-pointer border-0 drop-shadow-[0px_4px_6px_rgba(242,177,56,0.2)] transition-colors"
                style={{ background: "#f2b138" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#d49a1f")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#f2b138")}
              >
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11.2, fontWeight: 700, letterSpacing: "1.34px", color: "#0c1a10", textTransform: "uppercase", whiteSpace: "nowrap", fontVariationSettings: '"opsz" 14' }}>Explore Rooms</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="#0c1a10" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </button>
              <button
                className="flex items-center gap-[8px] px-[30px] py-[14px] rounded-[4px] cursor-pointer border-0 drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)] transition-colors"
                style={{ background: "#3d9e72" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#2d8a60")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#3d9e72")}
              >
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11.2, fontWeight: 700, letterSpacing: "1.34px", color: "white", textTransform: "uppercase", whiteSpace: "nowrap", fontVariationSettings: '"opsz" 14' }}>Our Story</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="white" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold leading-none" style={{ fontFamily: "'Fraunces',serif", fontSize: 22.4, color: "#f2b138", fontVariationSettings: '"SOFT" 0,"WONK" 1' }}>★ 4.9</p>
              <p className="uppercase tracking-widest" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9.6, color: "rgba(255,255,255,0.45)", letterSpacing: "1.344px", fontVariationSettings: '"opsz" 9' }}>Booking rating</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Hero — Mobile ── */}
      <div
        className="block md:hidden w-full overflow-hidden relative flex flex-col justify-between"
        style={{ paddingTop: "calc(env(safe-area-inset-top) + 72px)", minHeight: 560 }}
      >
        {/* Full-bleed photo */}
        <img
          src={heroMobile}
          alt="Neskapolita hostel entrance"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        />
        {/* Top spacer */}
        <div className="h-[100px] relative shrink-0 w-full" />
        {/* Bottom scrim panel — gradient matches Figma exactly */}
        <motion.div
          className="relative shrink-0 flex flex-col gap-6 items-center w-full"
          style={{
            background: "linear-gradient(to bottom, rgba(12,26,16,0) 0%, rgba(12,26,16,0.9) 40%, #0c1a10 100%)",
            paddingTop: 60,
            paddingBottom: 40,
            paddingLeft: 24,
            paddingRight: 24,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Rating + title + subtitle */}
          <div className="flex flex-col gap-3 items-center w-full">
            <div className="flex items-center gap-2">
              <span style={{ fontFamily: "'Fraunces',serif", fontSize: 20, fontWeight: 700, color: "#f2b138", fontVariationSettings: '"SOFT" 0,"WONK" 1' }}>★ 4.9</span>
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "#ede8d8", opacity: 0.8, letterSpacing: "1px", textTransform: "uppercase", fontVariationSettings: '"opsz" 14' }}>Booking Rating</span>
            </div>
            <p
              className="font-black italic text-center w-full"
              style={{ fontFamily: "'Fraunces',serif", fontSize: 38, color: "#f2b138", fontVariationSettings: '"SOFT" 0,"WONK" 1', lineHeight: 1.1 }}
            >
              Neskapolita
            </p>
            <p
              className="font-black text-center w-full"
              style={{ fontFamily: "'Fraunces',serif", fontSize: 24, color: "#ede8d8", fontVariationSettings: '"SOFT" 0,"WONK" 1', lineHeight: 1.25 }}
            >
              Your refuge on the Ruta de las flores
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-[10px] w-full">
            <button
              onClick={onExploreRooms}
              className="w-full flex items-center justify-center gap-[8px] cursor-pointer border-0 rounded-[4px] drop-shadow-[0px_4px_6px_rgba(242,177,56,0.2)]"
              style={{ background: "#f2b138", padding: "14px 30px" }}
              onTouchStart={(e) => (e.currentTarget.style.background = "#d49a1f")}
              onTouchEnd={(e) => (e.currentTarget.style.background = "#f2b138")}
            >
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11.2, fontWeight: 700, letterSpacing: "1.34px", color: "#0c1a10", textTransform: "uppercase", whiteSpace: "nowrap", fontVariationSettings: '"opsz" 14' }}>Explore Rooms</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="#0c1a10" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </button>
            <button
              className="w-full flex items-center justify-center gap-[8px] cursor-pointer border-0 rounded-[4px] drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)]"
              style={{ background: "#3d9e72", padding: "14px 30px" }}
              onTouchStart={(e) => (e.currentTarget.style.background = "#2d8a60")}
              onTouchEnd={(e) => (e.currentTarget.style.background = "#3d9e72")}
            >
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11.2, fontWeight: 700, letterSpacing: "1.34px", color: "white", textTransform: "uppercase", whiteSpace: "nowrap", fontVariationSettings: '"opsz" 14' }}>Our Story</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="white" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>

      {/* ── Story ── */}
      <section className="relative overflow-hidden" style={{ minHeight: 350 }}>
        {/* Background layers */}
        <div className="absolute inset-0" style={{ background: "#f2f0eb" }} />
        <img src={bgLight} alt="" className="absolute pointer-events-none select-none"
          style={{ width: 1528, height: 761, left: -28, top: -332, objectFit: "cover", maxWidth: "none" }} />
        <img src={bgFlowers} alt="" className="absolute pointer-events-none select-none"
          style={{ width: 1448, height: 721, left: -8, top: -254, objectFit: "cover", maxWidth: "none" }} />

        {/* Content: logo left + text right */}
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 px-6 md:px-[80px] py-[68px]">
          {/* Logo */}
          <img
            src={logoImg}
            alt="Neskapolita logo"
            className="shrink-0"
            style={{ width: 250, height: 210, objectFit: "contain" }}
          />

          {/* Text */}
          <div className="flex flex-col items-center gap-5 flex-1 text-center">
            <div className="flex flex-col items-center gap-6">
              {/* Heading */}
              <h2
                className="font-black"
                style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(24px,3vw,32px)", lineHeight: 1.2, color: isDark ? "#ede8d8" : "#0c1a10", fontVariationSettings: '"SOFT" 0,"WONK" 1', maxWidth: 843 }}
              >
                Neskapolita: The Story of the{" "}
                <br className="hidden md:block" />
                <em style={{ color: "#3d9e72" }}>"Pretty Girl"</em>
              </h2>

              {/* Subtext */}
              <p
                style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, lineHeight: 1.7, color: "#131f16", maxWidth: 498, fontVariationSettings: '"opsz" 14' }}
              >
                Step inside the family home that inspired a legacy of hospitality.
              </p>
            </div>

            {/* Button */}
            <button
              className="flex items-center gap-[8px] px-[30px] py-[14px] rounded-[4px] cursor-pointer border-0 drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)] transition-colors"
              style={{ background: "#3d9e72" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#2d8a60")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#3d9e72")}
            >
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11.2, fontWeight: 700, letterSpacing: "1.34px", color: "white", textTransform: "uppercase", whiteSpace: "nowrap", fontVariationSettings: '"opsz" 14' }}>
                Read the Full Story
              </span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="white" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── Find Your Casa ── */}
      <section className="py-20 px-6 md:px-14" style={{ background: t.pageBg }}>
        <div className="text-center mb-12">
          <h2 className="font-black italic" style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(24px,3vw,32px)", lineHeight: 1.2, color: t.heading, fontVariationSettings: '"SOFT" 0,"WONK" 1' }}>
            Find Your <span style={{ color: t.green }}>Casa</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rooms.map((room) => (
            <FigmaRoomCard key={room.id} room={room} t={t} isDark={isDark} onExplore={onExploreRooms} />
          ))}
        </div>
      </section>

      {/* ── Save 10% ── */}
      <div className="hidden md:block">
        <SavingsBannerSection />
      </div>
      <div className="block md:hidden">
        <BookingPayments />
      </div>

      {/* ── Everything you need ── */}
      <section className="py-20 px-6 md:px-14" style={{ background: t.pageBg }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black italic mb-12" style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(24px,3vw,32px)", lineHeight: 1.2, color: t.heading, fontVariationSettings: '"SOFT" 0,"WONK" 1', maxWidth: 420 }}>
            Everything you need for a perfect stay
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="flex gap-5 p-6 rounded-xl" style={{ background: t.cardBg, border: `1px solid ${t.amenityBorder}` }}>
                <div className="shrink-0 mt-0.5">{f.icon}</div>
                <div>
                  <p className="font-bold mb-1" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, color: t.heading }}>{f.title}</p>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, color: t.body, lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Traveler Community — full width */}
          <div className="flex gap-5 p-6 rounded-xl mt-4" style={{ background: t.cardBg, border: `1px solid ${t.amenityBorder}` }}>
            <div className="shrink-0 mt-0.5">
              <svg fill="none" viewBox="0 0 28 28" width="28" height="28">
                <path d={svgPaths.p1cb142c0} stroke="#F2B138" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <p className="font-bold mb-1" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, color: t.heading }}>Traveler Community</p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, color: t.body, lineHeight: 1.7 }}>Weekly events, dinners, and meetups for modern global nomads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ruta de las Flores map ── */}
      <section className="w-full overflow-hidden relative">
        {/* Desktop image */}
        <img
          src={isDark ? rutaDesktopDark : rutaDesktopLight}
          alt="Ruta de las Flores map"
          className="hidden md:block w-full object-cover"
        />
        {/* Mobile image */}
        <img
          src={isDark ? rutaMobileDark : rutaMobileLight}
          alt="Ruta de las Flores map"
          className="block md:hidden w-full object-cover"
        />

        {/* Desktop CTA — bottom-right, 80px from edges */}
        <div className="hidden md:block absolute bottom-[80px] right-[80px]">
          <ButtonPrimary onClick={onExploreRuta} />
        </div>

        {/* Mobile CTA — centered at the bottom of the image */}
        <div className="md:hidden absolute bottom-5 left-1/2 -translate-x-1/2">
          <ButtonPrimary onClick={onExploreRuta} />
        </div>
      </section>
    </div>
  );
}

// ─── Ruta de las Flores page ──────────────────────────────────────────────────

const RUTA_STOPS = [
  {
    stop: "STOP 1", distance: "0 km — you're here!", imageLeft: true,
    city: "Juayúa", subtitle: "Food Festival & Waterfalls",
    description: "Famous for its weekend food festival, cascading Los Chorros waterfalls, and active volcanic soil perfect for coffee.",
    image: rutaJuayua,
  },
  {
    stop: "STOP 2", distance: "8 km north", imageLeft: false,
    city: "Apaneca", subtitle: "Coffee Farms & Adventure",
    description: "The highest town on the route, boasting mist-veiled coffee farms, extreme zip-lining, and the beautiful Green Lagoon.",
    image: rutaApaneca,
  },
  {
    stop: "STOP 3", distance: "12 km north", imageLeft: true,
    city: "Ataco", subtitle: "Street Art & Handcrafts",
    description: "A vibrant town filled with pastel-colored street murals, boutique hand-craft shops, and high-altitude microbreweries.",
    image: rutaAtaco,
  },
  {
    stop: "STOP 4", distance: "5 km south", imageLeft: false,
    city: "Salcoatitán", subtitle: "Art Galleries & Yucca Cuisine",
    description: "Famous for traditional steamed yucca served on banana leaves, towering mountain views, and local wood galleries.",
    image: rutaSalcoatitan,
  },
  {
    stop: "STOP 5", distance: "15 km south", imageLeft: true,
    city: "Nahuizalco", subtitle: "Candlelit Night Market",
    description: "Home to ancestral indigenous wicker basketry and a beautiful candle-lit night market selling warm pupusas.",
    image: rutaNahuizalco,
  },
  {
    stop: "STOP 6", distance: "25 km south", imageLeft: false,
    city: "Sonsonate", subtitle: "Colonial Gateway & Thermal Pools",
    description: "The historical gateway to the highlands, rich in colonial landmarks and natural volcanic thermal pools.",
    image: rutaSonsonate,
  },
];

const RUTA_FAQS = [
  {
    q: "How many days do you need for Ruta de las Flores?",
    a: "We recommend 2 to 3 days to fully explore the food markets, hike to waterfalls, and tour coffee farms at a relaxed highland pace.",
  },
  {
    q: "What is the best town to visit in Ruta de las Flores?",
    a: "Juayúa is the perfect culinary and adventure hub, while Ataco shines with its street art, and Apaneca offers high-altitude nature.",
  },
  {
    q: "Can you visit Ruta de las Flores without a car?",
    a: "Yes! Colorful local buses (called 'chicken buses') run constantly between all towns for just a few cents, and tuk-tuks are easy to hail.",
  },
  {
    q: "What is the best time of year to visit Ruta de las Flores?",
    a: "The dry season from November to April offers beautiful sunny weather, but the green season (May to October) makes waterfalls spectacular.",
  },
];

const CITY_PLACES: Record<string, { name: string; desc: string; mapsUrl: string }[]> = {
  "Juayúa": [
    { name: "Los Chorros Waterfalls", desc: "A series of stunning cascades fed by volcanic springs, ideal for swimming.", mapsUrl: "https://www.google.com/maps/search/Los+Chorros+Waterfalls+Juayua+El+Salvador" },
    { name: "Weekend Food Festival", desc: "Open-air market every weekend overflowing with local pupusas, grilled meats, and fresh juices.", mapsUrl: "https://www.google.com/maps/search/Juayua+Food+Festival+El+Salvador" },
    { name: "Laguna Las Ninfas", desc: "A peaceful volcanic lagoon surrounded by lush highland forest — perfect for sunrise hikes.", mapsUrl: "https://www.google.com/maps/search/Laguna+Las+Ninfas+El+Salvador" },
  ],
  "Apaneca": [
    { name: "Laguna Verde", desc: "A striking emerald-green crater lake cradled inside an extinct volcanic caldera.", mapsUrl: "https://www.google.com/maps/search/Laguna+Verde+Apaneca+El+Salvador" },
    { name: "Canopy Apaneca", desc: "High-altitude zip-line adventure through cloud-forest canopy with panoramic ridge views.", mapsUrl: "https://www.google.com/maps/search/Canopy+Apaneca+El+Salvador" },
    { name: "Finca Santa Leticia", desc: "Award-winning coffee farm offering guided tours from seed to cup.", mapsUrl: "https://www.google.com/maps/search/Finca+Santa+Leticia+Apaneca+El+Salvador" },
  ],
  "Ataco": [
    { name: "Historic Mural District", desc: "Cobblestone streets lined with vivid pastel murals painted by local and international artists.", mapsUrl: "https://www.google.com/maps/search/Ataco+Mural+District+El+Salvador" },
    { name: "Mercado de Artesanías", desc: "A colorful artisan market selling handwoven textiles, ceramics, and woodwork.", mapsUrl: "https://www.google.com/maps/search/Mercado+Artesanias+Ataco+El+Salvador" },
    { name: "El Imposible National Park", desc: "Cloud forest reserve with rare wildlife, volcanic lookouts, and challenging trails nearby.", mapsUrl: "https://www.google.com/maps/search/El+Imposible+National+Park+El+Salvador" },
  ],
  "Salcoatitán": [
    { name: "Parque Central", desc: "The tranquil central park framed by colonial architecture and flowering gardens.", mapsUrl: "https://www.google.com/maps/search/Parque+Central+Salcoatitan+El+Salvador" },
    { name: "Yucca Steamed Market", desc: "Open-air stalls serving the town's famous yucca wrapped in banana leaves with local curtido.", mapsUrl: "https://www.google.com/maps/search/Salcoatitan+yucca+market+El+Salvador" },
    { name: "Artisan Wood Galleries", desc: "Family-run galleries showcasing intricate hand-carved furniture and traditional wooden crafts.", mapsUrl: "https://www.google.com/maps/search/Salcoatitan+artisan+wood+gallery+El+Salvador" },
  ],
  "Nahuizalco": [
    { name: "Mercado Nocturno", desc: "El Salvador's only candlelit night market — warm pupusas, live marimba, and local craft stalls.", mapsUrl: "https://www.google.com/maps/search/Mercado+Nocturno+Nahuizalco+El+Salvador" },
    { name: "Wicker Craft Workshops", desc: "Watch master artisans weave ancestral Nahua basketry and furniture using tule reed.", mapsUrl: "https://www.google.com/maps/search/Nahuizalco+wicker+workshop+El+Salvador" },
    { name: "Iglesia de Nahuizalco", desc: "Colonial-era church with a distinctive white façade, central to the town's indigenous festivals.", mapsUrl: "https://www.google.com/maps/search/Iglesia+Nahuizalco+El+Salvador" },
  ],
  "Sonsonate": [
    { name: "Cathedral of Sonsonate", desc: "An imposing Baroque cathedral built in the 18th century with ornate gold-leaf altarpieces.", mapsUrl: "https://www.google.com/maps/search/Cathedral+Sonsonate+El+Salvador" },
    { name: "Thermal Hot Springs", desc: "Natural volcanic thermal pools with mineral-rich waters — a perfect post-hike recovery spot.", mapsUrl: "https://www.google.com/maps/search/thermal+hot+springs+Sonsonate+El+Salvador" },
    { name: "Cascada El Escuco", desc: "A hidden multi-tiered waterfall deep in the Nahuaterique mountains, reached via jungle trail.", mapsUrl: "https://www.google.com/maps/search/Cascada+El+Escuco+Sonsonate+El+Salvador" },
  ],
};

function CityPopIn({ city, onClose }: { city: string; onClose: () => void }) {
  const places = CITY_PLACES[city] || [];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }} />

      {/* Panel */}
      <motion.div
        className="relative z-10 w-full sm:max-w-[448px] bg-white flex flex-col overflow-hidden rounded-t-[20px] sm:rounded-[16px] max-h-[90vh] sm:max-h-[85vh]"
        style={{ boxShadow: "0px 25px 50px -12px rgba(0,0,0,0.25)" }}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle — mobile only */}
        <div className="flex sm:hidden justify-center pt-3 pb-1 shrink-0">
          <div className="w-10 h-1 rounded-full" style={{ background: "#d5dad7" }} />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 shrink-0" style={{ borderBottom: "1px solid #d5dad7" }}>
          <div className="flex flex-col gap-0.5">
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "2px", color: "#3d9e72", textTransform: "uppercase", fontVariationSettings: '"opsz" 14' }}>
              Top Places
            </p>
            <p style={{ fontFamily: "'Fraunces',serif", fontWeight: 900, fontSize: 22, lineHeight: "27.5px", color: "#1c2420", fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
              {city}
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center rounded-full shrink-0 transition-colors"
            style={{ width: 32, height: 32, background: "transparent" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#f2f4f3")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <X size={16} color="#54625D" strokeWidth={1.33} />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-3 pt-3 pb-4 overflow-y-auto">
          {/* Instruction */}
          <div className="flex items-center gap-3 justify-center px-6 py-1">
            <div className="flex items-center justify-center rounded-full shrink-0" style={{ width: 28, height: 28, background: "rgba(61,158,114,0.09)" }}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M6.5 1C4.567 1 3 2.567 3 4.5c0 2.625 3.5 7.5 3.5 7.5S10 7.125 10 4.5C10 2.567 8.433 1 6.5 1Z" stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.083" />
                <circle cx="6.5" cy="4.5" r="1.3" stroke="#3D9E72" strokeWidth="1.083" />
              </svg>
            </div>
            <p style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 14, letterSpacing: "0.5px", color: "#3d9e72", whiteSpace: "nowrap" }}>
              Tap a place to open in Google Maps
            </p>
          </div>

          {/* Places list */}
          <div className="flex flex-col">
            {places.map((place, i) => (
              <a
                key={place.name}
                href={place.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 items-start px-6 py-4 transition-colors cursor-pointer no-underline"
                style={{ borderBottom: i < places.length - 1 ? "1px solid #f2f4f3" : "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#fafbfa")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <div className="shrink-0 pt-0.5">
                  <div className="flex items-center justify-center rounded-full" style={{ width: 28, height: 28, background: "rgba(61,158,114,0.09)" }}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M6.5 1C4.567 1 3 2.567 3 4.5c0 2.625 3.5 7.5 3.5 7.5S10 7.125 10 4.5C10 2.567 8.433 1 6.5 1Z" stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.083" />
                      <circle cx="6.5" cy="4.5" r="1.3" stroke="#3D9E72" strokeWidth="1.083" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: 14, lineHeight: "21px", color: "#1c2420", fontVariationSettings: '"opsz" 14' }}>
                    {place.name}
                  </p>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 400, fontSize: 13, lineHeight: "19.5px", color: "#54625d", fontVariationSettings: '"opsz" 14' }}>
                    {place.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function RutaFloresPage({ onExploreRooms }: { onExploreRooms: () => void }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activePopIn, setActivePopIn] = useState<string | null>(null);

  const YellowCTA = ({ label, onClick }: { label: string; onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="self-start flex items-center gap-[8px] px-[30px] py-[14px] rounded-[4px] cursor-pointer border-0 drop-shadow-[0px_4px_6px_rgba(242,177,56,0.2)] transition-colors shrink-0"
      style={{ background: "#f2b138" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#d49a1f")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "#f2b138")}
    >
      <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11.2, fontWeight: 700, letterSpacing: "1.34px", color: "#0c1a10", textTransform: "uppercase", whiteSpace: "nowrap", fontVariationSettings: '"opsz" 14' }}>{label}</span>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="#0c1a10" strokeLinecap="round" strokeWidth="2" />
      </svg>
    </button>
  );

  return (
    <div className="w-full" style={{ background: "#f2f4f3" }}>

      {/* ── Hero ── */}
      <section style={{ background: "#f2f4f3" }}>
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 px-6 py-12 md:px-[80px] md:py-[80px]">

          {/* Left: text */}
          <div className="flex flex-col gap-6 md:w-[500px] shrink-0">
            <h1
              className="font-black leading-tight"
              style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(32px,4vw,48px)", lineHeight: 1.12, fontVariationSettings: '"SOFT" 0, "WONK" 1', color: "#1c2420" }}
            >
              A Cozy Refuge on the{" "}
              <em style={{ color: "#3d9e72", fontStyle: "italic" }}>Ruta de las Flores</em>
            </h1>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, lineHeight: 1.6, color: "#54625d", fontVariationSettings: '"opsz" 14' }}>
              Set in the heart of Juayúa, Neskapolita makes exploring the region effortless.
            </p>
            <button
              onClick={onExploreRooms}
              className="self-start flex items-center gap-[8px] px-[30px] py-[14px] rounded-[4px] cursor-pointer border-0 drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)] transition-colors"
              style={{ background: "#3d9e72" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#2d8a60")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#3d9e72")}
            >
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11.2, fontWeight: 700, letterSpacing: "1.34px", color: "white", textTransform: "uppercase", whiteSpace: "nowrap", fontVariationSettings: '"opsz" 14' }}>See All Rooms</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="white" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </button>
          </div>

          {/* Right: Juayúa photo */}
          <div
            className="w-full md:flex-1 rounded-2xl overflow-hidden"
            style={{ height: "clamp(220px, 40vw, 460px)", border: "1px solid #d5dad7" }}
          >
            <img src={rutaHeroPhoto} alt="Juayúa" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ── Destinations ── */}
      <section style={{ background: "#ffffff" }}>
        <div className="px-6 py-12 md:px-[80px] md:py-[80px] flex flex-col gap-12 md:gap-[80px]">

          {/* Intro */}
          <div className="text-center flex flex-col gap-3 items-center">
            <h2
              className="font-black"
              style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(24px,3vw,36px)", lineHeight: 1.2, color: "#1c2420", fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
            >
              Explore the Ruta de las Flores
            </h2>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, lineHeight: 1.6, color: "#54625d", maxWidth: 600, fontVariationSettings: '"opsz" 14' }}>
              Discover the best of Juayúa and neighboring mountain towns — from the famous weekend food festival and coffee farms to hidden waterfalls and colonial artisan markets.
            </p>
          </div>

          {/* Alternating stops */}
          {RUTA_STOPS.map((stop, i) => (
            <div
              key={stop.city}
              className={`flex flex-col ${stop.imageLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-[64px] items-center`}
            >
              {/* Image */}
              <div
                className="w-full md:w-[560px] shrink-0 rounded-2xl overflow-hidden"
                style={{ height: "clamp(220px, 50vw, 360px)" }}
              >
                <img src={stop.image} alt={stop.city} className="w-full h-full object-cover" />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-4 flex-1">
                {/* Eyebrow */}
                <div className="flex items-center gap-2">
                  <span
                    className="font-bold uppercase"
                    style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, letterSpacing: "1px", color: "#4c6e58", fontVariationSettings: '"opsz" 14' }}
                  >
                    {stop.stop}
                  </span>
                  <span style={{ color: "#54625d", fontSize: 10 }}>•</span>
                  <span
                    className="font-bold"
                    style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "#f2b138", fontVariationSettings: '"opsz" 14' }}
                  >
                    {stop.distance}
                  </span>
                </div>

                <h3
                  className="font-black"
                  style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(24px,2.5vw,32px)", lineHeight: 1.15, color: "#1c2420", fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                >
                  {stop.city}
                </h3>
                <p
                  className="italic"
                  style={{ fontFamily: "'Fraunces',serif", fontSize: 16, color: "#54625d", fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                >
                  {stop.subtitle}
                </p>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, lineHeight: 1.6, color: "#54625d", fontVariationSettings: '"opsz" 14' }}>
                  {stop.description}
                </p>
                <YellowCTA label="Top Places" onClick={() => setActivePopIn(stop.city)} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ background: "#ede8d8" }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-12 md:px-[64px] md:py-[64px]">
          <div className="flex flex-col gap-3 md:max-w-[700px]">
            <h2
              className="font-black"
              style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(24px,3vw,36px)", lineHeight: 1.2, color: "#0c1a10", fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
            >
              Ready to explore Ruta de las Flores?
            </h2>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, lineHeight: 1.6, color: "#0c1a10", opacity: 0.8, fontVariationSettings: '"opsz" 14' }}>
              Book your stay at Neskapolita in Juayúa — the perfect, central base for all your western mountain adventures.
            </p>
          </div>
          <button
            onClick={onExploreRooms}
            className="flex items-center gap-[8px] px-[30px] py-[14px] rounded-[4px] cursor-pointer border-0 drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)] transition-colors"
            style={{ background: "#3d9e72" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#2d8a60")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#3d9e72")}
          >
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11.2, fontWeight: 700, letterSpacing: "1.34px", color: "white", textTransform: "uppercase", whiteSpace: "nowrap", fontVariationSettings: '"opsz" 14' }}>See All Rooms</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="white" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </section>

      {/* ── Quick Tips FAQ ── */}
      <section id="ruta-faq" style={{ background: "#f2f4f3", borderTop: "1px solid #d5dad7", borderBottom: "1px solid #d5dad7" }}>
        <div className="px-6 py-12 md:px-[80px] md:py-[80px] flex flex-col gap-10 md:gap-12">
          <h2
            className="font-black text-center"
            style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(24px,3vw,36px)", lineHeight: 1.2, color: "#1c2420", fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            Ruta Quick Tips
          </h2>
          <div className="flex flex-col gap-4">
            {RUTA_FAQS.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden cursor-pointer"
                style={{ background: "#ffffff", border: "1px solid #d5dad7" }}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex items-center justify-between gap-4 p-6">
                  <p
                    className="font-black flex-1"
                    style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(15px,1.5vw,18px)", lineHeight: 1.3, color: "#1c2420", fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                  >
                    {faq.q}
                  </p>
                  <span
                    className="shrink-0 font-bold transition-transform duration-300"
                    style={{
                      fontFamily: "'DM Sans',sans-serif", fontSize: 18, color: "#4c6e58",
                      display: "inline-block",
                      transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    ↓
                  </span>
                </div>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, lineHeight: 1.6, color: "#54625d", fontVariationSettings: '"opsz" 14' }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City pop-in modal */}
      <AnimatePresence>
        {activePopIn && (
          <CityPopIn city={activePopIn} onClose={() => setActivePopIn(null)} />
        )}
      </AnimatePresence>

    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [page, setPage] = useState<"home" | "rooms" | "ruta">("home");
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "ES">("EN");
  const t = isDark ? DARK : LIGHT;

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
          onLogoClick={() => setPage("home")}
          onNavLink={(link) => {
            if (link === "Rooms") setPage("rooms");
            else if (link === "Our Story" || link === "Story" || link === "Find Us") setPage("home");
          }}
          className="w-full relative"
        />
      </div>

      <AnimatePresence mode="wait">
        {page === "home" ? (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <HomePage
              t={t} isDark={isDark} rooms={rooms}
              onExploreRooms={() => setPage("rooms")}
              onOpenModal={setSelectedRoom}
              onExploreRuta={() => setPage("ruta")}
            />
          </motion.div>
        ) : page === "ruta" ? (
          <motion.div key="ruta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className="flex items-center px-6 md:px-[80px] pt-8 pb-2">
              <button
                onClick={() => setPage("home")}
                className="flex items-center gap-1.5 uppercase tracking-widest"
                style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "#54625d", background: "none", border: "none", cursor: "pointer" }}
              >
                ← Back to Home
              </button>
            </div>
            <RutaFloresPage onExploreRooms={() => setPage("rooms")} />
          </motion.div>
        ) : (
          <motion.div key="rooms" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            {/* Rooms page header */}
            <div className="flex flex-col items-center text-center pt-16 pb-12 px-6">
              <button
                onClick={() => setPage("home")}
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
        )}
      </AnimatePresence>

      {/* Footer */}
      <div className="hidden md:block">
        <Footer
          style={isDark ? "dark" : "light"}
          onLinkClick={(link) => {
            if (link === "FAQ") {
              setPage("ruta");
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
