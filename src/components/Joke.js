import React from 'react'

export default function Joke(props) {
    const [isShown,setIsShown]=React.useState("False")
    function toggle(){
        setIsShown((prevIsShown)=>{
            return !prevIsShown
        })
    }
  return (
    <>
    <h3>Setup:{props.joke.setup}</h3>
    {isShown&&<p>PunchLine:{props.joke.punchline}</p>}
    <button onClick={()=>{toggle()}}>{isShown?"Hide Punchline":"Show Punchline"}</button>
    </>
    
  )
}
