import axios from "axios";

//You will need to add your own API key info in here for the app to work
const apiKey="PUT YOUR API KEY HERE";

export default {
    searchVideos : function (term) {
        return axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params: {
                key: apiKey,
                part: "snippet",
                q: term,
                maxResults: 8
            }
        })
    }
}