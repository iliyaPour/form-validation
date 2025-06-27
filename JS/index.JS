    
    //  Eye Icon 

    let eyeicon = document.getElementById("icons");
    let password = document.getElementById("pass");
    let conpassword = document.getElementById("conpass");
    let seyeicon = document.getElementById("sicons");

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

        seyeicon.onclick = function(){
            if (conpassword.type == "password") {
                conpassword.type = "text";
                seyeicon.src = "eye-icons/eye-open.png";
            }
            else{
                conpassword.type = "password";
                seyeicon.src = "eye-icons/eye-close.png";
            }
        }

        // Validation
        function validation(){
            var name = document.getElementById("name").value;
            var user = document.getElementById("user").value;
            var pass = document.getElementById("pass").value;
            var confirmpass = document.getElementById("conpass").value;
            var mobileNumber = document.getElementById("mobileNumber").value;
            var emails = document.getElementById("emails").value;

        // Clear previous error messages
            document.getElementById("Name").innerHTML = "";
            document.getElementById("emailids").innerHTML = "";
            document.getElementById("username").innerHTML = "";
            document.getElementById("passwords").innerHTML = "";
            document.getElementById("confrmpass").innerHTML = "";
            document.getElementById("mobileno").innerHTML = "";

        // Name Validation
            if (name === "") {
                document.getElementById("Name").innerHTML = " * please fill the Name field *";
                return false;
            }

        // Email Validation
            if (emails === "") {
                document.getElementById("emailids").innerHTML = " * please fill the Email field *";
                return false;
            }

            if (emails.indexOf("@") <= 0) {
                document.getElementById("emailids").innerHTML = " * invalid email *";
                return false;
            }

            if (emails.charAt(emails.length - 5) !== "." && 
                emails.charAt(emails.length - 4) !== "." && 
                emails.charAt(emails.length - 3) !== ".") {
                document.getElementById("emailids").innerHTML = " * invalid email *";
                return false;
            }

        // User Name Validation
            if (user === "") {
                document.getElementById("username").innerHTML = " * please fill the Username field *";
                return false;
            }

            if (user.length < 3 || user.length > 20) {
                document.getElementById("username").innerHTML = " * Username length must be between 3 and 20 *";
                return false;
            }

            if (!isNaN(user)) {
                document.getElementById("username").innerHTML = " * only characters are allowed *";
                return false;
            }

        // Password Validation & Confirm Password Validation
            if (pass === "") {
                document.getElementById("passwords").innerHTML = " * please fill the Password field *";
                return false;
            }

            if (pass.length < 5 || pass.length > 20) {
                document.getElementById("passwords").innerHTML = " * Password length must be between 5 and 20 *";
                return false;
            }

            if (pass !== confirmpass) {
                document.getElementById("confrmpass").innerHTML = " * Password mismatch *";
                return false;
            }

            if (confirmpass === "") {
                document.getElementById("confrmpass").innerHTML = " * please fill the Confirm Password field *";
                return false;
            }

        // Mobile Number Validation
            if (mobileNumber === "") {
                document.getElementById("mobileno").innerHTML = " * please fill the Mobile number field *";
                return false;
            }

            if (isNaN(mobileNumber)) {
                document.getElementById("mobileno").innerHTML = " * user must write digits only, not characters *";
                return false;
            }

            if (mobileNumber.length !== 11) {
                document.getElementById("mobileno").innerHTML = " * Mobile number must be 11 digits only *";
                return false;
            }

            return true;
        }

