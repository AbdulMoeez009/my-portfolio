gsap.registerPlugin(ScrollTrigger);
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const generatedProjectDetails = {
  "quiz-master": {
    stack: "Java / SQLite / Android Studio / XML",
    type: "Mobile Application",
    overview: "A focused quiz application for practicing questions, tracking progress and keeping the learning flow simple on Android.",
    features: ["Question and answer flow", "SQLite local persistence", "Score and progress tracking", "Responsive Android layouts", "Offline-first data access"],
    built: "Java, Android Studio, XML layouts and SQLite were combined into a lightweight local application. The data model keeps quiz content and results available without a network connection.",
    role: "Product flow and UI design, Android development, local database design, screen navigation and interaction refinement.",
  },
  "expense-tracker": {
    stack: "Java / Room DB / SQLite / Android Studio",
    type: "Finance Application",
    overview: "An Android expense tracker that gives users a quick way to record spending and understand their day-to-day finances.",
    features: ["Create and edit expense records", "Room database persistence", "Category-based organization", "Simple finance overview", "Reliable local state"],
    built: "The app uses Java with Room as a structured SQLite abstraction. Clear input states and reusable list patterns make repeated expense entry fast and predictable.",
    role: "Product design, mobile UI implementation, Room entities and queries, validation and expense workflow design.",
  },
  "task-flow": {
    stack: "Java / Kotlin / Firebase / Android",
    type: "Productivity Application",
    overview: "A Firebase-backed task manager for creating deadlines, receiving reminders and keeping task state synchronized across the application.",
    features: ["Task creation and editing", "Deadline and reminder flows", "Firebase real-time sync", "Task status management", "Organized productivity dashboard"],
    built: "Firebase provides the shared data layer while the Android client handles task state, deadline information and user-facing reminders through focused screens.",
    role: "User-flow design, Android application development, Firebase integration, task-state behavior and interface structure.",
  },
  "food-nest": {
    stack: "React / Node.js / Firebase / REST API / HTML / CSS / JavaScript",
    type: "Web Application",
    overview: "A food delivery web experience that organizes browsing, menu selection and ordering into a clear responsive flow.",
    features: ["Restaurant and menu browsing", "Product detail presentation", "Cart-oriented ordering flow", "Responsive layouts", "Clear calls to action"],
    built: "I handled the product flow from information architecture and interface design through React components, Node.js API logic, Firebase data and responsive deployment-ready frontend behavior.",
    role: "Discovery, wireframes, visual design, React frontend, Node.js backend/API work, Firebase data integration and responsive QA.",
  },
  "vortex-studio": {
    stack: "React / Node.js / Firebase / JavaScript / CSS",
    type: "Agency Website",
    overview: "A bold studio website concept designed to present creative services, selected work and a direct path to inquiry.",
    features: ["Service-led information hierarchy", "Selected work presentation", "Responsive composition", "Motion-led interaction details", "Inquiry-focused navigation"],
    built: "The site was taken from visual direction to reusable React interface sections, Node.js-ready service logic and Firebase-backed content patterns, with responsive behavior across devices.",
    role: "Brand discovery, UI design, React frontend, Node.js integration, Firebase setup, responsive implementation and interaction polish.",
  },
  "dev-folio": {
    stack: "React / Node.js / Firebase / JavaScript / CSS",
    type: "Portfolio Website",
    overview: "A developer portfolio system built to make skills, experience and project work easy for a potential client or hiring team to scan.",
    features: ["Project-led navigation", "Experience and education sections", "Responsive layout", "Contact inquiry flow", "Animated page transitions"],
    built: "The implementation combines a single-page React route system, reusable content sections, Node.js-ready contact/API patterns, Firebase integration points, responsive CSS and GSAP motion.",
    role: "Portfolio UX and visual design, React frontend engineering, Node.js/API planning, Firebase integration points and interaction system.",
  },
  "shop-ease": {
    stack: "React / Node.js / Firebase / JavaScript / CSS",
    type: "E-commerce Interface",
    overview: "An e-commerce interface concept focused on product discovery, confident product presentation and a low-friction shopping journey.",
    features: ["Product listing layout", "Product detail hierarchy", "Shopping cart interaction", "Responsive product grids", "Conversion-focused calls to action"],
    built: "Reusable React product components, Node.js commerce/API patterns, Firebase-ready data handling, responsive grids and shopping state create a foundation for a real catalog.",
    role: "Commerce flow design, React component architecture, Node.js/API planning, Firebase data modeling and responsive shopping experience.",
  },
  "vpower-online": {
    stack: "Wix Studio / JavaScript / Authentication / Chat / Firebase",
    type: "Live Client Website",
    overview: "A live client platform for VPower Online combining a branded web presence with account access, communication and interactive engagement features.",
    features: ["OTP authentication", "Google sign-in", "Client chat experience", "Spin-wheel engagement feature", "Branded responsive pages"],
    built: "Wix Studio was used to ship the client-facing site while authentication, chat and interactive campaign features supported the wider customer journey.",
    role: "Client discovery, interface design, web development, authentication and chat integration, Firebase-connected feature planning and delivery communication.",
  },
  "ledger-crm": {
    stack: "React / Node.js / Firebase / Firestore / JavaScript",
    type: "Business Web App",
    overview: "A practical invoicing CRM for managing client accounts, payment records and the operational details around service delivery.",
    features: ["Client account records", "Invoice creation and tracking", "Payment ledger", "Firestore data storage", "Role-aware business workflows"],
    built: "React dashboard views connect to Node.js business logic and Firebase/Firestore collections for structured client, invoice and payment data, with role-aware workflows.",
    role: "CRM discovery and UI design, React dashboard development, Node.js/API logic, Firestore data modeling and usability refinement.",
  },
  flowstate: {
    stack: "React / Node.js / Firebase / JavaScript / CSS",
    type: "Waitlist Landing Page",
    overview: "A conversion-focused waitlist experience designed to explain a product clearly and turn early interest into qualified sign-ups.",
    features: ["Focused value proposition", "Waitlist capture flow", "Responsive landing layout", "Trust-building content hierarchy", "Clear conversion path"],
    built: "The page pairs conversion-focused design with React components, Node.js form/API handling, Firebase-ready lead storage and responsive CSS to keep sign-up direct on every screen.",
    role: "Content and visual design, React frontend, Node.js form/API logic, Firebase lead-flow planning and responsive QA.",
  },
  "forex-analysis": {
    stack: "React / Node.js / Firebase / JavaScript / AI concepts",
    type: "Analysis Web App",
    overview: "A trading analysis concept that organizes Smart Money Concepts into a clearer decision-support workflow for market research.",
    features: ["Order Block analysis", "CHoCH and BOS concepts", "Point of Interest tracking", "Capital management guidance", "Structured market notes"],
    built: "The interface is organized around readable market context, structured signals and risk-aware information, with React UI, Node.js analysis/API patterns and Firebase-ready user data.",
    role: "Product and analytical UI design, React frontend, Node.js/API planning, Firebase data flow and information architecture.",
  },
  "client-sites": {
    stack: "React / Node.js / Firebase / HTML / CSS / JavaScript / Wix Studio",
    type: "Client Work Collection",
    overview: "A collection of five to six client portfolio and agency websites delivered around different brands, services and business goals.",
    features: ["Brand-specific page structures", "Responsive client layouts", "Service and portfolio presentation", "Conversion-focused contact paths", "Practical handoff-ready builds"],
    built: "Each build was shaped around the client's content and audience, moving from visual design to React frontend patterns, Node.js/API planning, Firebase data needs and responsive delivery.",
    role: "Client discovery, UX/UI design, React and web development, Node.js/API integration, Firebase planning and delivery support.",
  },
};

