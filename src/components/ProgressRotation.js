"use client";
import { useEffect } from "react";
import { Range } from "react-range";

const ProgressRotation = ({ resetValue, currentRotation, updateRotation }) => {
  useEffect(() => {
    updateRotation([0]);
  }, [resetValue]);

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
          min={-180}
          max={180}
          values={currentRotation}
          onChange={(newValues) => updateRotation(newValues)}
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
          {currentRotation}
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
            -180
          </div>
          <div
            style={{
              position: "absolute",
              left: "25%",
              transform: "translateX(-50%)",
            }}
            className="text-[10px] md:text-xs lg:text-sm xl:text-base"
          >
            -90
          </div>
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            className="text-[10px] md:text-xs lg:text-sm xl:text-base"
          >
            0
          </div>
          <div
            style={{
              position: "absolute",
              left: "75%",
              transform: "translateX(-50%)",
            }}
            className="text-[10px] md:text-xs lg:text-sm xl:text-base"
          >
            +90
          </div>
          <div
            style={{
              position: "absolute",
              right: "0",
              transform: "translateX(50%)",
            }}
            className="text-[10px] md:text-xs lg:text-sm xl:text-base"
          >
            +180
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressRotation;
