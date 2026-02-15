
async function toggleSignal() {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.tabs.sendMessage(tab.id, {action: "toggle"});
}

document.getElementById("myButton").addEventListener("click", toggleSignal);