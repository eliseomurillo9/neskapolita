import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { GOOGLE_MAPS_URL } from "./hooks/useAppNavigation";
import { PAGE_KEYS, SITE_ORIGIN } from "./siteRoutes";
import hostelPhoto from "@/imports/Variation3FullBleedOverlay/4ee5ecf8eb8baa6d95d45aecc608f95006973ad4.webp";

const brand = "Neska Polita Hostel";
const image = new URL(hostelPhoto, SITE_ORIGIN).href;
const hostel = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      url: `${SITE_ORIGIN}/`,
      name: brand,
      alternateName: "Neskapolita",
      publisher: { "@id": `${SITE_ORIGIN}/#hostel` },
    },
    {
      "@type": "Hostel",
      "@id": `${SITE_ORIGIN}/#hostel`,
      name: brand,
      alternateName: "Neskapolita Hostel",
      url: `${SITE_ORIGIN}/`,
      image,
      telephone: "+50370917674",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calle Merceditas Cáceres 1-5",
        addressLocality: "Juayúa",
        postalCode: "01101",
        addressCountry: "SV",
      },
      hasMap: GOOGLE_MAPS_URL,
      sameAs: [
        "https://www.instagram.com/neskapolitahostel/",
        "https://www.booking.com/hotel/sv/neska-polita-hostel.html",
      ],
    },
  ],
};

export default function PageMetadata({ pathname }: { pathname: string }) {
  const { t, i18n } = useTranslation();
  const path = pathname.replace(/\/+$/, "") || "/";
  const page = Object.hasOwn(PAGE_KEYS, path) ? PAGE_KEYS[path as keyof typeof PAGE_KEYS] : undefined;
  const language = i18n.resolvedLanguage === "es" ? "es" : "en";

  if (!page) {
    return (
      <Helmet htmlAttributes={{ lang: language }}>
        <title>{`404 | ${brand}`}</title>
        <meta name="robots" content="noindex" />
      </Helmet>
    );
  }

  const title = page === "home" ? t("page_titles.home", { brand }) : `${t(`page_titles.${page}`)} | ${brand}`;
  const description = t(`page_descriptions.${page}`);
  const canonical = SITE_ORIGIN + path;

  return (
    <Helmet htmlAttributes={{ lang: language }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={brand} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {page === "home" && <script type="application/ld+json">{JSON.stringify(hostel)}</script>}
    </Helmet>
  );
}
