    
    // Eye Icon 
    
    let eyeicon = document.getElementById("icons");
    let password = document.getElementById("password");

        eyeicon.onclick = function(){
            if (password.type == "password") {
                password.type = "text";
                eyeicon.src = "eye-icons/eye-open.png";
            }
            else{
                password.type = "password";
                eyeicon.src = "eye-icons/eye-close.png";
            }
        }

        function validation() {
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

        // Clear previous error messages
            document.getElementById("emailError").innerHTML = "";
            document.getElementById("passwordError").innerHTML = "";

        // Validate email
            if (email === "") {
                document.getElementById("emailError").innerHTML = " * Please fill the Email field *";
                return false;
            }
            if (email.indexOf("@") <= 0 || email.indexOf(".") <= 0) {
                document.getElementById("emailError").innerHTML = " * Invalid email *";
                return false;
            }

            // Validate password
            if (password === "") {
                document.getElementById("passwordError").innerHTML = " * Please fill the Password field *";
                return false;
            }

            return true;
        }