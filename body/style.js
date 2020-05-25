// Top nav - header

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
       // erklære variabler
       var input, filter, table, tr, td, i, txtValue;
       input = document.getElementById("myInput");
       filter = input.value.toUpperCase();
       table = document.getElementById("myTable");
       tr = table.getElementsByTagName("tr");

       // Loop alle tabel rækker, og gemmer dem som ikke matcher forespørgsel
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
     // Få modal
const modal = document.getElementById("myModal");

// Får kanppen som åbner modal
const btn = document.getElementById("myBtn");

// Får <span> element som lukker modal
const span = document.getElementsByClassName("close")[0];

// når brugeren klikker på knappen, åben modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Når bruger klikker på <span> (x), lukker modal
span.onclick = function() {
  modal.style.display = "none";
}

// Når brugeren klikker udenfor modalen, lukkes det
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//tabs - sidebar

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
