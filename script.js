/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Aspect");

let person = prompt("Please enter your scratch username", "John Doe");
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "! How are you today?";
}
alert("Welcome + pe");