import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import WordSection from './components/WordSection'
import Gallows from './components/Gallows'
import LetterBoard from './components/LetterBoard'
import words from './assets/words'

function App() {
	const [word, setWord] = useState('')

	useEffect(() => {
		const num = Math.floor(Math.random() * words.length)
		setWord(words[num])
	}, []);
	return (
		<div className="h-screen flex flex-col">
			<Header />

			<div className="flex-1 flex flex-row">
				<Gallows />
				<LetterBoard />
			</div>

			<WordSection word={word} />
		</div>
	)
}

export default App
