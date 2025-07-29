  window.addEventListener('scroll', function () {
    const navbar = document.getElementById('mainNavbar');
    const scrollY = window.scrollY;

    if (scrollY > 100) {
      navbar.classList.add('position-fixed', 'top-0', 'start-0', 'end-0', 'bg-white', 'shadow');
      navbar.classList.remove('container'); 
    } else {
      navbar.classList.remove('position-fixed', 'top-0', 'start-0', 'end-0', 'bg-white', 'shadow');
      navbar.classList.add('container');
    }
  });
document.addEventListener('DOMContentLoaded', () => {
    const endTime = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const countdown = () => {
    const now = new Date().getTime();
    const distance = endTime - now;
    if (distance <= 0) {
      updateUI(0, 0, 0);o
      clearInterval(timer);
      return;
    }
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    updateUI(hours, minutes, seconds);
  };
  const updateUI = (h, m, s) => {
    document.getElementById('countdownHours').textContent = String(h).padStart(2, '0');
    document.getElementById('countdownMinutes').textContent = String(m).padStart(2, '0');
    document.getElementById('countdownSeconds').textContent = String(s).padStart(2, '0');
  };
  countdown();
  const timer = setInterval(countdown, 1000);
});
 $('.carouselP3').owlCarousel({
  loop: true,
  margin: 0,
  nav: true, 
  dots: false,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  navText : [
  "<div class='nav-btn prev-slide'><i class='bi bi-caret-left'></i></div>",
  "<div class='nav-btn next-slide'><i class='bi bi-caret-right'></i></div>"
],
  responsive: {
    0: { items: 2 },
    600: { items: 4 },
    1000: { items: 5 }
  }
});
$('#flashDealsCarousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2500,
  responsive: {
    0: { items: 3},
    600: { items: 4 },
    1000: { items: 8 }
  }
});
let count = 0;
const counterElement = document.getElementById('counter');
function increase() {
  count++;
  counterElement.textContent = count;
}

function decrease() {
  if (count > 0) {
    count--;
    counterElement.textContent = count;
}
}
$(document).ready(function () {
$(".carousel3").owlCarousel({
  items: 3,
  loop: true,
  margin: 30,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  rtl: false,
  navText: ["<", ">"],
  responsive: {
    0: { items: 1 },
    576: { items: 2 },
    768: { items: 2 },
    992: { items: 3 },
    1200: { items: 3 }
  }});});

 $('#Crs4').owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  rtl: false,
  navText: ["<", ">"],
  responsive: {
    0: { items: 2 },
    600: { items: 3 },
    1000: { items: 5 }
  }
});
const imageList = [
  "../final-Project-web/img/h1.png",
  "../final-Project-web/img/h2.png",
  "../final-Project-web/img/h1.png",
  "../final-Project-web/img/h2.png"
];
const mainImage = document.getElementById("hoodieMainImage");
const hoodieIcons = document.querySelectorAll(".hoodieIcon");
let currentIndex = 0;
let autoChange;
function changeImage(index) {
  mainImage.src = imageList[index];
  hoodieIcons.forEach(icon => icon.classList.remove("active"));
  hoodieIcons[index].classList.add("active");
  currentIndex = index;
}
function startAutoChange() {
  autoChange = setInterval(() => {
    let nextIndex = (currentIndex + 1) % imageList.length;
    changeImage(nextIndex);
  }, 5000); 
}
function stopAutoChange() {
  clearInterval(autoChange);
}
hoodieIcons.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    changeImage(index);
    stopAutoChange();
    startAutoChange(); 
  });
});
startAutoChange();
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", function () {
if (window.scrollY > 300) {
  scrollBtn.style.display = "block";
} else {
  scrollBtn.style.display = "none";
}});
scrollBtn.addEventListener("click", function () {
window.scrollTo({
  top: 0,
  behavior: "smooth"
});
});

document.addEventListener("DOMContentLoaded", function () {
const thumbnails = document.querySelectorAll("ul li a");
const BaribieImg = document.getElementById("BaribieImg");
thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", function (e) {
    e.preventDefault();
    const newSrc = this.getAttribute("data-img");
    if (newSrc) {
      BaribieImg.src = newSrc;
    }
  });
});
BaribieImg.addEventListener("mousemove", function (e) {
  const rect = this.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const xPercent = (x / rect.width) * 100;
  const yPercent = (y / rect.height) * 100;

  this.style.transformOrigin = `${xPercent}% ${yPercent}%`;
  this.style.transform = "scale(2.2)";
});
BaribieImg.addEventListener("mouseleave", function () {
  this.style.transform = "scale(1)";
  this.style.transformOrigin = "center center";
});
});
const coupon = document.getElementById("copyCode");
coupon.addEventListener("click", function () {  
  navigator.clipboard.writeText("COUPON25");
  const originalText = coupon.textContent;
  coupon.textContent = "COPIED!";
  setTimeout(() => {
    coupon.textContent = originalText;
  }, 2000);
});
function toggleSearchBox() {document.getElementById("searchSuggestions").classList.remove("d-none");}
function hideSearchBox() {
  setTimeout(() => {
      document.getElementById("searchSuggestions").classList.add("d-none");
  }, 200);
}
const gridView = document.getElementById("gridView");
const listView = document.getElementById("listView");
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");
gridBtn.addEventListener("click", () => {
  gridView.classList.remove("d-none");
  listView.classList.add("d-none");
});
listBtn.addEventListener("click", () => {
  listView.classList.remove("d-none");
  gridView.classList.add("d-none");
});