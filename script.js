let days = 0;


const button = document.querySelector('#setReminder');
const input = document.querySelector('#days');
const p = document.querySelector('#reminderMessage');

function setReminder() {
    const days = input.value;
    console.log(days);
    
                
    if (days >= 1) {
        console.log("Don't forget to water your plants in "+ days+" days!");
        p.textContent = "Don't forget to water your plants in "+ days+" days!";
    } else {
        p.textContent = "Invalid content, try anew";
    }
};

console.log(days);

button.addEventListener("click", setReminder);