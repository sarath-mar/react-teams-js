import * as React from 'react';
import { useEffect, useState } from "react"
import { Carousel, Image } from '@fluentui/react-northstar';

import "./../components/Caoursel.css"


const CarouselExample = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        console.log("sample")
    }, [windowDimensions])
    function getWindowDimensions() {
        const { innerWidth: width } = window;
        if (width >= 640) {
            return "LG"
        } else if (width >= 480 && width <= 639) {
            return "MD"
        } else {
            return "SM"
        }

    }

    useEffect(() => {
        function handleResize() {
            console.log("reaie")
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        carouselData()
        return () => window.removeEventListener('resize', handleResize);

    }, []);
    const imageLoop = () => {
        let data =
            [<Image
                key="steve"
                fluid
                src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/steve.jpg"
            />,
            <Image
                key="stevie"
                fluid
                src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/stevie.jpg"
            />,
            <Image
                key="tom"
                fluid
                src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/tom.jpg"
            />,
            <Image
                key="veronika"
                fluid
                src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/veronika.jpg"
            />,]
        let result = []
        let array = 2
        for (let index = 0; index < array; index++) {
            result.push(...data)

        }
        return result
    }
    const getResponsiveCardData = (no: number, data: any) => {
        let dataPerLoop = 4
        if (windowDimensions == "MD") {
            dataPerLoop = 3
        } else if (windowDimensions == "SM") {
            dataPerLoop = 1
        }

        let startIndex = (no - 1) * dataPerLoop
        let finalIndex = startIndex + dataPerLoop



        function name() {
            let images = []
            for (let index = startIndex; index < finalIndex; index++) {
                images.push(<div key={index} className="ms-Grid-col ms-sm12 ms-md4  ms-lg3 " >
                    {data[index]}
                </div>)
            }
            return images

        }
        return (
            <div className="ms-Grid-row">{name()}
            </div>

        )
    }
    const carouselData = () => {
        let dataPerLoop = 4
        if (windowDimensions == "MD") {
            dataPerLoop = 3
        } else if (windowDimensions == "SM") {
            dataPerLoop = 1
        }
        let result = imageLoop()
        console.log(result.length)
        console.log(result)
        let newArray = []
        type NewObjectType = { id: number, content: any }
        for (let index = 0; index < Math.ceil(result.length / dataPerLoop); index++) {
            let newObject: NewObjectType = { id: 0, content: "" }
            newObject.id = index + 1
            newObject.content = getResponsiveCardData(index + 1, result)
            newArray.push(newObject)
        }
        console.log(newArray)
        return newArray
    }
    const carouselItems = carouselData()



    return (
        <div className='carousel-item'>
            // <div className="ms-Grid-row">
                // <div>
                    <Carousel
                        circular
                        className="test-one"
                        navigation={{
                            'aria-label': 'people portraits',
                            items: carouselItems.map((item, index) => ({
                                key: index,
                                'aria-controls': item.id,
                            })),
                        }}
                        items={carouselItems}

                    />

                // </div>
            // </div>

        </div>

    )
};


export default CarouselExample;
