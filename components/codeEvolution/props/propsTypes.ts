import React, { CSSProperties, ReactNode} from 'react'
export type Name={
    first:string,
    last:string
}
export type PropsType={
    age:number,
    place?:string,
    isLogged:boolean,
    name:Name,
    list:Name[],
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