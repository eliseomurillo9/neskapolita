import { useNavigate, useLocation } from 'react-router-dom';

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
    if (link === "Rooms") goRooms();
    else if (link === "Our Story" || link === "Story" || link === "Find Us") goHome();
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
