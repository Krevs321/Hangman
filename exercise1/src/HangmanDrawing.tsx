import React from "react";

const head = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  ></div>
);

const body = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: 0,
    }}
  ></div>
);

const rightArm = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "65px",
      right: 0,
      rotate: "45deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);

const leftArm = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "65px",
      right: 0,
      rotate: "-45deg",
      transformOrigin: "right bottom",
    }}
  ></div>
);

const rightLeg = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: 0,
      rotate: "150deg",
      transformOrigin: " bottom",
    }}
  ></div>
);

const leftLeg = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: 0,
      rotate: "-150deg",
      transformOrigin: " bottom",
    }}
  ></div>
);

const HangmanDrawing = () => {
  return (
    <div style={{ position: "relative" }}>
      {head}
      {body}
      {rightArm}
      {leftArm}
      {rightLeg}
      {leftLeg}
      <div
        style={{
          height: "50px",
          width: "10px",
          top: 0,
          right: 0,
          position: "absolute",
          background: "black",
        }}
      ></div>
      <div
        style={{
          height: "10px",
          width: "200px",
          marginLeft: "120px",
          background: "black",
        }}
      ></div>
      <div
        style={{
          height: "500px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{ height: "10px", width: "250px", background: "black" }}
      ></div>

      <div
        style={{
          alignItems: "center",
          marginTop: "100px",
          width: "50px",
          height: "10px",
          background: "black",
        }}
      ></div>
    </div>
  );
};

export default HangmanDrawing;
