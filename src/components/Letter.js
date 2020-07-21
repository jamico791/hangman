import React from 'react'

const Letter = (props) => {
	if (props.buttons[props.letter] || props.outcome === 1 || props.outcome === -1) {
		return (
			<div className="h-8 w-8 xl:h-20 xl:w-20 flex items-center justify-center rounded-sm xl:rounded-lg border-2 xl:border-4">
				<p className="text-red-500 font-bold xl:text-5xl">
					{props.letter}
				</p>
			</div>
		)
	}

	return (
		<button
			className="bg-orange-400 hover:bg-orange-300 h-8 w-8 xl:h-20 xl:w-20 font-bold xl:text-5xl rounded-sm xl:rounded-lg focus:outline-none"
			value={props.letter}
			onClick={props.handleClick}
		>
			{props.letter}
		</button>
	)
}

export default Letter
