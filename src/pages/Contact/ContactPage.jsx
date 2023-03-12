import React from "react";
import contactImg from "../../assets/contact_img.svg";
import "./ContactPage.css";

import { FiMail, FiPhoneForwarded } from "react-icons/fi";

const ContactPage = () => {
  return (
    <>
      <h3>Contact</h3>

      <div className="contact-wrapper">
        <img src={contactImg} alt="" width="50%" />
        <div className="contact-card">
          <h1>Let's Start</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem unde,
            vel Lorem ipsum dolor sit
          </p>
          <div className="contact-info">
            <div className="contact-detail-wrapper">
              <FiMail color="#0284c7" />
              <p>example@com.mm</p>
            </div>

            <div className="contact-detail-wrapper">
              <FiPhoneForwarded color="#0284c7" />
              <p>00-000-000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
