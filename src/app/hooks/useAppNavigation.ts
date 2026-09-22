import { useNavigate, useLocation } from 'react-router-dom';

export function useAppNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  let currentPage = "home";
  if (location.pathname === "/rooms") currentPage = "rooms";
  if (location.pathname === "/ruta") currentPage = "ruta";

  const goHome = () => navigate("/");
  const goRooms = () => navigate("/rooms");
  const goRuta = () => navigate("/ruta");
  
  const handleNavLink = (link: string) => {
    if (link === "Rooms") navigate("/rooms");
    else if (link === "Our Story" || link === "Story" || link === "Find Us") navigate("/");
  };
  
  const scrollToFaq = () => {
    navigate("/ruta");
    setTimeout(() => {
      document.getElementById("ruta-faq")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleFooterLink = (link: string) => {
    if (link === "FAQ") {
      scrollToFaq();
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
