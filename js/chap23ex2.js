/*
    HW8 - Chap23 Ex2
*/

function postJSONData(url, body, completionHandler) {
    fetch(url, {
        credentials: "same-origin",
        mode: "cors",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body
    })
       .then(response => response.text())
       .then(json => completionHandler(null, json))
       .catch(error => completionHandler(error, null))
}

let url = 'https://thejsway-server.herokuapp.com/api/countries';

let jsonObject = {
    "name": "B",
    "countries": [
      {
          "name": "United States",
          "year": 2019
      },
      {
          "name": "Spain",
          "year": 2020
      },
      {
          "name": "Portugal",
          "year": 2020
      },
      {
          "name": "France",
          "year": 2021
      }
    ]
};

let jsonBody = JSON.stringify(jsonObject);

postJSONData(url, jsonBody, (error, response) => {
    if (error) {
        console.log(error);
        return;
    }

    console.log(response);
});
