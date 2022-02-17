// função de codificação

function encrypt(input){

    code = input.replace(/e/g, "enter")
           .replace(/i/g, "imes")
           .replace(/a/g, "ai")
           .replace(/o/g, "ober")
           .replace(/u/g, "ufat");
    return code;
}

// leitura do texto e chamada da função de codificação

var encryptBtn = document.querySelector("#btn-cripto");
        encryptBtn.addEventListener("click", function(event){
        event.preventDefault();

        var inputText = document.querySelector("#input-texto"); 
        var text = inputText.value;
        var outputText = document.querySelector("#msg");

        var error1 = document.querySelector("#up-error");
        var error2 = document.querySelector("#ch-error");
        var msg1 = document.querySelector("#encrypt-msg");
        
        var upperCase = validInputTextUp(text);
        
        var result = containsSpecialCh(text);
        var specialCh = verifySpecialCh(result);

        if (!upperCase) {
            console.log("letra maiúscula!");
            error1.textContent = "Letras maiúsculas não suportadas.";
        }

        if (specialCh){
            console.log("acento!");
            error2.textContent = "Acentos não suportados.";
        }

        if (upperCase && !specialCh) {
            var encryptedText = encrypt(inputText.value);
            outputText.value = encryptedText;
            msg1.textContent = "Mensagem criptografa com sucesso.";
        }

    });

// função de decodificação

function decrypt(input){

    code = input.replace(/enter/g, "e")
           .replace(/imes/g, "i")
           .replace(/ai/g, "a")
           .replace(/ober/g, "o")
           .replace(/ufat/g, "u");
    return code;

}

// leitura do texto e chamada da função de decodificação

var decryptBtn = document.querySelector("#btn-descripto");
    decryptBtn.addEventListener("click", function(event){
        event.preventDefault();

        var inputText = document.querySelector("#input-texto");
        var outputText = document.querySelector("#msg");
        var decryptedText = decrypt(inputText.value);
        outputText.value = decryptedText;
        var msg2 = document.querySelector("#encrypt-msg");
        msg2.textContent = "Mensagem descriptografa com sucesso.";
        
    });

// botão copiar

var copyBtn = document.querySelector("#btn-copy");
    copyBtn.addEventListener("click", function (event) {
        event.preventDefault();

    var message = document.querySelector("#msg");
    message.select();
    document.execCommand("copy");

    });

// validação

function validInputTextUp(text) {

        if (text == text.toLowerCase()) {
            return true;
        } else {
            return false;
        }
}

function containsSpecialCh(text) {
    const specialChars = /[áàãâéèêíìîõóòôúùû]/;
    return specialChars.test(text);
    }

function verifySpecialCh(result){
    if (result) {
        return true;
    } else {
        return false;
    }
}