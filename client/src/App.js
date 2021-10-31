
import './App.css';
import { useState} from "react";
import Axios from 'axios';

function App() {

  const[name, setName]=useState("");
  const[standard, setStandard]=useState(0);
  const[schoolname, setSchoolName]=useState("");
  const[parentname, setParentName]=useState("");
  const[guardianname, setGuardianName]=useState("");
  const[bookname, setBookName]=useState("");


const[studentList, setStudentList]=useState([]);
   
const addDetails=()=>{ 
Axios.post("http://localhost:3001/create", {
  name:name, 
  standard:standard, 
  schoolname:schoolname, 
  parentname:parentname, 
  guardianname:guardianname, 
  bookname:bookname,
}).then(()=>{
  console.log("success");
});
};
   
const getStudent=()=>{
  Axios.get("http://localhost:3001/student").then((response)=>{
    console.log("response");

});
  };
  return (
    <div className="App">

<div className="Register">
     <label> Name:</label>
     <input type="text"  onChange={(event)=>{setName(event.target.value)}}/>

     <label>Standard:</label>
     <input type="number"  onChange={(event)=>{setStandard(event.target.value)}} />

     <label>School Name:</label>
     <input type="text"  onChange={(event)=>{setSchoolName(event.target.value)}} />
     
     <label>Parent Name:</label>
     <input type="text" onChange={(event)=>{setParentName(event.target.value)}} />

     <label>Guardian Name:</label>
     <input type="text" onChange={(event)=>{setGuardianName(event.target.value)}} />

     <label>Book Name:</label>
     <input type="text" onChange={(event)=>{setBookName(event.target.value)}}/>

     <button onClick={addDetails}>Register Here</button>

     </div>


<div className="Students">

<button onClick={getStudent}>Enter Bookname</button>

</div>


    </div>
  );
}

export default App;
