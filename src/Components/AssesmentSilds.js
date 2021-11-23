import React from 'react'

function AssesmentSilds(props) {
  console.log(props.description.toString().length);
     const descriptionLength=()=>{
        if(props.description.length>27){
          return props.description.substr(0,27)+"...";
        }
        else{
          return props.description
        }
     }
    return (
      <div className="silds">
      <div className="header">
      <h2>{props.title}</h2>
      <p>{props.questions} Responses</p>
      </div>
      <div className="contents">
        <p>Questions Set:</p>
        <h4>{descriptionLength()}</h4>
        <div className="buttons">
        <button>Invite</button>
        <button>Duplicate</button>
          </div>
         
      </div>
      </div>
    )
}

export default AssesmentSilds
