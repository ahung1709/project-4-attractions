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
    return sendRequest(BASE_URL, 'POST', attractionData)
}

