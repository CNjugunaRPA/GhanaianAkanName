var bday;
bday = window.prompt("When is your birthday?","");

var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday']

var currentTime = new Date();

var currentDay = currentTime.getDay();

var currentDayName= days[currentDay];

document.write("You were born on "+currentDayName);