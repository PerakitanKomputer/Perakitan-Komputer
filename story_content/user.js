function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5hdVz6jHJGL":
        Script1();
        break;
      case "6OKWa1Oefe1":
        Script2();
        break;
      case "5b6kWgboTKG":
        Script3();
        break;
      case "5nLZjzE6hoc":
        Script4();
        break;
      case "63QQTmJWmjn":
        Script5();
        break;
      case "6PaPNfV98Kn":
        Script6();
        break;
      case "5rBpOhytTLl":
        Script7();
        break;
      case "6L6PJybwEqa":
        Script8();
        break;
      case "608TWWZqmm2":
        Script9();
        break;
      case "5bOrjF3vpd4":
        Script10();
        break;
      case "5WEyECaezpE":
        Script11();
        break;
      case "6kd7B9Hy4hE":
        Script12();
        break;
      case "5zgsptAeW0g":
        Script13();
        break;
      case "6SyZlXGAsRX":
        Script14();
        break;
  }
}

function Script1()
{
  if ((document.fullScreenElement && document.fullScreenElement !== null) || 
 (!document.mozFullScreen && !document.webkitIsFullScreen)) {
 if (document.documentElement.requestFullScreen) { 
 document.documentElement.requestFullScreen(); 
 } else if (document.documentElement.mozRequestFullScreen) { 
 document.documentElement.mozRequestFullScreen(); 
 } else if (document.documentElement.webkitRequestFullScreen) { 
 document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT); 
 } 
 } else { 
 if (document.cancelFullScreen) { 
 document.cancelFullScreen(); 
 } else if (document.mozCancelFullScreen) { 
 document.mozCancelFullScreen(); 
 } else if (document.webkitCancelFullScreen) { 
 document.webkitCancelFullScreen(); 
 } 
 }
}

function Script2()
{
  if(void 0===window.stencilsheets){t="https://cluelabs.com/stencil/display/widget-sheets-init-v2",s={authtool:"sl",chart:"MTc0OXw0ODE2fDg5YzU3YjFjMDljOTRlMDU3YjhkMjQ2MjI5YzdjMjUy"},a=Object.keys(s).map(e=>encodeURIComponent(e)+"="+encodeURIComponent(s[e])).join("&");(xhttp=new XMLHttpRequest).onreadystatechange=function(){if(4==this.readyState&&200==this.status&&""!=this.responseText){var e=this.responseText,t=document.getElementsByTagName("head")[0],s=document.createElement("script");t.appendChild(s),s.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},xhttp.open("POST",t,!0),xhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),xhttp.send(a)}
        
}

function Script3()
{
  var player = GetPlayer();
SheetsSet('NAMA', player.GetVar('namaLengkap'));
SheetsSet('KELAS', player.GetVar('kelas'));
SheetsSet('NILAI', player.GetVar('nilai'));
SheetsSet('KETERANGAN', player.GetVar('lulus'));
}

function Script4()
{
  var player = GetPlayer();
SheetsSet('NAMA', player.GetVar('namaLengkap'));
SheetsSet('KELAS', player.GetVar('kelas'));
SheetsSet('NILAI', player.GetVar('nilai'));
SheetsSet('KETERANGAN', player.GetVar('gagal'));
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script8()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

function Script9()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

function Script10()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}

function Script11()
{
  var audio = document.getElementById('bgSong');
audio.src="musik1.mp3";
audio.load();
audio.play();
}

function Script12()
{
  var audio = document.getElementById('bgSong');
audio.src="musik2.mp3";
audio.load();
audio.play();
}

function Script13()
{
  var audio = document.getElementById('bgSong');
audio.src="musik3.mp3";
audio.load();
audio.play();
}

function Script14()
{
  var audio = document.getElementById('bgSong');
audio.src="musik4.mp3";
audio.load();
audio.play();
}

