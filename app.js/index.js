function errorMessage() {
  let error1 = document.querySelector(".error1");
  let error2 = document.querySelector(".error2");
  let error3 = document.querySelector(".error3");
  let error4 = document.getElementById("error4");

  let firstName= document.getElementById("firstname")
  let lastname= document.getElementById("lastname")
  let email= document.getElementById("email")
  let password= document.getElementById("password")
  let x =
    document.forms["myform"]["password" || "firstname" || "email" || "lastname"]
      .value;
  if (x == "") {
    firstName.style.border="1px solid red"
    lastname.style.border="1px solid red"
    email.style.border="1px solid red"
    password.style.border="1px solid red"
    error1.innerHTML = "<em>First Name cannot be empty</em>";
    error2.innerHTML = "<em>Last Name cannot be empty</em>";
    error3.innerHTML = "<em>looks like this's not an email</em>";
    error4.innerHTML = "<em>Password cannot be empty</em>";

    error1.style.color = "red";
    error2.style.color = "red";
    error3.style.color = "red";
    error4.style.color = "red";

    return false;
  }
}
