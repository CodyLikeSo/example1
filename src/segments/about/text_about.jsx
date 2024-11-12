import { Telegram } from "./buttons/telegram";
import { Linkedin } from "./buttons/linkedin";
import { Mail } from "./buttons/mail";
import { Github } from "./buttons/github";

export const Text_about = () => (
    <div className="p-[5%] font-sans text-[#d9d9d9]">
      <h1 className="text-4xl 4xl:text-7xl font-semibold">Arseniy Sviyagin</h1>
      <h2 className="text-xl 4xl:text-5xl">Project-manager</h2>

      <div className="py-[4%] flex flex-row space-x-[3%]">
        <Telegram/>
        <Mail/>
        <Linkedin/>
        <Github/>
      </div>

      <div className="tracking-wider text-2xl 4xl:text-4xl  xl:text-xl">
        <h1 className="py-[2%]">I am a <span className="text-green-600">Project Manager</span> with over a year of experience in planning, communication, and analysis, skilled in tools like Jira and Gantt Chart. </h1>
        <h1 className="py-[2%]">Having worked as a backend developer, I can clearly understand a company's needs. </h1>
        <h1 className="py-[2%]">I have created several startups, assembling teams and distributing tasks among them.</h1>
      </div>
        
    </div>
  );
  