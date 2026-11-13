(function () {
  "use strict";
  const cfg = window.INVITATION_CONFIG;
  if (!cfg) return;

  let currentLang = cfg.defaultLanguage || "en";
  const openingGate = document.getElementById("opening-gate");
  const openingVideo = document.getElementById("opening-video");
  const openBtn = document.getElementById("open-invitation-btn");
  const skipBtn = document.getElementById("skip-opening-btn");
  const langToggleBtn = document.getElementById("lang-toggle-btn");
  const bgMusic = document.getElementById("bg-music");

  function dismissOpeningGate() {
    if (!openingGate) return;
    openingGate.classList.add("is-dismissed");
    document.body.classList.remove("is-locked");
    if (openingVideo && !openingVideo.paused) openingVideo.pause();
  }

  function startMusic() {
    if (cfg.media && cfg.media.backgroundMusic && bgMusic) {
      bgMusic.src = cfg.media.backgroundMusic;
      bgMusic.play().catch(() => {});
    }
  }

  if (cfg.media && cfg.media.openingVideo && openingVideo) {
    openingVideo.src = cfg.media.openingVideo;
    openingVideo.addEventListener("ended", () => {
      dismissOpeningGate();
      startMusic();
    }, { once: true });
    openingVideo.addEventListener("error", () => openingGate.classList.add("is-dismissed"), { once: true });
  }

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      startMusic();
      if (openingVideo && openingVideo.src) {
        if (skipBtn) skipBtn.hidden = false;
        openingVideo.play().catch(() => dismissOpeningGate());
      } else {
        dismissOpeningGate();
      }
    });
  }

  if (skipBtn) {
    skipBtn.addEventListener("click", () => {
      dismissOpeningGate();
      startMusic();
    });
  }

  function pick(obj, lang) {
    if (!obj) return "";
    return typeof obj === "string" ? obj : (obj[lang] || obj.en || "");
  }

  function render(lang) {
    const ui = cfg.ui[lang] || cfg.ui.en;
    const couple = cfg.event.couple[lang] || cfg.event.couple.en;
    const letter = cfg.letter[lang] || cfg.letter.en;

    document.documentElement.lang = lang;
    document.title = `${couple.fullTitle} — Wedding Invitation`;

    const map = {
      eventType: pick(cfg.event.eventType, lang),
      personOne: couple.personOne,
      conjunction: couple.conjunction,
      personTwo: couple.personTwo,
      fullTitle: couple.fullTitle,
      displayDate: pick(cfg.event.displayDate, lang),
      displayTime: pick(cfg.event.displayTime, lang),
      calendarMonthLabel: pick(cfg.event.calendarMonthLabel, lang),
      openButton: ui.openButton,
      skipButton: ui.skipButton,
      scrollCue: ui.scrollCue,
      langToggle: ui.langToggle,
      letterKicker: letter.kicker,
      letterSalutation: letter.salutation,
      letterSignOff: letter.signOff,
      letterSignature: letter.signature,
      countdownHeading: ui.countdownHeading,
      days: ui.days,
      hours: ui.hours,
      minutes: ui.minutes,
      addToCalendar: ui.addToCalendar,
      scheduleHeading: pick(cfg.schedule.heading, lang),
      scheduleSubheading: pick(cfg.schedule.subheading, lang),
      venueHeading: pick(cfg.venue.heading, lang),
      venueName: pick(cfg.venue.name, lang),
      venueAddress: pick(cfg.venue.address, lang),
      openMap: ui.openMap,
      closingHeading: pick(cfg.closing.heading, lang),
      closingNote: pick(cfg.closing.note, lang)
    };

    document.querySelectorAll("[data-bind]").forEach((el) => {
      const key = el.getAttribute("data-bind");
      if (map[key] !== undefined) el.textContent = map[key];
    });

    const letterBody = document.getElementById("letter-body");
    if (letterBody) {
      letterBody.innerHTML = "";
      (letter.paragraphs || []).forEach((text) => {
        const p = document.createElement("p");
        p.textContent = text;
        letterBody.appendChild(p);
      });
    }

    renderCalendar(lang);
    renderSchedule(lang);
    renderVenue();
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "hi" : "en";
      render(currentLang);
    });
  }

  function renderCalendar(lang) {
    const weekdaysEl = document.getElementById("calendar-weekdays");
    const daysEl = document.getElementById("calendar-days");
    if (!weekdaysEl || !daysEl) return;

    const ui = cfg.ui[lang] || cfg.ui.en;
    weekdaysEl.innerHTML = "";
    ui.weekdays.forEach((wd) => {
      const span = document.createElement("span");
      span.textContent = wd;
      weekdaysEl.appendChild(span);
    });

    const firstWeekday = new Date(Date.UTC(2026, 11, 1)).getUTCDay();
    daysEl.innerHTML = "";
    for (let i = 0; i < firstWeekday; i++) {
      const empty = document.createElement("span");
      empty.className = "calendar-day is-empty";
      daysEl.appendChild(empty);
    }
    for (let d = 1; d <= 31; d++) {
      const cell = document.createElement("span");
      cell.className = "calendar-day";
      cell.textContent = String(d);
      if (d === 20) cell.classList.add("is-event-day");
      daysEl.appendChild(cell);
    }
  }

  function renderSchedule(lang) {
    const list = document.getElementById("schedule-timeline");
    if (!list) return;
    list.innerHTML = "";
    cfg.schedule.items.forEach((item) => {
      const li = document.createElement("li");
      li.className = "timeline-item";
      li.innerHTML = `
        <span class="timeline-marker" aria-hidden="true"></span>
        <span class="timeline-time">${pick(item.time, lang)}</span>
        <h3 class="timeline-title">${pick(item.title, lang)}</h3>
        <p class="timeline-desc">${pick(item.description, lang)}</p>
      `;
      list.appendChild(li);
    });
  }

  function renderVenue() {
    const mapLink = document.getElementById("venue-map-link");
    if (mapLink && cfg.venue.mapUrl) mapLink.href = cfg.venue.mapUrl;
  }

  render(currentLang);
})();