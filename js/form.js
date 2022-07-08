// JavaScript Document
var form = document.querySelector('form');

form.addEventListener("submit", postFormData);

function postFormData(e) {

    e.preventDefault();

    var payload = {};

    var formData = new FormData(form);

    for (var pair of formData.entries()) {
        payload[pair[0]] = pair[1];
    }

    fetch(form.getAttribute("action"), {
        method: "POST",
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload)
    })
    .then(function (result) {
        return result.json();
    })
    .then(function (data) {
        if(data.Status != 'OK') {
            console.error(data.Message);
        } else {
            console.info(data.Message);
        }
        toggleMessage(data.Status);
    })
    .catch(function (error) {
        console.error(error);
        toggleMessage('Error');
    });

}

function toggleMessage(status) {

    var fieldsets = form.querySelectorAll('fieldset');

    fieldsets.forEach(function(fieldset) {
        if(fieldset.classList.contains(status.toLowerCase())) {
            fieldset.classList.remove("hidden");
        } else {
            fieldset.classList.add("hidden");
        } 
    });

}