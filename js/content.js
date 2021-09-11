var auto = false;
var container;

function execute(action){
    container = container = document.getElementById("side").parentElement;
    switch (action) {
        case "hidden":
            container.style.display = 'none';
            auto = false;
            break;
        case "visible":
            container.style.display = '';
            auto = false;
            break;
        case "auto":
            autoHide();
            break;
        default:
            break;
    }
}

chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        execute(message.type);
    }
);

let interval = setInterval(()=>{
    container = document.getElementById("side").parentElement;
    if(container){
        chrome.storage.local.get(['action'], function(result){
            if(result.action){
                execute(result.action)
            }
        });
        clearInterval(interval);
    }
},1000);



function autoHide(){
    auto = true;
    container = container = document.getElementById("side").parentElement;
    container.style.display = 'none';
    const barra = document.createElement('div');
    barra.id = 'barra_lateral';
    barra.style.height = "100%";
    barra.style.width = "15px";
    barra.style.position = 'fixed';
    barra.style.top = 0;
    barra.style.left = 0;
    barra.style.zIndex = 999;
    const menulat = container = document.getElementById("side").parentElement;
    menulat.addEventListener('mouseleave', function(){
        if(auto)
            menulat.style.display = 'none';
    });

    barra.addEventListener("mouseenter",function(){
        if(menulat.style.display == 'none' & auto)
            menulat.style.display = '';
        
    });
    document.querySelector("body").appendChild(barra);
    clearInterval(interval);
}
