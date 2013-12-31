chrome.runtime.onInstalled.addListener(function(){
    console.log("OnInit");
});

chrome.browserAction.onClicked.addListener(function(tab) {
    console.log('clicked');
    chrome.tabs.executeScript(null,{code:"document.body.bgColor='red'"});
});