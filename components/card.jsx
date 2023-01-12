import React from 'react';

export default function Card(props) {
  return (
    <div className='min-h-fit min-w-fit bg-white ring-inset ring-1 flex justify-center items-center text-xl font-normal tracking-tighter'>
      <div>{props.text}</div>
    </div>
  );
}
