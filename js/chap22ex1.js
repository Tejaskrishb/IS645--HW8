/*
    HW8 - Chap22 Ex1
*/

function fetchData(url, completionHandler) {
    fetch(url)
       .then(response => response.json())
       .then(json => completionHandler(null, json))
       .catch(error => completionHandler(error, null))
}

let url = 'https://api.github.com/users/';

function fetchProfileInfos(username) {

    fetchData(url + username, (error, json) => {
        if (error) {
            console.log(error);
            return;
        }
        
        var pictureContainer = document.getElementById("picture-container");
        pictureContainer.innerHTML = "";
        var img = document.createElement("img");
        img.src = String(json["avatar_url"]);
        pictureContainer.appendChild(img);
        
        var nameContainer = document.getElementById("name-container");
        nameContainer.innerHTML = String(json["name"]);

        var blogContainer = document.getElementById("blog-container");
        blogContainer.innerHTML = String(json["blog"]);

        var createdAtContainer = document.getElementById("created-container");
        createdAtContainer.innerHTML = String(json["created_at"]);
    });
};

function performFormLookup() {
    let usernameField = document.getElementById("username");
    let username = usernameField.value;

    fetchProfileInfos(username);

    return false;
}
