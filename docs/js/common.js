document.addEventListener("DOMContentLoaded", function () {
  'use strict';

  /* =======================
  // Menu
  ======================= */
  var body = document.querySelector("body"),
  menuOpenIcon = document.querySelector(".nav__icon-menu"),
  menuCloseIcon = document.querySelector(".nav__icon-close"),
  menuList = document.querySelector(".main-nav");

  menuOpenIcon.addEventListener("click", () => {
    menuOpen();
  });

  menuCloseIcon.addEventListener("click", () => {
    menuClose();
  });

  function menuOpen() {
    menuList.classList.add("is-open");
  }

  function menuClose() {
    menuList.classList.remove("is-open");
  }

  /* =======================
  // Animation Load Page
  ======================= */
  setTimeout(function(){
    body.classList.add("is-in");
  },150)

  /* ==================================
  // Stop Animations After All Have Run
  ================================== */
  setTimeout(function(){
    body.classList.add("stop-animations");
  },1500)

  /* ======================================
  // Stop Animations During Window Resizing
  ====================================== */
  let resizeTimer;
  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 300);
  });


  /* =======================
  // Responsive Videos
  ======================= */
  reframe(".post__content iframe:not(.reframe-off), .page__content iframe:not(.reframe-off)");


  /* =======================
  // Zoom Image
  ======================= */
  const lightense = document.querySelector(".page img, .post img"),
  imageLink = document.querySelectorAll(".page a img, .post a img");

  if (imageLink) {
    for (var i = 0; i < imageLink.length; i++) imageLink[i].parentNode.classList.add("image-link");
    for (var i = 0; i < imageLink.length; i++) imageLink[i].classList.add("no-lightense");
  }

  if (lightense) {
    Lightense(".page img:not(.no-lightense), .post img:not(.no-lightense)", {
    padding: 60,
    offset: 30
    });
  }

  /* ============================
  // Testimonials Slider
  ============================ */
  if (document.querySelector(".my-slider")) {
    var slider = tns({
      container: ".my-slider",
      items: 3,
      slideBy: 1,
      gutter: 20,
      nav: false,
      mouseDrag: true,
      autoplay: false,
      controlsContainer: "#customize-controls",
      responsive: {
        1024: {
          items: 3,
        },
        768: {
          items: 2,
        },
        0: {
          items: 1,
        }
      }
    });
  }


  /* ============================
  // iTyped
  ============================ */
  if (document.querySelector(".c-subscribe")) {
    var options = {
      strings: itype_text,
      typeSpeed: 100,
      backSpeed: 50,
      startDelay: 200,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      onFinished: function(){}
    }

    ityped.init('#ityped', options);
  }

 if (document.querySelector(".c-contact-form")) {
    var options = {
      strings: content_text,
      typeSpeed: 180,  // 글자 입력 속도 (ms 단위)
      backSpeed: 120,   // 글자 지우는 속도 (ms 단위)
      startDelay: 200, // 시작 전 딜레이
      backDelay: 2200, // 다 쓰고 지우기 전 대기 시간
      loop: true,
      showCursor: true,
      cursorChar: "|",
      onFinished: function(){}
    }

    ityped.init('#contentText', options);
  }


  /* ============================
  // Scroll to top
  ============================ */
  const btnScrollToTop = document.querySelector(".top");

  window.addEventListener("scroll", function () {
    window.scrollY > window.innerHeight ? btnScrollToTop.classList.add("is-active") : btnScrollToTop.classList.remove("is-active");
  });

  btnScrollToTop.addEventListener("click", function () {
    if (window.scrollY != 0) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
    }
  });

  /* -----------------------
  // post dropdown 버튼 이벤트
  ------------------------ */
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(dropdown => {
    const dropbtn = dropdown.querySelector(".dropbtn");
    const content = dropdown.querySelector(".dropdown-content");

    if (dropbtn && content) {
      dropbtn.addEventListener("click", function (e) {
        e.stopPropagation(); // prevent window click from closing immediately
        // 모든 dropdown-content를 닫기
        document.querySelectorAll(".dropdown-content").forEach(dc => {
          if (dc !== content) dc.style.display = "none";
        });

        // 현재 클릭한 dropdown-content 토글
        content.style.display = content.style.display === "block" ? "none" : "block";
      });
    }
  });

  // 바깥 클릭 시 모든 dropdown-content 닫기
  window.addEventListener("click", function (e) {
    if (!e.target.matches(".dropbtn")) {
      document.querySelectorAll(".dropdown-content").forEach(dc => {
        dc.style.display = "none";
      });
    }
  });


  // 포스트 카드
  const postCards = document.querySelectorAll('.post-card');

  // 카테고리 버튼
  const subBtn = document.querySelectorAll('.sub-btn');

  subBtn.forEach(button => {
    button.addEventListener("click", () => {
      // const filter = button.getAttribute("data-filter").toLowerCase();
      
      const filter = button.dataset.filter.toLowerCase();
     
      postCards.forEach(card => {
      const categories = card.dataset.category.split(',');
       console.log("categories")
       console.log(categories)
        
      console.log("categories.includes(filter)")
      console.log(categories.includes(filter))
        if (categories.includes(filter)) {
          console.log("123546871563")
            card.style.display = 'block';
          } else {
            console.log("------------------------")
            card.style.display = 'none';
          }
      });
      // postCards.forEach(card => {
      //     const categories = card.dataset.category.trim().split(" ")
      //                         .map(cat => cat.toLowerCase())  // 전부 소문자로 변환
      //                         .filter(cat => cat.length > 0); // 빈 문자열 제거

      //   console.log("categories")
      //   console.log(categories)
        

      //   if (categories.includes(filter.toLowerCase())) {
      //     card.style.display = "block";   // 보여주기
      //   } else {
      //     card.style.display = "none";    // 숨기기
      //   }
      // });
    });
  });

//  // 모든 서브 버튼 선택
// const filterButtons = document.querySelectorAll(".sub-btn");
// const cards = document.querySelectorAll(".c-blog-card");

// filterButtons.forEach(button => {
//   button.addEventListener("click", () => {
//     const filterValue = button.getAttribute("data-filter");

//     cards.forEach(card => {
//       const category = card.getAttribute("data-category");

//       if (filterValue === "all" || category === filterValue) {
//         card.style.display = "block"; // 보여줌
//       } else {
//         card.style.display = "none"; // 숨김
//       }
//     });
//   });
// });


});