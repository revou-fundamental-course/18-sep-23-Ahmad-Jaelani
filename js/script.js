function validateForm() {
    const name = document.forms["form"]["yourname"].value;
    const email = document.forms["form"]["email"].value; 
    const interest = document.forms["form"]["Interest"].value;

    if (name == "" || email == "" || interest == "") {
        document.getElementById("error").innerHTML = "Tidak Boleh ada yang kosong"
        return false;
}
}