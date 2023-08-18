import React, { useState } from 'react'
import ExportingTypeandDestructring from './exportingTypeandDestructring'
import PropsChild from './propsChild'

function Props() {
  const [val, setVal] = useState("")
  const personName = {
    first: "Sarath",
    last: "M"
  }
  const personArray = [
    {
      first: "Sarath",
      last: "M"
    },
    {
      first: "Sher",
      last: "k"
    }
  ]
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setVal(event.target.value)
  }
  return (

    <div>
      <h5 style={{background:"red", margin:"auto"}}>props-parent</h5>
      <PropsChild
        val={val}
        handleOnChange={(event) => { handleInputChange(event) }}
        handleClickPassingEvent={(event, id) => console.log("clicked", event, id)}
        handleClickOrdinary={() => alert("clicked")}
        status='loading'
        list={personArray}
        age={22} place="test"
        isLogged={true}
        name={personName}
        styles={{ color: 'red' }}
      >

        {/* children test */}
        <h4><p> React element children test</p></h4>
      </PropsChild>

      <ExportingTypeandDestructring
      val={val}
      handleOnChange={(event) => { handleInputChange(event) }}
      handleClickPassingEvent={(event, id) => console.log("clicked", event, id)}
      handleClickOrdinary={() => alert("clicked")}
      status='loading'
      list={personArray}
      age={22} place="test"
      isLogged={true}
      name={personName}
      styles={{ color: 'red' }}
    >
       <h4><p> React element children test</p></h4>
    </ExportingTypeandDestructring>
    </div>
  )
}

export default Props