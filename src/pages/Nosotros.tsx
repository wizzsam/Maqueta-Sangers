import React from "react";
import AboutHero from "./components/about/AboutHero";
import HistorySection from "./components/about/HistorySection";
import MissionVision from "./components/about/MissionVision";
import ValuesGrid from "./components/about/ValuesGrid";
import GrowthSection from "./components/about/GrowthSection";
import TeamSection from "./components/about/TeamSection";
import ContactStrip from "./components/about/ContactStrip";

import {
    ABOUT_HERO,
    ABOUT_HISTORY,
    ABOUT_IMAGES,
    MISSION_TEXT,
    VISION_TEXT,
    VALUES,
    TIMELINE,
    METRICS,
    TEAM_ROLES,
    HIGHLIGHTS,
} from "./data/about";

export default function Nosotros() {
    return (
        <main className="w-full bg-gray-50">
            <AboutHero
                title={ABOUT_HERO.title}
                highlighted={ABOUT_HERO.highlighted}
                subtitle={ABOUT_HERO.subtitle}
            />
            <HistorySection
                image={ABOUT_IMAGES.history}
                heading={ABOUT_HISTORY.heading}
                paragraphs={ABOUT_HISTORY.paragraphs}
            />
            <MissionVision mission={MISSION_TEXT} vision={VISION_TEXT} />
            <ValuesGrid values={VALUES} />
            <GrowthSection timeline={TIMELINE} metrics={METRICS} />
            <TeamSection image={ABOUT_IMAGES.team} roles={TEAM_ROLES} />
            <ContactStrip highlights={HIGHLIGHTS} />
        </main>
    );
}
