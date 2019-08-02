// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

navigator.serviceWorker.ready.then(registration => {
  fetch('/get-sw-user-agent').then((response) => {
    if (response.ok) {
      response.text().then((swUserAgent) => {
        const element = document.getElementById('sw-user-agent');
        element.innerText = swUserAgent;
      });  
    }
  });
});

navigator.serviceWorker.register('service-worker.js', {
  scope: './'
});


window.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('user-agent');
  element.innerText = navigator.userAgent;
})
