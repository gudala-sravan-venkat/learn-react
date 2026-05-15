import reactLogo from "../images/react.png";

export const Header = () => {
  return (
    <div
      className="d-flex align-items-center gap-2 p-3"
      style={{
        backgroundColor: "#20232a",
        color: "white",
        borderBottom: "2px solid #61dafb",
      }}
    >
      <img
        src={reactLogo}
        alt="React Logo"
        style={{
          width: "40px",
          height: "40px",
        }}
      />

      <h3
        style={{
          margin: 0,
          fontWeight: "lighter",
          letterSpacing: "1px",
        }}
      >
        CONTACT-O-PEDIA
      </h3>
    </div>
  );
};