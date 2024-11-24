import { About } from "../components/About";
import { Animation } from "../components/Animation";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { LinkSocial } from "../components/LinkSocial";
import { Navbar } from "../components/Navbar";
import { OtherWork } from "../components/OtherWork";
import { TitleSection } from "../components/TitleSection";
import { Work } from "../components/Work";
import {GithubProfile} from "../components/GithubProfile.jsx";

export function Mainpage() {
  return (
    <div className="scrollbar font-kumbh relative bg-gradient-to-br from-custom-dark via-custom-dark to-custom-green bg-cover overflow-y-auto">
      <Animation />
      <Navbar />
      <TitleSection />
        <GithubProfile />
      <LinkSocial />
      <About />
      <Experience />
      <Work />
      <OtherWork />
      <Contact />
    </div>
  );
}
