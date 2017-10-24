import axios from 'axios';
const api = {
    getRepos: (username) => {
            username = username.toLowerCase().trim();
            var url = `https://api.github.com/users/${username}/repos`;
            return axios.get(url)
                    .then((res) => {
                        return res.json();
                    });
    },
    getBio : (username) => {
        username = username.toLowerCase().trim();
        var url = `https://api.github.com/users/${username}`;
        return axios.get(url)
                .then((res) => {
                    return res.json();
                });
    }
}

module.exports  = api;