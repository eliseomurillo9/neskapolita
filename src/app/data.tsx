import i18n from "../locales/i18n";
import room1Img from "@/imports/Document/6c88d1ade3e7b7f98af20a56562688e565b1e477.png";
import room2Img from "@/imports/Document/2cbaef43d2ebac70a3bdec47dfc3e0e8b7f8a628.png";
import room3Img from "@/imports/Document/6f13b43bff73692f3535ad9ee71e65d34379edcf.png";
import room4Img from "@/imports/Document/851cd36c23ad4da155b6cf0f50ec6693c5ab0088.png";
import svgPaths from "@/imports/DesktopV1/svg-a56cgiz6y";
// Room number badge images (from Figma DesktopV1)
import badge01 from "@/imports/DesktopV1/c06fcb3e51191a325985054ce1370bf867d176ef.png";
import badge02 from "@/imports/DesktopV1/5df5da27dcee43241fc35f4a3e842b4708328f40.png";
import badge16 from "@/imports/DesktopV1/146d43f51e15479edc5b6567ca17c752c93c098a.png";
import badge17 from "@/imports/DesktopV1/1a3d1e56d1305cc21af19544fb8fab9094a03110.png";
import {DARK} from './theme';

const t = i18n.t.bind(i18n);

export type Theme = typeof DARK;
// ─── Custom SVG icon paths from Figma (Room 01) ───────────────────────────────

