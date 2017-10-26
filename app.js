/*Using the jQuery validation plug in, validate a form that you create. 
Must contain full name, address, state, city, zip, email and telephone number.*/

function addElements() {               
    var form = $("<form class='form' id='form' name='form'></form>").text("My First Form.");
    var fullName = $("<br><input type='text' name='fullName' class='fullName' placeholder='Full Name'></input>");
    var address = $("<br><input type='text' name='address' class='address' placeholder='Address'></input>");
    var state = $("<br><input type='text' name='state' class='state' placeholder='State'></input>");
    var city = $("<br><input type='text' name='city' class='city' placeholder='City'></input>");
    var zip = $("<br><input type='text' name='zip' class='zip' placeholder='Zip'></input>");
    var email = $("<br><input type='email' name='email' class='email' placeholder='Email'></input>");
    var phone = $("<br><input type='text' name='phone' class='phone' placeholder='Phone Number'></input>");
    var submit = $("<br><input type='submit' class='submit'></input>");
    $("body").append(form);      
    $("form").append(fullName, address, state, city, zip, email, phone, submit);
}

addElements();

// Set up rules for acceptable input for the form
$(document).ready(function(){
    $("#form").validate({
        rules: {
            fullName: {
                required: true
            },
            address: {
                required: true
            },
            state: {
                required: true
            },
            city: {
                required: true
            },
            zip: {
                digits: true,
                required: true,
                minlength: 5,
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                digits: true,
                required: true,
                minlength: 10,
            }
        },
        messages: {
            fullName: "Please enter your first and last name",
            email: "Please enter a valid email address",
            zip: "Please enter your 5 digit zip code",
            phone: "Please enter your 10 digit phone number"
        },
    });
});