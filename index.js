let day = document.querySelector('#day');
let month = document.querySelector('#month');
let year = document.querySelector('#year');
let display1__year = document.querySelector('.num1')
let display2__year = document.querySelector('.num2')
let display3__year = document.querySelector('.num3')
let dayerror = document.querySelector('.error1')
let montherror = document.querySelector('.error2')
let yearerror = document.querySelector('.error3')
let day1 = document.querySelector('#day2')
let day2 = document.querySelector('#months')
let day3 = document.querySelector('#years')
let date = new Date();
let years = date.getFullYear()


function cal(){
// validation for day_input
    if (day.value < 1 || day.value > 30 ) {
        dayerror.style.display = 'block';
       day1.style.color = 'red'
        
      } else {
        
        dayerror.style.display = 'none';
        day1.style.color = 'black'
      
      };
//validation for month_input
      if (month.value < 1 || month.value > 12 ) {
        montherror.style.display = 'block';
       day2.style.color = 'red'
       
      } else {
        
        montherror.style.display = 'none';
        day2.style.color = 'black'
        
      };
//validation for year_input
      if (year.value < 1 || year.value > years ) {
        yearerror.style.display = 'block';
       day3.style.color = 'red'
        return false;
      } else {
        
        yearerror.style.display = 'none';
        day3.style.color = 'black'
        return true;
      };

}

