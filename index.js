let Fullname = prompt("Enter name");
    console.log(Fullname);
    if (Fullname == null || Fullname === "") {
        document.getElementById("welcome").innerHTML = "Welcome guest to Gaming Hub";
    } else {
        document.getElementById("welcome").innerHTML = "Welcome " + Fullname + " to Gaming Hub";
    }