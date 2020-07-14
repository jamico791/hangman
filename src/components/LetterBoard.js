import React from 'react'
import Letter from './Letter'

const LetterBoard = () => {
	const createLetter = letter => <Letter letter={letter} />

	return (
		<div className="flex-1 bg-blue-300 grid grid-cols-8 gap-8">
			{createLetter('A')}
			{createLetter('B')}
			{createLetter('C')}
			{createLetter('D')}
			{createLetter('E')}
			{createLetter('F')}
			{createLetter('G')}
			{createLetter('H')}
			{createLetter('I')}
			{createLetter('J')}
			{createLetter('K')}
			{createLetter('L')}
			{createLetter('M')}
			{createLetter('N')}
			{createLetter('O')}
			{createLetter('P')}
			{createLetter('Q')}
			{createLetter('R')}
			{createLetter('S')}
			{createLetter('T')}
			{createLetter('U')}
			{createLetter('V')}
			{createLetter('W')}
			{createLetter('X')}
			{createLetter('Y')}
			{createLetter('Z')}
		</div>
	)
}

export default LetterBoard
