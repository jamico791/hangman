import React from 'react'

const Letter = props => {
	return (
		<button className="bg-orange-400 hover:bg-orange-300 font-bold text-2xl rounded-full focus:outline-none">
			{props.letter}
		</button>
	)
}

export default Letter
