import "./js/vendor/polyfill_nextElementSibling.js";

class FaqList1_01 {
  constructor(opts) {
    this.listSelector = opts.listSelector;
    this.iconSelector = opts.iconSelector;
    this.hiddenFaqClass = opts.hiddenFaqClass;
    this.visibleFaqClass = opts.visibleFaqClass;
    this.iconHide = opts.iconHide;
    this.iconReveal = opts.iconReveal;
  }

  init() {
    let list = document.querySelectorAll("." + this.listSelector);
    let listArr = Array.prototype.slice.call(list);

    let icons = document.querySelectorAll("." + this.iconSelector);
    let iconArr = Array.prototype.slice.call(icons);
    
    let self = this;
    listArr.forEach(function (i, index, array) {
      i.addEventListener("click", function () {
        self.toggleContent(index, array, iconArr);
      });

      // todo: add keypress
    });

    this.toggleAllContents(list, "none", iconArr);
  }

  toggleContent(index, array, iconArr) {
    const faqContent = array[index].nextElementSibling;
    
    if (faqContent.style.display === "none") {
      array[index].className += this.hiddenFaqClass;
      faqContent.style.display = "block";
      iconArr[index].innerHTML = this.iconHide;
    } else {
      array[index].className = this.visibleFaqClass;
      faqContent.style.display = "none";
      iconArr[index].innerHTML = this.iconReveal;
    }
  }

  toggleAllContents(list, display, iconArr) {
    for (let i in iconArr) {
      iconArr[i].innerHTML = this.iconReveal;
    }

    for (let i of list) {
      i.nextElementSibling.style.display = display;
    }
  }
}

let FL1_01 = new FaqList1_01({
  listSelector: "faqList1-01_title",
  iconSelector: "faqList1-01_icon",
  visibleFaqClass: "faqList1-01_title",
  hiddenFaqClass: " fq",
  iconReveal: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
  </svg>`,
  iconHide: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M19 13H5v-2h14v2z"/></svg>`
});

FL1_01.init();