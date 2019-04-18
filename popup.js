var arr = [];
function fun(){
    chrome.tabs.onUpdated.addListener((tabid, changedInfo, tab) => {
        if (changedInfo.status === "complete") {
            arr.push(tab.url)
        }
    }) 
}

function stop(){
    for(var i=0;i<arr.length;i++)
     console.log(arr[i]);
    arr =[]; 
}
$("#count").click(fun);
$("#stop").click(stop);


