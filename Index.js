alert("Your Akan name is, " + akanName + ".");


var akanName = function akanName (YY, MM, DD, g){
    var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var maleAkanName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleAkanName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    
    
    if (g === "Female") {
            return d && femaleAkanName [d.getDay()];
    }
    else {
        return d && maleAkanName[d.getDay()];
    }
    }
    
    //Frontend or User Interface
    (document).ready(function() {
         ("#form").submit(function(event) 
         {
        function generateAkan (){
    
        }
             event.preventDefault();
             var YY = "Year"();
             var MM = "Month"();
             var DD = "Date"();
             var g = "Gender"();
             var d = newDate(YY, MM, DD);
            //  var YY = parseInt(('#Year').val());
            //  var MM = parseInt(('#Month').val());
            //  var DD = parseInt(('#Date').val());
             var g = $("input:radio[name=Gender]:checked").val();
             var result = akanName[YY, MM, DD, g];
             alert("Your Ghanaian Akan Name is", + result);
         });
        
    // //    On refreshing the form
    document.getElementById("AkanNameGeneratorForm").reset();
    });
    
    
    
    
    // Backend
    // Create an Array for the Male & Female names, as well as the days of the week
    YY = year; MM = month; DD = day; g = Gender; d = newDate
    var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var maleAkanName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleAkanName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var CC = Year.slice(0, 1);
    var YY = Year.slice(2, 3)
    var MM = "Month"();
    var DD = "Date"
    var g = "Gender"
    var genderNew = gender.toLowerCase();//to convert input gender to lower case
    var daysOfTheWeek = newDate

    var akanName = function (YY, MM, DD, g) {
        [maleAkanName]; [femaleAkanName];
    }

    if (g === "Female") {
        alert (d && femaleAkanName[d.getDay()]);
    }    
    else 
        alert(d && maleAkanName[d.getDay()]);
    
