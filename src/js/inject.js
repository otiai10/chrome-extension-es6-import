(() => {
  const src = chrome.extension.getURL('src/js/content.js');
  console.log(src);
  const script = document.createElement('script');
  script.setAttribute('src', src);
  script.setAttribute('type', 'module');
  document.body.appendChild(script);
})();
