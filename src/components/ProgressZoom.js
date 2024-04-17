import React, { useState, useEffect } from "react";
import { Range } from "react-range";

const ProgressZoom = ({ selectedImage, zooms, setZooms }) => {
  const [values, setValues] = useState([100]);

  useEffect(() => {
    if (selectedImage == 1) {
      setZooms([...values, zooms[1]]);
    }
    if (selectedImage == 2) {
      setZooms([zooms[0], ...values]);
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
          style={{ marginTop: "20px", textAlign: "center" }}
          className="text-[10px] md:text-xs lg:text-sm xl:text-base"
        >
          {values[0]}
        </output>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "0px",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "0",
              transform: "translateX(-50%)",
            }}
            className="text-[10px] md:text-xs lg:text-sm xl:text-base"
          >
            0
          </div>
          <div
            style={{
              position: "absolute",
              left: "25%",
              transform: "translateX(-50%)",
            }}
            className="text-[10px] md:text-xs lg:text-sm xl:text-base"
          >
            50
          </div>
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            className="text-[10px] md:text-xs lg:text-sm xl:text-base"
          >
            100
          </div>
          <div
            style={{
              position: "absolute",
              left: "75%",
              transform: "translateX(-50%)",
            }}
            className="text-[10px] md:text-xs lg:text-sm xl:text-base"
          >
            150
          </div>
          <div
            style={{
              position: "absolute",
              right: "0",
              transform: "translateX(50%)",
            }}
            className="text-[10px] md:text-xs lg:text-sm xl:text-base"
          >
            200
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressZoom;
