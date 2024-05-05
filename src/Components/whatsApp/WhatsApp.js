import React from "react";

const WhatsApp = () => {
  const phone_number = +8801751715865; // your whatsapp number
  const handleWhatsAppClick = () => {
    // Code to open WhatsApp with pre-filled message
    // Replace {phone_number} with your business phone number
    window.open(`https://wa.me/${phone_number}`, "_blank");
  };

  return <button onClick={handleWhatsAppClick}>Chat on WhatsApp</button>;
};

export default WhatsApp;
