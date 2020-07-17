import React from 'react'

const Slot = (props) => {
	return (
		<div className="flex flex-col items-center">
			<h1 className="text-6xl h-20">{(props.on || props.outcome === -1) && props.letter}</h1>
			<div className="bg-black w-12 h-1"></div>
		</div>
	)
}

export default Slot
