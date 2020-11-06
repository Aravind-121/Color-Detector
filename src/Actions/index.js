import app from '../Api/index';
import Clarifai from 'clarifai';

export function fetchModel(url) {
    
    return {
        type: 'FETCH_RESULT',
        payload: app.models.predict(Clarifai.COLOR_MODEL,url)
    }
}

export function deleteModel() {
    
    return {
        type: 'DELETE_RESULT'
    }
}