export const ROOM01_ICONS = {
  area: {
    path: "M18.25 5H5.75C5.41848 5 5.10054 5.12292 4.86612 5.34171C4.6317 5.5605 4.5 5.85725 4.5 6.16667V17.8333C4.5 18.1428 4.6317 18.4395 4.86612 18.6583C5.10054 18.8771 5.41848 19 5.75 19H18.25C18.5815 19 18.8995 18.8771 19.1339 18.6583C19.3683 18.4395 19.5 18.1428 19.5 17.8333V6.16667C19.5 5.85725 19.3683 5.5605 19.1339 5.34171C18.8995 5.12292 18.5815 5 18.25 5ZM18.25 17.8333H5.75V6.16667H18.25V17.8333Z",
    viewBox: "0 0 24 24"
  },
  ac: {
    path: "M19.6062 13.8349C19.6262 13.9162 19.63 14.0007 19.6173 14.0835C19.6047 14.1663 19.5758 14.2458 19.5325 14.3174C19.4891 14.3891 19.432 14.4515 19.3645 14.501C19.297 14.5506 19.2205 14.5864 19.1391 14.6064L17.1753 15.0846L17.6902 17.0062C17.7119 17.0871 17.7174 17.1715 17.7065 17.2545C17.6955 17.3375 17.6684 17.4176 17.6265 17.4902C17.5846 17.5627 17.5288 17.6263 17.4623 17.6772C17.3959 17.7282 17.32 17.7656 17.2391 17.7872C17.1854 17.8027 17.13 17.8113 17.0741 17.8127C16.9338 17.8126 16.7975 17.7662 16.6863 17.6808C16.5751 17.5953 16.4951 17.4756 16.4588 17.3401L15.8435 15.0448L12.6109 13.179V16.9113L14.3372 18.6368C14.3965 18.696 14.4435 18.7664 14.4755 18.8438C14.5076 18.9212 14.5241 19.0041 14.5241 19.0879C14.5241 19.1717 14.5076 19.2546 14.4755 19.332C14.4435 19.4094 14.3965 19.4798 14.3372 19.539C14.278 19.5982 14.2077 19.6452 14.1303 19.6773C14.0529 19.7094 13.9699 19.7259 13.8861 19.7259C13.8024 19.7259 13.7194 19.7094 13.642 19.6773C13.5646 19.6452 13.4943 19.5982 13.435 19.539L11.9733 18.0765L10.5117 19.539C10.4524 19.5982 10.3821 19.6452 10.3047 19.6773C10.2273 19.7094 10.1443 19.7259 10.0606 19.7259C9.97678 19.7259 9.89382 19.7094 9.81642 19.6773C9.73902 19.6452 9.66869 19.5982 9.60946 19.539C9.55022 19.4798 9.50323 19.4094 9.47117 19.332C9.43911 19.2546 9.4226 19.1717 9.4226 19.0879C9.4226 19.0041 9.43911 18.9212 9.47117 18.8438C9.50323 18.7664 9.55022 18.696 9.60946 18.6368L11.3357 16.9113V13.179L8.10393 15.0448L7.48865 17.3401C7.45232 17.4757 7.37225 17.5955 7.26086 17.681C7.14946 17.7665 7.01297 17.8128 6.87258 17.8127C6.81663 17.8126 6.76092 17.8054 6.7068 17.7912C6.62588 17.7696 6.55002 17.7322 6.48356 17.6812C6.41709 17.6302 6.36131 17.5667 6.31942 17.4941C6.27753 17.4216 6.25034 17.3415 6.23941 17.2585C6.22847 17.1754 6.23401 17.091 6.2557 17.0101L6.77056 15.0886L4.80677 14.6104C4.64253 14.57 4.50105 14.4661 4.41346 14.3214C4.32588 14.1767 4.29935 14.0031 4.33973 13.8389C4.3801 13.6747 4.48406 13.5332 4.62875 13.4456C4.77343 13.358 4.94698 13.3315 5.11122 13.3719L7.45837 13.9481L10.6982 12.0744L7.45916 10.2046L5.11201 10.7808C5.06222 10.7932 5.01109 10.7993 4.95979 10.7992C4.80389 10.7993 4.65335 10.7423 4.53664 10.6389C4.41992 10.5355 4.34512 10.393 4.32638 10.2382C4.30763 10.0835 4.34624 9.92719 4.43491 9.79895C4.52357 9.67072 4.65614 9.57942 4.80756 9.5423L6.77136 9.06411L6.2565 7.13857C6.21274 6.97517 6.23569 6.80109 6.32029 6.65461C6.40488 6.50814 6.5442 6.40127 6.7076 6.35751C6.87099 6.31376 7.04507 6.3367 7.19155 6.4213C7.33803 6.5059 7.4449 6.64522 7.48865 6.80861L8.10393 9.10396L11.3357 10.9697V7.23739L9.60946 5.5119C9.48982 5.39226 9.4226 5.23 9.4226 5.0608C9.4226 4.97703 9.43911 4.89407 9.47117 4.81667C9.50323 4.73927 9.55022 4.66894 9.60946 4.6097C9.66869 4.55046 9.73902 4.50347 9.81642 4.47141C9.89382 4.43935 9.97678 4.42285 10.0606 4.42285C10.2297 4.42285 10.392 4.49006 10.5117 4.6097L11.9733 6.07219L13.435 4.6097C13.5547 4.49006 13.7169 4.42285 13.8861 4.42285C14.0553 4.42285 14.2176 4.49006 14.3372 4.6097C14.4569 4.72934 14.5241 4.89161 14.5241 5.0608C14.5241 5.23 14.4569 5.39226 14.3372 5.5119L12.6109 7.23739V10.9697L15.8428 9.10396L16.458 6.80861C16.5018 6.64522 16.6087 6.5059 16.7551 6.4213C16.9016 6.3367 17.0757 6.31376 17.2391 6.35751C17.4025 6.40127 17.5418 6.50814 17.6264 6.65461C17.711 6.80109 17.7339 6.97517 17.6902 7.13857L17.1753 9.06012L19.1391 9.53832C19.2948 9.57156 19.4323 9.66181 19.5248 9.79132C19.6173 9.92084 19.658 10.0803 19.639 10.2383C19.6199 10.3963 19.5424 10.5414 19.4217 10.6452C19.3011 10.749 19.146 10.8039 18.9869 10.7992C18.9356 10.7993 18.8845 10.7932 18.8347 10.7808L16.4875 10.2046L13.2485 12.0744L16.4875 13.9441L18.8347 13.3679C18.916 13.3479 19.0005 13.3441 19.0832 13.3567C19.166 13.3694 19.2455 13.3982 19.3172 13.4416C19.3888 13.4849 19.4512 13.542 19.5008 13.6095C19.5504 13.677 19.5862 13.7536 19.6062 13.8349Z",
    viewBox: "0 0 24 24"
  },
  bath: {
    path: "M3.78871 13.9704C3.78871 14.1109 3.74704 14.2482 3.66899 14.365C3.59093 14.4818 3.47999 14.5729 3.35019 14.6267C3.22039 14.6804 3.07756 14.6945 2.93976 14.6671C2.80197 14.6397 2.67539 14.572 2.57605 14.4727C2.4767 14.3733 2.40905 14.2467 2.38164 14.109C2.35423 13.9712 2.3683 13.8283 2.42206 13.6985C2.47583 13.5687 2.56688 13.4578 2.68369 13.3797C2.80051 13.3017 2.93785 13.26 3.07835 13.26C3.26675 13.26 3.44743 13.3349 3.58065 13.4681C3.71386 13.6013 3.78871 13.782 3.78871 13.9704ZM4.97264 11.3657C4.83214 11.3657 4.6948 11.4074 4.57798 11.4854C4.46116 11.5635 4.37012 11.6744 4.31635 11.8042C4.26259 11.934 4.24852 12.0769 4.27593 12.2147C4.30334 12.3525 4.37099 12.479 4.47034 12.5784C4.56968 12.6777 4.69626 12.7454 4.83405 12.7728C4.97185 12.8002 5.11468 12.7861 5.24448 12.7324C5.37428 12.6786 5.48522 12.5876 5.56328 12.4707C5.64133 12.3539 5.68299 12.2166 5.68299 12.0761C5.68299 11.8877 5.60815 11.707 5.47493 11.5738C5.34172 11.4406 5.16103 11.3657 4.97264 11.3657ZM1.18406 11.3657C1.04357 11.3657 0.906225 11.4074 0.789408 11.4854C0.67259 11.5635 0.581542 11.6744 0.527776 11.8042C0.474011 11.934 0.459944 12.0769 0.487353 12.2147C0.514762 12.3525 0.582417 12.479 0.681762 12.5784C0.781108 12.6777 0.907681 12.7454 1.04548 12.7728C1.18327 12.8002 1.3261 12.7861 1.4559 12.7324C1.5857 12.6786 1.69665 12.5876 1.7747 12.4707C1.85276 12.3539 1.89442 12.2166 1.89442 12.0761C1.89442 11.8877 1.81958 11.707 1.68636 11.5738C1.55314 11.4406 1.37246 11.3657 1.18406 11.3657ZM3.07835 9.47144C2.93785 9.47144 2.80051 9.5131 2.68369 9.59115C2.56688 9.66921 2.47583 9.78015 2.42206 9.90995C2.3683 10.0398 2.35423 10.1826 2.38164 10.3204C2.40905 10.4582 2.4767 10.5847 2.57605 10.6841C2.67539 10.7834 2.80197 10.8511 2.93976 10.8785C3.07756 10.9059 3.22039 10.8918 3.35019 10.8381C3.47999 10.7843 3.59093 10.6933 3.66899 10.5764C3.74704 10.4596 3.78871 10.3223 3.78871 10.1818C3.78871 9.99339 3.71386 9.81271 3.58065 9.67949C3.44743 9.54628 3.26675 9.47144 3.07835 9.47144ZM15.1544 2.36786C15.1544 2.49346 15.1045 2.61391 15.0157 2.70272C14.9269 2.79154 14.8065 2.84143 14.6809 2.84143H12.9825L11.3339 4.49064L10.0517 11.9962C10.0228 12.1676 9.94733 12.3279 9.83345 12.4593C9.71957 12.5907 9.57171 12.6882 9.40609 12.7411C9.24046 12.7941 9.06345 12.8004 8.89446 12.7594C8.72548 12.7185 8.57103 12.6317 8.44806 12.5088L2.64681 6.70755C2.52368 6.58448 2.43685 6.42985 2.39587 6.26066C2.35488 6.09146 2.36132 5.91424 2.41448 5.74846C2.46764 5.58269 2.56546 5.43477 2.6972 5.32096C2.82893 5.20715 2.98949 5.13185 3.16122 5.10333L10.6638 3.82054L12.4515 2.03281C12.4955 1.98884 12.5478 1.95398 12.6053 1.93021C12.6628 1.90645 12.7244 1.89424 12.7866 1.89429H14.6809C14.8065 1.89429 14.9269 1.94418 15.0157 2.03299C15.1045 2.12181 15.1544 2.24226 15.1544 2.36786ZM10.3127 4.84168L3.31513 6.03804L9.11639 11.8393L10.3127 4.84168Z",
    viewBox: "0 0 15.1543 15.1543"
  },
  tv: {
    path: "M16.3103 3.1366H3.76392C3.26479 3.1366 2.78611 3.33487 2.43317 3.68781C2.08024 4.04075 1.88196 4.51943 1.88196 5.01855V13.801C1.88196 14.3002 2.08024 14.7788 2.43317 15.1318C2.78611 15.4847 3.26479 15.683 3.76392 15.683H16.3103C16.8094 15.683 17.2881 15.4847 17.641 15.1318C17.994 14.7788 18.1923 14.3002 18.1923 13.801V5.01855C18.1923 4.51943 17.994 4.04075 17.641 3.68781C17.2881 3.33487 16.8094 3.1366 16.3103 3.1366ZM16.9376 13.801C16.9376 13.9674 16.8715 14.127 16.7539 14.2446C16.6362 14.3623 16.4767 14.4283 16.3103 14.4283H3.76392C3.59754 14.4283 3.43798 14.3623 3.32033 14.2446C3.20269 14.127 3.1366 13.9674 3.1366 13.801V5.01855C3.1366 4.85218 3.20269 4.69262 3.32033 4.57497C3.43798 4.45733 3.59754 4.39124 3.76392 4.39124H16.3103C16.4767 4.39124 16.6362 4.45733 16.7539 4.57497C16.8715 4.69262 16.9376 4.85218 16.9376 5.01855V13.801ZM13.1737 17.5649C13.1737 17.7313 13.1076 17.8909 12.99 18.0085C12.8723 18.1262 12.7128 18.1923 12.5464 18.1923H7.52783C7.36146 18.1923 7.2019 18.1262 7.08425 18.0085C6.96661 17.8909 6.90051 17.7313 6.90051 17.5649C6.90051 17.3986 6.96661 17.239 7.08425 17.1214C7.2019 17.0037 7.36146 16.9376 7.52783 16.9376H12.5464C12.7128 16.9376 12.8723 17.0037 12.99 17.1214C13.1076 17.239 13.1737 17.3986 13.1737 17.5649Z",
    viewBox: "0 0 20.0742 20.0742"
  }
};
type FigmaIcon = {
  path: string;
  viewBox: string;
};
export type AmenityItem = {
  label: string;
} & ({
  icon: React.ComponentType<{
    size?: number;
    color?: string;
  }>;
} | {
  figma: FigmaIcon;
});
export function AmenityIcon({
  item,
  size,
  color
}: {
  item: AmenityItem;
  size: number;
  color: string;
}) {
  if ("figma" in item) {
    return <svg width={size} height={size} viewBox={item.figma.viewBox} fill="none">
        <path d={item.figma.path} fill={color} />
      </svg>;
  }
  const Icon = item.icon;
  return <Icon size={size} color={color} />;
}

