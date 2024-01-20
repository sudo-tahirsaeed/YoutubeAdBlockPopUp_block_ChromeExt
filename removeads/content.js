
function removeModal() {
    const modal = document.querySelector('body > ytd-app > ytd-popup-container > tp-yt-paper-dialog');
    if (modal) {
      modal.remove();
    //   console.log("Removed the modal element.");
      const playButton = document.querySelector('#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > button');

if (playButton) {
  playButton.click();
} else {
}
    }
  }
  
  const observer = new MutationObserver(() => {
    removeModal();
  });
  
  const observerConfig = {
    childList: true,
    subtree: true,
  };
  
  observer.observe(document.body, observerConfig);
  
  