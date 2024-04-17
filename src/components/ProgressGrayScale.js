import React, { useState, useEffect } from "react";
import { Range } from "react-range";

const ProgressGrayScale = ({
  selectedImage,
  valueGrayScale,
  setValueGrayScale,
}) => {
  const [values, setValues] = useState([0]);

  useEffect(() => {
    if (selectedImage == 1) {
      setValueGrayScale([...values, valueGrayScale[1]]);
    }
    if (selectedImage == 2) {
      setValueGrayScale([valueGrayScale[0], ...values]);
    }
  }, [values]);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
    >
      <div
        className="w-[150px] sm:w-[210px] md:w-[150px] lg:w-[200px] xl:w-[300px] 2xl:w-[350px]"
        style={{ position: "relative" }}
      >
        <Range
          step={1}
          min={0}
          max={200}
          values={values}
          onChange={(newValues) => setValues(newValues)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "6px",
                width: "100%",
                backgroundColor: "#ccc",
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              key={props.key}
              style={{
                ...props.style,
                height: "15px",
                width: "15px",
                borderRadius: "50%",
                backgroundColor: "#000",
                boxShadow: "0px 2px 6px #aaa",
              }}
            />
          )}
        />
        <output
          style={{ marginTop: "20px", textAlign: "center" }}
          className="text-[10px] md:text-xs lg:text-sm xl:text-base"
        >
          {values[0]}
        </output>
      </div>
    </div>
  );
};

export default ProgressGrayScale;
