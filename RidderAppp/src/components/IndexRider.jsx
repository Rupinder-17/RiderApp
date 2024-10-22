import React, { useEffect, useState } from "react";
import { Modal } from "./Modal";

export const IndexRider = () => {
  const direaction = { East: 0, West: 0, South: 0, North: 0 };
  const [counter, setCounter] = useState(direaction);
  const [count, setCount] = useState(0);
  console.log(counter);
  useEffect(() => {
    setCount(counter.East + counter.North + counter.South + counter.West);
  }, [counter.East + counter.North + counter.South + counter.West]);
  const clearAll = () => {
    setCount("");
  };
  return (
    <div>
      <div>
        <h1 className="bg-cyan-900 text-5xl py-2 text-white text-center ">
          Rider App
        </h1>
      </div>
      <div className="py-11">
        <div className="text-center">
          <h1 className="font-medium text-cyan-800 text-2xl">North</h1>
          <button
            className="bg-cyan-900 py-1 px-2 rounded-sm text-white"
            onClick={() => {
              setCounter({ ...counter, North: counter.North + 5 });
            }}
          >
            {counter.North}km/h
          </button>
        </div>
        <div className="flex  text-center justify-evenly">
          <div>
            <h1 className="font-medium text-cyan-800 text-2xl">East</h1>
            <button
              className="bg-cyan-900 py-1 px-2 rounded-sm text-white"
              onClick={() => {
                setCounter({ ...counter, East: counter.East + 5 });
              }}
            >
              {counter.East}km/h
            </button>
          </div>
          <div>
            <h1 className="font-medium text-cyan-800 text-2xl">west</h1>
            <button
              className="bg-cyan-900 py-1 px-2 rounded-sm text-white"
              onClick={() => {
                setCounter({ ...counter, West: counter.West + 5 });
              }}
            >
              {counter.West}km/h
            </button>
          </div>
        </div>
        <div className="text-center">
          <h1 className="font-medium text-cyan-800 text-2xl">south</h1>
          <button
            className="bg-cyan-900 py-1 px-2 rounded-sm text-white"
            onClick={() => {
              setCounter({ ...counter, South: counter.South + 5 });
            }}
          >
            {counter.South}km/h
          </button>
        </div>
        <div className="text-center mt-14">
          <h2 className="text-cyan-900 font-semibold text-3xl">
            Total distance covered:
          </h2>
          <div className=" mt-6">
            <button className="bg-cyan-900 text-white px-2 py-1 rounded-sm">
              Total: {count}km/h
            </button>
            <button
              className="bg-cyan-900 text-white px-2 py-1 rounded-sm ml-4"
              onClick={clearAll}
            >
              {" "}
              Clear
            </button>
          </div>
        </div>
      </div>
      <div>
        <p className="bg-cyan-900 border border-dashed border-cyan-100  text-white font-semibold text-5xl text-center underline py-3 font-serif">Refreshment Items</p>
      </div>
      <div>
        <Modal/>
      </div>
    </div>
  );
};
