import React from 'react'
import { useEffect, useState } from 'react'
import CardBg from './CardBg'

const Producs = () => {

    const [Products, setProducts] = useState(null)

    useEffect(()=>{
        getData()
    },[])

    const getData = async _ => {
        const res = await fetch("/data/newProducts.json");
        const data = await res.json();
        setProducts(data.product)
    }


    return (
        <div style={{ marginBottom: 70 }} >
            <section style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }} >
                {
                    Products?.map( item =>
                        <CardBg key={item.id} > <h3 style={{ textAlign: "center" }} >{ item.content } </h3></CardBg>
                    )
                }
            </section>
        </div>
    )
}

export default Producs