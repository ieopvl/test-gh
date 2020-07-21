import axios from 'axios'

const API_KEY = "AIzaSyAnlVpQKWPjNntNb_sTin7hn0kdYyjodHI";
const URL = "https://www.googleapis.com/youtube/v3/search";

export function fetchDataByQuery(query, next = null, previous = null) {
    const params ={
        q: query,
        part: "snippet",
        maxResults: 5,
        key: API_KEY,
    }

    if (next) {
        params.pageToken = next;
    }

    if (previous) {
        params.pageToken = previous;
    }

    return axios.get(URL, {
        params,
    });
}
