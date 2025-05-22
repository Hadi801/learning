function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name && email && password) {
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
        alert("Form submitted successfully!");
    } else {
        alert("Please fill in all the fields.");
    }
}