
//making some map at certain lat and long and zoom
var map = L.map('map').setView([40.92, -74.16], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

//adding marker for demonstration


var GOAC = document.querySelector('#GOAC');

GOAC.addEventListener('click', ()=> {
    const marker = L.marker([40.92, -74.16]).addTo(map);
    marker.bindPopup("<b>The Girls Of Atomic City</b><br>page 5: Celia Szapka gets picked up for her 'secret' assignment.").openPopup();
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

