import React, { useEffect, useState } from "react";
import { Select } from "antd";
import yaml from "js-yaml";

const { Option } = Select;

const MyComponent = () => {
  const [enumValues, setEnumValues] = useState([]);
  const [selectedValue, setSelectedValue] = useState("Select an option");

  useEffect(() => {
    // Replace this with your YAML content or fetch it from a file or API
    const yamlContent = `
      openapi: 3.0.0
      x-stoplight:
        id: y9lu1wqa4bc0w
      ...
      properties:
        data:
          type: object
          required:
            - id
            - type
            - attributes
          properties:
            id:
              type: string
              format: uuid
            type:
              type: string
              default: applicationForm
            attributes:
              $ref: '#/components/schemas/ApplicationFormAttributes'
      ...
      parameters: {}
    `;

    try {
      // Parse the YAML content
      const parsedYaml = yaml.load(yamlContent);

      // Extract the enum values (modify this part based on your YAML structure)
      const enumValues = extractEnumValues(parsedYaml);

      setEnumValues(enumValues);
    } catch (error) {
      console.error("Error parsing YAML:", error);
    }
  }, []);

  const extractEnumValues = (yamlObject) => {
    // Modify this function to extract enum values based on your YAML structure
    // For example, if enums are nested within properties, you'll need to navigate the object accordingly
    // This is a simplified example assuming enums are at the top level
    const enumValues = [];

    if (yamlObject && typeof yamlObject === "object") {
      for (const key in yamlObject) {
        if (yamlObject.hasOwnProperty(key) && Array.isArray(yamlObject[key])) {
          enumValues.push(...yamlObject[key]);
        }
      }
    }

    return enumValues;
  };

  const handleChange = (value) => {
    setSelectedValue(value);
    // You can handle the selected value here
  };

  return (
    <Select
      value={selectedValue}
      style={{
        width: "100%",
        height: "68px",
        boxSizing: "border-box",
        border: "1px solid #000",
        position: "relative",
        borderRadius: "5px",
      }}
      onChange={handleChange}
    >
      {enumValues.map((value) => (
        <Option key={value} value={value}>
          {value}
        </Option>
      ))}
    </Select>
  );
};

export default MyComponent;
