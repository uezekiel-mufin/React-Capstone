import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setTitle } from '../Redux/Slices/menuSlice';

const Specs = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { specs } = useSelector((state) => state.brands);

  useEffect(() => {
    dispatch(setTitle('Specifications'));
  }, []);

  if (!specs) {
    return (
      <h2 className="h-screen animate-pulse text-white flex items-center justify-center text-xl">
        Loading.........
      </h2>
    );
  }
  return (
    <main className="">
      <article className="flex text-white items-center justify-between px-8 py-12">
        <img src={specs.image} alt="" className="rounded-lg h-40" />
        <div>
          <h3 className="flex flex-col items-center">
            <span className="text-2xl text-center font-bold">{name}</span>
          </h3>
          <h4 className="flex justify-center gap-2  tracking-widest items-center">
            {Object.entries(specs).length - 1}
            <span>Specs</span>
          </h4>
        </div>
      </article>
      {Object.entries(specs).map((spec, i) => (
        <li
          key={spec[0]}
          className={`flex justify-between border-rose-700 border px-2 py-3 text-white ${
            i % 2 === 0 ? 'bg-rose-500' : 'bg-rose-600'
          }`}
        >
          {spec[0] !== 'image' ? (
            <div className="grid grid-cols-6 gap-4 ">
              <span className="col-span-2 text-lg">{spec[1].title}</span>
              <span className="col-span-4 divide-x-2 text-end space-x-3">
                {spec[1].specs.map((spec) => (
                  <span key={spec.key} className="pl-2 text-end">
                    {spec.val.map((item) => (
                      <span key={item} className="text-end">
                        {item}
                      </span>
                    ))}
                  </span>
                ))}
              </span>
            </div>
          ) : (
            ''
          )}
        </li>
      ))}
    </main>
  );
};

export default Specs;
