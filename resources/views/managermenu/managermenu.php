<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="csrf-token" content=<?php $token=csrf_token(); echo $token;?>>
    <link rel="stylesheet" href="/node_modules/normalize.css/normalize.css" />
    <link
      rel="stylesheet"
      href="/node_modules/@fortawesome/fontawesome-free/css/all.css"
    />
    
    <link rel="stylesheet" href="/css/managermenu/managermenu.css" />
    <link rel="stylesheet" href="/css/global/global.css">
    <script src="/node_modules/jquery/dist/jquery.min.js"></script>
    <link rel="stylesheet" href="/node_modules/jquery-ui-1.13.0/jquery-ui.min.css">
    <script src="/node_modules/jquery-ui-1.13.0/jquery-ui.js"></script>
 
    <script src="/node_modules/darkmode-js/lib/darkmode-js.min.js"></script>
    <script src="/js/global/Oldalesemenyek.js"></script>
    <script src="/js/global/Osztalyok.js"></script>
    <script src="/js/global/Ajax.js"></script>
    
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script src="/js/managermenu/manager.js"></script>
    <title>Üzletvezető</title>
  </head>
  <div class="managerinfo">
    <h4>Chill out Cafe</h4>
  </div>
  <header>
    

      <nav>
        
        <div  class="navbar"> 
          
            <a class="admin"> Üzletvezető</a>
            <a id="profiladatok" class="fas fa-user"><span>Profil adatok</span></a>
            <a class="darkmode-user fas fa-moon"><span>Sötét mód</span></a>
            <a href="#" class="passchange fas fa-user-lock"><span>Jelszó módosítás</span></a>
            <a href="../login/login.html" class="logout"><div class="fas fa-door-open"></div>Kijelentkezés</a>
           
        </div>
      </nav>
      <span style="font-size: 20px; cursor: pointer" class="openbtn"
        >&#9776;</span
      >
      <div id="mySidenav" class="sidenav">
        
        <a href="javascript:void(0)" class="closebtn">&times;</a>
        <a href="../admin/admin.html">Kezdőlap</a>
        <a id="munkakorok">Munkakörök</a>
        <a id="alkalmazottak">Alkalmazottak</a>
        
        <div class="dropdown3">
            <button class="dropbtn3">
               Műszakok ▼
            </button>  
              <div id="myDropdown3" class="dropdown-content3">
                  
                <a id="muszaktipush">Műszak típus hozzáadása</a>
                <a id="muszaktipusn">Műszak típus naphoz rendelése</a>
                <a id="muszaktipusm">Műszak eloszlás módosítása</a>
               </div>  
        </div>

        <div class="dropdown4">
            <button class="dropbtn4">
               Beosztások ▼
            </button>  
              <ul id="myDropdown4" class="dropdown-content4">
                <a id="napimunka">Napi munkaerőigény</a>
                <a id="ujbeosztas">Új Beosztás készítése</a>
                <a id="beosztasmod">Beosztás módosítása</a>
                <a id="beosztasmeg">Beosztás megtekintése</a>
              </ul>  
        </div>
        
        <a id="manstatisztika">Statisztika</a>
        <a id="manfaliujsag">Faliújság</a>
      </div>
    </div>
  </header>

  <body>
    <div class="container">

      <article>
        <div id="Profiladatok" class="tabcontent">
          <h1>Profil adatok</h1>
        <h2>Labanc Dániel</h2>
        <img src="../pictures/doctor.jpg" alt="kép"/>
        <div id="tables">
          <table id="elso"></table>
          <table id="masodik"></table>
        </div>
        </div>
        <div id="Muszaktipush" class="tabcontent">
          <h3>Műszak típus hozzáadása</h3>
          <button id="newmuszak"><span class="fa fa-plus"></span></button>
          <div class="muszaktipush-container">
            
          </div>
        </div>
        
        <div id="Muszaktipusn" class="tabcontent">
          
          <button id="muszaktipushsave" class="fas fa-save"></button>
          <h3 class="muszaktipusn-title">Műszak típus naphoz rendelése </h3>
          
          <div class="muszaktipusn-container">
            <div id="muszaktipusn-subcontainer">

            </div>
            <div id="muszaktipusnapok-content" class="selectable">
              <div id="mnap1" class="muszaktipusnap ui-widget-content">
                <h3>Hétfő</h3>
                <p></p>
              </div>
              <div id="mnap2" class="muszaktipusnap ui-widget-content">
                <h3>Kedd</h3>
                <p></p>
              </div>
              <div id="mnap3" class="muszaktipusnap ui-widget-content" >
                <h3>Szerda</h3>
                <p></p>
              </div>
              <div id="mnap4" class="muszaktipusnap ui-widget-content" >
                <h3>Csütörtök</h3>
                <p></p>
              </div>
              <div id="mnap5" class="muszaktipusnap ui-widget-content" >
                <h3>Péntek</h3>
                <p></p>
              </div>
              <div id="mnap6" class="muszaktipusnap ui-widget-content" >
                <h3>Szombat</h3>
                <p></p>
              </div>
              <div id="mnap7" class="muszaktipusnap ui-widget-content" >
                <h3>Vasárnap</h3>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        
        <div id="Muszaktipusm" class="tabcontent">
          <h3>Műszak eloszlás módosítása</h3>  
          <div class="muszaktipusm-container">
         
          </div>
        </div>
        
        <div id="Munkakorok" class="tabcontent">
          <h3>Munkakörök</h3>
          <button id="newmunkakor"><span class="fa fa-plus"></span></button>
          <div class="munkakor-container">
            
          </div>
        </div>
        <div id="Alkalmazottak" class="tabcontent">
          <table id="AlkalmazottakTabla">
              <tr>
                <th>Név</th>
                <th>Beosztás</th>
                <th>Lakcím</th>
                <th>Elérhetőség</th>
                <th>E-mail</th>
              </tr>
              <ul class="dropdown-content tablaDropdown">
                <li><a class="tablaAl" href="#">Gyors módosítás</a></li>
                  <li><a class="tablaAl" href="#">Profil megtekintése</a></li>
              </ul>
          </table>
          
          <span class="ujAlkalmazott fa fa-plus"></span>
        </div>
        <div id="ManStatisztika" class="tabcontent">
          
      
            
        <div class="statmenu">
          <div class="statmenu-buttons">
        
          <button class="fas fa-chart-bar" id="bar"><span> Munkakörök</span></button>
          <button class="fas fa-chart-pie" id="pie"><span> Heti óraszám</span></button>
          <button class="fas fa-stream" id="stream"><span> Szabadságon</span></button>
       
          </div>
          <div id="Man-statisztika-elem">
            
          </div>
        
        </div>
        </div>
        <div id="ManFaliujsag" class="tabcontent">
          <h3 id="mfu">Faliújság</h3>
          <button id="newpost">Új bejegyzés</button>
          <div class="faliujsag-container">

          </div>
        </div>
        <div id="Napimunka" class="tabcontent">
        </div>
        <div id="Ujbeosztas" class="tabcontent">
          <h3>Új beosztás készítése</h3>
          <p></p>
        </div>
        <div id="Beosztasmod" class="tabcontent">
          <h3>Beosztás módosítása</h3>
          <p></p>
        </div>
        <div id="Beosztasmeg" class="tabcontent">
          <h3>Beosztás megtekintése</h3>
          <p></p>
        </div>
      </article>
      <div class="password-window">
        <div class="password-window-bg"> 
          <h3>Jelszó módosítása</h3>
          <p class="password-notification">A megadott jelszavak nem egyeznek meg!</p>
          <input type="text" placeholder="Régi jelszó...">
          <br>
          <input id="pass-first" type="text" placeholder="Új jelszó...">
          <br>
          <input id="pass-second" type="password" placeholder="Új jelszó ismét...">
          <br>
          <div class="password-buttons">
          <button class="passwordOk" disabled>Ok</button>
          <button class="passwordNo">Mégse</button>
        </div>
        </div>
      </div>
  </div>
    <footer class="label"><div>Vizsgamunka © 2021</div></footer>
    
  </body>
</html>