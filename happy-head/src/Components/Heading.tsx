import React from 'react';
import { HeadingProps } from '../lib/type';



const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <h1 className="text-3xl font-extrabold text-center text-primary mb-5">
      {text}
    </h1>
  );
};

export default Heading;
