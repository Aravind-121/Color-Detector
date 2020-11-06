import Clarifai from 'clarifai';

const API_KEY = 'e3fef26624e24c919b641c7167fed714';

const app = new Clarifai.App({
 apiKey: API_KEY
});

export default app;