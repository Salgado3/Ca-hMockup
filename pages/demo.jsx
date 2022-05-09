import Link from "next/link";
import Navbar from "../Components/Navbar";
export default function Demo() {
  return (
    <div className="bookDemo_Container">
      <Navbar />
      <iframe
        className="calendly_Iframe"
        width="100%"
        height="700"
        src="https://calendly.com/cashdroppartnerships/posdemo?utm_source=iSHMG95CO8&month=2022-05"
      ></iframe>
    </div>
  );
}
