document
  .getElementById("syotaTiedot")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var txt;
    var person = document.getElementById("name").value;
    var ika = document.getElementById("age").value;
    
    
    /*if ((person == null || person == "") || (ika == null || ika == "")) {
      txt = "Kirjoitithan kenttiin nimesi ja ikäsi?";
    } else {
      txt = `Hei ${person}! Hauska tutustua!<br>Aloitetaanko?</br><br><img class="hymiot" src="kuvat_toiminta/smiley.png" alt="hymiöpeukut" width="130px" height="100px" />`;
    }

    document.getElementById("tervehdys").innerHTML = txt;*/

    if (person == null || person == "")  {
      txt = "Kirjoitithan kenttään nimesi?";
    } else if (!isNaN(person)) {
      txt = "Numerot eivät valitettavasti nimessä käy."
    } else if (isNaN(ika)) {
        txt = "Kirjoitithan kenttään ikäsi?";
    } else {
      txt = `Hei ${person}! Hauska tutustua!<br>Aloitetaanko?</br><br><img class="hymiot" src="kuvat_toiminta/smiley.png" alt="hymiöpeukut" width="130px" height="100px" />`;
    }

    document.getElementById("tervehdys").innerHTML = txt;
  });
  