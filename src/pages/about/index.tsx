/* eslint-disable @typescript-eslint/no-unused-vars */
import FFFooter from "components/FFFooter";
import FFHeader from "components/FFHeader";
import AboutSectionOne from "./components/AboutSectionOne";
import AboutSectionTwo from "./components/AboutSectionTwo";
import AboutSectionThr from "./components/AboutSectionThr";

const About: React.FC = () => {
    return (
        <>
            <FFHeader />
            <AboutSectionOne />
            <AboutSectionTwo />
            <AboutSectionThr />
            <FFFooter />
        </>
    );
};

export default About;
