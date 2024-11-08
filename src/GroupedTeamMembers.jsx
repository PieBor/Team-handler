import React from 'react'
import { useState } from 'react'

function GroupedTeamMembers({selectedTeam,teamMemberCount,employees,setTeam}) {

    const [groupedEmployees,setGroupData]=useState(groupTeamMembers());

    function groupTeamMembers()
    {
        var teams=[];
        
        var teamAMembers=employees.filter((employee)=>employee.teamName==="TeamA");
        var teamA={team:"TeamA",members:teamAMembers,collapsed: selectedTeam==="TeamA" ? false: true};
        teams.push(teamA);

        var teamBMembers=employees.filter((employee)=>employee.teamName==="TeamB");
        var teamB={team:"TeamB",members:teamBMembers,collapsed: selectedTeam==="TeamB" ? false: true};
        teams.push(teamB);

        var teamCMembers=employees.filter((employee)=>employee.teamName==="TeamC");
        var teamC={team:"TeamC",members:teamCMembers,collapsed: selectedTeam==="TeamC" ? false: true};
        teams.push(teamC);

        var teamDMembers=employees.filter((employee)=>employee.teamName==="TeamD");
        var teamD={team:"TeamD",members:teamDMembers,collapsed: selectedTeam==="TeamD" ? false: true};
        teams.push(teamD); 

        return teams;

    }

    function handleTeamClick(event)
    {
        var newGroupData= groupedEmployees.map(
            (groupData)=>groupData.team===event.target.id ?
            {...groupData,collapsed:!groupData.collapsed} : groupData
        );

        setGroupData(newGroupData);
        setTeam(event.currentTarget.id);

    }

  return (
    <main className='container'>
      {
        groupedEmployees.map((item)=>{
            return(
                <div key={item.team} className='card mt-2' style={{cursor:'pointer'}}>
                    <h4 id={item.team} key={item.team} className='card-header text-secondary text-center bg-white' onClick={handleTeamClick}>
                        Team Name: {item.team}
                    </h4>
                    <div id={"collapse_"+item.team} className={item.collapsed===true? "collapse":""}>
                    <hr/>
                    {item.members.map(member=>{
                        return(
                            <div className='mt-2'>
                                <h5 className='card-title mt-2 text-center'>
                                    <span className='text-dark'>Full Name : {member.fullName}</span>

                                </h5>
                                <p className='text-center'>Designation: {member.designation}</p>
                            </div>
                        )
                    })}
                    </div>
                    

                </div>
            )
        })
      }

    </main>
  )
}

export default GroupedTeamMembers