import { ChevronDown } from "lucide-react";
import React from "react";

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white z-20 animate-bounce">
      <ChevronDown size={32} />
    </div>
  );
};

export default ScrollIndicator;
