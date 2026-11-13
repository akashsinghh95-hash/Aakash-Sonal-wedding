window.INVITATION_CONFIG = {
  theme: "ruby",
  defaultLanguage: "en",

  colors: {
    deepWine: "#1a0207",
    velvet: "#4a0915",
    ruby: "#8f1426",
    warmGold: "#d9b47c",
    ivory: "#f7eee6",
    inkDark: "#24070d",
    inkMuted: "#5e3a41"
  },

  event: {
    dateISO: "2026-12-20",
    time24: "10:00",
    endTime24: "16:00",
    timeZone: "Asia/Kolkata",
    utcOffset: "+05:30",

    couple: {
      en: { personOne: "Aakash", conjunction: "&", personTwo: "Sonal", fullTitle: "Aakash & Sonal" },
      hi: { personOne: "आकाश", conjunction: "एवं", personTwo: "सोनल", fullTitle: "आकाश एवं सोनल" }
    },

    eventType: { en: "Wedding Invitation", hi: "शुभ विवाह निमंत्रण" },
    displayDate: { en: "Sunday, 20 December 2026", hi: "रविवार, 20 दिसम्बर 2026" },
    displayTime: { en: "From 10:00 AM IST onwards", hi: "प्रातः 10:00 बजे से" },
    calendarMonthLabel: { en: "December 2026", hi: "दिसम्बर 2026" }
  },

  media: {
    openingVideo: "assets/opening.mp4",
    posterImage: "",
    backgroundMusic: "assets/music.mp3"  // यहाँ अपनी म्यूजिक फाइल सेट करें
  },

  letter: {
    en: {
      kicker: "With Blessings of Our Elders",
      salutation: "Dear Family & Friends,",
      paragraphs: [
        "With joyful hearts and the blessings of our parents, we warmly invite you to celebrate the wedding of Aakash and Sonal.",
        "Your presence, prayers, and blessings will make this auspicious union truly memorable as we begin our new journey together."
      ],
      signOff: "Warmly,",
      signature: "Aakash & Sonal"
    },
    hi: {
      kicker: "बड़ों के आशीर्वाद सहित",
      salutation: "प्रिय परिजन एवं मित्रगण,",
      paragraphs: [
        "परमपिता परमेश्वर की असीम कृपा एवं हमारे माता-पिता के आशीर्वाद से, हम आपको आकाश एवं सोनल के शुभ विवाह समारोह में सादर आमंत्रित करते हैं।",
        "इस पावन अवसर पर आपकी स्नेहमयी उपस्थिति और शुभकामनाएँ हमारे नए जीवन की शुरुआत को अविस्मरणीय बना देंगी।"
      ],
      signOff: "स्नेहाकांक्षी,",
      signature: "आकाश एवं सोनल"
    }
  },

  schedule: {
    enabled: true,
    heading: { en: "Wedding Programme", hi: "मांगलिक कार्यक्रम" },
    subheading: { en: "Sunday, 20 December 2026", hi: "रविवार, 20 दिसम्बर 2026" },
    items: [
      {
        time: { en: "10:00 AM", hi: "प्रातः 10:00 बजे" },
        title: { en: "Ghurchadhi", hi: "घुड़चढ़ी" },
        description: { en: "Traditional ceremonial procession and family blessings before the baraat.", hi: "बारात प्रस्थान से पूर्व पारंपरिक घुड़चढ़ी रस्म।" }
      },
      {
        time: { en: "11:00 AM", hi: "प्रातः 11:00 बजे" },
        title: { en: "Departure of Baraat", hi: "बारात प्रस्थान" },
        description: { en: "Joyous wedding procession departing towards the wedding venue.", hi: "विवाह स्थल के लिए बारात प्रस्थान।" }
      },
      {
        time: { en: "12:00 PM", hi: "दोपहर 12:00 बजे" },
        title: { en: "Wedding Lunch", hi: "प्रीतिभोज (दोपहर का भोजन)" },
        description: { en: "Festive afternoon feast served with warmth and hospitality.", hi: "सभी अतिथियों के सम्मान में स्वादिष्ट प्रीतिभोज।" }
      }
    ]
  },

  venue: {
    enabled: true,
    heading: { en: "The Venue", hi: "विवाह स्थल" },
    name: { en: "Ashoka Barat Ghar", hi: "अशोका बारात घर" },
    address: { en: "3, Thimayya Marg, Gopi Nath Bazar, Delhi Cantonment, New Delhi, Delhi 110010", hi: "3, थिमैया मार्ग, गोपी नाथ बाज़ार, दिल्ली छावनी, नई दिल्ली, दिल्ली 110010" },
    mapUrl: "https://share.google/5nqAEIXhVfqEIXyDW",
    embedUrl: ""
  },

  dressCode: { enabled: false, heading: { en: "", hi: "" }, description: { en: "", hi: "" }, swatches: [] },
  wishes: { enabled: false, heading: { en: "", hi: "" }, text: { en: "", hi: "" } },
  faq: { enabled: false, heading: { en: "", hi: "" }, items: [] },
  rsvp: { enabled: false, endpoint: "", demoMode: false },

  closing: {
    heading: { en: "We Look Forward to Welcoming You", hi: "आपके स्वागत की प्रतीक्षा में" },
    note: { en: "With love and warm regards from both families.", hi: "दोनों परिवारों की ओर से सादर एवं सस्नेह।" }
  },

  ui: {
    en: {
      openButton: "Open Invitation", skipButton: "Skip", scrollCue: "Scroll to read", langToggle: "हिन्दी",
      langAriaLabel: "Switch language to Hindi", countdownHeading: "Counting Down to the Celebration",
      days: "Days", hours: "Hours", minutes: "Minutes", eventDayMessage: "Today is the wedding celebration.",
      pastEventMessage: "Thank you for celebrating with us.", addToCalendar: "Add to Calendar (.ics)",
      openMap: "Open Map", weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    },
    hi: {
      openButton: "निमंत्रण खोलें", skipButton: "आगे बढ़ें", scrollCue: "नीचे स्क्रॉल करें", langToggle: "English",
      langAriaLabel: "Switch language to English", countdownHeading: "शुभ घड़ी की प्रतीक्षा",
      days: "दिन", hours: "घंटे", minutes: "मिनट", eventDayMessage: "आज शुभ विवाह समारोह है।",
      pastEventMessage: "हमारे साथ शामिल होने के लिए हृदय से धन्यवाद।", addToCalendar: "कैलेंडर में जोड़ें (.ics)",
      openMap: "मानचित्र खोलें", weekdays: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"]
    }
  }
};