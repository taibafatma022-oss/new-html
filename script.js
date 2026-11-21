document.getElementById("myform").addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let fathername = document.getElementById("fathername").value;
    let mothername = document.getElementById("mothername").value;
    let dob = document.getElementById("dob").value;
    let gendar = document.querySelector("input[name= gendar]:checked");

    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let state = document.getElementsByClassName("state")[0].value;
    let city = document.getElementsByClassName("city")[0].value;
    let pincode = document.getElementsByClassName("pincode")[0].value;

    if (name === "" || fathername === "" || mothername === "" || dob === "" || gendar === null || email === "" || phone === "" || address === "" || state === "" || city === "" || pincode === "") {
        alert("Please fill in all fields.");
        return;
    }
    else if (phone.length !== 10) {
        alert("Please enter a valid 10-digit phone number.");
    }
    else {
        alert("Your form has been submitted successfully!");
    }
});
