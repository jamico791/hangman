import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import WordSection from './components/WordSection'
import Gallows from './components/Gallows'
import LetterBoard from './components/LetterBoard'
import words from './assets/words'

function App() {
	/* State Declarations */
	const [word, setWord] = useState('')
	const [person, setPerson] = useState([])
	const [buttons, setButtons] = useState({
		'A': false,
		'B': false,
		'C': false,
		'D': false,
		'E': false,
		'F': false,
		'G': false,
		'H': false,
		'I': false,
		'J': false,
		'K': false,
		'L': false,
		'M': false,
		'N': false,
		'O': false,
		'P': false,
		'Q': false,
		'R': false,
		'T': false,
		'U': false,
		'V': false,
		'W': false,
		'X': false,
		'Y': false,
		'Z': false
	});
	const [outcome, setOutcome] = useState(0);

	/* Lifecycle Methods */
	useEffect(() => {
		const num = Math.floor(Math.random() * words.length)
		setWord(words[num])
	}, []);

	/* Method declarations */
	const handleClick = (event) => {
		event.preventDefault()
		const value = event.target.value
		setButtons(prevButtons => ({
			...prevButtons,
			[value]: !prevButtons[value]
		}))	
		if (!word.includes(value.toLowerCase())) {
			setPerson(prevPerson => {
				const temp = [...prevPerson]
				temp.push(1)
				return temp
			})
		}	
	}

	return (
		<div className="h-screen flex flex-col">
			<Header />

			<div className="flex-1 flex flex-row">
				<Gallows person={person}/>
				<LetterBoard handleClick={handleClick} buttons={buttons}/>
			</div>

			<WordSection word={word} buttons={buttons}/>
		</div>
	)
}

export default App
