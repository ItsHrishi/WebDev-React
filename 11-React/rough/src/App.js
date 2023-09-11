import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaBeer } from "react-icons/fa";




function App() {
  const notify = () => toast("Wow so easy!");
  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
      
      <h3>
      Lets go for a <FaBeer />?
    </h3>
    </div>
    
  );
}

export default App;
