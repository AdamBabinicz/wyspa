import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import "./Contact.css";
import img from "../assets/16.jpg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-heading">
        <h2>Wypracowania na temat "Wesela" Wyspiańskiego</h2>
        <div className="bottom-line-c"></div>
      </div>
      <div className="contact-grid">
        <div className="contact-c">
          {/* <GrLocation size={40} /> */}
          <h3>Wesele – klucze maturalne</h3>
          <Link to="/klucze">
            <p>
              <FaLocationArrow size={30} />
            </p>
          </Link>
        </div>
        <div className="contact-c">
          {/* <GrMail size={40} /> */}
          <h3>
            Analizując podane fragmenty „Wesela”, uzasadnij, w jaki sposób wizja
            i symbol mogą być źródłem wiedzy o postaci?
          </h3>
          <Link to="/fragment">
            <p>
              <FaLocationArrow size={30} />
            </p>
          </Link>
        </div>
        <div className="contact-c">
          {/* <GrPhone size={40} /> */}
          <h3>Klucz odpowiedzi</h3>
          <Link to="/odpowiedzi">
            <p>
              <FaLocationArrow size={30} />
            </p>
          </Link>
        </div>
      </div>
      <img src={img} alt="..." className="image" />
    </div>
  );
};

export default Contact;
