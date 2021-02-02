import React from "react";
import { ThemeProps } from "../Icon/icon";
export interface ProgressProps {
  percent: number;
  strokeHeight?: number;
  showText?: boolean;
  styles?: React.CSSProperties;
  theme?: ThemeProps;
}

const Progress: React.FC<ProgressProps> = ({
  percent,
  strokeHeight,
  showText,
  styles,
  theme,
}) => {
  return (
    <div className="lv-progress-bar" style={styles}>
      <div
        className="lv-progress-bar-outer"
        style={{ height: `${strokeHeight}px` }}
      >
        <div
          className={`lv-progress-bar-inner color-${theme}`}
          style={{ width: `${percent}%` }}
        >
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  );
};

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: "primary",
};

export default Progress;
