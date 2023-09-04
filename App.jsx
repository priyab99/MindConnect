import './App.css'
import React, {useState} from 'react';
import Select from 'react-dropdown-select';

function App() {
  
  const [value, setValue] = useState([])
  const options = [
    { id : "depression", name : 1},
    { id : "ptsd", name : 2},
    { id : "ocd", name : 3},
    { id : "Anxiety", name : 4},
    { id : "hallucination", name : 5},
    { id : "mood swings", name : 6},
    { id : "low self-esttem", name : 7},

  ]
  
  const handleButtonClick = () => {
    // You can navigate programmatically using the Link component
  };

  return (
    <>

    <h1 className='text center'>Welcome to software engineering project</h1>
     
  <Select

name="Select your symptomps" 
options = {options}
labelField="id"
valueField="name"
multi onChange={value => setValue(value)}
color='green'
dropdownPosition="bottom"
searchable="true"
  
  >
  
 </Select>
  
 <button className="btn btn-outline btn-primary">Submit</button>  
 
    </>
  );
}

export default App;
