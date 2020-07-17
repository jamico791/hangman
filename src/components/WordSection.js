import React, { useState, useEffect } from 'react'
import Slot from './Slot'

const WordSection = (props) => {
	const [letters, setLetters] = useState([])

	useEffect(() => {
		const wordArr = props.word.toUpperCase().split('')
		const temp = []
		for (let i = 0; i < wordArr.length; i++) {
			temp.push(
				<Slot
					key={i}
					letter={wordArr[i]}
                              on={props.buttons[wordArr[i]]}
                              outcome={props.outcome}
				/>
			)
		}
		setLetters(temp)
	}, [props.word, props.buttons, props.outcome])

	return (
		<div className="flex flex-row gap-3 items-center justify-center container mx-auto h-64">
			{letters}
			{props.outcome !== 0 && (
				<button
					className="bg-blue-500 text-white text-lg font-bold px-8 py-4 rounded-lg ml-16 hover:bg-blue-400"
					onClick={props.handleReset}
				>
					New Word
				</button>
			)}
		</div>
	)
}

export default WordSection
