import React from "react";
import style from "./styles.module.css";

export interface BoxTitleProps {
  title: string;
  position?: "left" | "right";
  borderColor?: string;
  customeStyle?: string;
}

function BoxTitle({ title, position, borderColor, customeStyle }: BoxTitleProps) {
  const mode = position === "right" ? "right-title" : "left-title";
  const justify = position === "right" ? "justify-end" : "justify-start";

  return (
   <div className={["w-full h-[80px] flex items-center", justify, customeStyle].join(" ")}>
      <div
        className={style[mode]}
        style={{ "--border-color": borderColor } as React.CSSProperties}
      >
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
    </div>
  );
}

export default BoxTitle;