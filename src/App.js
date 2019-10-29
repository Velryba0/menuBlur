import React, { useState } from 'react';
import bg from './images/el-viejo-y-el-mar.png';
import Menu from './components/MenuBlur';
import './App.css';

function App() {

	//Hooks

  	const [pageBlur, setPageBlur] = useState('container');

	//Handle

	const traerBlur = x => setPageBlur(x); 

	return (
		<div className="App">
			<Menu data={pageBlur} blur={traerBlur}/>
			<div className={pageBlur} >
				<img src={bg} className="img" alt="logo" />
			</div>    
		</div>
	);
}

export default App;
