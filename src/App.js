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
		A: false,
		B: false,
		C: false,
		D: false,
		E: false,
		F: false,
		G: false,
		H: false,
		I: false,
		J: false,
		K: false,
		L: false,
		M: false,
		N: false,
		O: false,
		P: false,
		Q: false,
		R: false,
		T: false,
		U: false,
		V: false,
		W: false,
		X: false,
		Y: false,
		Z: false,
	})
	const [outcome, setOutcome] = useState(0)

	/* Lifecycle Methods */
	useEffect(() => {
		const num = Math.floor(Math.random() * words.length)
		setWord(words[num])
	}, [])

	useEffect(() => {
		if (person.length >= 6) {
			setOutcome(-1)
		}
	}, [person])

	useEffect(() => {
		const guessed = word
			.split('')
			.filter((letter) => buttons[letter.toUpperCase()])
		if (guessed.length === word.length && word.length > 0) {
			setOutcome(1)
		}
	}, [buttons, word])

	/* Method declarations */
	const handleClick = (event) => {
		event.preventDefault()
		const value = event.target.value
		setButtons((prevButtons) => ({
			...prevButtons,
			[value]: !prevButtons[value],
		}))
		if (!word.includes(value.toLowerCase())) {
			setPerson((prevPerson) => {
				const temp = [...prevPerson]
				temp.push(1)
				return temp
			})
		}
	}

	const handleReset = () => {
		const num = Math.floor(Math.random() * words.length)
		setWord(words[num])
		setPerson([])
		setOutcome(0)
		setButtons((prevButtons) => {
			const temp = { ...prevButtons }
			for (let [key] of Object.entries(temp)) {
				temp[key] = false
			}
			return temp
		})
	}

	return (
		<div className="h-screen flex flex-col">
			<Header />

			<div className="flex-1 flex flex-col sm:flex-row">
				<Gallows person={person} outcome={outcome}/>
				<LetterBoard
					handleClick={handleClick}
					outcome={outcome}
					buttons={buttons}
				/>
			</div>

			<WordSection
				word={word}
				buttons={buttons}
				handleReset={handleReset}
				outcome={outcome}
			/>
		</div>
	)
}

export default App
