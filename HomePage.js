let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// ______________________________________________________________________________________________________________________________
var nowShowingTab = document.getElementById('now-showing')
var containerNS = document.createElement('div')
nowShowingTab.appendChild(containerNS)
containerNS.classList.add("container-NS")

var comingSoonTab = document.getElementById('comming-soon')
var containerCS = document.createElement('div')
comingSoonTab.appendChild(containerCS)
containerCS.classList.add("container-CS")

const getData = async () => {
  const data = await fetch(
    "FAKEAPI.json"
  )
    .then((data) => data.json())
    .then((data) => {
      for(let valueData of data){
        var selectMovie = document.getElementById('select-movie')
        var selectDate = document.getElementById('select-date')
        var selectCinema = document.getElementById('select-cinema')
        
        selectMovie.innerHTML += `<option> ${valueData.Title} </option>`
        selectDate.innerHTML += `<option> ${valueData.Released} </option>`
        selectCinema.innerHTML += `<option> ${valueData.Country} </option>`
       
        if(!valueData.ComingSoon){
        containerNS.innerHTML += `
          <div class="card">
          <div class="card-hover">
            <p> ${valueData.Rated} </p>
            <a id="${valueData.id}" onclick="storeId(this)"><button>DETAILS</button></a>
          </div>
          <img src=" ${valueData.Poster} " />
          <div class="content-card">
            <b> ${valueData.Title} </b>
            <hr />
            <div class="card-details">
              <p class="details-1"> ${valueData.Runtime} </p>
              <hr />
              <p class="details-2"> ${valueData.Released} </p>
            </div>
          </div>
        </div>
      `
    }

        if(valueData.ComingSoon){
          containerCS.innerHTML += `
          <div class="card">
          <div class="card-hover">
            <p> ${valueData.Rated} </p>
            <a id="${valueData.id}" onclick="storeId(this)"><button>DETAILS</button></a>
          </div>
          <img src=" ${valueData.Poster} " />
          <div class="content-card">
            <b> ${valueData.Title} </b>
            <hr />
            <div class="card-details">
              <p class="details-1"> ${valueData.Runtime} </p>
              <hr />
              <p class="details-2"> ${valueData.Released} </p>
            </div>
          </div>
        </div>
      `
        }
    
        
      }
      
      console.log(data)
    })
};

function storeId(el) {
  const clickedId = el.id
  console.log(clickedId)
  localStorage.setItem("clickedId", JSON.stringify(clickedId))
}
  
  
  
  const dataFromAPI = getData();
  
  function openEvents(evt, cityName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  document.getElementById("defaultOpen").click();