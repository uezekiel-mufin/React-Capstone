import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBrands } from '../Redux/Slices/movieFetchSlice';
import Brands from './Brands';

function Home() {
  const dispatch = useDispatch();
  const { brands } = useSelector((state) => state.cards);
  console.log(brands);

  useEffect(() => {
    dispatch(fetchBrands());
  }, []);

  const handleBrandClick = (link) => {
    dispatch(fetchBrands(link));
  };
  return (
    <main className="">
      <article className=" homeBg flex flex-col text-white items-end p-4">
        <h3 className="flex flex-col items-center">
          2023
          <span>Phone Specs</span>
        </h3>
        <h4 className="flex flex-col items-center">
          1.563
          <span>likes/views</span>
        </h4>
      </article>
      <h3 className="text-white px-3 py-1 border border-[#e0407d] bg-[#d12e6c] shadow-xl">
        All Brands Stats
      </h3>
      <div className="flex w-full px-4 py-5 text-white">
        <h3 className="flex flex-col text-xl flex-1 justify-between items-center">
          {brands.length}
          <span className="text-sm"> Brands</span>
        </h3>
        <h3 className="flex flex-col text-xl flex-1 justify-between items-center">
          {brands.length}
          <span className="text-sm">Views</span>
        </h3>
        <h3 className="flex flex-col text-xl flex-1 justify-between items-center">
          {brands.length}
          <span className="text-sm">Likes</span>
        </h3>
        <h3 className="flex flex-col text-xl flex-1 justify-between items-center">
          {brands.length}
          <span className="text-sm">Comments</span>
        </h3>
      </div>
      <section className="grid grid-cols-2 w-full justify-center items-center even: odd:">
        {brands.map((brand, index) => (
          <Link key={brand.brand_id} to={`/brands/${brand.brand_slug}`}>
            <section
              className={`cursor-pointer ${index % 2 === 0 && 'bg-[#bc2962]'} ${
                index % 3 === 0 && 'bg-[#a72557]'
              } ${index % 4 === 0 && 'bg-[#f785b1]'} ${
                index % 7 === 0 && 'bg-[#a72557]'
              } `}
              onClick={() => handleBrandClick(brand.details)}
              aria-hidden="true"
            >
              <Brands brand={brand} />
            </section>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Home;
