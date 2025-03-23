import React from "react";
import "./DetailsCard.css";
import QRWithLogo from "../QR/QRCodeGenerator";

const DetailsCard = () => {
  return (
    <div className="details-layout">
      <div className="details-info">
        <h2>Details</h2>

        <ul className="details-list">
          <li>
            <span className="label">Date:</span>{" "}
            <span>04 April 2025, 10:00 AM</span>
          </li>
          <li>
            <span className="label">Venue:</span> <span>SRM University-AP</span>
          </li>
          <li>
            <span className="label">Registration Deadline:</span>{" "}
            <span>01 April 2025</span>
          </li>
          <li>
            <span className="label">Release of Results:</span>{" "}
            <span>02 April 2025</span>
          </li>
          <li>
            <span className="label">Registration:</span>{" "}
            <span>Free for shortlisted teams</span>
          </li>
          <li>
            <span className="label">Attractions:</span>{" "}
            <span>Attractive cash prizes</span>
          </li>
          <li>
            <span className="label">Refreshments:</span>{" "}
            <span>Complimentary lunch and snacks</span>
          </li>
          <li>
            <span className="label">Opportunities:</span>{" "}
            <span>Internships & Research at SRM University-AP</span>
          </li>
          <li>
            <span className="label">Convenor:</span>{" "}
            <span>Dr. V M Manikandan, Associate Professor in CSE</span>
          </li>
          <li>
            <span className="label">Co-Convenors:</span>
            <span>
              Mr. Shaik Johny Basha, Asst. Professor in CSE
              <br />
              Dr. Shaiju Panchikkil, Asst. Professor in CSE
              <br />
              Dr. Murali Krishna Enduri, Asst. Professor & HoD-CSE
            </span>
          </li>

          <li>
            <span className="label">Registration Link:</span>
            <span>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdsVYpOktJ6c7GQ8E_T01HMpzo2P1vD8382QMhC4QOT8mQ2Zw/viewform?usp=preview"
                target="_blank"
                rel="noreferrer"
              >
                Click here to Register
              </a>
            </span>
          </li>
        </ul>

        <QRWithLogo />
      </div>
    </div>
  );
};

export default DetailsCard;
