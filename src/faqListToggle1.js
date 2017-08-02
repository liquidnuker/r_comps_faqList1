import "./js/vendor/polyfill_nextElementSibling.js";

const faqList1_01 = (function () {
  function init(list) {
    list = document.querySelectorAll(list);
    addEvents();
    toggleAllContents(list, "none");
    list.faqList1_01_EL("click", toggleContent);
  }

  function addEvents() {
    NodeList.prototype.faqList1_01_EL = function (event, func) {
      this.forEach(function (content, item) {
        content.addEventListener(event, func);
      });
    };
  }

  function toggleContent() {
    const x = this.nextElementSibling;

    if (x.style.display === "none") {
      this.className += " fq";  
      x.style.display = "block";
    } else {
      this.className = "faqList1-01_title";  
      x.style.display = "none";
    }
  }

  function toggleAllContents(list, display) {
    for (let i of list) {
      i.nextElementSibling.style.display = display;
    }
  }

  return {
    init: init
  };
})();

export {faqList1_01};