import React from "react";
import logo from "../assets/img/logo.png";
import { FacebookLogo, WhatsappLogo, XLogo } from "@phosphor-icons/react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <LogoFooter />
          <LinksFooter />
          <SupportFooter />
          <CommunicationFooter />
        </div>
      </div>
      <CopyrightFooter />
    </footer>
  );
}

// Logo-Footer-section
function LogoFooter() {
  return (
    <div data-aos="fade-left" className="col-md-3 col-lg-3 col-12">
      <div className="logo">
        <img src={logo} alt="logo-footer" />
      </div>
    </div>
  );
}

// Service-Footer-Section
function LinksFooter() {
  return (
    <div className="col-md-3 col-lg-3 col-12">
      <div>
        <p>الروابط</p>
        <nav>
          <ul>
            <li>
              <a href="#">الاسنان</a>
            </li>
            <li>
              <a href="#">التعليم</a>
            </li>
            <li>
              <a href="#">الفاعليات</a>
            </li>
            <li>
              <a href="#">الوظائف</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

// Support-Footer-Section
function SupportFooter() {
  return (
    <div className="col-md-3 col-lg-3 col-12">
      <div>
        <p>الدعم</p>
        <nav>
          <ul>
            <li>
              <a href="#">رقم التواصل</a>
            </li>
            <li>
              <a href="#">البريد الالكتروني</a>
            </li>
            <li>
              <a href="#">العنوان</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

// Communication-Footer-Section
function CommunicationFooter() {
  return (
    <div className="col-md-3 col-lg-3 col-12">
      <div>
        <p>تابعنا</p>
        <div className="socialBox">
          <a href="https://www.facebook.com/" aria-label="Facebook">
            <FacebookLogo size={30} />
          </a>
          <a href="#" aria-label="WhatsApp">
            <WhatsappLogo size={30} />
          </a>
          <a href="https://x.com/?lang=en" aria-label="Twitter">
            <XLogo size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

// Copyright-Footer-Section
function CopyrightFooter() {
  return (
    <div className="copyright">
      جميع الحقوق محفوظة © <span>برمجــــة.تك</span>. 
    </div>
  );
}

export default Footer;
