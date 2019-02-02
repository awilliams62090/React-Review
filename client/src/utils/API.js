import axios from "axios";

const apiKey="AIzaSyAmxSogQpkB3YdNogyOAU6k6iJ5RnpquUQ";

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