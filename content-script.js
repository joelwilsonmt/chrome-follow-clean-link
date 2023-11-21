// page click listener:
// if metaKey and altKey are pressed, send message to background.js to open link in new tab and remove utms
// otherwise, navigate to link as normal
(async () => {
  document.addEventListener("click", (e) => {
    const {metaKey, altKey} = e
    if (e.target.closest('a') && metaKey && altKey) {
      e.preventDefault()
      const href = e.target.closest('a').href
      if(metaKey, altKey){
        chrome.runtime.sendMessage({href});
      }
    }
  })
})();
