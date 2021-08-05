import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
/* 
320px — 480px: Mobile devices
481px — 768px: iPads, Tablets
769px — 1024px: Small screens, laptops
1025px — 1200px: Desktops, large screens
1201px and more —  Extra large screens, TV

*/

const mapSize = (size) => {
  if (size <= 480) {
    /*Mobile devices xs*/
    return "xs";
  } else if (size <= 768) {
    /*iPads, Tablets sm*/
    return "sm";
  } else if (size <= 1024) {
    /*laptops md*/
    return "md";
  } else if (size <= 1200) {
    /*Desktops, large screens lg */
    return "lg";
  } else return "";
};
const useViewSize = () => {
  const { width, height } = useWindowDimensions();
  const [widthTag, setWidthTag] = useState(mapSize(width));
  const [heightSize, setHeightSize] = useState(height);
  const [widthSize, setWidthSize] = useState(width);
  useEffect(() => {
    setWidthTag(mapSize(width));
    setWidthSize(width);
  }, [width]);

  useEffect(() => {
    setHeightSize(height);
  }, [height]);

  return [widthTag, heightSize, widthSize];
};
export default useViewSize;
