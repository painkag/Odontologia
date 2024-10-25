import React from "react";
import styles from "./About.css";
import about_img from "./images/about_img.webp";
import { Link } from "react-router-dom";
import about_long_des_data from "./PagesData/AboutData";

const About = () => {
  return (
    <>
      <div
        className={styles.example}
        style={{ backgroundColor: "#fff" }}
        id="about-doctors"
      >
        <div className="about_section_container">
          <h2 className="about_title">
            <span className="about_title_logo">
              <i className="fa-solid fa-angles-right"></i>
            </span>
            Sobre Nós
          </h2>
          <div className="about_container">
            <div className="about_infos">
              <p className="about_short_descrp">
                Estamos felizes que você confie suas preocupações com a saúde dental em nossas mãos habilidosas.
              </p>
              <p className="about_long_descrp">{about_long_des_data.text}</p>
              <div className="about_align_btn">
                <Link
                  to={"/dental-clinic/team"}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <button className="more_info_btn">Leia Mais</button>
                </Link>
              </div>
            </div>
            <div className="about_image">
              <img src={about_img} alt="imagem sobre" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
