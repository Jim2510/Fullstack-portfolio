import { About } from "../components/About";
import { Animation } from "../components/Animation";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { LinkSocial } from "../components/LinkSocial";
import { OtherWork } from "../components/OtherWork";
import { TitleSection } from "../components/TitleSection";
import { Work } from "../components/Work";
import {GithubProfile} from "../components/GithubProfile.jsx";
import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/react";
import {Navbar} from "../components/Navbar.jsx";
import {useEffect, useRef, useState} from "react";

export function LayoutMainpage() {
    const [view, setView] = useState(window.innerWidth);
    const refForm = useRef(null);

    useEffect(() => {
        const handleResize = () => setView(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);  return (

    <div className="scrollbar font-kumbh relative bg-gradient-to-br from-custom-dark via-custom-dark to-custom-green bg-cover overflow-y-auto">
      <SpeedInsights />
        <Analytics />
      <Animation />
      <Navbar />
      <TitleSection refForm={refForm} />
        {view >= 768 && <GithubProfile />}
      <LinkSocial />
      <About refAbout={refForm} />
      <Experience/>
      <Work />
      <OtherWork />
      <Contact />
    </div>

  );
}
