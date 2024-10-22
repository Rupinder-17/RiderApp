import React, { useState } from "react";

export const Modal = () => {
  const [inputValue, setInputValue] = useState("");
  const [select, setSelect] = useState("");
  const [list, setList] = useState([]);
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState("");
  console.log(list);

  const addValue = () => {
    if (edit) {
      setList(
        list?.map((items) =>
          items.id === edit?.id ? { ...items, data: inputValue } : items
        )
      );
      setInputValue("");
      setEdit(false);
    } else {
      const newId = Date.now();
      setList([...list, { data: inputValue, select: select, id: newId }]);
      setInputValue("");
    }
  };
  const handleDelete = (item) => {
    setList(list?.filter((currentItem) => currentItem.id !== item.id));
  };
  const handleEdit = (id) => {
    list?.map((elm) => {
      if (elm.id === id) {
        setEdit(elm);
        setInputValue(elm?.data);
        setSelect(elm?.select);
        return { ...elm, data: inputValue };
      }
    });
  };

  const FoodItem = list?.filter((item) => item.select === "food");
  const DrinkItem = list?.filter((item) => item.select === "drink");

  return (
    <div className="relative container mx-auto p-4">
      <div className="text-center ">
        <button
          onClick={() => setModal(!modal)}
          className="mt-5 bg-cyan-900 text-white px-3 py-2 rounded-lg"
        >
          Add Items
        </button>
      </div>

      {modal && (
        <div className="border w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] bg-slate-200 mx-auto p-4 mt-5 rounded-lg">
          <input
            type="text"
            className="w-full bg-red-300 p-2 mb-2 rounded-md"
            onChange={(e) => setInputValue(e.target.value.trimStart())}
            value={inputValue}
          />
          <select
            className="w-full bg-slate-400 p-2 mb-2 rounded-md"
            onChange={(e) => setSelect(e.target.value)}
            value={select}
          >
            <option value=""></option>
            <option value="food">Food</option>
            <option value="drink">Drink</option>
          </select>
          <button
            className="bg-cyan-900 text-white px-3 py-2 w-full rounded-lg"
            onClick={addValue}
          >
            {edit ? "Update" : "Add"}
          </button>
          <div className="text-center mt-4">
            <button
              className="bg-black text-white px-6 py-2 rounded-md"
              onClick={() => setModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row justify-between mt-6 space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="lg:w-[40%]">
          <h1 className="text-2xl text-center bg-cyan-900 text-white py-2 rounded-lg">
            Food Items
          </h1>
          <ul className="px-3">
            {FoodItem?.map((item, index) => (
              <li key={index} className="flex justify-between py-2">
                <p>{item.data}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleDelete(item)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      setModal(true);
                      handleEdit(item.id);
                    }}
                    className="text-blue-600"
                  >
                    Edit
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-[20%] text-center">
          <h1 className="text-cyan-900 font-semibold text-xl lg:text-2xl">
            Total Food Items: {FoodItem.length}
          </h1>
          <h1 className="text-cyan-900 font-semibold text-xl lg:text-2xl">
            Total Drink Items: {DrinkItem.length}
          </h1>
        </div>

        <div className="lg:w-[40%]">
          <h1 className="text-2xl text-center bg-cyan-900 text-white py-2 rounded-lg">
            Drink Items
          </h1>
          <ul className="px-3">
            {DrinkItem?.map((item, index) => (
              <li key={index} className="flex justify-between py-2">
                <p>{item.data}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleDelete(item)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      setModal(true);
                      handleEdit(item.id);
                    }}
                    className="text-blue-600"
                  >
                    Edit
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
