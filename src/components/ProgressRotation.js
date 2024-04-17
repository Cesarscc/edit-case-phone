import React, { useState, useEffect } from "react";
import { Range } from "react-range";

const ProgressRotation = ({ selectedImage, rotations, setRotations }) => {
  const [values, setValues] = useState([0]);

  useEffect(() => {
    if (selectedImage == 1) {
      setRotations([...values, rotations[1]]);
    }
    if (selectedImage == 2) {
      setRotations([rotations[0], ...values]);
    }
  }, [values]);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <div style={{ width: "350px", position: "relative" }}>
        <Range
          step={1}
          min={-180}
          max={180}
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
                height: "20px",
                width: "20px",
                borderRadius: "50%",
                backgroundColor: "#000",
                boxShadow: "0px 2px 6px #aaa",
              }}
            />
          )}
        />
        <output
          style={{ marginTop: "20px", textAlign: "center", fontSize: "20px" }}
        >
          {values[0]}
        </output>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "0",
              transform: "translateX(-50%)",
            }}
          >
            -180
          </div>
          <div
            style={{
              position: "absolute",
              left: "25%",
              transform: "translateX(-50%)",
            }}
          >
            -90
          </div>
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            0
          </div>
          <div
            style={{
              position: "absolute",
              left: "75%",
              transform: "translateX(-50%)",
            }}
          >
            +90
          </div>
          <div
            style={{
              position: "absolute",
              right: "0",
              transform: "translateX(50%)",
            }}
          >
            +180
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressRotation;
