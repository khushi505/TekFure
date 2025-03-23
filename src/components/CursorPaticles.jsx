import React, { useEffect, useRef, useState } from "react";

const GreenParticlesCursor = () => {
  const cursorRef = useRef(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;

        createParticle(e.clientX, e.clientY);
      }
    };

    const handleMouseDown = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = "translate(-50%, -50%) scale(0.8)";

        // Create a burst of particles on click
        for (let i = 0; i < 10; i++) {
          setTimeout(() => {
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 40 + 10;
            const x = e.clientX + Math.cos(angle) * distance;
            const y = e.clientY + Math.sin(angle) * distance;
            createParticle(x, y, true);
          }, i * 30);
        }
      }
    };

    const handleMouseUp = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = "translate(-50%, -50%) scale(1)";
      }
    };

    const createParticle = (x, y, isClickParticle = false) => {
      const id = Date.now().toString() + Math.random().toString();
      const offsetX = (Math.random() - 0.5) * 10;
      const offsetY = (Math.random() - 0.5) * 10;
      const baseSize = isClickParticle ? 10 : 6;
      const size = Math.random() * baseSize + baseSize;
      const greenIntensity = Math.floor(Math.random() * 50) + 205; // 205-255
      const redBlueIntensity = Math.floor(Math.random() * 30) + 30; // 30-60

      setParticles((prevParticles) => [
        ...prevParticles,
        {
          id,
          x: x + offsetX,
          y: y + offsetY,
          size,
          color: `rgb(${redBlueIntensity}, ${greenIntensity}, ${redBlueIntensity})`,
        },
      ]);

      // Remove particle after animation completes
      setTimeout(() => {
        setParticles((prevParticles) =>
          prevParticles.filter((particle) => particle.id !== id)
        );
      }, 1000);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Use a portal to render particles at the root level */}
      <div
        id="cursor-container"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 10000, // Extremely high z-index to stay above everything
        }}
      >
        <div
          ref={cursorRef}
          className="cursor"
          style={{
            position: "fixed",
            width: "20px",
            height: "20px",
            border: "2px solid rgba(120, 255, 120, 0.8)",
            borderRadius: "50%",
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            zIndex: 10001, // Higher than the container
            boxShadow: "0 0 10px rgba(120, 255, 120, 0.5)",
            transition: "transform 0.1s ease",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "6px",
              height: "6px",
              background: "#7fff7f",
              borderRadius: "50%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>

        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              position: "fixed", // Changed from absolute to fixed
              background: particle.color,
              borderRadius: "50%",
              pointerEvents: "none",
              opacity: 0.8,
              boxShadow: `0 0 6px ${particle.color}`,
              animation: "fadeOut 1s ease-out forwards",
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              zIndex: 10000, // Extremely high z-index
            }}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes fadeOut {
          0% {
            opacity: 0.8;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.3);
          }
        }

        /* Hide default cursor */
        html,
        body {
          cursor: none !important;
        }

        /* Make sure all elements use the custom cursor */
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};

export default GreenParticlesCursor;
