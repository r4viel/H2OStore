//Variaveis

let BtnAdicionar = document.getElementsByClassName('btn-adicionar')
let BtnEnviar = document.getElementsByClassName('btn-enviar')
let Produtos = document.getElementsByClassName('produtos')

//Formulario para whatsapp
function EnviarAoWhatsapp() {
    const nome = document.getElementById("name").value;
    const numero = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const dadosFormatados = 
        "📩 *Nova mensagem do site H2O Store*\n\n" +
        "👤 Nome: " + nome + "\n" +
        "📞 Número: " + numero + "\n" +
        "📧 Email: " + email + "\n\n" +
        "💬 Mensagem:\n" + mensagem;

    const telefoneEmpresa = "5584994632332";
    const url = "https://wa.me/" + telefoneEmpresa + "?text=" + encodeURIComponent(dadosFormatados);
    window.open(url, "_blank");
}

