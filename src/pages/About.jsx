import AboutSection from "../components/AboutSection";
import HeaderImage from "../components/HeadImage";
import SkillsSection from "../components/SkillsSection";
import StatsSection from "../components/StatsSection";
import TeamsSection from "../components/TeamsSection";

export default function About() {
    return (
        <>
        <HeaderImage page={'About'} />
        <AboutSection />
        <StatsSection />
        <TeamsSection />
        <SkillsSection />
        </>
    )
}