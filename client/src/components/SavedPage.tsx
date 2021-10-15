//@ts-nocheck
import React, {useState, useEffect} from 'react'
import CardList from './CardList';
import saveService from '../services/saveService'

import axios from 'axios';

function SavedPage({setColors}) {
    const [palette, setPalette] = useState([])

    useEffect(() => {
        saveService.getPalettes().then(response => {
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
