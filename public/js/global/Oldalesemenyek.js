$(function () {
    sideNav();
    changePage();
    changePass();
    compactMode();
    postAll();
    let cc = 0;
    dropDownMenus();

    const options = {
        bottom: "64px", // default: '32px'
        right: "unset", // default: '32px'
        left: "32px", // default: 'unset'
        time: "0.5s", // default: '0.3s'
        mixColor: "#fff", // default: '#fff'
        backgroundColor: "#F0F2F5", // default: '#fff'
        buttonColorDark: "#100f2c", // default: '#100f2c'
        buttonColorLight: "#fff", // default: '#fff'
        saveInCookies: false, // default: true,
        label: "🌓", // default: ''
        autoMatchOsTheme: true, // default: true
    };

    const darkmode = new Darkmode(options);
    darkmode.showWidget();

    function sideNav() {
        let width = 0;
        $(".openbtn").on("click", function () {
            $("#mySidenav").slideDown();
        });
        $(".closebtn").on("click", closeNav);
        $("#mySidenav a").on("click", closeNav);

        function closeNav() {
            $("#mySidenav").slideUp();
        }
    }

    function changePage() {
        for (let index = 0; index < $("article .tabcontent").length; index++) {
            let elem = $("article .tabcontent").eq(index);
            let id2 = "#" + elem.attr("id");
            let id1 = id2.toLowerCase();
            esemenyek(id1, id2);
        }

        function esemenyek(id1, id2) {
            $(id1).on("click", function () {
                openPage(id2);
            });
        }

        function openPage(pageName) {
            for (let i = 0; i < $(".tabcontent").length; i++) {
                $(".tabcontent").css("display", "none");
            }
            $(pageName).fadeIn(1000);
            $(pageName).css("visibility", "visible");

            $(".container").css("opacity", "1");
        }
    }

    function changePass() {
        $(".passchange").on("click", () => {
            $(".password-window").slideDown(1000);
        });
        $(".passwordOk").on("click", function () {
            $(".password-window").slideUp(1000);
        });
        $(".passwordNo").on("click", function () {
            $(".password-window").slideUp(1000);

            $(".password-notification").slideUp(1000);
            $("#pass-first").val("");
            $("#pass-second").val("");
        });

        window.onkeyup = function () {
            let passfirst = $("#pass-first").val();
            let passsecond = $("#pass-second").val();
            let btn = $(".passwordOk");
            if (passfirst == passsecond) {
                btn.removeAttr("disabled");

                $(".password-notification").slideUp(1000);
            } else {
                $(".password-notification").slideDown(1000);

                $(btn).attr("disabled", true);
            }
        };
    }

    function compactMode() {
        $(".btn").on("click", function () {
            megjelenites();
            $("*").toggleClass("compact-mode");
            function megjelenites() {
                $("html").hasClass("compact-mode")
                    ? $(".btn").text("Kompakt mód")
                    : $(".btn").text("Normál mód");
            }
        });

        $(".darkmode-user").on("click", function () {
            megjelenites();
            $("*").toggleClass("compact-mode");
            function megjelenites() {
                $("html").hasClass("compact-mode")
                    ? $(".darkmode-user span").text("Kompakt mód")
                    : $(".darkmode-user span").text("Normál mód");
            }
        });
    }

    function postAll() {
        $(".closeinfo").on("click", postClose);

        postCloseIfVisible();

        function postClose() {
            $(".post-info").fadeOut();
            $("article").css("opacity", "1");
        }
        function postCloseIfVisible() {
            $(document.body).click(function (e) {
                if (
                    $(".closeinfo").is(":visible") &&
                    e.target.matches("header,footer,body,article,aside,div")
                ) {
                    postClose();
                }
            });
        }
    }

    function dropDownMenus() {
      
        $("#muszakmenu").on("click",()=>{
          $(".open1").toggle(500);
        });
        $("#beosztasmenu").on("click",()=>{
          $(".open2").toggle(500);
        });
        $("#egyebmenu").on("click",()=>{
          $(".open3").toggle(500);
        });
    }
});
