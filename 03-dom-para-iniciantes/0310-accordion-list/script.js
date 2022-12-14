function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();
function initAccordion() {
  const accordionlist = document.querySelectorAll(".js-accordion dt");
  if(accordionlist.length)
  {
    const ativo ='ativo'
    accordionlist[0].classList.add(ativo);
    accordionlist[0].nextElementSibling.classList.add(ativo);
    function activeAccordion() {
      this.classList.toggle(ativo);
      this.nextElementSibling.classList.toggle(ativo); // fez referncia ao item da funcao arrow
    }
    accordionlist.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
  }
initAccordion();
