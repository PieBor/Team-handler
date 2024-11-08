import { useState,useEffect } from 'react'

import './App.css'
import Header from './header.jsx'
import Content from './content.jsx'
import Footer from './footer.jsx'
import Employees from './Employees'
import GroupedTeamMembers from './GroupedTeamMembers.jsx'
import Nav from './Nav.jsx'
import NotFound from './NotFound.jsx'
import ReactDom from 'react-dom'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {

  
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamA");

  const [employees,setEmployees]=useState(JSON.parse(localStorage.getItem('employees')) || [{id:1,fullName:"Bob Jones",designation:"Javascript developer",gender:"male",teamName:"TeamA"},
      {id: 2, fullName: "Alice Smith", designation: "Frontend Developer", gender: "female", teamName: "TeamA"},
      {id: 3, fullName: "John Doe", designation: "Backend Developer", gender: "male", teamName: "TeamB"},
      {id: 4, fullName: "Sara Lee", designation: "UI/UX Designer", gender: "female", teamName: "TeamC"},
      {id: 5, fullName: "Michael Brown", designation: "Full Stack Developer", gender: "male", teamName: "TeamB"},
      {id: 6, fullName: "Emma Davis", designation: "DevOps Engineer", gender: "female", teamName: "TeamC"},
      {id: 7, fullName: "Liam Wilson", designation: "QA Engineer", gender: "male", teamName: "TeamA"},
      {id: 8, fullName: "Sophia White", designation: "Data Scientist", gender: "female", teamName: "TeamB"},
      {id: 9, fullName: "James Green", designation: "Mobile Developer", gender: "male", teamName: "TeamC"},
      {id: 10, fullName: "Olivia Harris", designation: "Product Manager", gender: "female", teamName: "TeamA"}
    ])

    useEffect(()=>{
      localStorage.setItem('employeelist', JSON.stringify(employees));

    },[employees]);

    useEffect(()=>{
      localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));

    },[selectedTeam]);
   

    function handleTeamSelection(event){
      setTeam(event.target.value);
      console.log(event.target.value);
    }

    function handleEmployeeCardClick(event) {
      const clickedId = parseInt(event.currentTarget.id);
      
      if (isNaN(clickedId)) {
          console.error("Error: ID is NaN, check the id in your JSX");
          return;
      }
  
      const transformedEmployees = employees.map((employee) => {
          if (employee.id === clickedId) {

            if(employee.teamName===selectedTeam){
              return { ...employee, teamName: '' };
            }
            else return { ...employee, teamName: selectedTeam };
          }
          else return employee;
      });
  
      setEmployees(transformedEmployees);
      console.log("Transformed Employees:", transformedEmployees);
  }

  const [count, setCount] = useState(0)
  let teamMemberCount=employees.filter((employee)=>employee.teamName===selectedTeam).length;

  return (
    <Router>
      <Nav/>
      <Header selectedTeam={selectedTeam}
              teamMemberCount={teamMemberCount}></Header>

<Routes>
  <Route 
    path="/" 
    element={
      <Employees 
        employees={employees}
        selectedTeam={selectedTeam}
        handleEmployeeCardClick={handleEmployeeCardClick}
        handleTeamSelection={handleTeamSelection}
      />
    } 
  />
  <Route 
    path="/GroupedTeamMembers" 
    element={<GroupedTeamMembers 
      selectedTeam={selectedTeam}
      teamMemberCount={teamMemberCount}
      employees={employees}
      setTeam={setTeam}/>} 
  />

<Route 
    path="*" 
    element={<NotFound/>} 
  />
</Routes>

    
    <Footer></Footer>  
    </Router>
  )
}

export default App
