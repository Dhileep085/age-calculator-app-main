  //To get a current date
const date =  new Date();    
let currentYear = date.getFullYear();

//Condition for each input value
let isValidDay = false;
let isValidMonth = false;
let isValidYear = false;

const dayInput = document.querySelector('.day-input');
const monthInput = document.querySelector('.month-input');
const yearInput = document.querySelector('.year-input');

//conndition checking
dayInput.addEventListener('input', ()=>{
    if(dayInput.value === ' '){
        document.querySelector('.day-error-msg').innerHTML = "This value is required";
        isValidDay = false;
       
    } else{
        if(dayInput.value<31){
            isValidDay = true;
        }else{
            document.querySelector('.day-error-msg').innerHTML="Must be valid Number";
            isValidDay = false;
        }
    }
    }
)

monthInput.addEventListener('input', ()=>{
    if(monthInput.value === ' '){
        document.querySelector('.month-error-msg').innerHTML = "This value is required";
        isValidMonth  = false;
    } else{
        if(monthInput.value<13){
            isValidMonth = true;
        }else{
            document.querySelector('.month-error-msg').innerHTML="Must be valid Number";
            isValidMonth = false;
        }
    }
    
})

yearInput.addEventListener('input', ()=>{
    if(yearInput.value === ' '){
        document.querySelector('.year-error-msg').innerHTML = "This value is required";
        isValidYear= false;
    } else{
        if(yearInput.value<=currentYear){
            isValidYear = true;
        }else{
            document.querySelector('.year-error-msg').innerHTML="Must be valid Number";
            isValidYear = false;
        }
       
    }
})

//Submit button event
const btn = document.querySelector("button");
btn.addEventListener('click', ()=>{
    // Checking all condition are true
    if(isValidDay && isValidMonth && isValidYear){
    let currentDay = date.getDate();
    let currentMonth = date.getMonth() +1;
    if(dayInput.value === ' ' || monthInput.value === ' ' || yearInput.value === ' '){
        document.querySelector('.day-error-msg').innerHTML = "This value is required";
       
    } else{
    let dayOutput = currentDay - dayInput.value;
    let monthOutput = currentMonth - monthInput.value;
    let yearOutput = currentYear - yearInput.value;

    //Condition for minus value occurs
    if(dayOutput<0){
        dayOutput += 30;
        console.log(dayOutput);
        monthOutput--;
        console.log(monthOutput);
        document.querySelector('.day-result').innerHTML = dayOutput;
    } else{
        document.querySelector('.day-result').innerHTML = dayOutput;
    }

    if(monthOutput<0){
        monthOutput += 12;
        console.log(monthOutput);
        yearOutput--;
        console.log(yearOutput);
        document.querySelector('.month-result').innerHTML = monthOutput;
    } else{
        document.querySelector('.month-result').innerHTML = monthOutput;
    }

    document.querySelector('.year-result').innerHTML = yearOutput;
}
} else{
    if(!isValidDay){
        document.querySelector('.day-error-msg').innerHTML = "This value is required";
        const dayLabel = document.querySelector('.day-label');
        dayLabel.classList.add('empty-input-label');
        const dayInput = document.querySelector('.day-input');
        dayInput.classList.add('empty-input-box');
    }
    if(!isValidMonth){
        document.querySelector('.month-error-msg').innerHTML = "This value is required";
        const monthLabel = document.querySelector('.month-label');
        monthLabel.classList.add('empty-input-label');
        const monthInput = document.querySelector('.month-input');
        monthInput.classList.add('empty-input-box');
    }
    if(!isValidYear){
        document.querySelector('.year-error-msg').innerHTML = "This value is required";
        const yearLabel = document.querySelector('.year-label');
        yearLabel.classList.add('empty-input-label');
        const yearInput = document.querySelector('.year-input');
        yearInput.classList.add('empty-input-box');
    }
}
}
);