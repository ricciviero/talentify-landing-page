import { Hero } from "../components/Hero";
import { CardSection } from "../components/CardSection";
import { DataSection } from "../components/DataSection";
import { FocusSection } from "../components/FocusSection";
import { AvatarsSection } from "../components/AvatarsSection";


export const Home = () => {
    return (
        <>
            <Hero />
            <CardSection />
            <DataSection />
            <FocusSection />
            <AvatarsSection />
        </>

    );
};