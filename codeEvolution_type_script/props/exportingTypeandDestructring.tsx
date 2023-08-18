import React from 'react'
import {PropsType} from "./propsTypes"

function ExportingTypeandDestructring(props:PropsType) {
    let {place=100}=props 
  return (
        <div>
            <h4>exportingTypeandDestructring</h4> 
           <h5>propsChild</h5> 
           <h6> props place value orginal: {props.place} - default:{place}</h6>
            <h5>the props are :   {props.age} , {props.place} ,{props.isLogged ? 'true' : 'false'} </h5>
            <h6>status : {props.status}</h6>
            <h4>{JSON.stringify(props.name)}</h4>
            {props.list.map(x=>{
                return(
                    <>
                    <h4>{x.first} {x.last}</h4>
                    </>
                )
            })}
            {props.children}
            <button onClick={()=>{props.handleClickOrdinary()}}>ordinary event props</button> 
            <button onClick={(event)=>{props.handleClickPassingEvent(event,1)}}>passing event props</button> 
            <input value={props.val} onChange={props.handleOnChange}/> 
            <h6 style={props.styles}>Style props</h6> 
        </div>
  )
}

export default ExportingTypeandDestructring