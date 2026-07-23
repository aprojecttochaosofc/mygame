document.getElementById("imagem").addEventListener("change", function (e) {

    const arquivo = e.target.files[0];

    if (!arquivo) return;

    const reader = new FileReader();

    reader.onload = function (ev) {

        const img = new Image();

        img.onload = function () {

            const larguraMax = 512;
            const alturaMax = 512;

            let largura = img.width;
            let altura = img.height;

            const proporcao = Math.min(
                larguraMax / largura,
                alturaMax / altura
            );

            largura = Math.round(largura * proporcao);
            altura = Math.round(altura * proporcao);

            const canvas = document.createElement("canvas");
            canvas.width = largura;
            canvas.height = altura;

            const ctx = canvas.getContext("2d");

            ctx.drawImage(img, 0, 0, largura, altura);

            // JPEG com qualidade 90%
            const imagemRedimensionada = canvas.toDataURL("image/jpeg", 0.9);

            document.getElementById("preview").src = imagemRedimensionada;

            console.log(imagemRedimensionada);

            // aqui você pode enviar para o servidor

        };

        img.src = ev.target.result;

    };

    reader.readAsDataURL(arquivo);

});
