import Airtable from 'airtable';

export const base = new Airtable({
    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY
}).base('appceB80JsqMqRdeS');
