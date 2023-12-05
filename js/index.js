function handleClick(event) {
    // Xóa class "nav-active" của tất cả các thẻ <a> trong danh sách
    var navLinks = document.querySelectorAll('.nav-link-item');
    navLinks.forEach(function(link) {
      link.classList.remove('nav-active');
    });
  
    // Thêm class "nav-active" vào thẻ <a> được click
    event.target.classList.add('nav-active');
  }

  function handleClickHome(event) {
    // Xóa class "nav-active" của tất cả các thẻ <a> trong danh sách
    var navLinks = document.querySelectorAll('.nav-link-item');
    navLinks.forEach(function(link) {
      link.classList.remove('nav-active');
    });
  }

  window.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('section'); // Lấy tất cả các phần tử <section>
    var navLinks = document.querySelectorAll('.nav-link-item'); // Lấy tất cả các liên kết trong thanh điều hướng
  
    function handleScroll() {
      var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  
      // Tìm phần tử <section> gần nhất với vị trí cuộn hiện tại
      var closestSection;
      var closestDistance = Infinity;
      sections.forEach(function(section) {
        var sectionTop = section.offsetTop;
        var distance = Math.abs(sectionTop - currentScrollPos);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section;
        }
      });
  
      // Lấy id của phần tử <section> gần nhất
      var closestSectionId = closestSection.getAttribute('id');
  
      // Xóa class "nav-active" của tất cả các liên kết trong thanh điều hướng
      navLinks.forEach(function(link) {
        link.classList.remove('nav-active');
      });
  
      // Thêm class "nav-active" vào liên kết tương ứng với phần tử <section> gần nhất (nếu có)
      var activeLink = document.querySelector('.nav-link-item[href="#' + closestSectionId + '"]');
      if (activeLink) {
        activeLink.classList.add('nav-active');
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  });

 // Lấy các phần tử cần sử dụng
const scrollButton = document.querySelector('.scroll-page');
const sections = document.querySelectorAll('section');
const homeSection = document.querySelector('#index'); // Thay đổi đường dẫn tới section home
const scrollIcon = document.querySelector('.scroll-icon');

// Thiết lập sự kiện click cho nút scroll
scrollButton.addEventListener('click', scrollToNextSection);

// Hàm xử lý khi click vào nút scroll
function scrollToNextSection() {
  const currentSection = getCurrentSection();
  let nextSection = currentSection.nextElementSibling;

  // Kiểm tra xem có phải đang ở section cuối cùng không
  const isLastSection = nextSection === null || !nextSection.matches('section');

  // Nếu đang ở section cuối cùng, chuyển về trang home
  if (isLastSection) {
    nextSection = homeSection;
    scrollIcon.classList.remove('fa-angles-down');
    scrollIcon.classList.add('fa-angles-up');
  }

  if (!isLastSection){
    scrollIcon.classList.remove('fa-angles-up');
    scrollIcon.classList.add('fa-angles-down');
  }
  
  // Cuộn trang đến section tiếp theo
  nextSection.scrollIntoView({ behavior: 'smooth' });
}

// Hàm lấy section hiện tại
function getCurrentSection() {
  let currentSection = null;
  let closestDistance = Infinity;

  // Tìm section gần nhất với vị trí hiện tại của trang
  sections.forEach((section) => {
    const distance = Math.abs(section.getBoundingClientRect().top);
    if (distance < closestDistance) {
      closestDistance = distance;
        currentSection = section;
    }
  });

  return currentSection;
}

window.addEventListener('scroll', function(){
  if (window.scrollY <= 100) {
    scrollIcon.classList.remove('fa-angles-up');
    scrollIcon.classList.add('fa-angles-down');
  } else if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight){
    console.log('The end')
    scrollIcon.classList.remove('fa-angles-down');
    scrollIcon.classList.add('fa-angles-up');
  }
});

function showMenu(){
  let menu = document.querySelector('.items-slide-bar');
  let icon = document.querySelector('.menu-icon');
  if (!menu.classList.contains('menu-active')){
    menu.classList.add('menu-active');
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-x');
    menu.style.display = 'block';
  } else {
    menu.classList.remove('menu-active');
    icon.classList.remove('fa-x');
    icon.classList.add('fa-bars');
    menu.style.display = 'none';
  }
  
}