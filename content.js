const xpath = '//div[contains(text(), "→ Problem tags")]';

function getBoxElement() {
    
    function getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
    const header = getElementByXpath(xpath);

    return header ? header.parentElement : null;
}

function applyState(shouldHide) {
    const box = getBoxElement();
    if(box) {
        box.style.display = shouldHide ? 'none' : 'block';
    }
}

chrome.storage.local.get(['isHidden'], (result) => {
    applyState(result.isHidden);
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if(message.action === "toggle") {
        chrome.storage.local.get(['isHidden'], (result) => {
            const currentState = result.isHidden || false;
            const newState = !currentState;

            chrome.storage.local.set({isHidden: newState}, ()=> {
                applyState(newState);
            });
        });
    }
});