import React from 'react';
import { HashLink } from 'react-router-hash-link';
import about_long_des_data from '../Pages/PagesData/AboutData';
import './LowerFooter.css';
import footer_01 from '../Pages/images/footer_01.jpg';
import footer_02 from '../Pages/images/footer_01.jpg';

function LowerFooter() {
  const contact_recent_data = [
    {
      index: 1,
      rp_img: footer_01,
      rp_text:
        'Problemas dentários são nada menos que uma emergência, independentemente de serem pequenos ou grandes. Os problemas dentários são variados, e saber como lidar com eles pode ser muito eficaz na prevenção de danos a longo prazo.',
      rp_btn: 'read more',
    },
    {
      index: 2,
      rp_img: footer_02,
      rp_text:
        'Embora escovar e usar fio dental sejam duas importantes rotinas diárias de higiene oral para manter a saúde dos dentes e gengivas, há algumas outras coisas simples que você pode fazer para prevenir a cárie dentária.',
      rp_btn: 'read more',
    },
  ];

  const nav_data = [
    { index: 1, link_to: '/#home', nav_name: 'Home' },
    { index: 2, link_to: '/#about-doctors', nav_name: 'Sobre' },
    { index: 3, link_to: '/#our-services', nav_name: 'Tratamentos' },
    {
      index: 4,
      link_to: '/dental-clinic/appointment',
      nav_name: 'Agendamento',
    },
    { index: 5, link_to: '/#contact-us', nav_name: 'Contact Us' },
  ];
  const contact_data = [
    {
      index: 1,
      title: 'Email:',
      cu_data: ' teste@gmail.com',
    },
    {
      index: 2,
      title: 'Telefone:',
      cu_data: ' (11)99999-9999',
    },
  ];

  const contact_link = [
    {
      index: 1,
      img: <i class="fa-brands fa-facebook-f"></i>,
      on_link: 'https://www.facebook.com/',
    },
    {
      index: 2,
      img: <i class="fa-brands fa-instagram"></i>,
      on_link: 'https://www.instagram.com/',
    },
    {
      index: 3,
      img: <i class="fa-brands fa-twitter"></i>,
      on_link: 'https://www.twitter.com/',
    },
    {
      index: 4,
      img: <i class="fa-sharp fa-solid fa-globe"></i>,
      on_link: 'https://omdentalclinic.vercel.app/#home',
    },
  ];
  return (
    <>
      <div className="lower_outer_footer_container">
        <div className="about_us">
          <div className="wrapper_container_ab">
            <h2>Sobre nós</h2>
            <p data-aos="fade-right">{about_long_des_data.text}</p>
          </div>
        </div>
        <div className="recent_posts">
          <h2>Posts recentes</h2>
          {contact_recent_data.map((data, index) => {
            return (
              <div
                className="rp_data"
                key={index}
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <img src={data.rp_img} alt="" />
                <div className="rp_compile_container">
                  <p>{data.rp_text}</p>
                  <a href="#">{data.rp_btn}</a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="footer_menu">
          <div className="wrapper_container_fm">
            <h2>rodapé Menu</h2>
            <div className="footer_data_menu">
              {nav_data.map((data, index) => {
                return (
                  <HashLink
                    className="nav_data"
                    key={index}
                    to={data.link_to}
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    {data.nav_name}
                  </HashLink>
                );
              })}
            </div>
          </div>
        </div>
        <div className="contact_us">
          <div className="wrapper_container_cu">
            <h2>Entre em contato conosco</h2>
            <div
              className="contact_address"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <address>
                Comendador Antunes  dos Santos - 805 - Capão Redondo
              </address>
            </div>
            <div className="contact_data">
              {contact_data.map((data, index) => {
                return (
                  <p
                    className="cs_data"
                    key={index}
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    <span style={{ color: '#0396fe' }}>{data.title} </span>
                    {data.cu_data}
                  </p>
                );
              })}
            </div>
            <div className="contact_links">
              {contact_link.map((data, index) => {
                return (
                  <a
                    className="contact_data_links"
                    key={index}
                    href={data.on_link}
                  >
                    {data.img}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LowerFooter;
