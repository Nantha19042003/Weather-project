


import React, { useState } from 'react'

export const Practice = () => {


    const [user,setuser] = useState();
    function Change(e){

      const newOne = e.target.value;

       setuser(newOne);

    }



  return (
    <div>


       <h1>{user}</h1>


     <input type="text" onChange={Change} />







    </div>
  )
}
