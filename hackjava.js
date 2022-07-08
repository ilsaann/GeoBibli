
//making some map at certain lat and long and zoom ////////////////////////////////////////////////////////////////////////////////////////////////////////
var map = L.map('map').setView([40.9, -74.1], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//fixing some book points for the concept demo////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
//var isVerity;
Verity.addEventListener('click', () => {
   //isVerity ? isVerity = false : isVerity = true
   
    let marker1 =  L.marker([40.712, -74.006]).addTo(map);
    marker1.bindPopup("<b>Verity</b><br> Lowen Ashleigh meets Jeremy Crawford in New York City.").togglePopup();
   
})

//template for more dynamically grabbing data from BookData/////////////////////////////////////////////////////////////////////////////////////////
const WTCDS = document.querySelector('#WTCDS')
const wtcdsInfo= storedBooks[2]
const wtcdsPoints= wtcdsInfo.Points
WTCDS.addEventListener('click',() =>{
  for (i=0; i < wtcdsPoints.length; i++){
    let coordinate= wtcdsPoints[i].markerCoordinate
    let message= wtcdsPoints[i].message
    L.marker(coordinate).addTo(map).bindPopup(message).openPopup();

  }
  
})



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//making some information collapsible///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Search Bar and AJAX to openLibrary///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const $input = $("input[name='search']");
const $userForm = $("#user-search");
const $submitButton = $("#submit");

$userForm.submit((event)=> {
  event.preventDefault();
  const userInput = $input.val();
  console.log(userInput);
  const URL = `https://openlibrary.org/search.json?q=${userInput}`;
  $.get(URL, (data) => {
    console.log(data)
    const $display = $('#display');
    $display.html(" ")
    for (let i = 0; i < data.docs.length; i++){
      const result = data.docs[i]
      const Title = result.title ? result.title : 'untitled'
      const Author = result.author_name ? result.author_name[0] : 'unkown author'
      const pageCount = result.number_of_pages_median ? result.number_of_pages_median : '0'
      const Published = result.publish_date ? result.publish_date[0] : 'no date entered'
      
      
      const disres = `${Title}: by ${Author} <br>${pageCount} pages, published: ${Published} `
      const $displayedResult = $('<li></li>');
      $displayedResult.html(disres)

//if Title and Author match BookData, underline result
      for (let j = 0; j < storedBooks.length; j++) {
        const mappedTitle = storedBooks[j].Title
        const mappedAuthor = storedBooks[j].Author

        console.log(Title, mappedTitle)
      
        if ( (mappedTitle === Title) && (mappedAuthor === Author)){
          $displayedResult.css("text-decoration","underline")
          console.log('match found')
        }
      }
      
      
      $display.append($displayedResult);
    }

  })
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
