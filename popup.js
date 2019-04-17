function fun(){
    var arr = [];
    chrome.tabs.onUpdated.addListener((tabid, changedInfo, tab) => {
        if (changedInfo.status === "complete") {
            if (arr.length < 10)
            {
            console.log(tab.url);
            arr.push(tab.url)
            }
            else   console.log("stop");    
        }
    })   
}
$("#count").click(fun);
