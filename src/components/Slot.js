import React, { useState } from 'react'

const Slot = (props) => {
	const [on, setOn] = useState(false)
	return (
		<div className="flex flex-col">
			<h1 className="text-6xl h-20">{on && props.letter}</h1>
			<div className="bg-black w-12 h-1"></div>
		</div>
	)
}

export default Slot
