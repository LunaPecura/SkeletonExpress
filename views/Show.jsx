import React from 'react'

const Show = ({item}) => {

	const itemDescription = Object.keys(item).map(key => {
		return (<div>{key}: '{String(item[key])}'</div>)
	}) 


	return (
		<div>
			<h1 style={{textAlign: 'center'}}>ShowPage for {item.name}</h1>
			{ itemDescription }
		</div>
	)
}

export default Show


/* FROM KENNY
npm create vite@latest
npm install @splinetool/react-spline @splinetool/runtime
*/