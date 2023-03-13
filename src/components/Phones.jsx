import React from 'react';
import { useParams } from 'react-router-dom';

const Phones = () => {
  const { slug } = useParams();
  console.log(slug);
  return <div>Phones</div>;
};

export default Phones;
