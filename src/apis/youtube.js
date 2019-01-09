import axios from 'axios';

const KEY = 'AIzaSyAf0vr7zwtk_RlapmXATGvCkkQOXLA_eew';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});