import React, { useState, useEffect } from 'react'
import Slot from './Slot'

const WordSection = (props) => {
	const createSlot = (letter, key) => <Slot key={key} letter={letter} />
	const [letters, setLetters] = useState([])

      useEffect(() => {
            const wordArr = props.word.toUpperCase().split("")
            const temp = [...letters]
            for (let i = 0; i < wordArr.length; i++) {
                  temp.push(createSlot(wordArr[i], i))
                  console.log(temp)
            }
            setLetters(temp)
      }, [props.word])

	return (
		<div className="flex flex-row gap-3 items-center justify-center container mx-auto h-64">
			{letters}
		</div>
	)
}

export default WordSection
