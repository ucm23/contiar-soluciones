import React, { useEffect, useState } from 'react'
import CardBg from './CardBg'

const Services = () => {
    const [Services, setServices] = useState(null)

    useEffect(()=>{
        getData()
    },[])

    const getData = async _ => {
        const res = await fetch("/data/newServices.json");
        const data = await res.json();
        setServices(data.services)
    }


    return (
        <div style={{ marginBottom: 70 }} >
            <section style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }} >
                {
                    Services?.map( item =>
                        <CardBg key={item.id} > 
                            <h3 style={{ textAlign: "center" }} >
                                { item.content }
                            </h3>
                        </CardBg>
                    )
                }
            </section>
        </div>
    )
}

export default Services