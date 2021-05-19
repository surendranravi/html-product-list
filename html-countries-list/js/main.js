var countryList = [];

var searchCountry = '';

var darkMode = false;

document.getElementById('searchInput').value = searchCountry;

var countryList = [];


changeMode();

fetch('https://restcountries.eu/rest/v2/all').then((res)=> {
    res.json().then((res)=>{
      countryList = res;
        showCountryList(res)    
            
    })
})


function changeMode(){
  

  console.log("darkmode is ", darkMode);

  if(darkMode){
    document.getElementById('modeBtn').innerHTML = `<i class="fa fa-moon" aria-hidden="true"></i> Dark Mode`;
    document.body.style.backgroundColor = "#212c36";

  }else{
    document.getElementById('modeBtn').innerHTML = `<i class="fa fa-moon-o" aria-hidden="true"></i> Dark Mode`
    document.body.style.backgroundColor = "#fafafa";
  }
  
  
  darkMode = !darkMode

}


function searchCountryList(value){
  searchCountry = value;
  showCountryList(countryList);
}



function showCountryList(data){
    var listItem = '';

    data = data.filter((obj)=> obj.name.toLowerCase().match(searchCountry.toLowerCase()))

    data.forEach((obj, index)=> {

        listItem += `  <div class="col-md-3 d-flex mb-4">
        <div class="box">
        <img src="${obj.flag}">
        <div class="m-3">
          <b class="mb-2">${obj.name}</b><br>
          <span style="font-weight: 500;">Population: <span style="font-weight: 400;color: #7b7b7b;">${obj.population}</span></span><br>
          <span style="font-weight: 500;">Region: <span style="font-weight: 400;color: #7b7b7b;">${obj.region}</span></span><br>
          <span style="font-weight: 500;">Capital: <span style="font-weight: 400;color: #7b7b7b;">${obj.capital}</span></span><br><br>
        </div>
      </div>
      </div>`

        
    })


   document.getElementById('country-item').innerHTML = listItem;

}