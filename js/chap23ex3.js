/*
    HW8 - Chap23 Ex3
*/

document.getElementById('submit-button').onclick = function(e) {
    
    var output = document.getElementById("output");
    output.innerHTML = "";

    var heading = document.createElement("h2")
    heading.innerHTML = "Form Data Entered";
    output.appendChild(heading);

    var table = document.createElement("table")
    output.appendChild(table);
    
    var trHeading = document.createElement("tr");
    var thKey = document.createElement("th");
    thKey.innerHTML = "Key";
    var thValue = document.createElement("th");
    thValue.innerHTML = "Value";
    trHeading.appendChild(thKey);
    trHeading.appendChild(thValue);
    table.appendChild(trHeading);

    var formData = new FormData(document.getElementById("sample-form"))
    
    formData.forEach((value, key) => {
        
        var tr = document.createElement("tr");
        var thKey = document.createElement("td");
        thKey.innerHTML = key;
        var thValue = document.createElement("td");
        thValue.innerHTML = value;
        tr.appendChild(thKey);
        tr.appendChild(thValue);
        table.appendChild(tr);
    });
}

document.getElementById('cancel-button').onclick = function(e) {
    
    var name = document.getElementById("name");
    name.value = "";

    var email = document.getElementById("email");
    email.value = "";
    
    var paymentCash = document.getElementById("payment-cash");
    paymentCash.checked = false;
    var paymentCredit = document.getElementById("payment-credit");
    paymentCredit.checked = false;
    var paymentGoogle = document.getElementById("payment-google");
    paymentGoogle.checked = false;
    var paymentApple = document.getElementById("payment-apple");
    paymentApple.checked = false;

    var newsletter = document.getElementById("promotion");
    newsletter.checked = false;

    var location = document.getElementById("location");
    location.value = "location-losangeles";

    var output = document.getElementById("output");
    output.innerHTML = "";
}
