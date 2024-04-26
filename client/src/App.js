
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Result from './components/Result';

function App() {
  const[userInput,setUserInput]=useState({
    currentInvestment:10000,
    yearlyInvestment:1200,
    expectedInterest:6,
    duration:10,
  });

  function handleChange(inputIdentifier,newValue){
    setUserInput(prevUserInput=>{
        return{
            ...prevUserInput,
            [inputIdentifier]:newValue
        }
    });
  }
  const validInput=userInput.duration>=1;
  return (
  <>
    <Header/>
    <UserInput OnChange={handleChange} userInput={userInput}/>
    {validInput && <Result input={userInput}/>}
    {!validInput && <p className='center'>Please enter Duration 1 or greater than 1</p>}
    </>
  );
}

export default App;
