import React from 'react';
import { useParams } from 'react-router-dom';

const Specs = () => {
  const { slug } = useParams();
  console.log(slug);
  return <div>Specs</div>;
};

export default Specs;
