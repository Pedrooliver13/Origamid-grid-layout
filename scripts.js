function initTabnav() {
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  const tabNav = document.querySelectorAll(".js-tabnav ul li");

  if (tabContent.length) {
    tabContent[0].classList.add("ativo");
    tabNav[0].classList.add("ativo");

    function activeTabnav(tab, index) {
      tabContent.forEach((item) => {
        item.classList.remove("ativo");
      });
      tabNav.forEach((item) => {
        item.classList.remove("ativo");
      });

      tab.classList.add("ativo");
      tabContent[index].classList.add("ativo");
    }

    tabNav.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTabnav(item, index);
      });
    });
  }
}

initTabnav();

function initAnimationScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const windowMetade = window.innerHeight * 0.7;

  function handleAnimationScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade < 0;

      if (isSectionVisible) section.classList.add("ativo");
      else section.classList.remove("ativo");
    });
  }

  window.addEventListener("scroll", handleAnimationScroll);
}

initAnimationScroll();
