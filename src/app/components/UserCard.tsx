import React from "react";

const UserCard = (props: any) => {
  console.log("");

  return (
    <><div className="flex items-center justify-center flex-col h-screen">

        <div className=" text-3xl mt-2">Props</div>
      <div className="flex items-center flex-col justify-center h-screen">
        <div className=" bg-slate-200 border-2 p-10 h-60 text-center rounded-lg shadow-sm shadow-black">

        <div className="p-2 mb-3">Child Component</div>
        <div>Name: {props.n}</div>
        <div>Profession: {props.p}</div>
        <div>Salary: {props.s}</div>
        </div>
      </div>
    </div>
    </>
  );
};

export default UserCard;
