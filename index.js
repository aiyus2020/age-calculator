let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let display1__year = document.querySelector(".num1");
let display2__year = document.querySelector(".num2");
let display3__year = document.querySelector(".num3");
let dayerror = document.querySelector(".error1");
let montherror = document.querySelector(".error2");
let yearerror = document.querySelector(".error3");
let day1 = document.querySelector("#day2");
let day2 = document.querySelector("#months");
let day3 = document.querySelector("#years");
let date = new Date();
let years = date.getFullYear();
let months = date.getMonth() + 1;
let days = date.getDate();
console.log(days);

function cal() {
    dayval();

    monthval();

    yearval();

    calyr();

    calmon();

    calday();

    //calculation for years
    function calyr() {
        let cal__years = years - year.value;
        if (month.value > months) {
            cal__years -= 1;
        }
        display1__year.innerHTML = cal__years;

        if (year.value < 1 || year.value > years) {
            display1__year.innerHTML = "--";
        }
        year.value = "";
    }

    //calculation for month
    function calmon() {
        let cal__month = months - month.value;
        display2__year.innerHTML = cal__month;

        if (month.value < 1 || month.value > 12) {
            display2__year.innerHTML = "--";
        }
        month.value = "";
    }

    //calculation for day
    function calday() {
        let cal__days = days - day.value;
        display3__year.innerHTML = cal__days;

        if (day.value < 1 || day.value > 31) {
            display3__year.innerHTML = "--";
        }
    }
    day.value = "";
}

//validation for month_input
function monthval() {
    if (month.value < 1 || month.value > 12) {
        montherror.style.display = "block";
        day2.style.color = "red";
        return false;
    } else {
        montherror.style.display = "none";
        day2.style.color = "black";

        return true;
    }
}

// validation for day_input
function dayval() {
    if (day.value < 1 || day.value > 31) {
        dayerror.style.display = "block";
        day1.style.color = "red";
        return false;
    } else {
        dayerror.style.display = "none";
        day1.style.color = "black";
        return true;
    }
}

//validation for year_input
function yearval() {
    if (year.value < 1 || year.value > years) {
        yearerror.style.display = "block";
        day3.style.color = "red";
        return false;
    } else {
        yearerror.style.display = "none";
        day3.style.color = "black";
        return true;
    }

    //display for year
    function display__year() { }
}
//relaod output
function reload() {
    display1__year.innerHTML = "--";
    display2__year.innerHTML = "--";
    display3__year.innerHTML = "--";
    yearerror.style.display = "none";
    day3.style.color = "black";
    montherror.style.display = "none";
    day2.style.color = "black";
    dayerror.style.display = "none";
    day1.style.color = "black";
    month.value = "";
    day.value = "";
    year.value = "";
}
reload();
