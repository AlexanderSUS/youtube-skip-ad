document.addEventListener(
  "DOMNodeInserted",
  (event) => {
    if (event.relatedNode && event.relatedNode.classList.contains("video-ads")) {
      document.querySelector(".ytp-ad-skip-button-text").click()
      console.log('Ad was skipped!')
    } 
  },
  false,
);
