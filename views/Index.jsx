import React from 'react'

const Index = ({ items }) => {
	
	return (
		<div>
            <h1 style={{textAlign: 'center'}}>IndexPage</h1>
            <ul>
            {
				items.map((item, index) => { return ( 

					<li style={{border: '1px solid gray', margin: '10px', padding: '10px'}}>
					
                        <a href={`/data/${index}`}>{item.name}</a> has ID {item.id}, and 
                        its Boolean attribute 'attr1' is set to '{String(item.attr1)}'.
					
					</li> 

				);})
			}
            </ul>
        </div>
	)
}

export default Index
