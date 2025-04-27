/*
   Independant Project
   Filename: script.js

   Author:   Shirley Beloate
         Date:   02 04 2025
         HTML5 and CSS3 Illustrated, Independant Challenge
 */
/* create variables */
var fromValue = document.querySelector(".feedback-from");
var feedbackValue = document.querySelector(".feedback-content");
var nameField = document.querySelector("#nameinput");
var feedbackField = document.querySelector("#additionalinfo-info");
var form = document.querySelector(".contact-form");
var submitButton = document.querySelector(".sumitbutton");


 /* add text to preview section */
function completePreview() {
   fromValue.textContent = nameField.value;
   feedbackValue.textContent = feedbackField.value;

   if (form.checkValidity() === true) {
              submitButton.className = "submitbutton show";
   }
}
/*
completePreview();
*/

/* create event listener for changes to form */
        form.addEventListener("change", completePreview, false);
