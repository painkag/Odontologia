import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Appointment.css";

const Appointment = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/dental-clinic/slot");
    }, 4000);
  }, []);

  return (
    <>
      <div className="app_container">
        <div className="upper_container">
          <div className="appointment_booking_section">
            <div className="appointment_booking_container">
              <div className="booking_header">
                <i className="fa-regular fa-clock"></i>
                <span>Restam poucos horários disponíveis para hoje</span>
              </div>
              <p className="about_info">
                Por favor, agende o próximo horário disponível clicando em "Reserve seu horário".
              </p>
            </div>
            <hr />
            <div className="booking_container">
              <div className="booking_bottom">
                <h3>Agendar Visita à Clínica</h3>
                <h4>Sem Taxa de Agendamento</h4>
              </div>
              <div className="booking_slot_section">
                <Link to="/dental-clinic/slot">
                  <div className="book_slot"> Reserve seu Horário </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
