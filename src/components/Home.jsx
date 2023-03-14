import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBrands } from '../Redux/Slices/brandsFetchSlice';
import { setTitle } from '../Redux/Slices/menuSlice';
import Brands from './Brands';

function Home() {
  const dispatch = useDispatch();
  const { brands } = useSelector((state) => state.brands);

  useEffect(() => {
    dispatch(fetchBrands());
    dispatch(setTitle('Brands'));
  }, []);

  const handleBrandClick = (link) => {
    dispatch(fetchBrands(link));
  };

  if (brands.length < 1) {
    return <h2>Loading........</h2>;
  }
  return (
    <main className="">
      <article className=" homeBg flex  flex-col text-white items-end p-8">
        <h3 className="flex flex-col text-2xl font-bold items-end">
          2023
          <span>Phone Specs</span>
        </h3>
        <h4 className="flex flex-col items-center">
          {`${brands.length}
          Brands`}
        </h4>
      </article>
      <h3 className="text-white px-3 py-1 border bg-rose-500 border-[#e0407d] text-xl shadow-xl">
        All Brands Stats
      </h3>
      <div className="flex w-full px-4 py-3 border-rose-500 border bg-rose-600 text-rose-200 font-semibold">
        <h3 className="flex flex-col text-xl flex-1 justify-between items-center">
          {brands.length}
          <span className="text-sm"> Brands</span>
        </h3>
        <h3 className="flex flex-col text-xl flex-1 justify-between items-center">
          {brands.length * 33}
          <span className="text-sm">Views</span>
        </h3>
        <h3 className="flex flex-col text-xl flex-1 justify-between items-center">
          {brands.length * 234}
          <span className="text-sm">Likes</span>
        </h3>
        <h3 className="flex flex-col text-xl flex-1 justify-between items-center">
          {brands.length * 223}
          <span className="text-sm">Orders</span>
        </h3>
      </div>
      <section className="cards grid grid-cols-2 w-full justify-center items-center">
        {brands.map((brand) => (
          <Link key={brand.brand_id} to={`/brands/${brand.brand_slug}`}>
            <section
              onClick={() => handleBrandClick(brand.details)}
              aria-hidden="true"
              className="border border-rose-400"
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
