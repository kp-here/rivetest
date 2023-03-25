import PropTypes from "prop-types";
import React from "react";

const ImagePlaceholder = ({
  className,
  width,
  height,
  children,
  ...otherProps
}) => (
  <div
    style={{ position: "relative", maxWidth: "100%", height: "auto" }}
    className={className}
    {...otherProps}
  >
    <img
      className="w-full"
      style={{ width: "100%" }}
      src={`data:image/svg+xml;charset=utf-8,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E`}
      alt=""
      aria-hidden
    />
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0px",
        left: "0px"
      }}
    >
      {children}
    </div>
  </div>
);

ImagePlaceholder.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
};

ImagePlaceholder.defaultProps = {
  className: null
};

export default ImagePlaceholder;
