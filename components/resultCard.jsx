import React from "react";

export default function ResultCard(props) {
  return (
    <a
      key={props.id}
      href={props.url}
      className="text-md mx-3 shadow-lg border-none rounded-xl text-center items-center bg-white h-20 justify-between"
    >
      <div className="flex flex-row justify-between p-6 bg-white h-full rounded-xl text-center">
        {props.image != undefined && <img>{props.image}</img>}
        <h1>{props.title}</h1>
        <p>{props.bio}</p>
        <p>{props.image}</p>
      </div>
    </a>
  );
}
