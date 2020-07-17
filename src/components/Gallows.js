import React from 'react'

const Gallows = (props) => {
	return (
		<div className="flex-1 relative flex items-center justify-center bg-blue-500 ">
			<div className="bg-black w-96 h-2 absolute mt-80"></div>
			<div className="bg-black w-2 h-80 absolute"></div>
			<div className="bg-black w-40 h-2 absolute ml-40 mb-78"></div>
			<div className="bg-black w-2 h-16 absolute ml-80 mb-64"></div>
			{props.person.length >= 1 && <div className="bg-gray-500 absolute w-16 h-16 ml-80 mb-32 rounded-full"></div>}
			{props.person.length >= 2 && <div className="bg-gray-500 absolute w-3 h-32 ml-80"></div>}
			{props.person.length >= 3 && <div className="bg-gray-500 absolute transform rotate-45 w-3 h-16 ml-68 mt-2"></div>}
			{props.person.length >= 4 && <div className="bg-gray-500 absolute transform -rotate-45 w-3 h-16 ml-92 mt-2"></div>}
			{props.person.length >= 5 && <div className="bg-gray-500 absolute transform rotate-30 w-3 h-16 ml-72 mt-40"></div>}
			{props.person.length >= 6 && <div className="bg-gray-500 absolute transform -rotate-30 w-3 h-16 ml-88 mt-40"></div>}
		</div>
	)
}

export default Gallows
