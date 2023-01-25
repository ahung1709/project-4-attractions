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