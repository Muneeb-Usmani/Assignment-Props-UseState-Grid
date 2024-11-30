"use client";
import React, { useState } from "react";

const State = () => {
  const [counter, setCounter] = useState(0);

  const handleOnInc = () => {
    setCounter(counter + 1);
  };
  const handleOnDec = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const handleOnRes = () => {
    setCounter(0);
  };

  return (
    <>
      <div className="bg-zinc-900 h-screen">
        <div className="flex justify-center flex-col items-center">
          <div className="text-center text-3xl text-white mt-2">Use State</div>
          <div className=" text-white text-4xl">Counter App</div>
          <div>
            <button
              className="bg-inherit border border-gray-500 text-white px-6 py-3 rounded-full text-3xl font-thin hover:border-white mt-5"
              onClick={() => handleOnRes()}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center bg-zinc-900 mx-10">
          <div>
            <button
              className="bg-inherit border border-gray-500 text-white px-6 py-3 rounded-full text-3xl font-thin hover:border-white text-center w-15"
              onClick={() => handleOnDec()}
            >
              -
            </button>
          </div>
          <div>
            <h1 className="text-white text-[15rem] font-thin">{counter}</h1>
          </div>
          <div>
            <button
              className="bg-inherit border border-gray-500 text-white px-6 py-3 rounded-full text-3xl font-thin hover:border-white max-w-16 text-center"
              onClick={() => handleOnInc()}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default State;
