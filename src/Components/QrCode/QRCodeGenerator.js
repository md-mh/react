import React, { useEffect, useState } from "react";
import QRCode from "qrcode.react";

function QRCodeGenerator() {
  const [text, setText] = useState("");
  const [base64, setbase64] = useState("");

  useEffect(() => {
    const canvas = document.getElementById("qrcode-canvas");
    const base64 = canvas.toDataURL("image/png");
    console.log(base64);
    setbase64(base64);
  }, [text]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text or URL"
      />

      <QRCode value={text} id="qrcode-canvas" className="d-none" />

      <img src={base64} alt="" />
    </div>
  );
}

export default QRCodeGenerator;
