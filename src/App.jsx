import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [bill, setBill] = useState("")
  const [total, setTotal] = useState(0)
  const [tip, setTip] = useState(0)
  const [peopleNo, setPeopleNo] = useState("")
  const [error, setError] = useState(false)
  const [error2, setError2] = useState(false)
  const [custom, setCustom ] = useState("")

  

  const Fivepercent = ()=>{
  
   
   
    setTotal(((bill * (5/100)+Number(bill))/Number(peopleNo)))
    console.log(tip)
    setTip((bill * (5/100))/Number(peopleNo))
    if (bill == "" ){
      setTip(0)
      setTotal(0)
      setError(true)
    }else{  
      setError(false)
    }
    if(peopleNo == ""){
      setTip(0)
      setTotal(0)
      setError2(true)
    }else{
      setError2(false)
    }
   
  }

// Tenpercent
  const Tenpercent = ()=>{
    
    setTotal((bill * (10/100)+Number(bill))/(Number(peopleNo)))
    setTip((bill * (10/100))/Number(peopleNo))
    if (bill == "" ){
      setTip(0)
      setTotal(0)
      setError(true)
    }else{  
      setError(false)
    }
    if(peopleNo == ""){
      setTip(0)
      setTotal(0)
      setError2(true)
    }else{
      setError2(false)
    }
  }




  const Fifteenpercent = ()=>{
  
    setTotal (((bill * (15/100)+Number(bill))/Number(peopleNo)))
    setTip((bill * (15/100))/Number(peopleNo))
    if (bill == "" ){
      setTip(0)
      setTotal(0)
      setError(true)
    }else{  
      setError(false)
    }
    if(peopleNo == ""){
      setTip(0)
      setTotal(0)
      setError2(true)
    }else{
      setError2(false)
    }
  }



  const TwentyFivepercent = ()=>{
    
    setTotal((bill * (25/100)+Number(bill))/Number(peopleNo))
    setTip((bill * (25/100))/Number(peopleNo))
    if (bill == "" ){
      setTip(0)
      setTotal(0)
      setError(true)
    }else{  
      setError(false)
    }
    if(peopleNo == ""){
      setTip(0)
      setTotal(0)
      setError2(true)
    }else{
      setError2(false)
    }
  }


  const Fiftypercent = ()=>{
   
    setTotal((bill * (50/100)+(Number(bill)))/Number(peopleNo))
    setTip((bill * (50/100))/Number(peopleNo))
    if (bill == "" ){
      setTip(0)
      setTotal(0)
      setError(true)
    }else{  
      setError(false)
    }
    if(peopleNo == ""){
      setTip(0)
      setTotal(0)
      setError2(true)
    }else{
      setError2(false)
    }
  }
 
  function Custom (){
    setCustom(parseFloat( e.target.value))
    setTotal()
    setTip()
  }
  
  function Reset() {
    setBill("")
    setTotal(0)
    setTip(0)
    setPeopleNo("")
    setError(false)
    setError2(false)
  }

  

  return (
  <div className="App">
    <div className="Cover">
      <div className="calculator">
        <div className="calc_Part1">

          <div className='Bill'>
            <div className="labella"> <label>Bill</label> <label className='err'>{error?"Can't be Zero":null}</label></div>
           
            <input id='Bill' type="number" value={bill} maxLength={4} onChange={(event)=>  setBill(Number(event.target.value) || 0) } />
          </div>

          <div className='SelectTip'>
            <label> Select Tip %</label>
          <div className='SelectTipButtons'>
            <button onClick={Fivepercent}>5%</button>
            <button onClick={Tenpercent}>10%</button>
            <button onClick={Fifteenpercent}>15%</button>
            <button onClick={TwentyFivepercent}>25%</button>
            <button onClick={Fiftypercent}>50%</button>
            <input type="number"  />
            {/* <button>Custom</button> */}
          </div>
          </div>

          <div>

          </div>

          <div>
          <div className="labella"> <label>Number of people</label> <label className='err'>{error2?"Can't be Zero":null}</label></div>

            <input id='peopleNo' type="number" value={peopleNo} onChange={e => setPeopleNo(e.target.value)} />
          </div>


        </div>

        <div className="calc_Part2">
          <div className="calc_Part2Container">

            <div className="tipamountLabel">
              <div><h5>Tip Amount</h5><h6>/ person</h6></div>
              <h1>${tip.toFixed(2)}</h1>
            </div>


            <div className="TotalLabel">
              <div><h5>Total</h5><h6>/ person</h6></div>
              <h1>${total.toFixed(2)}</h1>
            </div>
          </div>

            <button onClick={Reset}>RESET</button>
        </div>
      </div>
    </div>
  </div>
  )
    
}

export default App
