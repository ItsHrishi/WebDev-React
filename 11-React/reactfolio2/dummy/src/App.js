import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [text, setText] = useState(' ');


  // hw -> of using window size change of window and updating it in the webpage
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  
  useEffect(() => {
    
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });



  // variation 1 -> on every render
  // useEffect(() => {
  //   console.log("UI rendering done");
  // });


  // variation 2 -> on first render
  // second parameter denotes the depandency list
  // useEffect(() => {
  //   console.log("UI rendering done");
  // }, [])
  
  // variation 3 -> first render and when dependency changes
  // useEffect(() => {
  //   console.log("change observed");
  // },[text])
  
  // variation 4 -> to ahndle unmounting of a component 
  // useEffect(() => {
  //   // add event listner second
  //   console.log("hello added");    
  //   // first
  //   return () => {
  //     console.log("listner removed");
  //   }
  // }, [text]);

  function changeHandler(event) {

    setText(event.target.value);
    console.log(text);
    
  }



  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
      <h1>window size</h1>
      <p>{height}</p>
      <p>{width}</p>
    

    </div>
  );
}

export default App;
