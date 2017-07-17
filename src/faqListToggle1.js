import "./js/vendor/polyfill_nextElementSibling.js";

const faqList1_01 = {
  init: function (list) {
    this.addEventListener();
    this.toggleAllContents(list, "none");
    list.faqList1_01_EL("click", this.toggleContent);
  },
  addEventListener: function () {
    NodeList.prototype.faqList1_01_EL = function (event, func) {
      this.forEach(function (content, item) {
        content.addEventListener(event, func);
      });
    };
  },
  getElements: function (elmSel) {
    return document.querySelectorAll(elmSel);
  },
  toggleContent: function () {
    const x = this.nextElementSibling;
    if (x.style.display === "none") {
      this.className += " fq";  
      x.style.display = "block";
    } else {
      this.className = "faqList1-01_title";  
      x.style.display = "none";
    }
  },
  toggleAllContents: function (list, display) {
    for (let i of list) {
      i.nextElementSibling.style.display = display;
    }
  }
};

export {faqList1_01};