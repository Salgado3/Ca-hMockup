import Link from "next/link";
import Navbar from "../Components/Navbar";
export default function Jobs() {
  return (
    <>
      <Navbar />
      <div className="jobs_Container">
        <section>
          <iframe
            src="https://d30ec9yrj6srx8.cloudfront.net/a09f87b5712884d7be0d7d1a54839b60_file.mp4"
            preload="auto"
            autoplay="true"
            width={400}
            height={500}
            loop=""
            playsinline=""
            webkit-playsinline=""
            x5-playsinline=""
          ></iframe>
        </section>
        <section className="jobBoard_MainTitle_Container">
          <h3 className="jobBoard_MainTitle">COME WORK AT CASHDROP</h3>
          <p className="jobBoard_Description">
            Calling all hustlers: Join the team building the future of
            ecommerce. CASHDROP is changing the game for the new generation of
            restaurateurs, event organizers, creators, and online sellers. Find
            your next role, and let's get after it.
          </p>
        </section>
        <ul className="jobBoard_Ul">
          <li>
            <h3 className="jobBoard_Titles">💻ENGINEERING</h3>
            <li>-Senior & Junior Front End Engineers</li>
            <li>-Senior & Junior Back End Engineers</li>
            <li>-Senior iOS Developer</li>
          </li>
          <li>
            <h3 className="jobBoard_Titles">🎨MARKETING</h3>
            <li>-Social Media Manager</li>
            <li>-Marketing Manager, Restaurants</li>
            <li>-Influencer Marketing Manager</li>
            <li>-Product Marketing Manager</li>
          </li>
          <li>
            <h3 className="jobBoard_Titles">💲BUSINESS DEVELOPMENT</h3>
            <li>-Sales Associate</li>
            <li>-Community Manager</li>
          </li>
          <li>
            <h3 className="jobBoard_Titles">😃CUSTOMER SUCCESS</h3>
            <li>-Customer Success Representative</li>
            <li>-Account Manager, Enterprise</li>
          </li>
        </ul>
      </div>
    </>
  );
}