// ─── Room data ────────────────────────────────────────────────────────────────

export const getRooms = (): Room[] => [{
  id: 1,
  index: "01",
  badge: badge01,
  name: t("rooms.nieves.name"),
  type: t("rooms.nieves.type"),
  tagline: "",
  hoverDescription: t("rooms.nieves.hover"),
  price: 45,
  tag: t("amenity_items.most_popular"),
  image: room1Img,
  description: t("rooms.nieves.desc"),
  guests: 2,
  size: "15 m²",
  amenities: [{
    figma: ROOM01_ICONS.area,
    label: t("rooms.nieves.size")
  }, {
    figma: ROOM01_ICONS.ac,
    label: t("amenities.ac")
  }, {
    figma: ROOM01_ICONS.bath,
    label: t("amenities.bath")
  }, {
    figma: ROOM01_ICONS.tv,
    label: t("amenities.tv")
  }],
  highlights: [t("amenity_items.air_conditioning"), t("amenity_items.flat_screen_tv_netflix"), t("amenity_items.private_bathroom"), t("amenity_items.outdoor_dining_area")],
  detailedAmenities: [{
    title: t("categories.comfort"),
    items: [t("amenity_items.air_conditioning"), t("amenity_items.bed_linen_provided"), t("amenity_items.socket_near_bed"), t("amenity_items.clothes_rack_drying")]
  }, {
    title: t("categories.bathroom"),
    items: [t("amenity_items.private_bathroom"), t("amenity_items.washing_machine_dryer"), t("amenity_items.iron_facilities"), t("amenity_items.cleaning_products")]
  }, {
    title: t("categories.entertainment"),
    items: [t("amenity_items.free_wifi"), t("amenity_items.flat_screen_satellite"), t("amenity_items.streaming_services")]
  }, {
    title: t("categories.outdoor"),
    items: [t("amenity_items.outdoor_dining_area")]
  }, {
    title: t("categories.rules"),
    items: [t("amenity_items.smoking_policy")]
  }] as DetailedAmenityCategory[]
}, {
  id: 2,
  index: "02",
  badge: badge02,
  name: t("rooms.mochila.name"),
  type: t("rooms.mochila.type"),
  tagline: "",
  hoverDescription: t("rooms.mochila.hover"),
  price: 18,
  tag: null,
  image: room2Img,
  description: t("rooms.mochila.desc"),
  guests: 5,
  size: "21 m²",
  amenities: [{
    figma: {
      path: svgPaths.p19aa6f00,
      viewBox: "0 0 24 24"
    },
    label: t("rooms.mochila.size")
  }, {
    figma: {
      path: svgPaths.pfbef580,
      viewBox: "0 0 18.8457 18.8457"
    },
    label: t("amenities.1bed")
  }, {
    figma: {
      path: svgPaths.p1d5bb000,
      viewBox: "0 0 13.6212 9.98889"
    },
    label: t("amenities.4bunks")
  }],
  highlights: [t("amenity_items.safe_deposit_box"), t("amenity_items.laptop_safe"), t("amenity_items.shared_bathroom_hairdryer"), t("amenity_items.outdoor_dining_area")],
  detailedAmenities: [{
    title: t("categories.comfort"),
    items: [t("amenity_items.fan_ventilador"), t("amenity_items.bed_linen_provided"), t("amenity_items.socket_near_bed"), t("amenity_items.safe_deposit_laptop"), t("amenity_items.clothes_rack_drying")]
  }, {
    title: t("categories.shared_bathroom"),
    items: [t("amenity_items.shared_bathroom_shower_hairdryer"), t("amenity_items.free_toiletries"), t("amenity_items.washing_machine_dryer"), t("amenity_items.iron_facilities"), t("amenity_items.cleaning_products")]
  }, {
    title: t("categories.connectivity"),
    items: [t("amenity_items.free_wifi"), t("amenity_items.outdoor_dining_area")]
  }, {
    title: t("categories.rules"),
    items: [t("amenity_items.smoking_policy")]
  }] as DetailedAmenityCategory[]
}, {
  id: 3,
  index: "16",
  badge: badge16,
  name: t("rooms.flores.name"),
  type: t("rooms.flores.type"),
  tagline: "",
  hoverDescription: t("rooms.flores.hover"),
  price: 55,
  tag: null,
  image: room3Img,
  description: t("rooms.flores.desc"),
  guests: 2,
  size: "19 m²",
  amenities: [{
    figma: {
      path: svgPaths.p19aa6f00,
      viewBox: "0 0 24 24"
    },
    label: t("rooms.flores.size")
  }, {
    figma: {
      path: svgPaths.p3a99c600,
      viewBox: "0 0 18.8457 18.8457"
    },
    label: t("amenities.garden_view")
  }, {
    figma: {
      path: svgPaths.p76b4680,
      viewBox: "0 0 20.6426 20.6426"
    },
    label: t("amenities.patio")
  }, {
    figma: {
      path: svgPaths.p83e8080,
      viewBox: "0 0 15.1543 15.1543"
    },
    label: t("amenities.bath")
  }],
  highlights: [t("amenity_items.private_patio_terrace"), t("amenity_items.garden_courtyard_views"), t("amenity_items.safe_deposit_box"), t("amenity_items.outdoor_dining_area")],
  detailedAmenities: [{
    title: t("categories.room_details"),
    items: [t("amenity_items.room_size_19"), t("amenity_items.beds_1_single_1_double"), t("amenity_items.views_garden_patio"), t("amenity_items.entire_unit_ground_floor")]
  }, {
    title: t("categories.comfort"),
    items: [t("amenity_items.fan_ventilador"), t("amenity_items.bed_linen_provided"), t("amenity_items.socket_near_bed"), t("amenity_items.safe_deposit_laptop"), t("amenity_items.clothes_rack_drying")]
  }, {
    title: t("categories.bathroom"),
    items: [t("amenity_items.private_bathroom_shower"), t("amenity_items.washing_machine_dryer"), t("amenity_items.iron_facilities"), t("amenity_items.cleaning_products")]
  }, {
    title: t("categories.connectivity_flores"),
    items: [t("amenity_items.free_wifi"), t("amenity_items.terrace_private_patio"), t("amenity_items.outdoor_dining_area")]
  }, {
    title: t("categories.rules"),
    items: [t("amenity_items.smoking_policy")]
  }] as DetailedAmenityCategory[]
}, {
  id: 4,
  index: "17",
  badge: badge17,
  name: t("rooms.volcan.name"),
  type: t("rooms.volcan.type"),
  tagline: "",
  hoverDescription: t("rooms.volcan.hover"),
  price: 65,
  tag: null,
  image: room4Img,
  description: t("rooms.volcan.desc"),
  guests: 2,
  size: "19 m²",
  amenities: [{
    figma: {
      path: svgPaths.p17a34d00,
      viewBox: "0 0 24 24"
    },
    label: t("rooms.flores.size")
  }, {
    figma: {
      path: svgPaths.p25eecaf0,
      viewBox: "0 0 16.6426 16.6426"
    },
    label: t("amenities.mountain_view")
  }, {
    figma: {
      path: svgPaths.p183483e0,
      viewBox: "0 0 24 24"
    },
    label: t("amenities.courtyard")
  }, {
    figma: {
      path: svgPaths.p83e8080,
      viewBox: "0 0 15.1543 15.1543"
    },
    label: t("amenities.bath")
  }],
  highlights: [t("amenity_items.private_balcony_terrace"), t("amenity_items.mountain_city_views"), t("amenity_items.air_conditioning"), t("amenity_items.flat_screen_tv_netflix")],
  detailedAmenities: [{
    title: t("categories.climate"),
    items: [t("amenity_items.air_conditioning"), t("amenity_items.bed_linen_provided"), t("amenity_items.socket_near_bed")]
  }, {
    title: t("categories.bathroom"),
    items: [t("amenity_items.private_bathroom"), t("amenity_items.washing_machine_dryer"), t("amenity_items.iron_facilities"), t("amenity_items.clothes_rack_drying"), t("amenity_items.cleaning_products")]
  }, {
    title: t("categories.entertainment"),
    items: [t("amenity_items.free_wifi"), t("amenity_items.flat_screen_satellite"), t("amenity_items.streaming_services")]
  }, {
    title: t("categories.leisure"),
    items: [t("amenity_items.private_balcony_terrace_cap"), t("amenity_items.outdoor_dining_area")]
  }, {
    title: t("categories.rules"),
    items: [t("amenity_items.smoking_non_smoking")]
  }] as DetailedAmenityCategory[]
}];
type DetailedAmenityCategory = {
  title: string;
  items: string[];
};
export type Room = ReturnType<typeof getRooms>[number];
