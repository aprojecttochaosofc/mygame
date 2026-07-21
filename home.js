module.exports = function homepage(req, res) {

    res.send(` 
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MEU JOGO ONLINE</title>
    <link rel="stylesheet" type="text/css" href="assets/css/styles.css">
 
</head>
<body>
    <!-- Header -->
    <div class="header" id="header"></div>


    <!-- Main Login/Signup Section -->
    <div class="main-container">
        <div class="left-section" id="hotelimage"> 
        </div>

        <div class="right-section">
            <!-- LOGIN FORM -->
            <div class="login-form" id="loginForm">
                
            </div>

            <!-- SIGNUP FORM -->
            <div class="signup-form" id="signupForm">
                
            </div>
        </div>
    </div>

    <!-- Mobile Menu Toggle -->
    <button class="menu-toggle" id="menuToggle">☰ MENU</button>

    <!-- Navigation -->
    <div class="nav" id="navMenu">
       
    </div>

    <!-- News Section -->
    <div class="news-section">
        <div class="news-main">
            <h2 class="section-title">Últimas Notícias</h2>

            <!-- Featured News -->
            <div class="featured-news" id="featurednews">
                
            </div>

            <!-- News Grid -->
            <div class="news-grid" id="newsgrid">
                
            </div>

            <div class="more-news">
                <a href="#">MAIS NOTÍCIAS »</a>
            </div>
        </div>

        <!-- Sidebar -->
        <div class="news-sidebar" id="newssidebar">
            
 
        </div>
    </div>

    <!-- Footer -->
    <div class="footer">
       
        <div class="footer-bottom">
            <div>© 2004 - 2026 Sulake Corporation Ltd. Habbo é uma marca registrada da Sulake na União Europeia, EUA, Japão, China e vários outras jurisdições. Todos os direitos reservados.</div>
            <div class="footer-logo">Sulake</div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script type="text/javascript" src="assets/js/functions.js"></script>
</body>
</html>

    `);

};
