import React from 'react'

const Index = ({ items }) => {

	const itemList = items.map((item, index) => { return ( 

		<li style={{border: '1px solid gray', margin: '10px', padding: '10px'}}>
		
			<a href={`/data/${index}`}>{item.name}</a> has ID {item.id}, and 
			its Boolean attribute 'attr1' is set to '{String(item.attr1)}'.
		
		</li> 

	);})
	
	
	return (
		<div>
            <h1 style={{textAlign: 'center'}}>Index Page</h1>
            <ul>{ itemList }</ul>
			<nav><a href="/data/new">Create some new data</a></nav>
        </div>
	)
}

export default Index
