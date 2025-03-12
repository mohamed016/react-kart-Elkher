import React from "react";
import logo from "../assets/img/logo.png";
import { Phone } from "@phosphor-icons/react";

function Communication() {
  return (
    <section className="communication">
      <div className="container">
        <div className="parent">
          {Array.from({ length: 3 }, (_, i) => (
            <CommunicationCard key={i} numberCard={i + 1} />
          ))}
          <CommunicatioLogo />
          <HintCommunication />
        </div>
      </div>
    </section>
  );
}

// Hint-Communication-section
function HintCommunication() {
  return (
    <div className=" card5">
      <h2>
        "كل خطوة خير، وكل دعم له أثر.انضم معنا في كارت الخير وكن جزءاً من
        التغيير."
      </h2>
      <p>
        تحقيق الخير، خطوة بخطوة. انطلق مع كارت الخير وكن شريكًا في رحلة العطاء.
      </p>
    </div>
  );
}

// logo-Communication-section
function CommunicatioLogo() {
  return (
    <div className="card4">
      <img src={logo} alt="" />
    </div>
  );
}

// card-Communication-section
function CommunicationCard({ numberCard }) {
  return (
    <div data-aos="fade-right" className={`card card${numberCard}`}>
      <span>
        <Phone size={30} />
      </span>
      <div className="content-card">
        <h4>ارقام التواصل</h4>
        <p>+201025952387</p>
        <p>+201124689705</p>
        <a href="#">اتصل الان!</a>
      </div>
    </div>
  );
}
export default Communication;
