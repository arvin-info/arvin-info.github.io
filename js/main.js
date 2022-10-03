$(document).ready(function() {
    let currentPage = "home";
    let currentNavLink = $("#nav-ul").children().first().children()[0];

    $("#portfolio").hide();
    $("#about").hide();
    $("#contact").hide();

    $(".nav-link").click(function(e) {
        $(`#${currentPage}`).fadeOut(100)
        $(`#${e.currentTarget.innerHTML}`).fadeIn(500)

        currentPage = e.currentTarget.innerHTML

        $(currentNavLink).removeClass("selected");
        $(this).addClass("selected");

        currentNavLink = this;
    })

    let characterIndex = 0;

    let titleNames = ["a", "ar", "arv", "arvi", "arvin", "arvin.", "arvin.i", "arvin.in", "arvin.inf", "arvin.info", "arvin.inf", "arvin.in", "arvin.i", "arvin.", "arvin", "arvi", "arv", "ar" ];

    window.updateTitleName = function() {
        document.getElementsByTagName("title")[0].innerHTML = titleNames[characterIndex++ % titleNames.length];
    }

    setInterval(() => {
        window.updateTitleName()
    }, 500);

})