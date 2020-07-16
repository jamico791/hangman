import React from 'react'
import Slot from './Slot';

const WordSection = () => {
	return (
		<div className="flex flex-row gap-3 items-center justify-center container mx-auto h-64 bg-red-500">
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot />
		</div>
	)
}

export default WordSection
