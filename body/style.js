function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// der er en lille fejl på denne kode
const results = ["Production A", "Production B", "Production C", "Production D"];
document.getElementById("result").innerHTML = results.length;

function myFunction2() {
       // Declare variables
       var input, filter, table, tr, td, i, txtValue;
       input = document.getElementById("myInput");
       filter = input.value.toUpperCase();
       table = document.getElementById("myTable");
       tr = table.getElementsByTagName("tr");

       // Loop through all table rows, and hide those who don't match the search query
       for (i = 0; i < tr.length; i++) {
         td = tr[i].getElementsByTagName("td")[0];
         if (td) {
           txtValue = td.textContent || td.innerText;
           if (txtValue.toUpperCase().indexOf(filter) > -1) {
             tr[i].style.display = "";
           } else {
             tr[i].style.display = "none";
           }
         }
       }
     }

// modals javascript
     // Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//tabs

  function openTab(evt, styleTab) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(styleTab).style.display = "block";
    evt.currentTarget.className += " active";
  }
