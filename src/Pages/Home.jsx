import React from "react";
import "./Home.css";
import "font-awesome/css/font-awesome.min.css";
import slider_one from "../Pages/images/slide_one.png";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="slider_container">
          <div className="slider-images">
            <div className="slider_image">
              <img
                className="w-100"
                src={slider_one}
                alt="Primeiro slide"
                data-aos="fade-down"
              />
            </div>

            <div className="front_container">
              <div className="front_page_info">
                <h2
                  style={{
                    fontSize: "51px",
                    margin: "0",
                    textAlign: "left",
                    lineHeight: "1.2",
                    color: "hsl(218, 70%, 18%);",
                  }}
                >
                  Cuidamos do Seu Sorriso
                </h2>
                <p>
                  Acreditamos que todos devem ter fácil acesso a uma excelente clínica odontológica.
                </p>
                <div className="social_links"></div>
              </div>
              <div className="slider_controls">
                <div className="circle_dot_class">
                  <span></span>
                </div>
                <div className="circle_dot_class">
                  <span></span>
                </div>
                <div className="circle_dot_class">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clinic_container">
          <div className="clinic_info">
            <div className="basic_info" id="info_01">
              <h2>Horário Flexível</h2>
              <p>
                Trabalhamos em feriados, além de atender até mais tarde em dias regulares. Em caso de emergências, aceitamos agendamentos.
              </p>

              <HashLink
                to={"/register"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn"> Converse com o Doutor</div>
              </HashLink>
            </div>
            <div className="basic_info" id="info_02">
              <h2>Garantia do Melhor Preço</h2>
              <p>
                Nossos preços razoáveis fizeram milhares de pessoas sorrir com um sorriso novo,
                bonito e irresistível, como nunca antes!!
              </p>
              <HashLink
                to={"/#contact-us"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn">Leia Mais</div>
              </HashLink>
            </div>
            <div className="basic_info" id="info_03">
              <h2>Horário de Funcionamento</h2>
              <p>
                Segunda – Sábado: 10h00 – 22h00 Domingo: 17h00 – 22h00
              </p>

              <HashLink
                to={"/dental-clinic/slot"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn" id="tr_btn_01">
                  Agende uma Consulta
                </div>
              </HashLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
