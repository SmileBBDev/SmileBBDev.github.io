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


  /* -----------------------
  // 선택한 카테고리에 맞는 포스트 카드 보여주기
  ------------------------ */
  // 포스트 카드
  const postCards = document.querySelectorAll('.post-card');

  // 카테고리 버튼
  const dropBtns = document.querySelectorAll('.dropbtn'); // 상위카테고리
  const subBtn = document.querySelectorAll('.sub-btn'); // 하위카테고리
 
  subBtn.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter.toLowerCase();

      
      // 기존 active 제거
      subBtn.forEach(b => b.classList.remove("active"));
      dropBtns.forEach(b => b.classList.remove("active"));

      // 클릭된 하위 버튼 active
      button.classList.add("active");

      // 해당 하위 버튼의 상위 카테고리 active
      button.closest(".dropdown").querySelector(".dropbtn").classList.add("active");

      postCards.forEach(card => {
      const categories = card.dataset.category.split(',');
        if (categories.includes(filter)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
      });

    });
  });

  /* -----------------------
  // 초기화 - 포스팅 전체 보기
  ------------------------ */
 const allBtn = document.getElementById("allBtn"); // 전체 보기

  allBtn.addEventListener("click", () => {
    // active 초기화
    subBtn.forEach(b => b.classList.remove("active"));
    dropBtns.forEach(b => b.classList.remove("active"));

    allBtn.classList.add("active");

    // 전체 게시물 표시
    postCards.forEach(card => {
      card.style.display = "block";
    });
  });



  





});