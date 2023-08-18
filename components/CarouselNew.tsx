import React from 'react'
import "./CarouselNew.css"
import { useRef, useEffect, useState } from "react"

function CarouselNew() {
    const ref=useRef<any>() 
    const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
    const [scrolEnd, setscrolEnd] = useState(false); // For detecting end of scrolling
    let fruits = [
        "apple",
        "apricot",
        "avocado",
        "banana",
        "bell pepper",
        "bilberry",
        "blackberry",
        "blackcurrant",
        "coconut",
        "cranberry",
        "cucumber",
        "currant",
        "damson",
        "date",
        "dragonfruit",
        "durian",
        "eggplant",
        "elderberry",
        "feijoa",
        "fig",
        "goji berry",
        "gooseberry",
        "grape",
        "grapefruit",
        "guava",
        "honeydew",
        "huckleberry",
        "jackfruit",
        "jambul",
        "jujube",
        "kiwi fruit",
        "kumquat",
        "lemon",
        "lime",
        "loquat",
        "lychee",
        "mandarine",
        "mango",
        "mulberry",
        "nectarine",
        "nut",
        "olive",
        "orange"
    ]
    function fruitsHtml() {
        return (<ul ref={ref}> {fruits.map(x => { 
            return (
                <li key={x}>{x}</li>
            )
        })}
        </ul>)
    }
    function slide(shift: number) {
       
            ref.current.scrollLeft += shift;
        
    }
    // renderCloseButton()
    return (
        <div>
            <h1>new carousel</h1>

            {scrollX == 0 && (
                <button className="prev" onClick={() => slide(-50)}>
                    add
                </button>
            )} 
            {fruitsHtml()}
            {!scrolEnd && (
                <button className="next" onClick={() => slide(+50)}>
                    sub
                </button>)}
        </div>


    )
}

export default CarouselNew