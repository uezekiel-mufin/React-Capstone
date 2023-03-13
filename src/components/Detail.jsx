import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { slug } = useParams();
  console.log(slug);
  return <div>Detail</div>;
};

export default Detail;
