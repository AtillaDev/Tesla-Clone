const fullpageEl = document.getElementById("fullpage");
const closeBtn = document.getElementById("closeBtn");
const navigation = document.getElementById("nav");
const blurOverlay = document.getElementById("blur");
const menuBtn = document.getElementById("menuBtn");

new fullpage("#fullpage", {
  autoScrolling: true,
  scrollBar: true,
});

const toggleNavigation = () => {
  navigation.classList.toggle("is--active");
  blurOverlay.classList.toggle("is--active");
  fullpageEl.classList.toggle("no-scroll");
};

menuBtn.addEventListener("click", toggleNavigation);
closeBtn.addEventListener("click", toggleNavigation);
blurOverlay.addEventListener("click", toggleNavigation);
