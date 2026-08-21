gsap.registerPlugin(ScrollTrigger);
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll(".nav-link");
const routes = document.querySelectorAll(".route");
const tOrb = document.getElementById("tOrb");
const tLabel = document.getElementById("tLabel");
let routing = false;
let activeTransition = null;
let transitionFrom = null;

const pageLabels = {
  home: "Home",
  work: "Selected Work",
  about: "About",
  services: "Services",
  contact: "Get in touch",
  "case-vault": "Vault",
  "case-crm": "CRM",
  "case-growth": "Growth",
  "case-brand": "Brand",
};

const caseOrder = ["case-vault", "case-crm", "case-growth", "case-brand"];
const isCasePage = (pid) => !!pid && pid.startsWith("case-");

function activatePage(id, updateHistory) {
  pages.forEach((p) => p.classList.remove("active"));
  const target = document.getElementById(id);
  if (!target) {
    document.getElementById("home").classList.add("active");
    return;
  }
  target.classList.add("active");
  navLinks.forEach((link) =>
    link.classList.toggle("active", link.dataset.page === id),
  );
  window.scrollTo(0, 0);
  if (updateHistory) {
    history.pushState({ page: id }, "", "#" + id);
  }
  animateEntrance(target);
}

function showPage(id, updateHistory = true) {
  if (!document.getElementById(id)) id = "home";
  if (routing) {
    cancelMotion();
    activatePage(id, updateHistory);
    return;
  }
  if (document.getElementById(id)?.classList.contains("active")) return;
  if (reduceMotion) {
    activatePage(id, updateHistory);
    return;
  }

  const currentId = document.querySelector(".page.active")?.id;
  const fromCase = isCasePage(currentId);
  const toCase = isCasePage(id);

  if (fromCase || toCase) {
    let direction = 1;
    if (fromCase && toCase) {
      direction = caseOrder.indexOf(id) > caseOrder.indexOf(currentId) ? 1 : -1;
    } else if (fromCase && !toCase) {
      direction = -1;
    }
    slideTransition(id, updateHistory, direction);
  } else {
    irisTransition(id, updateHistory);
  }
}

function irisTransition(id, updateHistory) {
  routing = true;
  transitionFrom = document.querySelector(".page.active")?.id || "home";
  const currentPage = document.querySelector(".page.active");
  const label = pageLabels[id] || "";

  gsap.set([currentPage, tOrb, tLabel], { willChange: "transform, opacity" });

  const tl = gsap.timeline({
    defaults: { force3D: true },
    onComplete: () => {
      routing = false;
      activeTransition = null;
      transitionFrom = null;
      gsap.set([currentPage, tOrb, tLabel], { clearProps: "willChange" });
    },
  });
  activeTransition = tl;

  tl.to(
    currentPage,
    { opacity: 0.4, scale: 0.97, duration: 0.65, ease: "power2.inOut" },
    0,
  )
    .set(tOrb, { scale: 0.0001 }, 0)
    .to(tOrb, { scale: 1, duration: 0.85, ease: "power3.inOut" }, 0.1)
    .set(tLabel, { textContent: label }, 0.55)
    .fromTo(
      tLabel,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" },
      0.6,
    )
    .call(() => activatePage(id, updateHistory))
    .to(
      tLabel,
      { opacity: 0, y: -20, duration: 0.5, ease: "power2.in" },
      "+=0.6",
    )
    .to(tOrb, { scale: 0.0001, duration: 0.9, ease: "power3.inOut" }, "-=0.1");
}

function slideTransition(id, updateHistory, direction) {
  routing = true;
  const oldPage = document.querySelector(".page.active");
  transitionFrom = oldPage?.id || "home";
  const newPage = document.getElementById(id);
  if (!newPage) {
    activatePage(id, updateHistory);
    routing = false;
    return;
  }

  const scrollY = window.scrollY;
  window.scrollTo(0, 0);

  gsap.set(oldPage, {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 40,
    y: -scrollY,
    willChange: "transform, opacity",
  });

  newPage.classList.add("active");
  gsap.set(newPage, {
    xPercent: 100 * direction,
    zIndex: 39,
    willChange: "transform, opacity",
  });

  const tl = gsap.timeline({
    defaults: { force3D: true },
    onComplete: () => {
      oldPage.classList.remove("active");
      gsap.set(oldPage, {
        clearProps:
          "position,top,left,width,zIndex,transform,opacity,willChange",
      });
      gsap.set(newPage, { clearProps: "zIndex,transform,opacity,willChange" });
      navLinks.forEach((link) =>
        link.classList.toggle("active", link.dataset.page === id),
      );
      window.scrollTo(0, 0);
      if (updateHistory) {
        history.pushState({ page: id }, "", "#" + id);
      }
      animateEntrance(newPage);
      routing = false;
      activeTransition = null;
      transitionFrom = null;
    },
  });
  activeTransition = tl;

  tl.to(
    oldPage,
    {
      xPercent: -32 * direction,
      opacity: 0.5,
      duration: 0.6,
      ease: "power2.inOut",
    },
    0,
  ).to(newPage, { xPercent: 0, duration: 0.65, ease: "power3.out" }, 0.04);
}

function cancelMotion() {
  if (activeTransition) activeTransition.kill();
  activeTransition = null;
  routing = false;
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  gsap.killTweensOf(
    document.querySelectorAll(
      ".page, .reveal, .stack-item, .process-item, .service, .stat, .timeline-item, .arch-box, .project, .case-info, #tOrb, #tLabel",
    ),
  );
  pages.forEach((page) =>
    gsap.set(page, {
      clearProps: "position,top,left,width,zIndex,transform,opacity,willChange",
    }),
  );
  gsap.set([tOrb, tLabel], { clearProps: "transform,opacity,willChange" });
  transitionFrom = null;
}