function createGeneratedProjectDetails() {
  const workProjects = document.querySelectorAll(".project[data-project]");
  workProjects.forEach((project) => {
    const id = "case-" + project.dataset.project;
    if (document.getElementById(id)) return;
    const detail = generatedProjectDetails[project.dataset.project];
    if (!detail) return;
    const title = project.querySelector(".project-name")?.textContent.trim() || "Project";
    const number = project.querySelector(".project-num")?.textContent.trim() || "00";
    const page = document.createElement("section");
    page.className = "page case";
    page.id = id;
    page.innerHTML = `<div class="container">
      <div class="case-hero"><div><div class="case-number mono">PROJECT ${number} / 16</div><h2 class="case-title">${title}<span class="serif">.</span></h2><p class="case-intro">${detail.overview}</p><div class="case-actions"><button class="btn route" data-page="work"><span>← Back to work</span></button></div></div><div class="case-cover"><div class="case-cover-screen"></div></div></div>
      <div class="case-info-grid"><div class="case-info"><span class="mono muted">TYPE</span><strong>${detail.type}</strong></div><div class="case-info"><span class="mono muted">YEAR</span><strong>2026</strong></div><div class="case-info"><span class="mono muted">STACK</span><strong>${detail.stack}</strong></div><div class="case-info"><span class="mono muted">STATUS</span><strong>Selected work</strong></div></div>
      <div class="case-section"><div class="case-section-grid"><div><span class="mono muted">01 — OVERVIEW</span><h3>The <span class="serif">product.</span></h3></div><div class="case-content"><p>${detail.overview}</p><p>This project was shaped around a real user need: make the primary task easy to understand, easy to start and reliable across screen sizes.</p></div></div></div>
      <div class="case-section"><div class="case-section-grid"><div><span class="mono muted">02 — FEATURES</span><h3>What it <span class="serif">does.</span></h3></div><div class="case-content"><ul>${detail.features.map((feature) => `<li>${feature}</li>`).join("")}</ul></div></div></div>
      <div class="case-section"><div class="case-section-grid"><div><span class="mono muted">03 — TECHNOLOGY</span><h3>How it was <span class="serif">built.</span></h3></div><div class="case-content"><p>${detail.built}</p><div class="architecture"><div class="arch-box"><strong>01 — Design</strong><p class="muted">User flow, information architecture and visual direction.</p></div><div class="arch-box"><strong>02 — Frontend</strong><p class="muted">React, JavaScript, HTML, CSS and responsive UI.</p></div><div class="arch-box"><strong>03 — Backend / data</strong><p class="muted">Node.js APIs, Firebase, Firestore or local database logic.</p></div><div class="arch-box"><strong>04 — Delivery</strong><p class="muted">Testing, refinement and a usable product workflow.</p></div></div></div></div></div>
      <div class="case-section"><div class="case-section-grid"><div><span class="mono muted">04 — MY ROLE</span><h3>What I <span class="serif">handled.</span></h3></div><div class="case-content"><p>${detail.role}</p></div></div></div>
      <div class="case-nav"><button class="route" data-page="work"><small class="mono">Back</small><strong>← All projects</strong></button></div>
    </div>`;
    document.querySelector("main.app").appendChild(page);
  });
}

