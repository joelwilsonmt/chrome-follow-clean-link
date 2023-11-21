// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


// page click listener:
chrome.runtime.onMessage.addListener(
  function(message) {
    const {href} = message;
    if(href){
      chrome.tabs.create({url: href}).then((_tab) => {
        chrome.tabs.onUpdated.addListener(handleNewTab);
      })
    }
  }
);

const handleNewTab = (tabId, _changeInfo, newTab) => {
   if(newTab.status === "complete"){
        chrome.tabs.get(tabId, (tab) => {
          const tabNoParams = tab.url?.split("?")[0]
          if(tab.url !== tabNoParams) {
            chrome.tabs.update(tabId, {url: tabNoParams})
            chrome.tabs.onUpdated.removeListener(handleNewTab)
          }
        })
      }
}

chrome.runtime.onInstalled.addListener(function () {
  // Create one test item for each context type.
    let title = "Open clean link in new tab";
    chrome.contextMenus.create({
      title: title,
      contexts: ['link'],
      id: 'link'
    });
});

// A generic onclick callback function.
function onMenuItemClick(info) {
  chrome.tabs.create({url: info.linkUrl}).then((_tab) => {
    chrome.tabs.onUpdated.addListener(handleNewTab);
  })
}

// menu click listener:
chrome.contextMenus.onClicked.addListener(onMenuItemClick);
