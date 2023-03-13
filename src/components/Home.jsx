import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../Redux/Slices/movieFetchSlice';
import Brands from './Brands';

function Home() {
  const dispatch = useDispatch();
  const { brands } = useSelector((state) => state.cards);
  console.log(brands);

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  return (
    <main className="App">
      <section>
        {brands.map((brand) => (
          <Brands key={brand.brand_id} brand={brand} />
        ))}
      </section>
    </main>
  );
}

export default Home;
