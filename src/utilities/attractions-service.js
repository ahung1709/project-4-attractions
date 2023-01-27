import * as attractionsAPI from './attractions-api';

export async function getAllAttractions() {
    return await attractionsAPI.getAllAttractions()
}