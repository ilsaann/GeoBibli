
//making some map at certain lat and long and zoom
var map = L.map('map').setView([40.9, -74.1], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);


 const GOAC = document.querySelector('#GOAC');

GOAC.addEventListener('click', ()=> {
    let marker1 = L.marker([40.92, -74.16]).addTo(map);
    marker1.bindPopup("<b>The Girls Of Atomic City</b><br>page 5: Celia Szapka gets picked up for her 'secret' assignment.").openPopup();
    let marker2 = L.marker([35.963, -83.918]).addTo(map);
    marker2.bindPopup("<b>The Girls Of Atomic City</b><br>page 43: Jane Greer reports for her 'secret' assignment as a statistician.").openPopup();
    let marker3 = L.marker([36.0103, -84.269]).addTo(map);
    marker3.bindPopup("<b>The Girls Of Atomic City</b><br>Atomic City").openPopup();
})

const Verity = document.querySelector('#Verity')
Verity.addEventListener('click', () => {
    let marker1 =  L.marker([40.712, -74.006]).addTo(map);
    marker1.bindPopup("<b>Verity</b><br> Lowen Ashleigh meets Jeremy Crawford in New York City.").togglePopup();
})


//making some information collapsible
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


