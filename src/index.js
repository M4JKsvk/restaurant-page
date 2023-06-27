import { renderHomepage } from "./homepageModule";
import { renderMenu } from "./menuModule";
import { renderAbout } from "./aboutModule";

const TabModule = (() => {
  const homeTab = document.getElementById("home");
  homeTab.addEventListener("click", removeAllChildren);
  homeTab.addEventListener("click", renderHomepage);
  homeTab.addEventListener("click", identifyHomeTab);
  homeTab.addEventListener("click", changeTabColor);

  const menuTab = document.getElementById("menu");
  menuTab.addEventListener("click", removeAllChildren);
  menuTab.addEventListener("click", renderMenu);
  menuTab.addEventListener("click", identifyMenuTab);
  menuTab.addEventListener("click", changeTabColor);

  const aboutTab = document.getElementById("about");
  aboutTab.addEventListener("click", removeAllChildren);
  aboutTab.addEventListener("click", renderAbout);
  aboutTab.addEventListener("click", identifyAboutTab);
  aboutTab.addEventListener("click", changeTabColor);


  renderHomepage();

  function removeAllChildren() {
    const content = document.getElementById("content");
    while (content.lastElementChild) {
      content.removeChild(content.lastElementChild);
    }
  }

  let selectedTab = "home";
  changeTabColor();

  function identifyHomeTab() {
    selectedTab = "home";
  }

  function identifyMenuTab() {
    selectedTab = "menu";
  }

  function identifyAboutTab() {
    selectedTab = "about";
  }

  function changeTabColor() {
    if (selectedTab == "home") {
      home.style.backgroundColor = "rgb(213, 226, 226)";
      menu.removeAttribute("style");
      about.removeAttribute("style");
    }
    if (selectedTab == "menu") {
      menu.style.backgroundColor = "rgb(213, 226, 226)";
      home.removeAttribute("style");
      about.removeAttribute("style");
    }
    if (selectedTab == "about") {
      about.style.backgroundColor = "rgb(213, 226, 226)";
      home.removeAttribute("style");
      menu.removeAttribute("style");
    }
  }
})();
