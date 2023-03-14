/* eslint-disable valid-typeof */
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { HiArrowCircleRight } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchPhoneDetails,
  setPhoneSpecs,
} from '../Redux/Slices/brandsFetchSlice';
import { setTitle } from '../Redux/Slices/menuSlice';

const Detail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { details } = useSelector((state) => state.brands);

  useEffect(() => {
    dispatch(setTitle('Details'));
    dispatch(fetchPhoneDetails(slug));
  }, [slug]);

  if (!details.brand) {
    return <h2>Loading........</h2>;
  }

  const handleSpecification = () => {
    dispatch(
      setPhoneSpecs({ ...details.specifications, image: details.thumbnail }),
    );
  };
  return (
    <main className="pb-16">
      <article className=" flex text-white items-center justify-between px-8 py-12">
        <img
          src={
            details.thumbnail
            || '/src/assets/rahul-chakraborty-xsGxhtAsfSA-unsplash (1).jpg'
          }
          alt=""
          className="rounded-lg h-40"
        />
        <div>
          <h3 className="flex flex-col text-2xl font-semibold items-center">
            <span>{details.phone_name}</span>
          </h3>
          <h4 className="flex flex-col font-semibold items-center">
            {details.specifications.length}
            <span>Specifications</span>
          </h4>
        </div>
      </article>
      <h3 className="text-white px-3 py-2 text-lg font-semibold border border-[#e0407d] bg-rose-700 shadow-xl">
        {`${details.phone_name} Specs Breakdown`}
      </h3>
      <section>
        <ul className="">
          {Object.entries(details).map((item, i) => (
            <Link
              to={`/brands/phones/details/${slug}/${details.phone_name}`}
              key={item[0]}
            >
              <li
                className={`grid grid-cols-6 justify-between border-rose-700 border px-2 py-3 text-white ${
                  i % 2 === 0 ? 'bg-rose-500' : 'bg-rose-600'
                }`}
              >
                <h3 className="capitalize text-lg col-span-2">{item[0]}</h3>
                {item[0] !== 'phone_images' && item[0] !== 'thumbnail' ? (
                  <h3
                    className="capitalize col-span-4 text-end"
                    onClick={() => handleSpecification(details.slug)}
                    aria-hidden="true"
                  >
                    {item[0] === 'specifications' ? (
                      <p className="flex items-center gap-2 col-span-4 justify-end">
                        {`${item[1].length} specs`}
                        <HiArrowCircleRight className="h-6 w-6" />
                      </p>
                    ) : (
                      item[1]
                    )}
                  </h3>
                ) : (
                  <div className="col-span-4 flex justify-end">
                    <img
                      src={item[0] === 'thumbnail' ? item[1] : item[1][1]}
                      className="h-8 w-8 rounded-full "
                      alt=""
                    />
                  </div>
                )}
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Detail;
