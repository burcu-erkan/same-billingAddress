import React , {useState} from 'react';
import './App.css';

function App() {
  const [check,setCheck] = useState(false);
  const [state,setState] = useState({
    deliveryName:"",
    deliveryLastName:"",
    deliveryAddress:"",
    deliveryPhone:"",
  });

  const onChange =(e)=>{
    setState(prevState =>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }
  return (
    <div className="App">
      <form>
        <h1>Delivery Address</h1>
        <input 
        className="input-font"
        onChange={onChange}
        type="text"
         name="deliveryName" 
         placeholder="First Name" 
         autocomplete='{false}' />

<input 
        className="input-font"
        onChange={onChange}
        type="text"
         name="deliveryLastName" 
         placeholder="Last Name" 
         autocomplete='{false}' />

<input 
        className="input-font"
        onChange={onChange}
        type="text"
         name="deliveryAddress" 
         placeholder="Address" 
         autocomplete='{false}' />

<input 
        className="input-font"
        onChange={onChange}
        type="text"
         name="deliveryPhone" 
         placeholder="Phone" 
         autocomplete='{false}' />

         <h1>Biiling Address</h1>
<div className="check">
  <label htmlFor="checkbox">Same as Delivery address</label>
<input type="checkbox" value="false" name = "checkbox" onChange ={()=>setCheck(!check)}/>
</div>
<input 
        className="input-font"
        type="text"
         name="billingName" 
         placeholder="First Name" 
         autocomplete='{false}'
         value = {check ? state.deliveryName:""} />

<input 
        className="input-font"
        type="text"
         name="billingLastName" 
         placeholder="Last Name" 
         autocomplete='{false}' 
         value = {check ? state.deliveryLastName:""}/>

<input 
        className="input-font"
        type="text"
         name="billingAddress" 
         placeholder="Address" 
         autocomplete='{false}' 
         value = {check ? state.deliveryAddress:""}/>

<input 
        className="input-font"
        type="text"
         name="billingPhone" 
         placeholder="Phone" 
         autocomplete='{false}' 
         value = {check ? state.deliveryPhone:""}/>

<input type="button" className="btn" value="Submit"/>
 


      </form>
    </div>
  );
}

export default App;
