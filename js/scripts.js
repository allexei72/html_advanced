
  document.querySelectorAll('.js-change-resolution').forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const res = link.dataset.resolution;
      document.querySelector('.js-styleguide-iframe').style.width = res;
    });
  });


  const iframe = document.querySelector('.js-styleguide-iframe');
  const iframeUrl = new URL(iframe.src);
  document.querySelectorAll('.js-navigate-iframe').forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      iframeUrl.hash = new URL(this.href).hash;
      iframe.src = iframeUrl.href;
    });
});


