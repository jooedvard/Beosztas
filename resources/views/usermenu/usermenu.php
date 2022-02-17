<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../node_modules/normalize.css/normalize.css" />
    <link rel="stylesheet" href="../node_modules/@fortawesome/fontawesome-free/css/all.css" />
    <link rel="stylesheet" href="/css/global/global.css">
    <link rel="stylesheet" href="css/usermenu/usermenu.css" />

    <meta name="csrf-token" content=<?php $token=csrf_token(); echo $token;?>>

    <script src="/node_modules/jquery/dist/jquery.min.js"></script>
    <link rel="stylesheet" href="/node_modules/jquery-ui-1.13.0/jquery-ui.min.css">
    <script src="/node_modules/jquery-ui-1.13.0/jquery-ui.js"></script>
    <script src="/js/global/Ajax.js"></script>
    <script src="/node_modules/darkmode-js/lib/darkmode-js.min.js"></script>
    <script src="/js/global/Oldalesemenyek.js"></script>
    <script src="/js/global/Osztalyok.js"></script>


    <script src="/js/user/user.js"></script>
    <title>Alkalmazott</title>
</head>

<div class="managerinfo">
    <div class="managerinfo-leftgrid">
        <span class="profile-name "></span>


    </div>

    <div class="managerinfo-rightgrid">


        <div class="openbtn"><img src="" alt="" class="profilepic"><span class="arrow">&#9660;</span></div>

    </div>

</div>

<div class="sidenav-container">
    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn">&times;</a>
        <a href="../usermenu" class="home">
            <div>Kezdőlap</div><span class="fas fa-home"></span>
        </a>
        <a id="nemerekra">Nem érek rá</a>
        <a id="statisztika">Statisztika</a>
        <a id="faliujsag">Faliújság</a>
        <a id="beosztas">Beosztás</a>
        <a href="logout" class="logout">
            <div class="logout-text">Kijelentkezés</div><span class="fas fa-sign-out-alt"></span>
        </a>
    </div>
</div>



<body>



    <div class="container">
        <aside class="useraside">
            <header>

                <nav>

                    <div class="navbar">

                        <a class="chilloutcafe">
                            <div class="fas fa-home"></div><span>Chill Out Cafe</span>
                        </a>
                        <a id="profiladatok" class="profiladatok">
                            <div class="fas fa-user"></div><span>Profil adatok</span>
                        </a>
                        <a class="darkmode-user">
                            <div class="fas fa-eye"></div><span>Kompakt mód</span>
                        </a>
                        <a class="passchange">
                            <div class="fas fa-user-lock"></div><span>Jelszó módosítás</span>
                        </a>

                    </div>
                </nav>




            </header>

            <div class="posts">


            </div>

        </aside>
        <article>

            <div id="Profiladatok" class="tabcontent">
              <div class="profile-head">
                <div class="profile-infos">
                    <img src="" alt="kép" />
                </div>
                <div class="name-location">
                    <div class="profile-nev"></div>
                    <div class="profile-munkakor"></div>
                </div>
                <div>
                    <ul>

                        <li><span class="far fa-map"></span><span class="location-address">Lakhely</span>
                        </li>
                        <li><span class="fas fa-phone"></span><span class="location-phone">Telefon</span>
                        </li>
                        <li><span class="far fa-envelope"></span><span class="location-email">Email</span>
                        </li>
                    </ul>
                </div>
                </div>

                <div id="tables">
                    <div class="profile-title">
                        <h3>Profil adatok</h3><span class="fas fa-user"></span>
                    </div>
                    <table id="elso"></table>

                </div>
            </div>

            <div id="Nemerekra" class="tabcontent">



            </div>

            <div id="Statisztika" class="tabcontent">
                <h3>Statisztika</h3>

            </div>

            <div id="Faliujsag" class="tabcontent">
                <h3 id="fu">Faliújság</h3>
                <div>
                    <button id="newpost" class="fas fa-plus"></button>
                    <fieldset>
                        <legend>Új bejegyzés</legend>
                        <div id="newpost-form">
                            <div class="form-grid">
                                <label for="cim">Cim:</label>
                                <input type="text" name="cim" id="newpost-cim">
                            </div>
                            <div class="form-grid">
                                <label for="tartalom">Tartalom:</label>
                                <textarea name="tartalom" id="newpost-tartalom" cols="30" rows="10"></textarea>
                                <div class="buttons">
                                    <button class="fas fa-check"></button>
                                    <button class="fas fa-times"></button>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                </div>



                <div class="posts-grid">
                    <ul class="posts-container">

                    </ul>

                </div>
                <div id="Beosztas" class="tabcontent">
                    <h3>Beosztás</h3>

                </div>
            </div>

        </article>
        <div class="password-window">
            <div class="password-window-bg">
                <h3>Jelszó módosítása</h3>
                <p class="password-notification">
                    A megadott jelszavak nem egyeznek meg!
                </p>
                <input type="text" placeholder="Régi jelszó..." />
                <br />
                <input id="pass-first" type="text" placeholder="Új jelszó..." />
                <br />
                <input id="pass-second" type="password" placeholder="Új jelszó ismét..." />
                <br />
                <div class="password-buttons">
                    <button class="passwordOk" disabled>Ok</button>
                    <button class="passwordNo">Mégse</button>
                </div>
            </div>
        </div>
        <div class="post-info">

            <div class="post-img">
                <img src="" alt="" />
            </div>
            <div class="post-info-user-data">
                <div class="close--title">

                    <h3></h3>
                    <button class="closeinfo">&times;</button>
                </div>
                <p class="info"></p>
                <section>Alkalmazott neve<br />Munkakör</section>

            </div>

        </div>


</body>

</html>