/* SPA navigation, sticky header, reviews dataset (~40), render + localStorage for new reviews */
(function () {
  // elements
  const header = document.getElementById("siteHeader");
  const navToggle = document.getElementById("navToggle");
  const navList = document.getElementById("navList");

  // show page by id
  function showPage(id) {
    document.querySelectorAll(".page").forEach((p) => {
      if (p.id === id) p.classList.add("active");
      else p.classList.remove("active");
    });
    if (window.innerWidth <= 760 && navList) {
      navList.style.display = "none";
      navToggle.setAttribute("aria-expanded", "false");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // default
  showPage("home");

  // nav clicks (delegation)
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-nav]");
    if (!t) return;
    e.preventDefault();
    const id = t.getAttribute("data-nav");
    if (id) showPage(id);
  });

  // sticky shadow
  const onScroll = () => {
    if (window.scrollY > 10) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll);
  onScroll();

  // mobile nav toggle
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      if (navList.style.display === "flex" || navList.style.display === "block")
        navList.style.display = "none";
      else {
        navList.style.display = "flex";
        navList.style.flexDirection = "column";
      }
    });
  }

  /* ---------- REVIEWS DATASET (~40 sample reviews) ---------- */
  const sampleReviews = [
    {
      name: "Анастасія & Роман",
      rating: 5,
      message: "Все було чудово! Дякуємо команді за ідеальне свято."
    },
    {
      name: "Юлія & Олег",
      rating: 5,
      message: "Професіонали в кожному русі. Рекомендуємо!"
    },
    {
      name: "Ірина & Дмитро",
      rating: 5,
      message: "Казкова атмосфера, чудове оформлення."
    },
    {
      name: "Наталя & Сергій",
      rating: 5,
      message: "Організація на вищому рівні, все пройшло бездоганно."
    },
    {
      name: "Олена & Максим",
      rating: 5,
      message: "Дякуємо за увагу до деталей та теплу підтримку."
    },
    {
      name: "Катерина & Андрій",
      rating: 5,
      message: "Наші гості у захваті! Фотографії чарівні."
    },
    {
      name: "Марина & Павло",
      rating: 5,
      message: "Декор був саме тим, що ми хотіли."
    },
    {
      name: "Світлана & Ігор",
      rating: 5,
      message: "Найкращий вибір для романтичного весілля."
    },
    {
      name: "Людмила & Денис",
      rating: 5,
      message: "Працюють швидко та професійно. Дякуємо!"
    },
    {
      name: "Вікторія & Роман",
      rating: 5,
      message: "Чудова команда, чудовий результат."
    },
    { name: "Оксана & Сергій", rating: 5, message: "Все було як у казці." },
    {
      name: "Тетяна & Іван",
      rating: 5,
      message: "Дуже задоволені — перевершили очікування."
    },
    {
      name: "Аліна & Влад",
      rating: 5,
      message: "Чарівні композиції та привітний персонал."
    },
    {
      name: "Ганна & Олексій",
      rating: 5,
      message: "Відчувався професійний підхід на всіх етапах."
    },
    {
      name: "Леся & Назар",
      rating: 5,
      message: "Стильно, естетично, чуттєво."
    },
    {
      name: "Орися & Петро",
      rating: 5,
      message: "Дякуємо за теплі емоції та підтримку в день весілля."
    },
    {
      name: "Кіра & Роман",
      rating: 5,
      message: "Все було продумано та красиво."
    },
    { name: "Зоряна & Максим", rating: 5, message: "Рекомендуємо однозначно!" },
    {
      name: "Надія & Євген",
      rating: 5,
      message: "Чудова команда та атмосфера."
    },
    {
      name: "Поліна & Сергій",
      rating: 5,
      message: "Всі наші побажання були враховані."
    },
    { name: "Аня & Артем", rating: 5, message: "Професіонали своєї справи." },
    { name: "Лола & Ілля", rating: 5, message: "Дякуємо, було неймовірно." },
    {
      name: "Марта & Тарас",
      rating: 5,
      message: "Організація без стресу — це дорого коштує."
    },
    {
      name: "Дарина & Олександр",
      rating: 5,
      message: "Чудові підрядники та координатори."
    },
    {
      name: "Софія & Богдан",
      rating: 5,
      message: "Наші очікування виправдалися на 100%."
    },
    {
      name: "Рита & Сергій",
      rating: 5,
      message: "Смак та стиль на найвищому рівні."
    },
    { name: "Яна & Антон", rating: 5, message: "Флористика — просто мрія." },
    { name: "Ілона & Борис", rating: 5, message: "Дякуємо за чарівний день." },
    {
      name: "Марічка & Ігор",
      rating: 5,
      message: "Гостинно, професійно, красиво."
    },
    {
      name: "Валя & Рустам",
      rating: 5,
      message: "Найкращі спогади на все життя."
    },
    {
      name: "Світла & Павло",
      rating: 5,
      message: "Дякуємо команді за злагоджену роботу."
    },
    {
      name: "Інесса & Олег",
      rating: 5,
      message: "Все було організовано бездоганно."
    },
    {
      name: "Рената & Влад",
      rating: 5,
      message: "Естетика та смак у кожній деталі."
    },
    { name: "Ліна & Ігор", rating: 5, message: "Чудово, дякуємо!" }
  ];
  // Ensure ~40 reviews by duplicating variations
  while (sampleReviews.length < 40) {
    const base = sampleReviews[sampleReviews.length % 32];
    const copy = { ...base, name: base.name + " ✨", message: base.message };
    sampleReviews.push(copy);
  }

  // localStorage handling
  function loadReviews() {
    const raw = localStorage.getItem("wm_reviews");
    if (!raw) return sampleReviews.slice(); // show sample if none
    try {
      return JSON.parse(raw);
    } catch (e) {
      return sampleReviews.slice();
    }
  }
  function saveReviews(arr) {
    localStorage.setItem("wm_reviews", JSON.stringify(arr));
  }

  // render condensed (home) and full (reviews)
  function renderHomeTestimonials() {
    const container = document.getElementById("homeTestimonials");
    if (!container) return;
    const reviews = loadReviews();
    container.innerHTML = "";
    const subset = reviews.slice(0, 2); // show 2 highlighted on home
    subset.forEach((r) => {
      const el = document.createElement("article");
      el.className = "testimonial card";
      el.innerHTML = `
        <div class="meta">
          <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=200&auto=format&fit=crop" alt="${
            r.name
          }">
          <div><strong>${escapeHTML(
            r.name
          )}</strong><span class="date muted"> — </span></div>
        </div>
        <p class="quote">"${escapeHTML(r.message)}"</p>
        <div class="stars">${"★".repeat(r.rating)}</div>
      `;
      container.appendChild(el);
    });
  }

  function renderAllReviews() {
    const list = document.getElementById("reviewsList");
    if (!list) return;
    const reviews = loadReviews();
    list.innerHTML = "";
    reviews
      .slice()
      .reverse()
      .forEach((r) => {
        const el = document.createElement("article");
        el.className = "card review";
        el.innerHTML = `
        <div class="meta">
          <div style="width:56px;height:56px;border-radius:50%;background:#fff7f6;display:inline-block;margin-right:10px"></div>
          <div><strong>${escapeHTML(
            r.name
          )}</strong><div class="small muted">${new Date(
          r.date || Date.now()
        ).toLocaleDateString()}</div></div>
        </div>
        <p class="muted">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</p>
        <p>${escapeHTML(r.message)}</p>
      `;
        list.appendChild(el);
      });
  }

  function escapeHTML(s) {
    return String(s).replace(
      /[&<>'"]/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        }[c])
    );
  }

  // populate initial sample into storage if empty
  if (!localStorage.getItem("wm_reviews")) {
    saveReviews(sampleReviews);
  }

  // render on load
  renderHomeTestimonials();
  renderAllReviews();

  // review form UI (stars)
  const ratingEl = document.getElementById("rating");
  if (ratingEl) {
    const stars = ratingEl.querySelectorAll(".star");
    const ratingValue = document.getElementById("ratingValue");
    let current = 5;
    function setStars(v) {
      stars.forEach((s) => {
        const val = Number(s.dataset.value);
        s.classList.toggle("active", val <= v);
      });
      if (ratingValue) ratingValue.value = v;
    }
    stars.forEach((s) => {
      s.addEventListener("click", () => {
        current = Number(s.dataset.value);
        setStars(current);
      });
      s.addEventListener("mouseover", () => {
        setStars(Number(s.dataset.value));
      });
      s.addEventListener("mouseout", () => {
        setStars(current);
      });
    });
    setStars(current);
  }

  // handle new review submit
  const reviewForm = document.getElementById("reviewForm");
  if (reviewForm) {
    reviewForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(reviewForm);
      const obj = {
        name: fd.get("name") || "Анонім",
        email: fd.get("email"),
        message: fd.get("message") || "",
        rating: Number(fd.get("ratingValue") || 5),
        date: new Date().toISOString()
      };
      const arr = loadReviews();
      arr.push(obj);
      saveReviews(arr);
      reviewForm.reset();
      if (ratingEl) {
        ratingEl
          .querySelectorAll(".star")
          .forEach((s) =>
            s.classList.toggle("active", Number(s.dataset.value) <= 5)
          );
      }
      document.getElementById("ratingValue").value = 5;
      renderHomeTestimonials();
      renderAllReviews();
      alert("Дякуємо! Ваш відгук додано.");
      showPage("reviews");
    });
  }

  // contact form demo
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(
        "Дякуємо! Ваше повідомлення надіслано (демо). Ми зв'яжемося з вами."
      );
      contactForm.reset();
      showPage("contact");
    });
  }

  // "See all reviews" button (scroll to reviews page)
  const seeAllBtn = document.getElementById("seeAllReviewsBtn");
  if (seeAllBtn) {
    seeAllBtn.addEventListener("click", () => showPage("reviews"));
  }

  // keyboard: Esc closes mobile nav
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navList && window.innerWidth <= 760) {
      navList.style.display = "none";
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
})();
