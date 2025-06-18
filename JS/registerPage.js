function validateAll() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const address = document.getElementById("address");
    const gender = document.getElementById("gender");
    const dob = document.getElementById("dob");
    const form = document.getElementById("register-form");

    const today = new Date();
    const dobDate = new Date(dob.value);

    if(name.value.trim() === "" || email.value.trim() === "" || address.value.trim === "" || gender.value === "none" || dob.value === "" ) { //.trim buat remove white space
        alert("You must fill all the data we need!");
    }
    else if(!email.value.endsWith("@gmail.com")) {
        alert("Your E-mail must end with @gmail.com");
    }
    else if(dobDate > today) {
        alert("Your birth date cannot be later than today");
    }
    else {
        form.submit();
    }
}