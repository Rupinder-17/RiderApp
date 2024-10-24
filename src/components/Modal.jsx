import React, { useState } from "react";

export const Modal = () => {
  const [inputValue, setInputValue] = useState("");
  const [select, setSelect] = useState("");
  const [list, setList] = useState([]);
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState("");
  console.log(list);

  const addValue = () => {
    setModal(true);
    if (edit) {
      setList(
        list?.map((items) =>
          items.id === edit?.id
            ? { ...items, data: inputValue, select: select }
            : items
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
    let itemToEdit = list?.find((elm) => elm.id === id);
    if (itemToEdit) {
      setEdit(itemToEdit);
      setInputValue(itemToEdit.data);
      setSelect(itemToEdit?.select);
    }
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
          className="text-center mt-5 rounded-md bg-cyan-900 text-white px-3 py-2"
        >
          Add Items
        </button>
      </div>

      {modal && (
        <div className="border mt-4   text-center w-[30%] sm:w-[50%] md:w-[20%] lg:w-[30%] bg-slate-200  rounded-xl mx-auto  absolute left-[599px] -top-16">
          <input
            type="text"
            className=" w-96 mt-2 py-2 px-1 rounded-md"
            onChange={(e) => {
              setInputValue(e.target.value.trimStart());
            }}
            value={inputValue}
          />
          <button
            className="bg-cyan-900 text-white px-4 py-1.5 text-xl"
            onClick={addValue}
          >
            {edit ? "Update" : "Add"}
          </button>
          <div className="flex flex-col mt-3 space-y-3">

          <label htmlFor="">
            <input
              type="radio"
              name="catagory"
              id=""
              value="food"
              checked={select === "food"}
              onChange={(e) => {
                setSelect(e.target.value);
              }}
              />
            Food
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="catagory"
              id=""
              value="drink"
              checked={select === "drink"}
              onChange={(e) => {
                setSelect(e.target.value);
              }}
              />
            Drink
          </label>
              </div>

          <div className="text-center py-11">
            <button
              className="bg-cyan-900 text-lg  text-white px-6 py-1 rounded-md"
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
          <h1 className="text-2xl text-center py-2 rounded-lg  bg-cyan-900 text-white">
            Food Item :{FoodItem.length}
          </h1>
          <ul className="px-3">
            {FoodItem?.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex gap-11  even:bg-cyan-800 even:text-white px-2 rounded-md w-full"
                >
                  <p className="w-full  py-2">{item.data}</p>
                  <button onClick={() => handleDelete(item)}>Delete</button>
                  <button
                    onClick={() => {
                      setModal(true);
                      handleEdit(item.id);
                    }}
                  >
                    Edit
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className=" w-[35%]">
          <div className="">
            <h1 className="text-2xl text-center py-2 rounded-lg bg-cyan-900 text-white ">
              Drink Item :{DrinkItem.length}
            </h1>
            <ul className="px-3">
              {DrinkItem?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex  even:bg-cyan-800 even:text-white rounded-md px-2 gap-11 w-full"
                  >
                    <p className="w-full py-2">{item.data}</p>
                    <button onClick={() => handleDelete(item)}>Delete</button>
                    <button
                      onClick={() => {
                        setModal(true);
                        handleEdit(item.id);
                      }}
                    >
                      Edit
                    </button>
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
