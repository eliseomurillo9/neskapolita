import { useNavigate, useLocation } from 'react-router-dom';

export const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Neska+Polita+Hostel/@13.8436115,-89.7455254,17z/data=!3m1!4b1!4m9!3m8!1s0x8f62bf0053fa5bd7:0x200c0925c0a1afac!5m2!4m1!1i2!8m2!3d13.8436115!4d-89.7455254!16s%2Fg%2F11zkmy5fn6?hl=fr-FR&entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D";

export function useAppNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  let currentPage = "home";
  if (location.pathname === "/rooms") currentPage = "rooms";
  if (location.pathname === "/ruta") currentPage = "ruta";

  const goHome = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const goRooms = () => {
    if (location.pathname === "/rooms") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      navigate("/rooms");
    }
  };

  const goRuta = () => {
    if (location.pathname === "/ruta") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      navigate("/ruta");
    }
  };

  const handleNavLink = (link: string) => {
    const l = link.toLowerCase().trim();
    if (l === "rooms" || l.includes("habita")) {
      goRooms();
    } else if (l === "find us" || l.includes("find") || l.includes("encuentra") || l.includes("ubica")) {
      window.open(GOOGLE_MAPS_URL, '_blank', 'noopener,noreferrer');
    } else if (l === "our story" || l === "story" || l.includes("historia")) {
      goHome();
    } else {
      goHome();
    }
  };
  
  const scrollToFaq = () => {
    navigate("/ruta");
    setTimeout(() => {
      document.getElementById("ruta-faq")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleFooterLink = (link: string) => {
    const l = link.toLowerCase().trim();
    if (l === "faq" || l.includes("faq") || l.includes("preguntas")) {
      scrollToFaq();
    } else if (l === "book now" || l === "book_now" || l.includes("reservar") || l === "whatsapp") {
      window.open('https://api.whatsapp.com/send?phone=50370917674', '_blank');
    } else if (l === "instagram" || l === "ig") {
      window.open('https://www.instagram.com/neskapolitahostel', '_blank');
    } else if (l === "find us" || l.includes("find") || l.includes("encuentra") || l.includes("ubica")) {
      window.open(GOOGLE_MAPS_URL, '_blank', 'noopener,noreferrer');
    } else if (l === "our story" || l === "our_story" || l.includes("historia")) {
      navigate("/");
    } else if (l === "gallery" || l.includes("galería")) {
      navigate("/rooms");
    }
  };

  return {
    location,
    currentPage,
    goHome,
    goRooms,
    goRuta,
    handleNavLink,
    handleFooterLink
  };
}