createGeneratedProjectDetails();
const notFoundPage = document.createElement("section");
notFoundPage.className = "page not-found";
notFoundPage.id = "not-found";
notFoundPage.innerHTML = `<div class="container"><div class="page-header"><div><div class="mono muted">404 — Page not found</div><h2>WRONG<br /><span class="serif">TURN.</span></h2></div></div><p class="not-found-copy">This page does not exist. Head back to the portfolio and choose a project or section.</p><button class="btn primary route" data-page="home"><span>Return home →</span></button></div>`;
document.querySelector("main.app").appendChild(notFoundPage);
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
  experience: "Experience",
  education: "Education",
  services: "Services",
  contact: "Get in touch",
  "case-vault": "RPM CRM",
  "case-crm": "Sensory Brew",
  "case-growth": "Events",
  "case-brand": "Vault",
};

const caseOrder = ["case-vault", "case-crm", "case-growth", "case-brand"];
const isCasePage = (pid) => !!pid && pid.startsWith("case-");

function activatePage(id, updateHistory) {
  pages.forEach((p) => p.classList.remove("active"));
  const target = document.getElementById(id);
  if (!target) {
    id = "not-found";
    document.getElementById(id).classList.add("active");
    document.title = "Page not found — Abdul Moeez";
    animateEntrance(document.getElementById(id));
    return;
  }
  target.classList.add("active");
  document.title = id.startsWith("case-")
    ? `${target.querySelector(".case-title")?.textContent.replace(".", "") || "Project"} — Abdul Moeez`
    : "Abdul Moeez — Full Stack Developer";
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
  if (!document.getElementById(id)) id = "not-found";
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
  if (!project.dataset.project) return;
  project.setAttribute("role", "link");
  project.setAttribute("tabindex", "0");
  project.setAttribute(
    "aria-label",
    `Open case study: ${project.querySelector(".project-name")?.textContent.trim() || "project"}`,
  );
  project.addEventListener("click", () =>
    showPage("case-" + project.dataset.project),
  );
  project.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showPage("case-" + project.dataset.project);
    }
  });
});

