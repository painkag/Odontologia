import React from 'react';
import LowerFooter from '../Components/LowerFooter';
import './Contact.css';

const Contact = () => {
  const clinic_data = [
    {
      id: 1,
      c_day: 'Segunda-feira',
      c_time: '11:00 - 21:00',
    },
    {
      id: 2,
      c_day: 'Terça-feira',
      c_time: '11:00 - 21:00',
    },
    {
      id: 3,
      c_day: 'Quarta-feira',
      c_time: '11:00 - 21:00',
    },
    {
      id: 4,
      c_day: 'Quinta-feira',
      c_time: '11:00 - 21:00',
    },
    {
      id: 5,
      c_day: 'Sexta-feira',
      c_time: '11:00 - 21:00',
    },
    {
      id: 6,
      c_day: 'Sábado',
      c_time: '11:00 - 21:00',
    },
    {
      id: 7,
      c_day: 'Domingo',
      c_time: '17:00 - 21:00',
    },
  ];

  return (
    <>
      <div className="contact_section_container" id="contact-us">
        <div className="container_container">
          <div className="google_map_location">
            <div className="gmap">
              <iframe
                title="gmap_location"
                className="gmap_iframe"
                width="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4225086019265!2d-46.69517978502043!3d-23.572046167088634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5785218c12c1%3A0xd87067d0b60fd027!2sAv.%20Brigadeiro%20Faria%20Lima%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005477-000%2C%20Brazil!5e0!3m2!1sen!2sus!4v1686294084196!5m2!1sen!2sus" 
              ></iframe>
            </div>
          </div>
          <div className="basic_contact_user_form">
            <div className="clinic_time_table">
              <h2 style={{ fontFamily: 'Poppins' }}>
                <span>
                  <i className="fa-solid fa-angles-right"></i>
                </span>
                Horários de Atendimento
              </h2>
            </div>
            <hr />
            {clinic_data.map((e, index) => (
              <div className="clinic_timing" key={index}>
                <p className="current_day">{e.c_day}</p>
                <p className="current_day_timing">{e.c_time}</p>
              </div>
            ))}
            <div className="d_and_c">
              <div className="direction_to_clinic">
                <a
                  href="https://www.google.com/maps?ll=18.978293,73.030934&z=14&t=m&hl=en&gl=US&mapclient=embed&cid=2928691504663646078"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Direção para a Clínica
                </a>
              </div>
              <div className="call_to_clinic">
                <a href="tel:9892729909">Ligar para a Clínica</a>
              </div>
            </div>
          </div>
        </div>
        <LowerFooter />

        <div className="copyright_footer">
          <p>
            <span>
              <i className="fa-regular fa-copyright"></i>
            </span>
            2023
            <a href="/" id="clinic_name">
            Clínica Odontológica.
            </a>
            Todos os Direitos Reservados
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
