function addTimestamp(url) {
  let timestamp = new Date().getTime();
  return url + "?t=" + timestamp;
}

function loadUrlsAndUpdateIframes(jsonUrl) {
  let urlWithTimestamp = addTimestamp(jsonUrl);
  fetch(urlWithTimestamp)
    .then((response) => response.json())
    .then((urls) => {
      let iframes = document.querySelectorAll("iframe");

      iframes.forEach((iframe) => {
        let aiId = iframe.id;
        let newSrc = urls[aiId];

        if (newSrc) {
          iframe.src = newSrc;
        }
      });
    })
    .catch((error) => console.error("Error load ai-data.json:", error));
}

loadUrlsAndUpdateIframes("../../ai-data.json");
