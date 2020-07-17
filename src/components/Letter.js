import React from 'react'

const Letter = (props) => {

	if (props.buttons[props.letter]) {
		return <div className="h-24 w-24"></div>
	}

	return (
		<button 
			className="bg-orange-400 hover:bg-orange-300 h-24 w-24 font-bold text-5xl rounded-lg focus:outline-none"
			value={props.letter}
			onClick={props.handleClick}
		>
			{props.letter}
		</button>
	)
}

export default Letter
