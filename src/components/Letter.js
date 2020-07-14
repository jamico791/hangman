import React from 'react'

const Letter = props => {
	return (
		<button className="bg-orange-300 font-bold text-2xl">
			{props.letter}
		</button>
	)
}

export default Letter
