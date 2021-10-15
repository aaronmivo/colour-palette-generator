//@ts-nocheck
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
const baseUrl = "http://localhost:3001/api/palettes"

const getPalettes = () => {
  let response = axios.get(baseUrl)
    return response;
}

const addPalette = (paletteObject) => {
    let newObject = {
        id: uuidv4(),
        colors: paletteObject
    }
    axios.post(baseUrl, newObject)
}

const exploreService = {
    getPalettes,
    addPalette
}

export default exploreService;