var countryList = [];

var searchCountry = '';
var regionList = [];
var selectedRegion = '';
var darkMode = false;

document.getElementById('searchInput').value = searchCountry;

var countryList = [];


var r = document.querySelector(':root');

changeMode();



fetch('https://restcountries.eu/rest/v2/all').then((res)=> {
    res.json().then((res)=>{
      countryList = res;
      var regions = '<option>Filter By Region</option>'
      res.forEach((obj)=> {
        if(obj.region && regionList.indexOf(obj.region) <= -1 ){
          regionList.push(obj.region)
          regions += `<option value="${obj.region}">${obj.region}</option>`
        }
      })

      document.getElementById('region-options').innerHTML = regions;
      
      showCountryList(res)    
    })
})




function changeMode(){
  if(darkMode){
    document.getElementById('modeBtn').innerHTML = `<span style="color:#f1f7fa;"><i class="fa fa-moon" aria-hidden="true" ></i> Dark Mode</span>`;
    r.style.setProperty('--backgroud-color', '#212d36');
    r.style.setProperty('--card-bg-color', '#2b3743');
    document.body.style.color = "#f1f7fa";
  }else{
    document.getElementById('modeBtn').innerHTML = `<span style="color:#16171b;"><i class="fa fa-moon-o" aria-hidden="true"></i> Dark Mode</span>`
    r.style.setProperty('--backgroud-color', '#fafafa');
    r.style.setProperty('--card-bg-color', '#fff');
    document.body.style.color = "#16171b";
  }
  darkMode = !darkMode
}


function searchCountryList(value){
  searchCountry = value;
  showCountryList(countryList);
}

function searchByregion(value){
  selectedRegion = value;
  if(selectedRegion == 'Filter By Region'){
    selectedRegion = ''
  }
  showCountryList(countryList)
}


function showCountryList(data){
    var listItem = '';
    data = data.filter((obj)=>  {
  
      
    if((obj.region.toLowerCase().match(selectedRegion.toLowerCase()) && obj.name.toLowerCase().match(searchCountry.toLowerCase()) )  ){
      return obj         
    }
    
    })

    data.forEach((obj, index)=> {

        listItem += `  <div class="col-md-3 d-flex mb-4">
        <div class="box">
        <img src="${obj.flag}">
        <div class="m-3">
          <b class="mb-2">${obj.name}</b><br>
          <span style="font-weight: 500;">Population: <span style="font-weight: 400;color: #a7b1be;">${obj.population}</span></span><br>
          <span style="font-weight: 500;">Region: <span style="font-weight: 400;color: #a7b1be;">${obj.region}</span></span><br>
          <span style="font-weight: 500;">Capital: <span style="font-weight: 400;color: #a7b1be;">${obj.capital}</span></span><br><br>
        </div>
      </div>
      </div>`
    })


   document.getElementById('country-item').innerHTML = listItem;

}