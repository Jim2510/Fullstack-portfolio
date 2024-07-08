import { About } from "../components/About";
import { Animation } from "../components/Animation";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { LinkSocial } from "../components/LinkSocial";
import { Navbar } from "../components/Navbar";
import { OtherWork } from "../components/OtherWork";
import { TitleSection } from "../components/TitleSection";
import { Work } from "../components/Work";

export function Mainpage() {
  return (
    <div className="scrollbar w-full h-full font-kumbh relative bg-gradient-to-br from-custom-dark via-custom-dark to-custom-green bg-cover overflow-y-auto">
      <Animation />
      <Navbar />
      <TitleSection />
      <LinkSocial />
      <About />
      <Experience />
      <Work />
      <OtherWork />
      <Contact />
    </div>
  );
}
