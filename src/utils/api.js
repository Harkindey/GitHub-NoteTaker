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
        var url = `https://github-notetaker-46d8f.firebaseio.com/${username}.json`;
        return fetch(url)
            .then((res) => {
                return res.json();
        }).catch((err) => {
            console.log(err);
        })
    },
    addNote: (username, note) => {
        username = username.toLowerCase().trim();
        var url = `https://github-notetaker-46d8f.firebaseio.com/${username}.json`
        return fetch(url, {
            method: 'post' ,
            body : JSON.stringify(note)
        }).then((res) => {
                return res.json();
        })
    }
}

module.exports  = api;