import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import logo from "../../assets/logo.png";

const QRWithLogo = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <QRCodeCanvas
          value="https://docs.google.com/forms/d/e/1FAIpQLSdsVYpOktJ6c7GQ8E_T01HMpzo2P1vD8382QMhC4QOT8mQ2Zw/viewform?usp=preview"
          size={150}
          bgColor="#FFFFFF"
          fgColor="#000000"
          level="H"
          includeMargin={true}
          imageSettings={{
            src: logo, // Make sure this is a transparent PNG
            height: 40, // Reduce size for a cleaner look
            width: 40,
            excavate: true, // Ensures QR code readability
          }}
        />
      </div>
    </div>
  );
};

export default QRWithLogo;
