import React from 'react';
import Joke from "./Joke"

export default function JokeList(props) {
    
   
        return(
            
            props.jokeData.map((joke)=>{
                return(
                    <Joke joke={joke} />
                )
                
            })
            // <div>
            //     {props.setup && <h3>Setup:{props.setup}</h3>}
            //     <p>Punchline:{props.punchline}</p>
            //     <hr />
            // </div>
            
        )
          
   
     
    

    }
    