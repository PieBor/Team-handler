import React from 'react'
import { useState } from 'react'
import { Card } from 'react-bootstrap'
import Male from './images/maleProfile.jpg'
import Female from './images/femaleProfile.jpg'



const Employees = ({employees,selectedTeam,handleEmployeeCardClick,handleTeamSelection}) => {

    

      return (
        <div>
            <main className='container'>

              <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">

                  <select className='form-select form-select-lg' value={selectedTeam} onChange={handleTeamSelection}>
                    <option value="TeamA">Team A</option>
                    <option value="TeamB">Team B</option>
                    <option value="TeamC">Team C</option>
                    <option value="TeamD">Team D</option>
                  </select>
                </div>
              </div>
                

                <div className="row justify-content-center mt-3 mb-3">
                    <div className="col-8">

                      <div className="card-collection">
                        {employees.map((employee) => (
                          <div key={employee.id} id={employee.id} className={(employee.teamName===selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{cursor:"pointer"}} onClick={handleEmployeeCardClick}>
                              <img src={employee.gender==='male' ? Male: Female} className='card-img-top'></img>
                              <div className="card-body">
                                  <h5 className='card-title'>Full name: {employee.fullName}</h5>
                                  <p className='card-text'>Designation: {employee.designation}</p>
                                  
                              </div>
                
                          </div>
                        ))}
                      </div>
                    

                    </div>
                </div>

            </main>

        </div>
      )
      
}

export default Employees
