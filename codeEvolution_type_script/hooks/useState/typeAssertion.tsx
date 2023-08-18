import React, { useState } from 'react'
type UserType = {
    first: string,
    last: string
}


export function TypeAssertion() {
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
            {/* we can use null and userType ie chance for null but if there is data after mounted then we can use type assertion */}
            <h5>Type assertion</h5>
            <h6>the user is : {user?.first} {user?.last}</h6>
            <button onClick={() => handlerEvent("IN")}>logged in</button>
            <button onClick={() => handlerEvent("OUT")}>logged out</button>
        </div>
    )
  
}

