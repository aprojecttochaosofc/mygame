$(document).ready(function() {
            // Switch between login and signup forms
            $('#enterBtn, #switchToSignup').on('click', function () {

			    $('#loginForm').slideToggle(300);
			    $('#signupForm').slideToggle(300);

			});

            

            // Login button
            $('#connectBtn').on('click', function() {
                const email = $('#loginEmail').val();
                const password = $('#loginPassword').val();

                if(!email || !password) {
                    Alert7.alert('Por favor preencha todos os campos!');
                    return;
                }

                if(!email.includes('@')) {
                    Alert7.alert('E-mail inválido!');
                    return;
                }

                Alert7.alert('Login efetuado com sucesso!\nE-mail: ' + email);
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

$("#overlay").hide();

function createObjects(type){


    switch(type){

        case 'header':

            return `
                <div class="header-left">
                    <div class="logo"><img src="assets/images/headlogo.png"></div>
                    <div class="header-title">
                        UM LUGAR DIVERTIDO COM GENTE INCRÍVEL.
                    </div>
                </div>

                <button class="enter-btn" id="enterBtn">
                    CADASTRE-SE!
                </button>
            `;
        break;

        case 'hotelimage':

            return `
                <img src="assets/images/banerlogo.png">
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
                    <label for="signupName">Apelido</label>
                    <input type="text" id="signupApelido" placeholder="Digite seu apelido">
                </div>
                <div class="form-group">
                    <label for="signupEmail">E-mail</label>
                    <input type="email" id="signupEmail" placeholder="Digite seu e-mail">
                </div>

                <div class="form-group">
                    <label for="signupPassword">Senha</label>
                    <input type="password" id="password" placeholder="Digite uma senha forte">
                </div>

                <div class="form-group">
                    <label for="signupPasswordConfirm">Redigitar Senha</label>
                    <input type="password" id="repassword" placeholder="Confirme sua senha">
                </div>

                <div class="captcha-container">
				    <input type="checkbox" id="captchaCheckbox" class="captcha-checkbox">

				    <label for="captchaCheckbox" class="captcha-text">
				        Não sou um robô - <strong>reCAPTCHA</strong>
				    </label>
				</div>

                <div class="form-actions-signup" id="btncad">
                    
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
            <div class="nav-link">🛍️ SHOP</div>
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
                    <h3>JULHO NO :<br>ARCO-ÍRIS NA PRAIA</h3>
                    <p class="news-meta">31 de julho |  Updates • Campanhas e Atividades</p>
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
                <p style="margin-top: 10px;">O  Hotel é recomendado para maiores de 18 anos.</p>
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

 const socket = new WebSocket("wss://worldofwar.up.railway.app");





socket.onopen = function(){

    socket.send(JSON.stringify({
        message:"startserver"
    }));

};


socket.onmessage = function(e){

    const data = JSON.parse(e.data);
    console.log(data)


    if(data.message == "usercreated"){ 
    	Alert7.alert('Conta criada com sucesso!\nBem-vindo!');

    } 

    if(data.message == "usernotcreated"){ 
    	Alert7.alert('O usuário nao pode ser criado!');

    } 

};

socket.onerror = function(e){

    console.log("erro websocket", e);

};


socket.onclose = function(){

    console.log("socket fechado");

};

	
function createUsers(){
	const name=$("#signupName").val(); 
				const signupName=$("#signupName").val();
				const signupApelido=$("#signupApelido").val();
				const signupEmail=$("#signupEmail").val();  
				const password=$("#password").val(); 
				const repassword=$("#repassword").val();
				const captchaCheckbox=$("#captchaCheckbox").val();

                if(!signupName || !signupApelido ||  !signupEmail || !password || !repassword) { 
                    Alert7.alert('Por favor preencha todos os campos!');
                    return;
                }

                if(!signupEmail.includes('@')) {
                    Alert7.alert('E-mail inválido!');
                    return;
                }

                if(password.length < 6) {
                    Alert7.alert('A senha deve ter no mínimo 6 caracteres!');
                    return;
                }

                if(password !== repassword) {
                    Alert7.alert('As senhas não correspondem!');
                    return;
                }

                if(!captchaCheckbox) {
                    Alert7.alert('Por favor confirme que você não é um robô!');
                    return;
                }

                
                socket.send(JSON.stringify({
			        message:"caduser",
			        signupName:signupName,
			        signupApelido:signupApelido,
			        signupEmail:signupEmail,
			        password:password, 
			    }));
}


 
function captchaslide(){

    var captcha = sliderCaptcha({
        id: 'captcha',
        repeatIcon: 'fa fa-redo',

        onSuccess: function () {

            var handler = setTimeout(function () {

                window.clearTimeout(handler);

                document.getElementById("btncad").innerHTML = `
                    <button class="create-btn" id="createBtn" onclick="scripts:createUsers();">
                        CRIAR CONTA
                    </button>

                    <button class="back-btn" id="backBtn">
                        VOLTAR
                    </button>
                `;
                $("#overlay").hide();
                $('#backBtn').on('click', function() {
	                $('#loginForm').slideToggle(300);
				    $('#signupForm').slideToggle(300);
				    $("#captcha,#btncad").html('');
				    $("#captchaCheckbox").prop("checked", false);
	            });
            }, 500);

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
