import testimonialData from "../Components/testimonialData";
import Navbar from "../Components/Navbar";
import CashInfoCards from "../Components/CashInfoCards";
import Footer from "../Components/Footer";

export default function HomePage() {
  let cashCards = testimonialData.map((item) => {
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
      <section className="testimonial_Header_Container">
        <h2>Convenient Online Ordering Without Seller Fees.</h2>
        <p>
          Start taking online orders today. Create a free online ordering page
          and QR code in less than 15 minutes. Customers can checkout with no
          apps or logins
        </p>
      </section>
      <section className="landingPage_Container">
        <video
          className="testimonial_Video"
          src="https://ik.imagekit.io/it53s92xtsr/b0a6a5a6e0d634f59afcea054d1c3976_file.mp4"
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
