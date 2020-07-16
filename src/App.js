import React from 'react'
import Header from './components/Header'
import Middle from './components/Middle'
import WordSection from './components/WordSection'

function App() {
	return (
		<div className="h-screen flex flex-col">
			<Header />
			<Middle />
			<WordSection />
		</div>
	)
}

export default App
