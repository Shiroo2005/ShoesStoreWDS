import { useState } from "react";
import { Checkbox, Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const FilterSection = ({ title, options }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const onChange = (checkedValues) => {
    setSelectedOptions(checkedValues);
    console.log("Checked values:", checkedValues);
  };

  const handleClear = () => {
    setSelectedOptions([]);
    console.log("Cleared all selections");
  };

  return (
    <div
      style={{
        marginBottom: "30px",
        boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Card
        title={
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{title}</span>
            <DeleteOutlined onClick={handleClear} />
          </div>
        }
        bordered={false}
        style={{
          width: "100%",
        }}
      >
        <Checkbox.Group
          style={{ display: "flex", flexDirection: "column" }}
          options={options}
          value={selectedOptions}
          onChange={onChange}
        />
      </Card>
    </div>
  );
};

export default FilterSection;
