const api = {
    getRepos: (username) => {
            username = username.toLowerCase().trim();
            var url = `https://api.github.com/users/${username}/repos`;
            return fetch(url)
                    .then((res) => {
                        return res.json();
                    });
    },
    getBio : (username) => {
        username = username.toLowerCase().trim();
        var url = `https://api.github.com/users/${username}`;
        return fetch(url)
                .then((res) => {
                    return res.json();
                });
    },
    getNotes: (username) => {
        username = username.toLowerCase().trim();
        var url = `https://github-saver.firebaseio.com/${username}.json`;
        return fetch(url)
            .then(() => {
                return res.json();
        });
    },
    addNote: (username, note) => {
        username = response.toLowerCase().trim();
        var url = `https://github-saver.firebaseio.com/${username}.json`
        return fetch(url, {
            method: 'post' ,
            body : JSON.stringify(note)
        })
            .then(() => {
                return res.json();
        })
    }
}

module.exports  = api;