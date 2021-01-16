chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        var container = document.getElementsByClassName('i5ly3 _2NwAr')[1];
        if(message.type == "hide"){
            container.style.display = 'none';
            sendResponse("hidden");
        }else if(message.type == "show"){
            container.style.display = '';
            sendResponse("visible");
        }else if(message.type == "state"){
            if(container.style.display == 'none')
                sendResponse("hidden");
            else
                sendResponse("visible");
        }
    }
);