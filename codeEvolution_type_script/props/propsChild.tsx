import React, { CSSProperties, ReactNode} from 'react'
type propsType={
    age:number,
    place:string,
    isLogged:boolean,
    name:{
        first:string,
        last:string
    },
    list:{
        first:string,
        last:string
    }[],
    status?:'loading'|'sucess'|'error',
    // if we use only string in children we use it else user React.ReactElement or ReactNode
    // children:string
    children:ReactNode,
    handleClickOrdinary:()=>void ,
    handleClickPassingEvent:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void,
    handleOnChange:(event:React.ChangeEvent<HTMLInputElement>)=>void,
    val:string,
    styles?:CSSProperties
}

function PropsChild(props:propsType) {
    // place is not required props so we use ? go one step more we can place an default value if no value is passed it will use it
//    const  {place='default'} = props
let {place=100}=props


  return (
    <div>
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

export default PropsChild