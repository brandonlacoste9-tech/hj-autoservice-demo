/* EN-only i18n for H&J Autoservice demo */
const i18n = {
  en: {
    "nav.services": "Services",
    "nav.why": "Why us",
    "nav.gallery": "Gallery",
    "nav.faq": "FAQ",
    "nav.visit": "Visit",
    "nav.contact": "Contact",
    "nav.call": "(929) 743-2103",
    "hero.kicker": "Milwaukee, Wisconsin · Full-service auto repair · Open daily 8 AM–7 PM",
    "hero.title": "Honest auto repair<br>in the heart of Milwaukee.",
    "hero.sub": "Your neighborhood auto repair shop — brakes, tires, oil changes, diagnostics and more, done right the first time.",
    "hero.cta1": "Call (929) 743-2103",
    "hero.cta2": "See services",
    "trust.t1t": "Open 7 days a week",
    "trust.t1d": "8:00 AM – 7:00 PM, every day",
    "trust.t2t": "Full-service repair",
    "trust.t2d": "Brakes, tires, engine & more",
    "trust.t3t": "Done right",
    "trust.t3d": "Honest work, honest prices",
    "stats.s1n": "7",
    "stats.s1l": "days a week",
    "stats.s2n": "11 hrs",
    "stats.s2l": "open every day",
    "stats.s3n": "Downtown",
    "stats.s3l": "Milwaukee location",
    "stats.s4n": "1st time",
    "stats.s4l": "fixed right",
    "services.kicker": "What we do",
    "services.title": "Complete auto care for your car",
    "services.s1t": "Brake service",
    "services.s1d": "Pads, rotors and full brake inspections — safe stopping you can feel.",
    "services.s2t": "Tire service",
    "services.s2d": "Tire mounting, balancing, rotations and alignments for a smooth ride.",
    "services.s3t": "Oil changes & maintenance",
    "services.s3d": "Fast oil changes, filters and fluids to keep your engine healthy.",
    "services.s4t": "Engine diagnostics",
    "services.s4d": "Check-engine light or strange noise? We find the problem and fix it.",
    "services.s5t": "A/C & heating",
    "services.s5d": "Cooling and heating repairs for year-round Wisconsin comfort.",
    "services.s6t": "General auto repair",
    "services.s6d": "Suspension, steering, batteries and more — one shop for everything.",
    "why.kicker": "Why choose us",
    "why.title": "Your neighborhood shop, done right",
    "why.intro": "We keep Milwaukee moving with straightforward repairs and honest advice. No upsells, no jargon — just your car, fixed properly.",
    "why.l1t": "Open every day",
    "why.l1d": "8 AM to 7 PM, seven days a week — car trouble waits for no one.",
    "why.l2t": "Central location",
    "why.l2d": "Right on N Milwaukee St — easy to reach from anywhere in the city.",
    "why.l3t": "Straightforward pricing",
    "why.l3d": "You approve the work before we touch a wrench.",
    "why.l4t": "One shop for it all",
    "why.l4d": "From oil changes to engine diagnostics, we've got you covered.",
    "gallery.kicker": "The shop in action",
    "gallery.title": "Hands-on care, every car",
    "gallery.c1": "Tires mounted & balanced",
    "gallery.c2": "Oil changes done right",
    "visit.kicker": "Come say hello",
    "visit.title": "Stop by the shop",
    "visit.more": "Find us at 790 N Milwaukee St, Milwaukee — open daily 8:00 AM to 7:00 PM",
    "faq.kicker": "Good to know",
    "faq.title": "Frequently asked questions",
    "faq.q1": "Are you open on weekends?",
    "faq.a1": "Yes — we are open every day from 8:00 AM to 7:00 PM, including weekends.",
    "faq.q2": "Do I need an appointment?",
    "faq.a2": "Appointments help us plan, but walk-ins are welcome. Call (929) 743-2103 to let us know you're coming.",
    "faq.q3": "What kinds of repairs do you do?",
    "faq.a3": "Full-service auto repair: brakes, tires, oil changes, engine diagnostics, A/C and general maintenance.",
    "faq.q4": "Where are you located?",
    "faq.a4": "790 N Milwaukee St, right in Milwaukee — easy to reach from anywhere in the city.",
    "contact.kicker": "Come see us",
    "contact.title": "Get in touch",
    "contact.addr": "Address",
    "contact.phone": "Phone",
    "contact.hours": "Hours",
    "contact.hoursVal": "Sunday – Saturday<br>8:00 AM – 7:00 PM",
    "contact.cta": "Call now",
    "footer.tag": "Auto repair · Milwaukee, Wisconsin"
  }
};

function applyLang(lang) {
  const dict = i18n[lang] || i18n.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang("en");

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("mainNav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }, { passive: true });
});
