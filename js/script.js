var select_option = document.getElementById("select");
chrome.tabs.query({url:["https://web.whatsapp.com/*"], currentWindow: true}, function(tabs) {
    if(tabs[0] != null){
        document.getElementById("footer").classList.add("hide_footer");
        document.getElementById("select").enabled = false;
        chrome.storage.local.get(['action'], function(result){
            if(result.action){
                select_option.value = result.action;
            }
            sendAction(select_option.value);
        });
    }else{
        document.getElementById("footer").classList.remove("hide_footer");
        document.getElementById("select").disabled = true;
    }
});

select_option.addEventListener("change",function(){
    let action = select_option.value;
    chrome.storage.local.set({"action":action}, null);
    sendAction(action);
});

function sendAction(action){
    chrome.tabs.query({url:["https://web.whatsapp.com/*"], currentWindow: true}, function(tabs){
        if(tabs[0] != null){
            chrome.tabs.sendMessage(tabs[0].id, {type:action}, null);
        }
    });
}