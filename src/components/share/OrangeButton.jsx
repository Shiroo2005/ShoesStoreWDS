import { Button } from "antd";

const OrangeButton = ({ label }) => {
  return (
    <Button
      style={{
        background: "#ff9f0a",
        color: "#fff",
        width: "100%",
        height: "50px",
        fontSize: "20px",
      }}
    >
      {label}
    </Button>
  );
};

export default OrangeButton;
