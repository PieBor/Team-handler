import React from 'react'

function NotFound({selectedTeam,teamMemberCount}) {
  return (
    <header className='container'>
      <div className="row justify-content-center mt-3 mb-4">

        <div className="col-8">
          <h1 className='mt-4 p5 bg-primary text-white rounded'>Requested page could not be found</h1>
        </div>
      </div>

    </header>
  )
}

export default NotFound
