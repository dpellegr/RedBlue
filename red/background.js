function handleMessage(message, sender) {
  console.log('RED: received message from '+sender.id);
  // check that the message is from "blue@mozilla.org"
  if (sender.id === "blue@moz.org") {
    console.log('RED: '+message);
  }
}


browser.runtime.onMessageExternal.addListener(handleMessage);


const profile = `
{
  "config": {
    "enabled": true,
    "notificationsEnabled": false,
    "theme": "light"
  },
  "excluded": [],
  "headers": {
    "blockEtag": true,
    "enableDNT": true,
    "referer": {
      "disabled": true,
      "xorigin": 0,
      "trimming": 0
    },
    "spoofAcceptLang": {
      "enabled": true,
      "value": "en-US"
    },
    "spoofIP": {
      "enabled": false,
      "option": 0,
      "rangeFrom": "",
      "rangeTo": ""
    }
  },
  "ipRules": [],
  "options": {
    "cookieNotPersistent": true,
    "cookiePolicy": "reject_trackers",
    "blockMediaDevices": true,
    "disableWebRTC": true,
    "firstPartyIsolate": false,
    "limitHistory": false,
    "protectKBFingerprint": {
      "enabled": false,
      "delay": 1
    },
    "protectWinName": false,
    "resistFingerprinting": true,
    "screenSize": "1920x1080",
    "spoofAudioContext": true,
    "spoofClientRects": true,
    "spoofFontFingerprint": true,
    "timeZone": "ip",
    "trackingProtectionMode": "always",
    "webRTCPolicy": "default",
    "webSockets": "block_all"
  },
  "profile": {
    "selected": "win1-ff",
    "interval": {
      "option": 0,
      "min": 1,
      "max": 1
    }
  },
  "version": "0.20.7.2",
  "whitelist": {
    "enabledContextMenu": false,
    "defaultProfile": "none",
    "rules": []
  }
}`;

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
  ).then( (response) => console.log(response) ); // done

  browser.runtime.sendMessage(
    '{3579f63b-d8ee-424f-bbb6-6d0ce3285e6a}',
    {
      action: 'implicitSave'
    },
    null
  ).then( (response) => console.log(response) ); // done

//  // Send a message to chameleon
//  console.log('RED: sending msg');
//  browser.runtime.sendMessage(
//    '{3579f63b-d8ee-424f-bbb6-6d0ce3285e6a}',
//    {
//      action: 'validateSettings',
//      data: JSON.parse(profile),
//    },
//    null
//  ).then( (msg) => console.log('RED: '+msg));
});