routes.forEach((route) =>
  route.addEventListener("click", () => showPage(route.dataset.page)),
);
window.addEventListener("popstate", () =>
  showPage(location.hash.replace("#", "") || "home", false),
);

document.querySelectorAll(".project").forEach((project) => {
  project.addEventListener("click", () =>
    showPage("case-" + project.dataset.project),
  );
});

function animateEntrance(page) {
  gsap.set(page, { opacity: 1, scale: 1, clearProps: "scale" });
  ScrollTrigger.getAll().forEach((st) => {
    if (st.trigger && page.contains(st.trigger)) st.kill();
  });

  const reveals = page.querySelectorAll(
    ".reveal, .stack-item, .process-item, .service, .stat, .timeline-item, .arch-box, .project, .case-info",
  );
  gsap.set(reveals, { opacity: 0, y: 24 });

  const aboveFold = Array.from(reveals).filter(
    (el) => el.getBoundingClientRect().top < window.innerHeight,
  );
  const belowFold = Array.from(reveals).filter((el) => !aboveFold.includes(el));

  if (aboveFold.length) {
    gsap.set(aboveFold, { y: 20 });
    gsap.to(aboveFold, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: "power3.out",
      delay: 0.05,
    });
  }

  if (belowFold.length) {
    ScrollTrigger.batch(belowFold, {
      start: "top 92%",
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.06,
          ease: "power3.out",
        }),
    });
  }
}

window.addEventListener("load", () => {
  if (reduceMotion) return;
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
  tl.fromTo(
    ".hero h1 .row span",
    { yPercent: 110 },
    { yPercent: 0, duration: 1, stagger: 0.12 },
  )
    .fromTo(
      ".eyebrow",
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.6 },
      0,
    )
    .fromTo(
      ".hero-text",
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.5",
    )
    .fromTo(
      ".actions",
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.7 },
      "-=0.55",
    )
    .fromTo(
      ".hero-visual",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.1 },
      "-=0.8",
    )
    .fromTo(
      ".orbit-ring",
      { opacity: 0 },
      { opacity: 1, duration: 1.2, stagger: 0.1 },
      "-=0.9",
    );
});

const nav = document.getElementById("siteNav");
window.addEventListener("scroll", () =>
  nav.classList.toggle("compact", window.scrollY > 40),
);

const cursor = document.querySelector(".cursor");
const ring = document.querySelector(".cursor-ring");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;
const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;

if (!isTouch) {
  window.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + "px";
    cursor.style.top = my + "px";
  });
  (function cursorLoop() {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.left = rx + "px";
    ring.style.top = ry + "px";
    requestAnimationFrame(cursorLoop);
  })();

  document
    .querySelectorAll("button,a,.project,.stack-item,.service")
    .forEach((el) => {
      el.addEventListener("mouseenter", () =>
        document.body.classList.add("hovering"),
      );
      el.addEventListener("mouseleave", () =>
        document.body.classList.remove("hovering"),
      );
    });
}

const prism = document.getElementById("prism");
const prismRotateX = gsap.quickTo(prism, "rotateX", {
  duration: 0.28,
  ease: "power2.out",
});
const prismRotateY = gsap.quickTo(prism, "rotateY", {
  duration: 0.28,
  ease: "power2.out",
});

document.addEventListener("mousemove", (e) => {
  if (window.innerWidth < 900 || reduceMotion) return;
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;
  prismRotateX(-16 + y * -18);
  prismRotateY(28 + x * 40);
});

if (!reduceMotion) {
  gsap.to(".prism-stage", {
    rotateY: 360,
    duration: 40,
    repeat: -1,
    ease: "none",
  });
}

document.querySelectorAll(".project").forEach((project) => {
  const visual = project.querySelector(".project-visual");
  const tiltX = gsap.quickTo(visual, "rotateX", {
    duration: 0.24,
    ease: "power2.out",
  });
  const tiltY = gsap.quickTo(visual, "rotateY", {
    duration: 0.24,
    ease: "power2.out",
  });
  const moveY = gsap.quickTo(visual, "y", {
    duration: 0.24,
    ease: "power2.out",
  });
  gsap.set(visual, { transformPerspective: 1000 });
  project.addEventListener("mousemove", (e) => {
    if (window.innerWidth < 900) return;
    const rect = visual.getBoundingClientRect();
    const x = e.clientX - rect.left,
      y = e.clientY - rect.top;
    const ry = (x / rect.width - 0.5) * 7,
      rx = (y / rect.height - 0.5) * -7;
    tiltX(rx);
    tiltY(ry);
    moveY(-5);
  });
  project.addEventListener("mouseleave", () => {
    tiltX(0);
    tiltY(0);
    moveY(0);
  });
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button span");
  const original = button.textContent;
  button.textContent = "Inquiry received ✓";
  setTimeout(() => {
    button.textContent = original;
    e.target.reset();
  }, 2500);
});

const mobile = document.getElementById("mobileMenu");
mobile.addEventListener("click", () => {
  const navLinksEl = document.querySelector(".nav-links");
  if (navLinksEl.style.display === "flex") {
    navLinksEl.style.display = "none";
  } else {
    navLinksEl.style.display = "flex";
    navLinksEl.style.position = "absolute";
    navLinksEl.style.top = "82px";
    navLinksEl.style.left = "0";
    navLinksEl.style.width = "100%";
    navLinksEl.style.padding = "25px 6%";
    navLinksEl.style.background = "#0a0a09";
    navLinksEl.style.flexDirection = "column";
    navLinksEl.style.alignItems = "flex-start";
    navLinksEl.style.borderBottom = "1px solid #28261f";
  }
});

const initial = location.hash.replace("#", "") || "home";
activatePage(initial, false);
