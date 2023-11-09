import React from 'react'
import { useNavigate } from 'react-router-dom'

function Start() {
   const  navigatebyurl = useNavigate()
    return (
      <div className='flex-column' style={{display:"flex",alignItems:'center',height:'740px',justifyContent:'center',textAlign:'center',backgroundColor:"#8fc4b7"}}>
         <div style={{height:'200px',backgroundColor:'white',padding:'50px',width:'400px',borderRadius:'7px'}} >
         <h3>Start the Quiz</h3>
         <h5>Good luck!</h5>
   <button className='btn btn-success btn-lg' onClick={()=>navigatebyurl('/Quiz')}>Start the HTML Quiz <i class="fa-solid fa-greater-than" style={{color: "#ffffff",}} ></i></button> 

         </div>
      
      </div>
    )
}

export default Start