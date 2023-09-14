import { useState } from 'react';
import './App.css';

function App() {

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);

  
  // function changeFirstHandler(event) {
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changeLastHandler(event) {
  //   // console.log(event.target.value);
  //   setLastName(event.target.value)
  // }

  // using multiple fields in useStste function (syntax ->)
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email:"", comments:"", isVisible:true, mode:"", favCar:"" });

  console.log(formData);

  function changeHandler(event) {
    const {name, value, checked, type} = event.target
    setFormData(prevData => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("printing th ewhole data......")
    console.log(formData);

  }

  return (
    <div className="App">
      
      <form onSubmit={submitHandler}>
      
        <input 
          type="text"
          placeholder="first Name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        /><br/>
        <input 
          type="text"
          placeholder="Last Name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <br/>
        <input 
          type="text"
          placeholder="Email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />
        <br />
        <textarea
          placeholder="enter your comments"
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />
        <br />
        <input 
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor='isVisible'>Am i visible</label>
        <br />
        <fieldset>
          <legend>Mode:</legend>
          <input
          type='radio'
          onChange={changeHandler}
          name='mode'
          value="Online-mode"
          checked={formData.mode === "Online-mode"}
        />
        <label htmlFor='Offnline-mode"'>Online mode</label>
        <input
          type='radio'
          onChange={changeHandler}
          name='mode'
          value="Offnline-mode"
          checked={formData.mode === "Offnline-mode"}
        />
        <label htmlFor='Offnline-mode"'>Offnline mode</label>
        </fieldset>
        
        <label htmlFor='favCar'>Select your fav car</label>
        <select
          name='favCar'
          onChange={changeHandler}
          value={formData.favCar}
        >
          <option value="scorpio">Scorpio</option>
          <option value="fortuner">fortuner</option>
          <option value="thar">thar</option>
          <option value="AMG">defender</option>


        </select><br/>
        {/* <input type='submit' value='submit' /> */}
        {/* or */}
        <button>Subbmit</button>
      
      </form>


    </div>
  );
}

export default App;
