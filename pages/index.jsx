import { useState } from "react";
import dataset from "../Components/data";
import Navbar from "../Components/Navbar";
import CashInfoCards from "../Components/CashInfoCards";
import Footer from "../Components/Footer";

export default function HomePage() {
  let cashCards = dataset.map((item) => {
    return (
      <CashInfoCards
        media={item.media}
        alt={item.alt}
        header={item.header}
        description={item.description}
      />
    );
  });

  return (
    <div className="home_Container">
      <Navbar />
      <section className="landingPage_Container">
        <video
          className="landingPage_Video"
          src="https://ik.imagekit.io/it53s92xtsr/58f996d4296a781679f120a6fc7475b2_file.mp4"
          preload="auto"
          autoplay="true"
          loop="true"
          playsinline=""
          webkit-playsinline=""
          x5-playsinline=""
        />
      </section>
      <section className="landingPage_cashInfo">{cashCards}</section>
      <Footer />
    </div>
  );
}
