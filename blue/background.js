/*
On a click on the browser action (extension icon)
*/
browser.browserAction.onClicked.addListener(() => {
  // Send a message to the extension whose ID is "red@mozilla.org"
  console.log('BLUE: sending msg');
  browser.runtime.sendMessage(
    "red@moz.org",
    "message from blue"
  );
});


