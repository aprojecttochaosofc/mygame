$(document).ready(function() {
            // Switch between login and signup forms
            $('#enterBtn, #switchToSignup').on('click', function() {
                $('#loginForm').slideToggle(300);
                $('#signupForm').slideToggle(300);
            });

            $('#backBtn').on('click', function() {
                $('#loginForm').slideToggle(300);
                $('#signupForm').slideToggle(300);
            });

            // Login button
            $('#connectBtn').on('click', function() {
                const email = $('#loginEmail').val();
                const password = $('#loginPassword').val();

                if(!email || !password) {
                    alert('Por favor preencha todos os campos!');
                    return;
                }

                if(!email.includes('@')) {
                    alert('E-mail inválido!');
                    return;
                }

                alert('Login efetuado com sucesso!\nE-mail: ' + email);
            });

            // Signup button
            $('#createBtn').on('click', function() {
                const name = $('#signupName').val();
                const email = $('#signupEmail').val();
                const password = $('#signupPassword').val();
                const confirmPassword = $('#signupPasswordConfirm').val();
                const captcha = $('#captchaCheckbox').is(':checked');

                if(!name || !email || !password || !confirmPassword) {
                    alert('Por favor preencha todos os campos!');
                    return;
                }

                if(!email.includes('@')) {
                    alert('E-mail inválido!');
                    return;
                }

                if(password.length < 6) {
                    alert('A senha deve ter no mínimo 6 caracteres!');
                    return;
                }

                if(password !== confirmPassword) {
                    alert('As senhas não correspondem!');
                    return;
                }

                if(!captcha) {
                    alert('Por favor confirme que você não é um robô!');
                    return;
                }

                alert('Conta criada com sucesso!\nBem-vindo ' + name + '!');
            });

            // Mobile menu toggle
            $('#menuToggle').on('click', function() {
                $('#navMenu').toggleClass('active');
            });

            // Mobile dropdown menu
            $('.nav-item').on('click', function(e) {
                if($(window).width() <= 768) {
                    e.preventDefault();
                    $(this).toggleClass('active');
                }
            });

            // Close mobile menu when clicking on a link
            $('.nav-link').on('click', function() {
                if($(window).width() <= 768) {
                    $('#navMenu').removeClass('active');
                }
            });
        });



