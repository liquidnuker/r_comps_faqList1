import "./js/vendor/polyfill_nextElementSibling.js";

const faqList1_01 = {
  showContents: true,
  init: function(list) {
    this.addEventListener();
    this.hideAllContents(list)
    list.faqList1_01_EL("click", this.toggleContents);
  },
  addEventListener: function() {
    NodeList.prototype.faqList1_01_EL = function(event, func) {
    this.forEach(function(content, item) {
       content.addEventListener(event, func);
    });
    }
  },
  getElements: function(selector) {
    return document.querySelectorAll(selector);
  },
  toggleContents: function() {
    faqList1_01.showContents = !faqList1_01.showContents;
    const x = this.nextElementSibling;
    if (!faqList1_01.showContents) {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  },
  hideAllContents: function(list) {
    for (let i of list) {
      i.nextElementSibling.style.display = 'none';
    }
  }
};

export {faqList1_01};