import React, { useState } from "react";

export const Modal = () => {
  const [inputValue, setInputValue] = useState("");
  const [select, setSelect] = useState("");
  const [list, setList] = useState([]);
  const [modal, setModal] = useState(false) 
  const [ edit, setEdit] = useState()
  console.log(list);

  const addValue = () => {
    if (inputValue && select) {
      const newId = Date.now();
      setList([...list, { data: inputValue, select: select, id: newId }]);
      setInputValue("");
    } else {
      alert("please enter both item and select a catagory");
    }
  };
  const handleDelete = (item) => {
    setList(list?.filter((currentItem) => currentItem.id !== item.id));
  };
  const FoodItem = list?.filter((item) => item.select === "food");
  const DrinkItem = list?.filter((item) => item.select === "drink");
  console.log(FoodItem);
  console.log(DrinkItem);

  return (
    <div className="relative">
      <div className="text-center ">
        <button
          onClick={() => {
            setModal(!modal);
          }}
          className="text-center mt-5 bg-cyan-900 text-white px-3 py-2"
        >
          Add Items
        </button>
      </div>

      {modal && (
        <div className="border w-[30%] bg-slate-200 m-auto h-44 absolute left-[620px] -top-16">
          <input
            type="text"
            className="w- bg-red-300"
            onChange={(e) => {
              setInputValue(e.target.value.trimStart());
            }}
            value={inputValue}
          />
          <select
            name=""
            id=""
            className=" bg-slate-400"
            onChange={(e) => {
              setSelect(e.target.value);
            }}
            value={select}
          >
            <option value=""></option>
            <option value="food">Food</option>
            <option value="drink">Drink</option>
          </select>
          <button
            className="bg-cyan-900 text-white px-3 text-xl"
            onClick={addValue}
          >
            Add
          </button>
          <div className="text-center py-11">
            <button
              className="bg-black text-white px-6 py-1 rounded-md"
              onClick={() => {
                setModal(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="flex justify-between ">
        <div className="w-[35%] ">
          <h1 className="text-2xl text-center  bg-cyan-900 text-white">
            Food Item
          </h1>
          <ul className="px-3">
            {FoodItem?.map((item, index) => {
              return (
                <li key={index} className="flex gap-11 w-full">
                  <p className="w-full py-2">{item.data}</p>
                  <button onClick={() => handleDelete(item)}>Delete</button>
                  <button>Edit</button>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h1 className="text-cyan-900 font-semibold text-2xl">
            {" "}
            1 ) Total FoodItems:-
            {list.filter((item) => item.select === "food").length}
          </h1>
          <h1 className="text-cyan-900 font-semibold text-2xl">
            2 ) Total DrinkItems:-
            {list.filter((item) => item.select === "drink").length}
          </h1>
        </div>
        <div className=" w-[35%]">
          <div className="">
            <h1 className="text-2xl text-center bg-cyan-900 text-white ">
              Drink Item
            </h1>
            <ul className="px-3">
              {DrinkItem?.map((item, index) => {
                return (
                  <li key={index} className="flex gap-11 w-full">
                    <p className="w-full py-2">{item.data}</p>
                    <button onClick={() => handleDelete(item)}>Delete</button>
                    <button>Edit</button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
