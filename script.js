// Function to generate a random string
function generateRandomId() {
    var id = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 8; i++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
  }
  
  // Get the color inputs and generate random IDs for them
  var color1 = document.querySelector(".color1");
  var color2 = document.querySelector(".color2");
  var id1 = "color-" + generateRandomId();
  var id2 = "color-" + generateRandomId();
  color1.setAttribute("class", id1);
  color2.setAttribute("class", id2);
  
  // Set the initial background color and update the CSS text
  var body = document.getElementById("gradient");
  var css = document.querySelector("h3");
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
  
  // Listen for changes to the color inputs
  color1.addEventListener("input", function(){
      body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
      css.textContent = body.style.background + ";";
  });
  
  color2.addEventListener("input", function(){
      body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
      css.textContent = body.style.background + ";";
  });
  

