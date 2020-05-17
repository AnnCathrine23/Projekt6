function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var results = ["Production A", "Production B", "Production C", "Production D"];
document.getElementById("result").innerHTML = results.length;
