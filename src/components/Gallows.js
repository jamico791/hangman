import React, { useState, useEffect } from 'react'

const Gallows = () => {
	const [head, setHead] = useState(false)
	const [body, setBody] = useState(false)
	const [leftArm, setLeftArm] = useState(false)
	const [rightArm, setRightArm] = useState(false)
	const [leftLeg, setLeftLeg] = useState(false)
	const [rightLeg, setRightLeg] = useState(false)

	return (
		<div className="flex-1 bg-blue-500">
			{head && <div className="bg-gray-500">Head</div>}
			{body && <div className="bg-gray-500">Body</div>}
			{leftArm && <div className="bg-gray-500">Left Arm</div>}
			{rightArm && <div className="bg-gray-500">Right Arm</div>}
			{leftLeg && <div className="bg-gray-500">Left Leg</div>}
			{rightLeg && <div className="bg-gray-500">Right Leg</div>}
		</div>
	)
}

export default Gallows