function createObjects(type){

    switch(type){

        case 'header':

            return `
                <div class="header-left">
                    <div class="logo">MEU JOGO ONLINE</div>
                    <div class="header-title">
                        UM LUGAR DIVERTIDO COM GENTE INCRÍVEL.
                    </div>
                </div>

                <button class="enter-btn" id="enterBtn">
                    ENTRE GRÁTIS!
                </button>
            `;
        break;

        case 'hotelimage':

            return `
                <img src="assets/images/baner1.jpg">
            `;
        break;

        case 'formlogin':

            return `
                <h2>Faça Login</h2>
                
                <div class="form-group">
                    <label for="loginEmail">E-mail</label>
                    <input type="email" id="loginEmail" placeholder="Digite seu e-mail">
                </div>

                <div class="form-group">
                    <label for="loginPassword">Senha</label>
                    <input type="password" id="loginPassword" placeholder="Digite sua senha">
                </div>

                <div class="form-actions">
                    <button class="connect-btn" id="connectBtn">CONECTAR</button>
                </div>

                <div class="signup-link">
                    Não tem uma conta? <a id="switchToSignup">Cadastre-se aqui</a>
                </div>
            `;
        break;


        case 'singnup':

            return `
                <h2>Criar Conta</h2>
                
                <div class="form-group">
                    <label for="signupName">Nome Completo</label>
                    <input type="text" id="signupName" placeholder="Digite seu nome completo">
                </div>

                <div class="form-group">
                    <label for="signupEmail">E-mail</label>
                    <input type="email" id="signupEmail" placeholder="Digite seu e-mail">
                </div>

                <div class="form-group">
                    <label for="signupPassword">Senha</label>
                    <input type="password" id="signupPassword" placeholder="Digite uma senha forte">
                </div>

                <div class="form-group">
                    <label for="signupPasswordConfirm">Redigitar Senha</label>
                    <input type="password" id="signupPasswordConfirm" placeholder="Confirme sua senha">
                </div>

                <div class="captcha-container">
                    <input type="checkbox" id="captchaCheckbox" class="captcha-checkbox">
                    <label for="captchaCheckbox" class="captcha-text">
                        Não sou um robô - <strong>reCAPTCHA</strong>
                    </label>
                </div>

                <div class="form-actions-signup">
                    <button class="create-btn" id="createBtn">CRIAR CONTA</button>
                    <button class="back-btn" id="backBtn">VOLTAR</button>
                </div>
            `;
        break;


        case 'navMenu':

            return `
                 <div class="nav-item">
            <div class="nav-link">🏠 INÍCIO</div>
            <div class="dropdown">
                <a href="#">Página Principal</a>
                <a href="#">Últimas Novidades</a>
                <a href="#">Destaque da Semana</a>
            </div>
        </div>
        <div class="nav-item">
            <div class="nav-link">👥 COMUNIDADE</div>
            <div class="dropdown">
                <a href="#">Fórum</a>
                <a href="#">Usuários Online</a>
                <a href="#">Grupos</a>
            </div>
        </div>
        <div class="nav-item">
            <div class="nav-link">🛍️ HABBOSHOP</div>
            <div class="dropdown">
                <a href="#">Moedas</a>
                <a href="#">Itens em Destaque</a>
                <a href="#">Pacotes</a>
            </div>
        </div>
        <div class="nav-item">
            <div class="nav-link">ℹ️ SOBRE O HOTEL</div>
            <div class="dropdown">
                <a href="#">História</a>
                <a href="#">Sobre Nós</a>
                <a href="#">Contato</a>
            </div>
        </div>
        <div class="nav-item">
            <div class="nav-link">⭐ COLECIONÁVEIS</div>
            <div class="dropdown">
                <a href="#">Itens Raros</a>
                <a href="#">Troféus</a>
                <a href="#">Conquistas</a>
            </div>
        </div>
            `;
        break;


        case 'featurednews':

            return `
                <div class="featured-news-image">
                     <img src="assets/images/baner1.jpg">
                </div>
                <div class="featured-news-content">
                    <h3>JULHO NO HABBO:<br>ARCO-ÍRIS NA PRAIA</h3>
                    <p class="news-meta">31 de julho | Habbo Updates • Campanhas e Atividades</p>
                    <p>Um mês na costa – novos móbis para criar, itens náuticos na Loja Ducket e um LTD que vai espalhar areia por toda parte.</p>
                </div>
            `;
        break;



        case 'newsgrid':

            return `
               <div class="news-item">
                    <div class="news-item-image"><img src="assets/images/baner1.jpg">
                    </div>
                    <div class="news-item-content">
                        <h4>RESULTADO FOGO AMIGO: DIA DO ROCK</h4>
                        <p class="news-meta">21 de jul de 2026 | Campanhas e Atividades</p>
                        <p>Confira a resposta correta do Fogo Amigo do Dia do Rock!</p>
                    </div>
                </div>
            `;
        break;

        case 'newssidebar':

            return `
                <div class="sidebar-box">
                <h3>DICAS DE SEGURANÇA</h3>
                <p>Proteja-se de maneira inteligente! Aprenda como <strong>manter-se seguro</strong> na internet.</p>
                <p style="margin-top: 10px;">O Habbo Hotel é recomendado para maiores de 18 anos.</p>
            </div>
            `;
        break;
    }

}

document.getElementById("header").innerHTML = createObjects("header");
document.getElementById("hotelimage").innerHTML = createObjects("hotelimage");
document.getElementById("loginForm").innerHTML = createObjects("formlogin");
document.getElementById("signupForm").innerHTML = createObjects("singnup");
document.getElementById("navMenu").innerHTML = createObjects("navMenu");
document.getElementById("featurednews").innerHTML = createObjects("featurednews");
document.getElementById("newsgrid").innerHTML = createObjects("newsgrid");
document.getElementById("newssidebar").innerHTML = createObjects("newssidebar");
