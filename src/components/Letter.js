import React from 'react';

const Letter = (props) => {
  if (
    props.buttons[props.letter] ||
    props.outcome === 1 ||
    props.outcome === -1
  ) {
    return (
      <div className="h-16 w-16 flex items-center justify-center rounded-md border-2">
        <p className="text-red-500 font-bold">{props.letter}</p>
      </div>
    );
  }

  return (
    <button
      className="bg-orange-400 hover:bg-orange-300 h-16 w-16 font-bold rounded-md focus:outline-none"
      value={props.letter}
      onClick={props.handleClick}
    >
      {props.letter}
    </button>
  );
};

export default Letter;
