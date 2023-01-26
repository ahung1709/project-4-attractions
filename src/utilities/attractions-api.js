// import sendRequest from './send-request';

import sendRequest from "./send-request"

const BASE_URL = '/api/attractions'

export function getAllAttractions() {
    // return "run getAllAttractions"
    return sendRequest(BASE_URL)
}

export function getAttractions() {
    return "run getAttractions"
}

export function add(attractionData) {
    return sendRequest(BASE_URL, 'POST', attractionData)
}

export function edit(attractionData) {
    // console.log("inside attractionsAPI.edit")
    return sendRequest(BASE_URL, 'PUT', attractionData)
    // return sendRequest(BASE_URL + "id", 'PUT', attractionData)
}

export function deleteAttraction(attractionData) {
    console.log("inside attractionsAPI.deleteAttraction")
    return sendRequest(BASE_URL, 'DELETE', attractionData)
}