function animateEntrance(page) {
  gsap.set(page, { opacity: 1, scale: 1, clearProps: "scale" });
  if (reduceMotion) {
    gsap.set(
      page.querySelectorAll(
        ".reveal, .stack-item, .process-item, .service, .stat, .timeline-item, .arch-box, .project, .case-info, .page-header h2, .case-title, .about-title, .contact-title, .large-copy, .hero-text, .case-intro, .case-content > p, .home-section, .case-section, .contact-grid, .about-grid, .services",
      ),
      { opacity: 1, y: 0, clearProps: "transform" },
    );
    return;
  }
  ScrollTrigger.getAll().forEach((st) => {
    if (st.trigger && page.contains(st.trigger)) st.kill();
  });

  const reveals = page.querySelectorAll(
    ".reveal, .stack-item, .process-item, .service, .stat, .timeline-item, .arch-box, .project, .case-info",
  );
  if (!reveals.length) return;
  gsap.set(reveals, { opacity: 0, y: 24 });

  animatePageLayers(page);

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

function animatePageLayers(page) {
  const textLayers = page.querySelectorAll(
    ".page-header h2, .case-title, .about-title, .contact-title, .large-copy, .hero-text, .case-intro, .case-content > p",
  );
  const sections = page.querySelectorAll(
    ".home-section, .case-section, .contact-grid, .about-grid, .services",
  );
  const components = page.querySelectorAll(
    ".architecture .arch-box, .case-info, .process-item, .stack-item, .stat, .service, .project",
  );

  if (textLayers.length) gsap.set(textLayers, { opacity: 0, y: 18 });
  if (sections.length) gsap.set(sections, { opacity: 0, y: 24 });
  if (components.length) gsap.set(components, { opacity: 0, y: 18 });

  const visible = (elements) =>
    Array.from(elements).filter(
      (element) => element.getBoundingClientRect().top < window.innerHeight * 0.92,
    );
  const revealNow = (elements, delay = 0) => {
    const current = visible(elements);
    if (!current.length) return;
    gsap.to(current, {
      opacity: 1,
      y: 0,
      duration: 0.72,
      delay,
      stagger: 0.07,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  revealNow(textLayers);
  revealNow(sections, 0.08);
  revealNow(components, 0.16);

  const later = [
    ...Array.from(textLayers),
    ...Array.from(sections),
    ...Array.from(components),
  ].filter((element) => !visible([element]).includes(element));
  if (!later.length) return;
  ScrollTrigger.batch(later, {
    start: "top 90%",
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.72,
        stagger: 0.07,
        ease: "power3.out",
        overwrite: "auto",
      }),
  });
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

document.querySelectorAll(".project[data-project]").forEach((project) => {
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

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const button = form.querySelector("button span");
  const status = document.getElementById("formStatus");
  const original = button.textContent;
  const submitBtn = form.querySelector('button[type="submit"]');

  submitBtn.disabled = true;
  button.textContent = "Sending...";
  status.textContent = "";

  try {
    const formData = new FormData(form);
    const res = await fetch(
      `https://formsubmit.co/ajax/${form.action.split("/").pop()}`,
      {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      },
    );

    if (res.ok) {
      button.textContent = "Inquiry received ✓";
      form.reset();
    } else {
      throw new Error("Request failed");
    }
  } catch (err) {
    button.textContent = "Couldn't send — try email";
    status.textContent =
      "If this keeps happening, email abdulmoeez3020@gmail.com directly.";
  } finally {
    setTimeout(() => {
      button.textContent = original;
      submitBtn.disabled = false;
    }, 3000);
  }
});

const mobile = document.getElementById("mobileMenu");
const navLinksEl = document.querySelector(".nav-links");

function closeMobileMenu() {
  navLinksEl?.classList.remove("is-open");
  mobile?.setAttribute("aria-expanded", "false");
  mobile.textContent = "Menu";
}

function toggleMobileMenu() {
  if (!navLinksEl) return;
  const isOpen = navLinksEl.classList.toggle("is-open");
  mobile.setAttribute("aria-expanded", String(isOpen));
  mobile.textContent = isOpen ? "Close" : "Menu";
}

mobile.addEventListener("click", toggleMobileMenu);

navLinksEl?.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 950) {
      closeMobileMenu();
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 950) {
    closeMobileMenu();
  }
});

const initial = location.hash.replace("#", "") || "home";
activatePage(initial, false);

const currentYear = document.getElementById("currentYear");
if (currentYear) currentYear.textContent = new Date().getFullYear();