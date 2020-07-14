import React from 'react'
import Gallows from './Gallows'
import LetterBoard from './LetterBoard'

const Middle = () => {
	return (
		<div className="flex-1 flex flex-row">
			<Gallows />
			<LetterBoard />
		</div>
	)
}

export default Middle
