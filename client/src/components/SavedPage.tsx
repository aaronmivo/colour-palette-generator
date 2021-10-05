import React, {useState, useEffect} from 'react'

import axios from 'axios';

function SavedPage() {
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
        </div>
    )
}

export default SavedPage
