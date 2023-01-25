import * as attractionsAPI from './attractions-api';

export async function getAllAttractions() {

    // alert('run getAttractions')
    return await attractionsAPI.getAllAttractions()
    // const attractions = await attractionsAPI.getAllAttractions()
    // console.log(attractions)
    // return attractions
    // const token = getToken();
    // If there's a token, return the user in the payload, otherwise return null
    // return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function getAttractions() {

    // alert('run getAttractions')
    
    const attractions = attractionsAPI.getAttractions()
    console.log(attractions)
    return attractions
    // const token = getToken();
    // If there's a token, return the user in the payload, otherwise return null
    // return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}