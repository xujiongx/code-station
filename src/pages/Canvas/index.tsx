import React, { LegacyRef, useEffect, useRef } from "react";

export function Canvas() {
  const canvas = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    draw();
  }, []);

  function draw() {
    //canvas元素
    var c = canvas.current;
    //context对象
    var ctx = c?.getContext("2d") as CanvasRenderingContext2D;
    ctx.beginPath();
    //①定义样式
    ctx.strokeStyle = "green"; //颜色
    ctx.lineWidth = 20; //线宽
    ctx.lineCap = "square"; //端点
    ctx.lineJoin = "round"; //拐点
    //②定义路径
    ctx.moveTo(50, 50); //起点
    ctx.lineTo(100, 100); //拐点
    ctx.lineTo(50, 200); //终点
    ctx.closePath(); //闭合
    //③绘制
    ctx.stroke();
  }
  return (
    <canvas ref={canvas} width="400" height="400">
      Your browser does not support the canvas element.
    </canvas>
  );
}
