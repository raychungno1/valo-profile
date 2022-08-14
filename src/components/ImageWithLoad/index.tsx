import { Skeleton } from "@mui/material";
import React, { useState } from "react";

interface IProps {
  img?: string;
  width: number | string;
  height: number | string;
  variant: "text" | "rectangular" | "rounded" | "circular" | undefined;
  className: string;
}

const ImageWithLoad = ({ img, width, height, variant, className }: IProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <div
      className="relative"
      style={{ width: width, height: height }}
    >
      {loading && (
        <div className="absolute">
          <Skeleton
            width={width}
            height={height}
            variant={variant}
            sx={{ bgcolor: "grey.600" }}
            animation="wave"
          />
        </div>
      )}
      <img
        src={img}
        alt=""
        className={className}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default ImageWithLoad;
