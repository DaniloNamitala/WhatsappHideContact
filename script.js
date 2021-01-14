var switch_btn = document.getElementById("checkbox_switch"); //seleciona o checkbox do switch

chrome.tabs.query({url:["https://web.whatsapp.com/*"], currentWindow: true}, function(tabs) { //Procura a aba em uqe o whatsapp esta aberto
    if(tabs[0] != null){                                                                      //se a aba existe envia uma mensagem com um comando
        document.getElementById("footer").classList.add("hide_footer");
        document.getElementById("checkbox_switch").disabled = false;
        chrome.tabs.sendMessage(tabs[0].id, {type:"state"}, function(response){               //envia o comando 'state'
            if(response == "hidden")                                                          //se a resposta é 'hidden' atualiza o estado do switch para enabled 
                switch_btn.checked = true;
        });
    }else{                                                                                    //se nenhuma aba é encontrada exibe o rodapé com o alerta
        document.getElementById("footer").classList.remove("hide_footer");                    //e desativa o switch
        document.getElementById("checkbox_switch").disabled = true;
    }
});

var action = "hide";                                                                          //guarda a ação a ser realizada ao precionar o switch

switch_btn.addEventListener("click",function(){
    if(switch_btn.checked == true)                                                            //se o switch esta marcado envia 'hide', se nao envia 'show'
        action = "hide";
    else
        action = "show";

    chrome.tabs.query({url:["https://web.whatsapp.com/*"], currentWindow: true}, function(tabs){ //procura a aba do whatsapp
        if(tabs[0] != null){                                                                     //se a aba exite envia uma mensagem com o comando definido
            chrome.tabs.sendMessage(tabs[0].id, {type:action}, null);
        }
    });
});