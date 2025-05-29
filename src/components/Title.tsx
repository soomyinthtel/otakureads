import React from "react";
type TTitle = {
  title: string;
};

const Title = ({ title }: TTitle) => {
  return (
    <h1 className="text-2xl sm:text-4xl md:text-5xl capitalize font-bold border-l-4 rounded-md border-primary pl-3">
      {title}
    </h1>
  );
};

export default Title;
