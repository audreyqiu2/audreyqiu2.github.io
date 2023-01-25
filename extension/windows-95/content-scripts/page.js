/* Audrey Qiu
*  HCDE 438 - Browser Extension
*
*  This file contains the logic that handles changing all the paragraph text on the
*  current page into Microsoft Sans Serif, a font that is inspired by the
*  Windows 95 Operating System. It also handles the logic for changing the cursor
*  from the default one into a vintage Windows 95 one.
*/

console.log("page.js ran");

// Setting variables to resuse later
let changeFont = false;
let validNodes = [];

// Gets all the HTML nodes on the page that has text
let allNodes = document.querySelectorAll("*");

for (let i = 0; i < allNodes.length; i++) {
  if (allNodes[i].innerText) {
    validNodes.push(allNodes[i]);
  }
}

function updateFont(query) {
  for (i = 0; i < validNodes.length; i++) {
    if (changeFont) {
      validNodes[i].style.fontFamily = "Microsoft Sans Serif";
    }
  }
}

// Listen for messages from the popup.
chrome.runtime.onMessage.addListener((request) => {
  console.log("page.js ran");
  changeFont = request["enable"];
  updateFont();
  updateCursor();
});