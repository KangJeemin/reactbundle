import React, {Component,useState} from 'react';

function App(){
    const [data,setData] = useState('')
        fetch('api/data').then(res=>res).then(data=>setData(data))


    	return (
    		<div>
        	 a
        	</div>
    	)
}

export default App