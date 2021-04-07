/*
    HW8 - Chap21 Ex1
*/

function fetchData(url, completionHandler) {
    fetch(url)
       .then(response => response.json())
       .then(json => completionHandler(null, json))
       .catch(error => completionHandler(error, null))
}

let url = 'https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json';

fetchData(url, (error, json) => {
    if (error) {
        console.log(error);
        return;
    }
    
    var paintingsTable = document.getElementById("paintings");

    json.forEach(jsonItem => {
        
        var tr = document.createElement("tr");
        
        var tdName = document.createElement("td");
        tdName.innerHTML = jsonItem["name"];
        tr.appendChild(tdName);

        var tdYear = document.createElement("td");
        tdYear.innerHTML = jsonItem["year"];
        tr.appendChild(tdYear);

        var tdArtist = document.createElement("td");
        tdArtist.innerHTML = jsonItem["artist"];
        tr.appendChild(tdArtist);

        paintingsTable.appendChild(tr);
    });
});
