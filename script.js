// Cyber News Dashboard — filter curated topic cards by topic.
(function () {
  "use strict";

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  var buttons = document.querySelectorAll("#filterButtons .filter-btn");
  var cards = document.querySelectorAll("#cardGrid .card");
  var noResults = document.getElementById("noResults");

  function applyFilter(topic) {
    var shown = 0;
    cards.forEach(function (card) {
      var match = topic === "all" || card.getAttribute("data-topic") === topic;
      card.hidden = !match;
      if (match) {
        shown += 1;
      }
    });
    noResults.hidden = shown !== 0;
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      buttons.forEach(function (b) {
        b.classList.remove("active");
      });
      button.classList.add("active");
      applyFilter(button.getAttribute("data-topic"));
    });
  });
})();
