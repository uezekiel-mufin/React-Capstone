import React from 'react';
import { useSelector } from 'react-redux';
import { MdArrowBackIosNew, MdKeyboardVoice, MdSettings } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const title = useSelector((state) => state.menu.title);
  return (
    <div className="text-white flex justify-between w-full items-center px-3 py-5  flex-1 shadow-2xl border border-solid">
      <span onClick={() => navigate(-1)} aria-hidden="true">
        <MdArrowBackIosNew className="h-5 w-5" />
      </span>
      <h2 className="text-2xl">{title}</h2>
      <div className="flex gap-6">
        <span>
          <MdKeyboardVoice className="h-6 w-6" />
        </span>
        <span>
          <MdSettings className="h-6 w-6" />
        </span>
      </div>
    </div>
  );
};

export default Header;
