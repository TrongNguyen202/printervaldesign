import React, { useEffect, useRef } from "react";
import { fabric } from "fabric";
import Resource from "./Resource";
import { useFabricJSEditor } from 'fabricjs-react';




const ContainerDesign = () => {
  const canvasRef = useRef(null);
  const { selectedObjects, editor, onReady } = useFabricJSEditor();
  useEffect(() => {
    fabric.Image.fromURL('https://canifa.com/img/1000/1500/resize/6/t/6ts23s019-sk010-m-1.webp', function (oImg) {
      editor?.canvas.add(oImg);
    });
  }, [fabric, editor])

  const onClickAddText = () => {
    const canvas = canvasRef.current;

    const sampleText = new fabric.Textbox("Your Text Here", {
      left: 50,
      top: 50,
      fill: "red",
      fontSize: 20,
      fontFamily: "Arial",
      selectable: true,
      hasControls: true,
    });

    canvas.add(sampleText);
    
    // Register an event listener for the text object
    sampleText.on("selected", () => {
      canvas.setActiveObject(sampleText);
    });

    canvas.setActiveObject(sampleText);
    canvas.renderAll();
  };

  return (
    <div className="flex flex-row-reverse bg-white">
      <div className="container">
        <div id="designCanvasContainer">
          <canvas id="designCanvas"></canvas>
        </div>
      </div>
      <div className="bg-red-200">
        <Resource onClickAddText={onClickAddText} />
      </div>
    </div>
  );
};

export default ContainerDesign;
