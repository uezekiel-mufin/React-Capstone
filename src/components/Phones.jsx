import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhones } from '../Redux/Slices/brandsFetchSlice';
import Phone from './Phone';
import { setTitle } from '../Redux/Slices/menuSlice';

const Phones = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { phones } = useSelector((state) => state.brands);

  useEffect(() => {
    dispatch(setTitle('Phones'));
    dispatch(fetchPhones(slug));
  }, [slug]);

  if (phones.length < 1) {
    return (
      <h2 className="h-screen animate-pulse text-white flex items-center justify-center text-xl">
        Loading.........
      </h2>
    );
  }

  return (
    <main className="">
      <article className=" homeBg flex flex-col text-white items-end px-4 py-12">
        <h3 className="flex flex-col text-2xl font-semibold items-center">
          <span>
            {phones[0].brand}
            Products
          </span>
        </h3>
        <h4 className="flex gap-2 items-center">
          {phones.length}
          <span>Phones</span>
        </h4>
      </article>
      <h3 className="text-white px-3 py-1 border border-[#e0407d] bg-rose-600 text-xl font-semibold shadow-xl">
        Stats by Phones
      </h3>
      <section className="grid grid-cols-2 w-full justify-center  even: odd:">
        {phones.map((phone) => (
          <Link key={phone.slug} to={`/brands/phones/${phone.slug}`}>
            <section
              aria-hidden="true"
              className="border border-rose-400 w-full h-full"
            >
              <Phone phone={phone} />
            </section>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Phones;
