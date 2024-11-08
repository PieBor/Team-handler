import React from 'react'
import { useLocation } from 'react-router-dom'


function header({selectedTeam,teamMemberCount}) {

  let location=useLocation();

  return (
    <header className='container'>
      <div className="row justify-content-center mt-3 mb-4">

        <div className="col-8">
          <h1 className='mt-4 p5 bg-primary text-white text-center rounded'>Team Member Allocation</h1>
          {location.pathname!="/GroupedTeamMembers" ?
          <h3 className='text-center'>{selectedTeam} has {teamMemberCount} {teamMemberCount===1 ? "member":"members"} </h3> : null
          }
          
        </div>
      </div>

    </header>
  )
}

export default header
