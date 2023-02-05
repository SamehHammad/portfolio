import React from 'react'
import pdf from '../assets/Sameh Hammad_CV.pdf';

const Button = () => {
  return (
    <>
      <a
        className="border-4 px-4 py-3 mt-4 font-bold text-xl rounded-2xl hover:text-yellow hover:border-yellow-400  "
        href={pdf}
        download
      >
        My Reasum
      </a>
    </>
  );
}

export default Button