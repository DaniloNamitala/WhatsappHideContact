chrome.runtime.onMessage.addListener(                                       //evento que monitora a chegada de uma mensagem
    function(message, sender, sendResponse) {
        var container = document.getElementsByClassName('i5ly3 _2NwAr')[1]; //seleciona a div que contem a coluna de contatos
        if(message.type == "hide"){                                         //se a menssagem traz o comando hide a div é oculta
            container.style.display = 'none';
            sendResponse("hidden");
        }else if(message.type == "show"){                                   //se a menssagem traz o comando hide a div é exibida
            container.style.display = '';
            sendResponse("visible");
        }else if(message.type == "state"){                                  //o comando state da uma resposta com o estado da div para que
            if(container.style.display == 'none')                           //o switch seja colocado na posição correta cada vez que o pop-up é aberto
                sendResponse("hidden");
            else
                sendResponse("visible");
        }
    }
);