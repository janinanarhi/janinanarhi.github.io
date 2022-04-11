/* function kirjoitaNimi() {
    var txt;
    var person = prompt("Kirjoita nimesi tähän:", "");
    if (person == null || person == "") {
      txt = "Kirjoitithan kenttään nimesi?";
    } else {
      txt = "Hei " + person + '! Nimeni on Janina. Hauska tutustua!<br>Aloitetaanko?<br><br><img class="hymiot" src="smiley.png" alt="hymiöpekut">';
    }
    document.getElementById("demo1").innerHTML = txt;
  }
 */

document.getElementById("syotaNimi").addEventListener("submit", function(event) {
  
  event.preventDefault()
  var txt;
  var person = document.getElementById("name").value
  if (person == null || person == "") {
    txt = "Kirjoitithan kenttään nimesi?";
  } else {
    txt = "Hei " + person + '! Nimeni on Janina. Hauska tutustua!<br>Aloitetaanko?</br><br><img class="hymiot" src="kuvat/smiley.png" alt="hymiöpekut"/>';
  }
  document.getElementById("tervehdys").innerHTML = txt;
}
)