import React, { useState, useEffect } from 'react'
import Slot from './Slot'

const WordSection = (props) => {
	const [letters, setLetters] = useState([])

      useEffect(() => {
            const wordArr = props.word.toUpperCase().split("")
            const temp = []
            for (let i = 0; i < wordArr.length; i++) {
                  temp.push(<Slot key={i} letter={wordArr[i]} on={props.buttons[wordArr[i]]} />)
            }
            setLetters(temp)
      }, [props.word, props.buttons])

	return (
		<div className="flex flex-row gap-3 items-center justify-center container mx-auto h-64">
			{letters}
		</div>
	)
}

export default WordSection
