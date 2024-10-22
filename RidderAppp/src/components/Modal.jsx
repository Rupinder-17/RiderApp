import React, { useState } from "react";

export const Modal = () => {
  const [inputValue, setInputValue] = useState("");
  const [select, setSelect] = useState("");
  const [list, setList] = useState([]);
  console.log(list);

  const addValue = () => {
    if(inputValue && select){
    const newId = Date.now();
    setList([...list, { data: inputValue, select: select, id: newId }]);
    setInputValue("");
    }
    else{
      alert("please enter both item and select a catagory")
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
    <div>
      <div className="text-center">
        <input
          type="text"
          className="w-80 bg-slate-300"
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
      </div>
      <div className="flex justify-between ">
        <div className="w-[35%] bg-slate-300">
          <h1 className="text-2xl text-center ">Food Item</h1>
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
        <div className="bg-slate-500 w-[35%]">
          <div className=" bg-slate-300">
            <h1 className="text-2xl text-center ">Drink Item</h1>
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
