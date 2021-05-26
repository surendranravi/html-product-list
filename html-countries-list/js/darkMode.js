var darkMode = !(localStorage.getItem('darkMode') ? true : false)
var r = document.querySelector(':root');

this.changeMode();

function changeMode(){
    if(darkMode){
      document.getElementById('modeBtn').innerHTML = `<span style="color:#f1f7fa;"><i class="fa fa-moon" aria-hidden="true" ></i> Dark Mode</span>`;
      r.style.setProperty('--backgroud-color', '#212d36');
      r.style.setProperty('--card-bg-color', '#2b3743');
      document.body.style.color = "#f1f7fa";
      localStorage.removeItem('darkMode')
    }else{
      document.getElementById('modeBtn').innerHTML = `<span style="color:#16171b;"><i class="fa fa-moon-o" aria-hidden="true"></i> Dark Mode</span>`
      r.style.setProperty('--backgroud-color', '#fafafa');
      r.style.setProperty('--card-bg-color', '#fff');
      document.body.style.color = "#16171b";
      localStorage.setItem('darkMode', true);
    }
    darkMode = !darkMode
   
  }
  