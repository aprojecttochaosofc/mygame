module.exports = function homepage(req, res) {

    res.send(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MEU JOGO ONLINE</title>

    <link rel="stylesheet" type="text/css" href="assets/css/styles.css">
    <link href="assets/css/slidercaptcha.min.css" rel="stylesheet" />

    <script type="text/javascript" src="assets/js/alert7.js"></script>

    <link rel="icon" href="assets/images/icone.png" type="image/png" id="favicon"/>
</head>

<body>

<div id="overlay">
    <div id="captcha"></div>
</div>


<div class="header" id="header"></div>


<div class="main-container">

    <div class="left-section" id="hotelimage"></div>


    <div class="right-section">


        <div class="login-form" id="loginForm">
        </div>


        <div class="signup-form" id="signupForm">
        </div>


    </div>

</div>



<button class="menu-toggle" id="menuToggle">☰ MENU</button>



<div class="nav" id="navMenu"></div>



<div class="news-section">

    <div class="news-main">

        <h2 class="section-title">
            Últimas Notícias
        </h2>


        <div class="featured-news" id="featurednews">
        </div>


        <div class="news-grid" id="newsgrid">
        </div>


        <div class="more-news">
            <a href="#">
                MAIS NOTÍCIAS »
            </a>
        </div>

    </div>



    <div class="news-sidebar" id="newssidebar">

    </div>


</div>



<div class="footer">

    <div class="footer-bottom">

        <div>
        © 2004 - 2026 Sulake Corporation Ltd. Habbo é uma marca registrada da Sulake na União Europeia, EUA, Japão, China e vários outras jurisdições. Todos os direitos reservados.
        </div>

        <div class="footer-logo">
            Sulake
        </div>

    </div>

</div>





<script src="assets/js/longbow.slidercaptcha.min.js"></script>


<script>


function captchaslide(){


    sliderCaptcha({

        id: 'captcha',

        repeatIcon: 'fa fa-redo',


        onSuccess: function(){


            setTimeout(function(){


                document.getElementById("btncad").innerHTML =
                    '<button class="create-btn" id="createBtn">' +
                        'CRIAR CONTA' +
                    '</button>' +

                    '<button class="back-btn" id="backBtn">' +
                        'VOLTAR' +
                    '</button>';



                $("#overlay").hide();



                $('#backBtn').on('click', function(){


                    $('#loginForm').slideToggle(300);

                    $('#signupForm').slideToggle(300);


                    $("#captcha").html('');

                    $("#btncad").html('');


                    $("#captchaCheckbox").prop("checked", false);


                });



            },500);



        }


    });


}




document.addEventListener("change", function(e){


    if(e.target && e.target.id === "captchaCheckbox"){


        if(e.target.checked){


            $("#overlay").show();


            captchaslide();


        }


    }


});



</script>


<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="assets/js/functions.js"></script>


</body>
</html>
`);

};
