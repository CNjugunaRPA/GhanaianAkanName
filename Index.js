(function() {
    ('.card').click(function(){
        (this).find('.expand').slideToggle();
    });
});

//Backend
//Create an Array for the Male & Female names, as well as the days of the week
// YY=year; MM=month; DD=day; G=gender
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var CC = Year.slice(0, 1);
var YY = Year.slice(2, 3)
var MM = "Month"();
var DD = "Date"
var d = (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7;
if (g === "Female") {
    return d && femaleAkanNames[d.getDay()];
}
var AkanName = function (d, m, y, g) {
    [maleAkanNames]; [femaleAkanNames];
}
else {
    return d && maleAkanNames[d.getDay()];
    }


//Frontend or User Interface
(document).ready(function) {
    ("form").submit(function(event) {
        event.preventDefault();
        var YY = parseInt(('#Year').val());
        var MM = parseInt(('#Month').val());
        var DD = parseInt(('#Date').val());
        var g = ("input:radio[name=gender]:checked").val();
        var result = AkanName (y, m, d, g);
        alert("Your Ghanaian Akan Name is": + result);
    }
    //On refreshing the form
    document.getElementById("form").requestFullscreen();
    };