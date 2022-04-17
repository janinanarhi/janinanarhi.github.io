document
  .getElementById("syotaNimi")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var txt;
    var person = document.getElementById("name").value;

    if (person == null || person == "") {
      txt = "Kirjoitithan kenttään nimesi?";
    } else {
      txt = "Hei " + person + '! Nimeni on Janina. Hauska tutustua!<br>Aloitetaanko?</br><br><img class="hymiot" src="../kuvat/smiley.png" alt="hymiöpeukut"/>';
    }

    document.getElementById("tervehdys").innerHTML = txt;
  });