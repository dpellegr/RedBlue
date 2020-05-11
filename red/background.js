function handleMessage(message, sender) {
  console.log('RED: received message from '+sender.id);
  // check that the message is from "blue@mozilla.org"
  if (sender.id === "blue@moz.org") {
    console.log('RED: '+message);
  }
}


browser.runtime.onMessageExternal.addListener(handleMessage);


browser.browserAction.onClicked.addListener(() => {
  // Send a message to chameleon
  console.log('RED: sending msg');
  browser.runtime.sendMessage(
    '{3579f63b-d8ee-424f-bbb6-6d0ce3285e6a}',
    {
      action: 'updateProfile',
      data: 'win4-ff',
    },
    null
  );
});

