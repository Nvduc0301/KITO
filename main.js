const toggleMenu = () => {
  const navbarMenu = document.querySelector(".header-nav-mobile");
  const menuIcon = document.querySelector(".header-nav-menu");
  const menuIconToggle = document.querySelector(".header-nav-menu i");
  const header = document.querySelector(".header-nav");

  menuIcon.onclick = function () {
    navbarMenu.classList.toggle("active");
    header.classList.toggle("change-menu");
    const isOpen = navbarMenu.classList.contains("active");
    menuIconToggle.classList = isOpen
      ? "fa-solid fa-xmark"
      : "fa-solid fa-bars";
  };
};

const submitFormEmail = () => {
  var inputSubmit = document.querySelector(".footer-sub-input").value;
  let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!inputSubmit) {
    alert("Vui lòng nhập email của bạn");
    document.querySelector(".footer-sub-input").value = "";
  } else if (inputSubmit.match(pattern)) {
    alert("Subscribe email thành công");
  } else if (!inputSubmit.match(pattern)) {
    alert("Vui lòng nhập định dạng @gmail.com");
    document.querySelector(".footer-sub-input").value = "";
  }
};

const aboutVideo = () => {
  const video = document.querySelector(".intro-video-iframe");
  // const controls = document.querySelector(".intro-video-control");
  const img = document.querySelector(".intro-video-img");
  img.style.display = "none";
  video.src =
    "https://www.youtube.com/embed/R-9e8P1unxs?si=8VJFvG3YxYSmgZ3d?mute=1&autoplay=1";
};
