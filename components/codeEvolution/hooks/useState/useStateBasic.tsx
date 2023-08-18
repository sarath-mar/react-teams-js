import React, { useState } from 'react'
import { TypeAssertion } from './typeAssertion'
type UserType = {
    first: string,
    last: string
}
function UseStateBasic() {
    const [user, setUser] = useState<null | UserType>(null)
    const handlerEvent = (arg: "IN" | "OUT") => {
        if (arg === 'IN') {
            setUser({ first: "sarath", last: "m" })
        } else {
            setUser(null)
        }

    }
    return ( 
        <div>
            <TypeAssertion/>
            <h5>State</h5>
            <h6>the user is : {user?.first} {user?.last}</h6>
            <button onClick={() => handlerEvent("IN")}>logged in</button>
            <button onClick={() => handlerEvent("OUT")}>logged out</button>
        </div>
    )
}

export default UseStateBasic