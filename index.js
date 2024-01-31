function increment(inputId) {
    var inputElement = document.getElementById(inputId);
    var currentValue = parseInt(inputElement.value, 10);
  
    if (currentValue < parseInt(inputElement.max, 10)) {
      inputElement.value = currentValue + 1;
    }
  }
  
  function decrement(inputId) {
    var inputElement = document.getElementById(inputId);
    var currentValue = parseInt(inputElement.value, 10);
  
    if (currentValue > 0) {
      inputElement.value = currentValue - 1;
    }
  }

  function submitForm() {

    var emailInput = document.getElementById("email");
    var phone = document.getElementById("phone").value;
    var fullName = document.getElementById("full-name").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var postal = document.getElementById("postal").value;

    if (emailInput.value === undefined) {
        return;
      }

    var email = emailInput.value;

    if (email === "" || phone === "" || fullName === "" || address === "" || city === "" || postal === "") {
        alert("Please fill out all required fields.");
        return;
      }

      if (email.indexOf("@") === -1) {
        alert("Please enter a valid e-mail address");
        return;
      }
    

      alert("Form submitted successfully!");

      document.getElementById("myForm").reset();
    
  }