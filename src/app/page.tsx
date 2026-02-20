import ArticleCard from "@/components/ui/ArticleCard";
import VerticalArticleCard from "@/components/ui/VerticalArticleCard";
import HeroSection from "@/components/home/HeroSection";
import CollectionGrid from "@/components/home/CollectionGrid";
import LatestStories from "@/components/home/LatestStories";

import AdSenseUnit from "@/components/ads/AdSenseUnit";
import { NAV_LINKS, SITE_DESCRIPTION } from "@/lib/constants";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <HeroSection />

      <div className="container">
        <div className={styles.goldDivider}></div>

        <CollectionGrid />

        <div className={styles.goldDivider}></div>

        <LatestStories />
      </div>
    </div>
  );
}
