/*eslint-env browser*/
"use strict";
//Global Variables    
var email, isValid = true;

//Helper Function
var $ = function(id) {
    return document.getElementById(id);
};

//Validate e-mail before submission
$("submit").addEventListener("click", function() {
    email = $("email").value;
    if (email == "") {
        $("email_error").innerHTML = "* Please provide a valid e-mail";
        $("email").focus();
    } else if (email.indexOf("@") == -1) {
        $("email_error").innerHTML = "* Please provide a valid e-mail";
        $("email").focus();
    } else if (email.indexOf(".") == -1) {
        ("email_error").innerHTML = "* Please provide a valid e-mail";
        $("email").focus();
    } else {
        $("submit").disabled = true;
        //disables button after submission
        $("email_error").innerHTML = "";
        //clear email error message
        $("wrapper").style.display = "none";
        //hide form to display feedback
        $("feedback").style.display = "block";
        //displays feedback div
        $("feedback").innerHTML = "<p>Thank you for subscribing!</p>" + "<p>We will notify you at</p> " + email + "<p> when the website launches</p>";
        //feedback provided after e-mail submission
        setInterval(function() {
            $("feedback").style.display = "none";
            $("wrapper").style.display = "block";
        }, 5000);
        //sets duration for feedback display before reloading original page
        isValid = false;
    }
});
