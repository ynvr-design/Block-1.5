const swiperBrand = new Swiper(".image-slider", {
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 16,

  breakpoints: {
    768: {
      enabled: false,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-button");
  const extraItems = document.querySelectorAll(".swiper-slide-brand");
  let isExpanded = false;

  toggleButton.addEventListener("click", function () {
    isExpanded = !isExpanded;

    extraItems.forEach((item) => {
      if (item.classList.contains("hidden")) {
        item.style.display = isExpanded ? "flex" : "none";
      }
    });

    toggleButton.textContent = isExpanded ? "Скрыть" : "Показать все";

    if (isExpanded) {
      toggleButton.classList.add("down");
      toggleButton.classList.remove("up");
    } else {
      toggleButton.classList.remove("down");
      toggleButton.classList.add("up");
    }
  });

  extraItems.forEach((item, index) => {
    if (window.innerWidth >= 1120 && index >= extraItems.length - 3) {
      item.classList.add("hidden");
      item.style.display = "none";
    } else if (
      window.innerWidth >= 768 &&
      window.innerWidth < 1120 &&
      index >= extraItems.length - 5
    ) {
      item.classList.add("hidden");
      item.style.display = "none";
    } else {
      item.style.display = "flex";
    }
  });
});
