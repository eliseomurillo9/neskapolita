import { Trans, useTranslation } from "react-i18next";
import type { CSSProperties } from "react";
import { ArrowRight, Compass, Heart, Users } from "lucide-react";
import { DARK, Theme } from "../theme";
import floralBackground from "@/imports/DesktopV1/0b3cdd2aed1034c1d0964bb9eb901d692e980bec.webp";
import courtyardImage from "@/imports/DesktopV1/2490928644bd15ca355922524c962e0c0e7be7e2.webp";
import ladyIllustration from "@/imports/DesktopV1/7a4368b70120d47e02aec91da9b968e1f2acd65c.webp";
import "./StoryPage.css";

interface StoryPageProps {
  theme: Theme;
  isDark: boolean;
}

export default function StoryPage({ theme, isDark }: StoryPageProps) {
  const { t } = useTranslation();
  const values = [
    { key: "hospitality", Icon: Heart },
    { key: "travel", Icon: Compass },
    { key: "community", Icon: Users },
  ] as const;
  const pageStyle = {
    background: theme.pageBg,
    color: theme.heading,
    "--story-surface": theme.cardBg,
    "--story-background": theme.pageBg,
    "--story-body": theme.body,
    "--story-accent": theme.btnPrimary,
    "--story-border": theme.amenityBorder,
    "--story-gold": theme.gold,
    "--story-booking-background": isDark ? theme.cardBg : DARK.heading,
    "--story-button-text": DARK.pageBg,
  } as CSSProperties;

  return (
    <main className="story-page" style={pageStyle}>
      <section className="story-hero" aria-labelledby="story-heading">
        <img
          src={floralBackground}
          alt=""
          aria-hidden="true"
          className="story-hero-background"
          style={{ opacity: isDark ? 0.08 : 1 }}
        />
        <div className="story-hero-content">
          <div className="story-hero-copy">
            <p className="story-hero-eyebrow" style={{ color: theme.btnPrimary }}>
              {t("story.hero.eyebrow")}
            </p>
            <h1 id="story-heading" className="story-hero-heading">
              {t("story.hero.title")}
              <em style={{ color: theme.btnPrimary }}>{t("story.hero.name")}</em>
            </h1>
            <p className="story-hero-description" style={{ color: theme.body }}>
              {t("story.hero.description")}
            </p>
          </div>
          {/* Replace this import with the final courtyard photo when ready. */}
          <img
            src={courtyardImage}
            alt={t("story.hero.image_alt")}
            className="story-hero-image"
            width={864}
            height={1184}
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="story-legacy" aria-labelledby="story-legacy-heading">
        <div className="story-section-container story-legacy-content">
          <div className="story-portrait">
            <img src={ladyIllustration} alt={t("story.legacy.image_alt")} width={500} height={419} loading="lazy" />
          </div>
          <div className="story-legacy-copy">
            <p className="story-section-eyebrow">{t("story.legacy.eyebrow")}</p>
            <h2 id="story-legacy-heading" className="story-section-heading">
              <Trans i18nKey="story.legacy.title" components={{ em: <em /> }} />
            </h2>
            <div className="story-legacy-body">
              <p>{t("story.legacy.origin")}</p>
              <p>{t("story.legacy.today")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="story-values" aria-labelledby="story-values-heading">
        <div className="story-section-container">
          <header className="story-values-header">
            <p className="story-section-eyebrow">{t("story.values.eyebrow")}</p>
            <h2 id="story-values-heading" className="story-section-heading">{t("story.values.title")}</h2>
          </header>
          <div className="story-values-grid">
            {values.map(({ key, Icon }) => (
              <article className="story-value-card" key={key}>
                <Icon className="story-value-icon" size={28} strokeWidth={1.6} aria-hidden="true" />
                <h3>{t(`story.values.${key}.title`)}</h3>
                <p>{t(`story.values.${key}.description`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="story-booking" aria-labelledby="story-booking-heading">
        <div className="story-section-container story-booking-content">
          <div>
            <h2 id="story-booking-heading" className="story-section-heading">{t("story.booking.title")}</h2>
            <p>{t("story.booking.description")}</p>
          </div>
          <a className="story-booking-button" href="https://api.whatsapp.com/send?phone=50370917674" target="_blank" rel="noopener noreferrer">
            {t("story.booking.cta")}
            <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
