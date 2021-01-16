var switch_btn = document.getElementById("checkbox_switch"); 

chrome.tabs.query({url:["https://web.whatsapp.com/*"], currentWindow: true}, function(tabs) {
    if(tabs[0] != null){
        document.getElementById("footer").classList.add("hide_footer");
        document.getElementById("div_body").disabled = false;
        chrome.tabs.sendMessage(tabs[0].id, {type:"state"}, function(response){
            if(response == "hidden")
                switch_btn.checked = true;
        });
    }else{
        document.getElementById("footer").classList.remove("hide_footer");
        document.getElementById("div_body").disabled = true;
    }
});

var action = "hide";

switch_btn.addEventListener("click",function(){
    if(switch_btn.checked == true)
        action = "hide";
    else
        action = "show";

    chrome.tabs.query({url:["https://web.whatsapp.com/*"], currentWindow: true}, function(tabs){
        if(tabs[0] != null){
            chrome.tabs.sendMessage(tabs[0].id, {type:action}, null);
        }
    });
});