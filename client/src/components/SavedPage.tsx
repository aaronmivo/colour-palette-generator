//@ts-nocheck
import React, {useState, useEffect} from 'react'
import CardList from './CardList';

import axios from 'axios';

function SavedPage({setColors}) {
    const [palette, setPalette] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/palettes").then(response => {
            setPalette(response.data)
        })
    }, [])
    return (
        <div>
            Palettes
            {console.log(palette)}
            <CardList data={palette} setColors={setColors}/>
        </div>
    )
}

export default SavedPage
