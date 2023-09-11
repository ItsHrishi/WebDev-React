import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards"; 


const App = () => {
  
  // console.log(filterData);

  // const [courses, setCourses] = useState(null);

  // useEffect(() => {

  //   const fetchData = async () => {
      
  //     try {
  //       const res = await fetch(apiUrl);
  //       const output = await res.json();

  //       setCourses(output.data);

  //       // save the data
  //       //  console.log(output);        
  //     }
  //     catch (error) {
  //       toast.error("Something went wrong");
  //     }
  //   }
  //   fetchData();

    
  // },[]);

    return (
      <div>
        <div>
          <Navbar/>
        </div>
        <div>
          <Filter filterData={filterData} />
        </div>
        <div>
          <Cards/>
        </div>
      </div>
    );
  };

export default App;
