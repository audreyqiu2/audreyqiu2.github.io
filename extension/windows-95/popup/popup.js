console.log('popup.js ran');

const toggle = document.getElementById("toggle");
toggle.addEventListener("click", toggleFontChange);

function toggleFontChange() {
  if (toggle.classList.contains("enable")) {
    // Behavior for removing changes to font
    toggle.classList.remove("enable");
    chrome.tabs.reload({bypassCache: true});
  } else {
    // Behavior for adding changes to font
    toggle.classList.add("enable");

    console.log('font changed');

    // chrome.scripting.executeScript({
    //   target : {tabId : tab.id, allFrames : true},
    //   func : getTitle,
    // })

    // chrome.scripting.insertCSS({
    //   target: { tabId: tabs.id },
    //   files: ["inject.css"]
    // });

    // let body = document.querySelector("body");
    // body.style.cursor = url("../cursor.png");
  }
  sendMessageToContentScript({"enable": toggle.classList.contains("enable")});

}

async function sendMessageToContentScript(message) {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  const response = chrome.tabs.sendMessage(tab.id, message);
}








