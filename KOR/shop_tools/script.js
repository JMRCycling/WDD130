// import axios from 'axios';

// console.log('javascript linking successful');
var sub_Id = new URLSearchParams( window.location.search );
sub_Id = sub_Id.get('sub_id');
console.log(sub_Id);
var invoice_Id = new URLSearchParams( window.location.search );
invoice_Id = invoice_Id.get('invoice_id');
console.log(invoice_Id);
var plan_type = new URLSearchParams( window.location.search );
plan_type = plan_type.get('plan_type');
console.log(plan_type);

// var form = document.querySelector("signin");
const signin = document.getElementById("signin");
// console.log(form)

// signin.addEventListener('submit', (e) => {

// });

signin.addEventListener("submit", (e) => {
    e.preventDefault();


    console.log('form has been submitted');
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    var username = document.getElementById("username").value;
    urlencoded.append("user_name", username);
    // console.log((document.getElementById("username").value));
    var password = document.getElementById("password").value;
    urlencoded.append("password", password);
    // console.log((document.getElementById("password").value));
    urlencoded.append("sub_Id", sub_Id);
    urlencoded.append("invoice_Id", invoice_Id);
    urlencoded.append("plan_type", plan_type);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    fetch("https://masontuft.com/signinShop", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));


    // let user = {
    //     user_name: document.getElementById("username"),
    //     password: document.getElementById("password"),
    //     sub_Id: sub_Id,
    //     invoice_Id: invoice_Id,
    // };
    
    // let response = fetch('https://masontuft.com/signinShop', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json;charset=utf-8'
    //     },
    //         body: user
    //         // body: JSON.stringify(user)
    // });
});
   
