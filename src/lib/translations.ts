export interface TranslationDict {
  navbar: {
    howToStart: string;
    howToPlay: string;
    games: string;
    features: string;
    about: string;
    rules: string;
    contact: string;
    downloadBtn: string;
    mobileDownloadBtn: string;
  };
  hero: {
    badge: string;
    bangladeshMost: string;
    adjectives: string[];
    gamingPlatform: string;
    subtitle: string;
    downloadBtn: string;
    howToPlayBtn: string;
    downloadToast: string;
  };
  howToStart: {
    tag: string;
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    warningAlert: string;
    harmfulText: string;
    anywayBtn: string;
    securitySettings: string;
    allowSource: string;
    success: string;
    regSuccess: string;
  };
  games: {
    tag: string;
    title: string;
    subtitle: string;
    liveTournament: string;
    dailyFreeTitle: string;
    dailyFreeDesc: string;
    dailyFreePlayers: string;
    dailyFreePrize: string;
    dailyFreeMode: string;
    ffTitle: string;
    ffDesc: string;
    ffPlayers: string;
    ffPrize: string;
    ffMode: string;
    csTitle: string;
    csDesc: string;
    csPlayers: string;
    csPrize: string;
    csMode: string;
    otherTitle: string;
    otherDesc: string;
    otherPlayers: string;
    otherPrize: string;
    otherMode: string;
    playNow: string;
  };
  whyUs: {
    tag: string;
    title: string;
    subtitle: string;
    feat1Title: string;
    feat1Subtitle: string;
    feat1Desc: string;
    feat2Title: string;
    feat2Subtitle: string;
    feat2Desc: string;
    feat3Title: string;
    feat3Subtitle: string;
    feat3Desc: string;
    feat4Title: string;
    feat4Subtitle: string;
    feat4Desc: string;
    feat5Title: string;
    feat5Subtitle: string;
    feat5Desc: string;
  };
  downloadCTA: {
    title: string;
    subtitle: string;
    btnText: string;
    androidSupport: string;
  };
  footer: {
    subLogo: string;
    copy: string;
    privacy: string;
    terms: string;
    rules: string;
    about: string;
    contact: string;
    download: string;
  };
  downloadPage: {
    title: string;
    subtitle: string;
    prerequisites: string;
    prereqItems: string[];
    steps: Array<{
      title: string;
      subtitle: string;
      details: string[];
      warning?: string;
    }>;
    tips: string;
    tipItems: string[];
    ctaTitle: string;
    ctaBtn: string;
    backToHome: string;
    faq: string;
    faqItems: Array<{
      q: string;
      a: string;
    }>;
  };
  terms: {
    title: string;
    subtitle: string;
    lastUpdated: string;
    sections: Array<{
      id: string;
      title: string;
      content: string[];
    }>;
  };
  privacy: {
    title: string;
    subtitle: string;
    lastUpdated: string;
    sections: Array<{
      id: string;
      title: string;
      content: string[];
    }>;
  };
  rules: {
    title: string;
    subtitle: string;
    tag: string;
    generalTitle: string;
    generalRules: string[];
    gamesTitle: string;
    ffTitle: string;
    ffRules: string[];
    fairPlayTitle: string;
    fairPlaySubtitle: string;
    fairPlayRules: string[];
    refundTitle: string;
    refundSubtitle: string;
    refundRules: string[];
  };
  about: {
    tag: string;
    title: string;
    subtitle: string;
    missionTitle: string;
    missionDesc: string;
    stats: Array<{
      value: string;
      label: string;
      desc: string;
    }>;
    valuesTitle: string;
    values: Array<{
      title: string;
      desc: string;
    }>;
    trustTitle: string;
    trustDesc: string;
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    channelsTitle: string;
    channels: Array<{
      id: string;
      name: string;
      handle: string;
      desc: string;
      link: string;
      actionText: string;
    }>;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    subjectLabel: string;
    messageLabel: string;
    submitBtn: string;
    successToast: string;
  };
}

export const translations: Record<"bn" | "en", TranslationDict> = {
  bn: {
    navbar: {
      howToStart: "কিভাবে শুরু করবেন?",
      howToPlay: "কিভাবে খেলবেন?",
      games: "গেমস সমূহ",
      features: "আমাদের সুবিধাসমূহ",
      about: "আমাদের সম্পর্কে",
      rules: "খেলার নিয়ম",
      contact: "যোগাযোগ",
      downloadBtn: "অ্যাপ ডাউনলোড",
      mobileDownloadBtn: "অ্যাপ ডাউনলোড করুন",
    },
    hero: {
      badge: "প্রিমিয়াম গেমিং অভিজ্ঞতা",
      bangladeshMost: "বাংলাদেশের সবচেয়ে",
      adjectives: ["নিরাপদ", "বিশ্বস্ত", "অটোমেটেড", "প্রিমিয়াম", "সেরা"],
      gamingPlatform: "গেমিং প্ল্যাটফর্ম",
      subtitle: "Fast Gaming অ্যাপের মাধ্যমে খেলুন আপনার প্রিয় Free Fire টুর্নামেন্ট এবং জিতে নিন আকর্ষণীয় সব নগদ পুরস্কার। নিরাপদ ও বিশ্বস্ত টুর্নামেন্ট প্ল্যাটফর্মে জয়েন করুন আজই।",
      downloadBtn: "অ্যাপ ডাউনলোড করুন",
      howToPlayBtn: "কিভাবে খেলবেন দেখুন",
      downloadToast: "ডাউনলোড শুরু হয়েছে! নিচে দেওয়া 4টি স্টেপ অনুসরণ করে অ্যাপটি ইনস্টল করুন।",
    },
    howToStart: {
      tag: "Get Started",
      title: "কিভাবে শুরু করবেন?",
      subtitle: "সহজ 4টি ধাপে Fast Gaming অ্যাপ ডাউনলোড ও ইনস্টল করে গেম খেলা শুরু করুন",
      step1Title: "ধাপ 1",
      step1Desc: "অ্যাপ ডাউনলোড করতে উপরের ডাউনলোড বাটনে ক্লিক করুন।",
      step2Title: "ধাপ 2",
      step2Desc: "ডাউনলোড কনফার্ম করতে পপ-আপ মেসেজে \"Download Anyway\" ক্লিক করুন।",
      step3Title: "ধাপ 3",
      step3Desc: "অ্যাপটি ইনস্টল করতে সেটিংস থেকে \"Install Unknown Apps\" সোর্স পারমিশন এলাউ করুন।",
      step4Title: "ধাপ 4",
      step4Desc: "ইনস্টল সম্পন্ন করে রেজিস্ট্রেশন করুন এবং আপনার পছন্দের টুর্নামেন্টে যোগ দিন!",
      warningAlert: "Warning alert",
      harmfulText: "File might be harmful. Do you want to download anyway?",
      anywayBtn: "Download Anyway",
      securitySettings: "Security Settings",
      allowSource: "Allow Source",
      success: "Success",
      regSuccess: "রেজিস্ট্রেশন সফল হয়েছে!",
    },
    games: {
      tag: "গেমস তালিকা",
      title: "জনপ্রিয় মোবাইল টুর্নামেন্ট",
      subtitle: "আপনার পছন্দের টুর্নামেন্ট বেছে নিন এবং অংশ নিয়ে জিতে নিন নগদ অর্থ পুরস্কার।",
      liveTournament: "লাইভ টুর্নামেন্ট চলমান",
      dailyFreeTitle: "Daily Free Match",
      dailyFreeDesc: "দৈনিক ফ্রি টুর্নামেন্ট! সম্পূর্ণ ফ্রিতে জয়েন করুন এবং কোন ফি ছাড়াই প্রাইজ মানি জিতে নিন।",
      dailyFreePlayers: "15,000+ নিয়মিত প্লেয়ার",
      dailyFreePrize: "এন্ট্রি ফি: 100% ফ্রি (৳0)",
      dailyFreeMode: "Daily Free BR & CS",
      ffTitle: "Battle Royale",
      ffDesc: "সোলো, ডুও এবং স্কোয়াড ব্যাটল রয়্যাল টুর্নামেন্ট। রুম কোড নিয়ে যোগ দিন এবং প্রাইজ মানি জিতুন।",
      ffPlayers: "10,000+ নিয়মিত প্লেয়ার",
      ffPrize: "দৈনিক প্রাইজ পুল: ৳50,000 পর্যন্ত",
      ffMode: "Solo, Duo & Squad BR",
      csTitle: "Clash Squad",
      csDesc: "4v4 স্কোয়াড ফাইট টুর্নামেন্ট। সরাসরি কাস্টম রুমে প্রতিদ্বন্দ্বিতা করে জয়ী হন।",
      csPlayers: "8,000+ নিয়মিত প্লেয়ার",
      csPrize: "দৈনিক প্রাইজ পুল: ৳40,000 পর্যন্ত",
      csMode: "Clash Squad 4v4",
      otherTitle: "অন্যান্য টুর্নামেন্ট",
      otherDesc: "লুডু স্টার, কাস্টম 1v1, এবং বিশেষ প্রিমিয়াম টুর্নামেন্ট! অ্যাপ ডাউনলোড করে সবগুলো অপশন এক্সপ্লোর করুন।",
      otherPlayers: "5,000+ নিয়মিত প্লেয়ার",
      otherPrize: "স্পেশাল প্রাইজ পুল",
      otherMode: "Ludo & Custom 1v1",
      playNow: "টুর্নামেন্টে যোগ দিন",
    },
    whyUs: {
      tag: "কেন Fast Gaming?",
      title: "আমাদের সেরা সুবিধাসমূহ",
      subtitle: "বাংলাদেশের একমাত্র প্ল্যাটফর্ম যেখানে মিলবে সম্পূর্ণ স্বয়ংক্রিয় ও নিরাপদ গেমিং অভিজ্ঞতা।",
      feat1Title: "ইনস্ট্যান্ট উইথড্রয়াল",
      feat1Subtitle: "bKash, Nagad ও Rocket সাপোর্ট",
      feat1Desc: "আপনার বিজিত প্রাইজ মানি যেকোনো সময় আপনার বিকাশ, নগদ বা রকেট একাউন্টে স্বয়ংক্রিয়ভাবে তুলে নিন।",
      feat2Title: "স্বয়ংক্রিয় রুম কোড",
      feat2Subtitle: "সময়মতো রুম আইডি ও পাসওয়ার্ড",
      feat2Desc: "ম্যাচ শুরু হওয়ার নির্দিষ্ট সময় পূর্বে অ্যাপের ভেতরেই স্বয়ংক্রিয়ভাবে রুম কোড পেয়ে যাবেন।",
      feat3Title: "Fair Play ও এন্টি-চিট",
      feat3Subtitle: "100% সৎ ও নিরাপদ গেমপ্লে",
      feat3Desc: "যেকোনো প্রকার হ্যাক, ইমুলেটর বা অসাধু উপায় কঠোরভাবে নিষিদ্ধ। সবার জন্য সমান সুযোগ সুনিশ্চিত।",
      feat4Title: "24/7 কাস্টমার সাপোর্ট",
      feat4Subtitle: "যেকোনো সমস্যায় আমরা পাশে আছি",
      feat4Desc: "টেলিগ্রাম, হোয়াটসঅ্যাপ এবং অ্যাপের লাইভ চ্যাটে আমাদের কাস্টমার সাপোর্ট টিম সর্বদা নিয়োজিত।",
      feat5Title: "স্বচ্ছ প্রাইজ ডিস্ট্রিবিউশন",
      feat5Subtitle: "ম্যাচ শেষে সাথে সাথেই ব্যালেন্স যোগ",
      feat5Desc: "ম্যাচ শেষ হওয়ার কয়েক মিনিটের মধ্যেই ফলাফল ভেরিফাই করে বিজয়ীদের ওয়ালেটে প্রাইজ মানি যুক্ত হয়।",
    },
    downloadCTA: {
      title: "আজই Fast Gaming APK ডাউনলোড করুন এবং টুর্নামেন্টে যোগ দিন",
      subtitle: "বাংলাদেশের 1 নম্বর বিশ্বস্ত eSports প্ল্যাটফর্মে হাজার হাজার প্লেয়ারের সাথে প্রতিযোগিতা করুন।",
      btnText: "অ্যাপ ডাউনলোড করুন (APK)",
      androidSupport: "Android 6.0+ সমর্থিত | সম্পূর্ণ নিরাপদ ও অফিসিয়াল এপিকে",
    },
    footer: {
      subLogo: "বাংলাদেশের #1 eSports ও গেমিং টুর্নামেন্ট অ্যাপ",
      copy: "Fast Gaming BD. সর্বস্বত্ব সংরক্ষিত।",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rules: "Rules of Play",
      about: "About Us",
      contact: "Contact Us",
      download: "Download App",
    },
    downloadPage: {
      title: "Fast Gaming অ্যাপ ডাউনলোড ও ইনস্টলেশন গাইড",
      subtitle: "আপনার অ্যান্ড্রয়েড ডিভাইসে Fast Gaming অ্যাপ ডাউনলোড, ইনস্টল ও সেটআপ করার বিস্তারিত নির্দেশিকা।",
      prerequisites: "প্রয়োজনীয় শর্তসমূহ",
      prereqItems: [
        "Android 6.0 (Marshmallow) বা তার উপরে চালিত ডিভাইস",
        "অন্তত 50MB ফ্রি স্টোরেজ স্পেস",
        "স্থিতিশীল ইন্টারনেট সংযোগ",
        "থার্ড-পার্টি অ্যাপ ইনস্টল করার অনুমতি"
      ],
      steps: [
        {
          title: "অ্যাপ ডাউনলোড করুন",
          subtitle: "সরাসরি আপনার ডিভাইসে APK ফাইল ডাউনলোড করুন",
          details: [
            "নিচের ডাউনলোড বাটনে ক্লিক করে অ্যাপ ডাউনলোড শুরু করুন",
            "ফাইলটির নাম হবে fastgamingbd.apk",
            "ডাউনলোড সম্পন্ন হওয়া পর্যন্ত অপেক্ষা করুন"
          ]
        },
        {
          title: "ডাউনলোড নিশ্চিত করুন",
          subtitle: "আপনার ব্রাউজারে পপ-আপ দেখালে 'Download Anyway' নির্বাচন করুন",
          details: [
            "Chrome বা আপনার ব্রাউজার একটি সতর্কতা বার্তা দেখাবে",
            "\"Download Anyway\" বা \"Keep\" বাটনে ক্লিক করুন",
            "এটি নিশ্চিত করে যে আপনি ফাইলটি ডাউনলোড করতে চান"
          ],
          warning: "এই সতর্কতা স্বাভাবিক। যেকোনো APK ফাইল ডাউনলোডের সময় ব্রাউজার এই বার্তা দেখায়।"
        },
        {
          title: "ইনস্টল করার অনুমতি দিন",
          subtitle: "Android সেটিংস থেকে 'Unknown Sources' অপশন সক্রিয় করুন",
          details: [
            "Settings > Security > Install unknown apps এ যান",
            "আপনার ব্রাউজার (Chrome/Firefox) নির্বাচন করুন",
            "\"Allow from this source\" টগল অন করুন",
            "অথবা ডাউনলোড সম্পন্ন হলে নোটিফিকেশনে ক্লিক করলেই সরাসরি অনুমতি চাইবে"
          ]
        },
        {
          title: "ইনস্টল ও রেজিস্টার করুন",
          subtitle: "ইনস্টলেশন সম্পন্ন করে আপনার একাউন্ট তৈরি করুন",
          details: [
            "\"Install\" বাটনে ক্লিক করে ইনস্টলেশন সম্পন্ন করুন",
            "ইনস্টলেশন শেষে \"Open\" বাটনে ক্লিক করে অ্যাপ খুলুন",
            "আপনার মোবাইল নম্বর দিয়ে নিবন্ধন করুন",
            "OTP ভেরিফিকেশন সম্পন্ন করে আপনার প্রোফাইল সেটআপ করুন"
          ]
        }
      ],
      tips: "গুরুত্বপূর্ণ টিপস",
      tipItems: [
        "নিরাপত্তার জন্য শুধুমাত্র আমাদের অফিসিয়াল ওয়েবসাইট থেকে অ্যাপ ডাউনলোড করুন",
        "ইনস্টলেশনের সময় যেকোনো সমস্যায় আমাদের 24/7 সাপোর্ট টিমের সাথে যোগাযোগ করুন",
        "আপনার অ্যাকাউন্ট নিরাপদ রাখতে শক্তিশালী পাসওয়ার্ড ব্যবহার করুন",
        "প্রথমবার টুর্নামেন্টে অংশ নেওয়ার আগে নিয়ম-কানুন ভালোভাবে পড়ুন"
      ],
      ctaTitle: "খেলা শুরু করতে এখনই ডাউনলোড করুন",
      ctaBtn: "অ্যাপ ডাউনলোড করুন (APK)",
      backToHome: "হোমপেজে ফিরে যান",
      faq: "সাধারণ জিজ্ঞাসা",
      faqItems: [
        {
          q: "এপিকে (APK) ফাইল কি নিরাপদ?",
          a: "হ্যাঁ, আমাদের APK ফাইল সম্পূর্ণ নিরাপদ। আপনি আমাদের অফিসিয়াল ওয়েবসাইট থেকে ডাউনলোড করছেন যা সম্পূর্ণ ভাইরাস-মুক্ত এবং ম্যালওয়্যার-মুক্ত। আমরা নিয়মিতভাবে সিকিউরিটি চেক করি।"
        },
        {
          q: "ইনস্টলের সময় 'ব্লক বাই প্লে প্রোটেক্ট' দেখালে কি করব?",
          a: "এটি একটি সাধারণ Android নিরাপত্তা বৈশিষ্ট্য। 'Install Anyway' (যেভাবেই হোক ইনস্টল করুন) বাটনে ক্লিক করুন। যেহেতু অ্যাপটি Google Play Store ছাড়া ডাউনলোড করা হচ্ছে, তাই এই বার্তাটি দেখায়।"
        },
        {
          q: "অ্যাপ কি সব Android ফোনে চলে?",
          a: "Fast Gaming অ্যাপ Android 6.0 (Marshmallow) বা তার উপরে চালিত ডিভাইসে সাপোর্ট করে। সর্বোত্তম পারফরম্যান্সের জন্য কমপক্ষে 3GB RAM থাকা সুপারিশ করা হয়।"
        },
        {
          q: "কিভাবে আমি সহায়তা পেতে পারি?",
          a: "আপনি আমাদের 24/7 হেল্পলাইন, অ্যাপের লাইভ চ্যাট সাপোর্ট, অথবা আমাদের ফেসবুক পেজে মেসেজ দিয়ে সহায়তা পেতে পারেন।"
        }
      ]
    },
    terms: {
      title: "Terms and Conditions",
      subtitle: "Fast Gaming BD প্ল্যাটফর্ম ব্যবহারের শর্তাবলী ও নীতিমালা। অ্যাপ ব্যবহার করার পূর্বে দয়া করে মনোযোগ সহকারে পড়ুন।",
      lastUpdated: "সর্বশেষ সংস্করণ: 12 আগস্ট, 2026",
      sections: [
        {
          id: "acceptance",
          title: "1. শর্তাবলীর স্বীকৃতি (Acceptance of Terms)",
          content: [
            "Fast Gaming BD অ্যাপ বা ওয়েবসাইট ব্যবহার ও সেবা গ্রহণ করার মাধ্যমে আপনি এই সকল Terms and Conditions এবং আমাদের Privacy Policy মানতে বাধ্য থাকবেন।",
            "যদি আপনি এই শর্তাবলীর সাথে একমত না হন, তবে অনুগ্রহ করে Fast Gaming BD অ্যাপ বা প্ল্যাটফর্মের সেবা গ্রহণ করা থেকে বিরত থাকুন।"
          ]
        },
        {
          id: "age-requirement",
          title: "2. বয়সের বাধ্যবাধকতা (Age Requirement)",
          content: [
            "Fast Gaming BD প্ল্যাটফর্মে একাউন্ট তৈরি করতে এবং টুর্নামেন্ট বা পেড গেমিং প্রতিযোগিতায় অংশগ্রহণ করতে আপনার বয়স অবশ্যই অন্তত 18 (আঠারো) বছর হতে হবে।",
            "18 বছরের কম বয়সী ব্যবহারকারীদের অভিভাবকের অনুমতি ব্যতীত বা প্ল্যাটফর্মে পেড টুর্নামেন্টে অংশগ্রহণ সম্পূর্ণ নিষিদ্ধ।"
          ]
        },
        {
          id: "regulations",
          title: "3. eSports ও গেমিং নীতিমালা (Gaming Regulations)",
          content: [
            "Fast Gaming BD বাংলাদেশে বৈধ স্কিল-বেসড (Skill-Based) eSports টুর্নামেন্ট পরিচালনার নীতিমালা অনুসরণ করে।",
            "ব্যবহারকারীকে তার স্থানীয় বা রাষ্ট্রীয় আইন মেনে প্ল্যাটফর্মে প্রতিযোগিতা করতে হবে। অনৈতিক কাজ বা জুয়া জাতীয় কর্মকাণ্ড সম্পূর্ণ নিষিদ্ধ।"
          ]
        },
        {
          id: "account-security",
          title: "4. একাউন্ট ও নিরাপত্তা (Account and Security)",
          content: [
            "টুর্নামেন্টে অংশ নিতে ব্যবহারকারীকে সঠিক মোবাইল নম্বর ও তথ্য দিয়ে একাউন্ট তৈরি করতে হবে।",
            "আপনার একাউন্টের পাসওয়ার্ড, পিন বা ওটিপি (OTP) অন্য কারো সাথে শেয়ার করবেন না। একাউন্টের নিরাপত্তাজনিত যেকোনো দায়ব্যবহারকারীর ওপর বর্তাবে।",
            "এক ব্যক্তির একাধিক ফেক একাউন্ট তৈরি করা প্ল্যাটফর্মের নীতিমালার পরিপন্থী।"
          ]
        },
        {
          id: "prohibited-activities",
          title: "5. নিষিদ্ধ কর্মকাণ্ড ও ফেয়ার প্লে (Prohibited Activities)",
          content: [
            "টুর্নামেন্টে যেকোনো প্রকার হ্যাকিং, থার্ড-পার্টি অ্যাপ/স্কিপ্ট ব্যবহার, ইমুলেটর ব্যবহার (সোলো মোবাইল ম্যাচে), টিম-টিমিং (অন্যায় আঁতাত) কঠোরভাবে নিষিদ্ধ।",
            "রুম আইডি ও পাসওয়ার্ড বাইরের অপঞ্জীকৃত কোনো ব্যক্তির সাথে শেয়ার করা সম্পূর্ণ অপরাধ হিসেবে গণ্য হবে।",
            "কোনো প্লেয়ার অসাধু উপায় অবলম্বন করলে তার একাউন্ট সাথে সাথেই ব্যান করা হবে এবং বিজিত প্রাইজ মানি বাজেয়াপ্ত হবে।"
          ]
        },
        {
          id: "wallet-withdrawals",
          title: "6. ওয়ালেট জমা ও প্রাইজ উইথড্রয়াল (Deposits & Withdrawals)",
          content: [
            "টুর্নামেন্ট এন্ট্রি ফি ও ওয়ালেট ডিপোজিট বাংলাদেশের অনুমোদিত MFS (bKash, Nagad, Rocket) এর মাধ্যমে পরিচালিত হয়।",
            "বিজিত টুর্নামেন্ট প্রাইজ প্লেয়ারের Fast Gaming ওয়ালেটে যুক্ত হবে এবং নির্ধারিত সর্বনিম্ন সীমা সাপেক্ষে যেকোনো সময় ইনস্ট্যান্ট উইথড্র করা যাবে।",
            "সঠিক MFS নম্বর প্রদান না করলে বা ভুল নম্বরে উইথড্র আবেদন করলে Fast Gaming BD কর্তৃপক্ষ দায়ী থাকবে না।"
          ]
        },
        {
          id: "termination",
          title: "7. একাউন্ট স্থগিত বা বাতিল (Termination)",
          content: [
            "প্ল্যাটফর্মের কোনো নিয়ম লঙ্ঘন করলে, গালাগালি বা অশোভন আচরণ করলে বা জালিয়াতির চেষ্টা করলে Fast Gaming BD কর্তৃপক্ষ পূর্ব সতর্কীকরণ ছাড়াই যেকোনো একাউন্ট ব্যান বা স্থগিত করার অধিকার রাখে।"
          ]
        },
        {
          id: "disclaimer",
          title: "8. দায়বদ্ধতার সীমা (Disclaimers & Limitation of Liability)",
          content: [
            "গেম প্রস্তুতকারী প্রতিষ্ঠান (যেমন Garena) থেকে সার্ভারজনিত সমস্যা বা ডাউনটাইমের জন্য Fast Gaming BD দায়ী থাকবে না।",
            "ইন্টারনেট সংযোগের দুর্বলতা বা আপনার ডিভাইসের ত্রুটির কারণে টুর্নামেন্ট থেকে ডিসকানেক্ট হলে তার জন্য অতিরিক্ত ক্ষতিপূরণ দাবি করা যাবে না।"
          ]
        },
        {
          id: "governing-law",
          title: "9. পরিচালনা সংক্রান্ত আইন ও পরিবর্তন (Governing Law & Changes)",
          content: [
            "এই শর্তাবলী গণপ্রজাতন্ত্রী বাংলাদেশের প্রচলিত আইন দ্বারা পরিচালিত।",
            "Fast Gaming BD যেকোনো সময় এই শর্তাবলীতে পরিবর্তন বা পরিমার্জন করার অধিকার সংরক্ষণ করে। সংশোধিত নিয়মাবলীতে প্রকাশের পর থেকেই তা কার্যকর হবে।"
          ]
        }
      ]
    },
    privacy: {
      title: "Privacy Policy",
      subtitle: "Fast Gaming BD আপনার তথ্যের গোপনীয়তা ও সুরক্ষায় সর্বোচ্চ প্রতিশ্রুতিবদ্ধ। আমরা কীভাবে তথ্য সংগ্রহ ও ব্যবহার করি তা জেনে নিন।",
      lastUpdated: "সর্বশেষ সংস্করণ: 12 আগস্ট, 2026",
      sections: [
        {
          id: "information-collection",
          title: "1. আমরা যেসব তথ্য সংগ্রহ করি",
          content: [
            "একাউন্ট খোলার সময় আপনার নাম, মোবাইল নম্বর, ইমেইল ঠিকানা ও ইন-গেম ইউজারনেম (In-Game Name/ID)।",
            "উইথড্রয়াল ও ডিপোজিট নিশ্চিতকরণের জন্য ওয়ালেট লেনদেন বিবরণী (কোনো পাসওয়ার্ড বা পিন সংরক্ষণ করা হয় না)।",
            "অ্যাপ পারফরম্যান্স ও সিকিউরিটি অ্যানালিটিক্সের জন্য ডিভাইসের মডেল, আইপি এড্রেস ও অপারেটিং সিস্টেমের সংস্করণ।"
          ]
        },
        {
          id: "how-we-use",
          title: "2. আপনার তথ্যের ব্যবহার",
          content: [
            "টুর্নামেন্টে রুম আইডি ও পাসওয়ার্ড প্রদান সুনিশ্চিত করতে।",
            "আপনার বিজয়ী প্রাইজ মানি বিকাশ, নগদ বা রকেটে সফলভাবে ট্রান্সফার করার জন্য।",
            "টুর্নামেন্ট আপডেট, ম্যাচ সময়সূচী ও সিকিউরিটি নোটিফিকেশন পাঠাতে।",
            "অসাধু কর্মকাণ্ড ও প্রতারণা প্রতিরোধ করতে।"
          ]
        },
        {
          id: "payment-security",
          title: "3. পেমেন্ট ও লেনদেনের নিরাপত্তা",
          content: [
            "আমরা কোনো বিকাশ, নগদ বা রকেটের পিন বা গোপন কোড সংগ্রহ বা সংরক্ষণ করি না। সকল লেনদেন সিকিউর API এর মাধ্যমে এনক্রিপ্ট করে সম্পন্ন হয়।"
          ]
        },
        {
          id: "third-party",
          title: "4. তথ্য প্রকাশ ও থার্ড-পার্টি শেয়ারিং",
          content: [
            "আমরা কখনই আপনার ব্যক্তিগত তথ্য কোনো বাণিজ্যিক উদ্দেশ্যে থার্ড-পার্টি প্রতিষ্ঠানের কাছে বিক্রি বা ভাড়া দেই না।",
            "আইন প্রয়োগকারী সংস্থার আইনানুগ অনুরোধ বা আদালতের নির্দেশ ব্যতিরেকে কোনো গোপনীয় তথ্য প্রকাশ করা হয় না।"
          ]
        },
        {
          id: "user-rights",
          title: "5. ব্যবহারকারীর অধিকার ও একাউন্ট মুছে ফেলা",
          content: [
            "আপনার একাউন্ট তথ্য যেকোনো সময় সংশোধন বা আপডেট করার অধিকার আপনার রয়েছে।",
            "যদি আপনি Fast Gaming BD একাউন্ট স্থায়ীভাবে মুছে ফেলতে চান, আমাদের কাস্টমার সাপোর্ট ইমেইলে (support@fastgamingbd.com) আবেদন করতে পারেন।"
          ]
        }
      ]
    },
    rules: {
      title: "Rules of Play & Fair Play Guidelines",
      subtitle: "Fast Gaming BD টুর্নামেন্টের সার্বিক নিয়মাবলী, ইন-গেম নীতিমালা এবং ফেয়ার প্লে গাইডলাইন।",
      tag: "টুর্নামেন্ট নিয়মাবলী",
      generalTitle: "সাধারণ নিয়মাবলী (General Rules)",
      generalRules: [
        "ম্যাচ শুরু হওয়ার অন্তত 10 মিনিট পূর্বে অ্যাপে লগইন করে প্রস্তুত থাকুন।",
        "রুম কোড (ID & Password) ম্যাচ শুরুর 5-10 মিনিট আগে অ্যাপে প্রদান করা হবে।",
        "রুম কোড কোনো অপঞ্জীকৃত প্লেয়ার বা বাইরের বন্ধুদের সাথে শেয়ার করা কঠোরভাবে নিষিদ্ধ। শেয়ার করলে তাৎক্ষণিক টুর্নামেন্ট থেকে ডিসকোয়ালিফাই করা হবে।",
        "ইন-গেম নাম (IGN) ও প্লেয়ার আইডি অ্যাপে প্রদত্ত তথ্যের সাথে 100% মিল থাকতে হবে। মিল না থাকলে কিকে আউট করা হতে পারে।",
        "ম্যাচ শেষে বিজয়ীদের স্ক্রিনশট ও কিল কাউন্টের তথ্য অ্যাপে জমা দিন (সোলো/স্কোয়াড ম্যাচের ক্ষেত্রে)।"
      ],
      gamesTitle: "গেমভিত্তিক টুর্নামেন্ট নিয়ম (Game Wise Rules)",
      ffTitle: "Free Fire (Battle Royale & Clash Squad)",
      ffRules: [
        "শুধুমাত্র মোবাইল ডিভাইসের প্লেয়াররা অংশ নিতে পারবেন। পিসি বা ইমুলেটর সম্পূর্ণ নিষিদ্ধ।",
        "গন স্কিন এট্রিবিউট অন/অফ ম্যাচের বিস্তারিত তথ্যে উল্লেখ থাকবে।",
        "ক্লাশ স্কোয়াড ম্যাচে হ্যাকিং, ফ্লাই হ্যাক বা ওয়াল স্পিড ব্যবহার করলে সারা জীবনের জন্য ব্যান করা হবে।",
        "টিমিং বা শত্রু প্লেয়ারের সাথে অন্যায় সমঝোতা প্রমাণ হলে উভয় দলের পয়েন্ট বাতিল হবে।"
      ],
      fairPlayTitle: "ফেয়ার প্লে ও এন্টি-চিট পলিসি (Fair Play)",
      fairPlaySubtitle: "সবার জন্য নিরপেক্ষ ও বিশ্বস্ত টুর্নামেন্ট সুনিশ্চিত করতে আমাদের জিরো-টলারেন্স নীতি।",
      fairPlayRules: [
        "ইমুলেটর / পিসি প্লেয়ার সম্পূর্ণ নিষিদ্ধ (যদি না স্পেশাল ইমুলেটর টুর্নামেন্ট ঘোষণা করা হয়)।",
        "কোনো প্রকার স্ক্রিপ্ট, হ্যাক, অটোলক, এক্স-রে মড ব্যবহার কঠোরভাবে নিষিদ্ধ।",
        "আমাদের অটোমেটেড সিকিউরিটি অ্যালগরিদম ও মডারেটর টিম সার্বক্ষণিক ম্যাচ পর্যবেক্ষণ করে।"
      ],
      refundTitle: "ম্যাচ বাতিল ও রিফান্ড নীতিমালা (Refund Policy)",
      refundSubtitle: "প্রযুক্তিগত সমস্যা বা ম্যাচ বাতিলের ক্ষেত্রে রিফান্ড পদ্ধতি।",
      refundRules: [
        "যদি সার্ভার ত্রুটি বা কোনো অনিবার্য কারণে ম্যাচ বাতিল করা হয়, সকল প্লেয়ারের এন্ট্রি ফি 10 মিনিটের মধ্যে তাদের Fast Gaming ওয়ালেটে 100% রিফান্ড করে দেওয়া হবে।",
        "প্লেয়ারের নিজের ভুল বা দেরিতে রুমে প্রবেশ না করতে পারলে এন্ট্রি ফি রিফান্ড প্রযোজ্য হবে না।"
      ]
    },
    about: {
      tag: "আমাদের গল্প",
      title: "বাংলাদেশের #1 eSports ও টুর্নামেন্ট প্ল্যাটফর্ম",
      subtitle: "মোবাইল গেমারদের পেশাদার eSports জগতে যুক্ত করার এবং নিরাপদে প্রাইজ মানি অর্জনের প্ল্যাটফর্ম।",
      missionTitle: "আমাদের লক্ষ্য ও উদ্দেশ্য",
      missionDesc: "বাংলাদেশে কোটি কোটি ই-স্পোর্টস প্রেমী গেমার রয়েছেন। আমাদের লক্ষ্য হলো গেমারদের মেধা ও স্কিল প্রদর্শনের জন্য একটি 1 নম্বর সুরক্ষিত, স্বয়ংক্রিয় ও আধুনিক টুর্নামেন্ট ইকোসিস্টেম তৈরি করা, যেখানে প্রতিটি ম্যাচ হয় স্বচ্ছ এবং প্রাইজ উইথড্রয়াল হয় মুহূর্তেই।",
      stats: [
        { value: "50,000+", label: "সক্রিয় গেমার", desc: "বাংলাদেশের সকল প্রান্ত থেকে নিয়মিত প্লেয়ার" },
        { value: "৳10 লাখ+", label: "মোট পুরষ্কার বিতরণ", desc: "সাফল্যের সাথে প্লেয়ারদের কাছে হস্তান্তরিত" },
        { value: "100,000+", label: "সম্পন্ন ম্যাচ", desc: "Free Fire টুর্নামেন্ট" },
        { value: "99.9%", label: "ইনস্ট্যান্ট উইথড্রয়াল", desc: "bKash, Nagad ও Rocket স্বয়ংক্রিয় পেমেন্ট" }
      ],
      valuesTitle: "আমাদের মূল চালিকাশক্তি",
      values: [
        { title: "100% স্বচ্ছতা", desc: "প্রতিটি টুর্নামেন্টের পয়েন্ট টেবিল ও বিজয়ীদের তালিকা সর্বসাধারণের জন্য উন্মুক্ত।" },
        { title: "জিরো চিটিং টলারেন্স", desc: "অত্যাধুনিক এন্টি-চিট ও মডারেশন টিম দ্বারা সম্পূর্ণ হ্যাক-মুক্ত গেমপ্লে।" },
        { title: "প্লেয়ার-ফার্স্ট ডিজাইন", desc: "ব্যবহারকারীবান্ধব অ্যাপ ও ওয়েব ইন্টারফেস যেন যেকোনো গেমার মুহূর্তেই অংশ নিতে পারে।" },
        { title: "ইনস্ট্যান্ট ক্যাশ পেমেন্ট", desc: "কোনো জটিলতা ছাড়া সরাসরি মোবাইল ওয়ালেটে টাকা তোলার দ্রুততম ব্যবস্থা।" }
      ],
      trustTitle: "বাংলাদেশের গেমারদের আস্থা",
      trustDesc: "Fast Gaming BD শুধুমাত্র একটি অ্যাপ নয়, এটি বাংলাদেশের eSports কমিউনিটির জন্য একটি নির্ভরযোগ্য পরিবার।"
    },
    contact: {
      tag: "24/7 সহায়তা",
      title: "আমাদের সাথে যোগাযোগ করুন",
      subtitle: "আপনার কোনো প্রশ্ন, টুর্নামেন্ট সমস্যা বা ব্যবসায়িক পরামর্শ থাকলে যেকোনো সময় মেসেজ দিন।",
      channelsTitle: "আমাদের সাপোর্ট চ্যানেলসমূহ",
      channels: [
        {
          id: "telegram",
          name: "Telegram Channel & Support",
          handle: "@fastgamingbd_official",
          desc: "লাইভ নোটিশ, রুম কোড সাহায্য ও সরাসরি চ্যাট।",
          link: "https://t.me/fastgamingbd_official",
          actionText: "টেলিগ্রামে মেসেজ দিন"
        },
        {
          id: "whatsapp",
          name: "WhatsApp Support Hotline",
          handle: "+880 1400-389396",
          desc: "দ্রুততম ডিপোজিট ও উইথড্রয়াল হেল্পডেস্ক।",
          link: "https://wa.me/8801400389396",
          actionText: "হোয়াটসঅ্যাপে চ্যাট করুন"
        },
        {
          id: "email",
          name: "Official Support Email",
          handle: "support@fastgamingbd.com",
          desc: "যেকোনো অ্যাকাউন্ট বা প্রাতিষ্ঠানিক প্রশ্ন।",
          link: "mailto:support@fastgamingbd.com",
          actionText: "ইমেইল পাঠান"
        },
        {
          id: "facebook",
          name: "Facebook Community Group",
          handle: "Fast Gaming BD Official",
          desc: "বাংলাদেশের 50,000+ গেমারদের পরিবার।",
          link: "https://facebook.com/fastgamingbdofficial",
          actionText: "গ্রুপে যোগ দিন"
        }
      ],
      formTitle: "সরাসরি বার্তা পাঠান",
      formSubtitle: "নিচের ফর্মটি পূরণ করুন, আমরা খুব দ্রুত আপনার সাথে যোগাযোগ করব।",
      nameLabel: "আপনার নাম",
      phoneLabel: "মোবাইল নম্বর",
      emailLabel: "ইমেইল ঠিকানা",
      subjectLabel: "বিষয় (Subject)",
      messageLabel: "আপনার বার্তা বা সমস্যা বিস্তারিত লিখুন",
      submitBtn: "বার্তা পাঠান",
      successToast: "ধন্যবাদ! আপনার বার্তাটি পাঠানো হয়েছে। আমাদের সাপোর্ট টিম শিগগিরই উত্তর দেবে।"
    }
  },
  en: {
    navbar: {
      howToStart: "How to Start",
      howToPlay: "How to Play",
      games: "Available Games",
      features: "Our Features",
      about: "About Us",
      rules: "Rules of Play",
      contact: "Contact Us",
      downloadBtn: "Download App",
      mobileDownloadBtn: "Download App",
    },
    hero: {
      badge: "Premium Gaming Experience",
      bangladeshMost: "Bangladesh's Most",
      adjectives: ["Secure", "Trusted", "Automated", "Premium", "Best"],
      gamingPlatform: "Gaming Platform",
      subtitle: "Play your favorite Free Fire tournaments and win exciting cash rewards on Fast Gaming. Join Bangladesh's safest, most trusted automated game tournament platform today.",
      downloadBtn: "Download App",
      howToPlayBtn: "Watch How to Play",
      downloadToast: "Download started! Follow the 4 steps below to install the app.",
    },
    howToStart: {
      tag: "Get Started",
      title: "How to Get Started?",
      subtitle: "Follow these 4 simple steps to download, install, and start playing on Fast Gaming.",
      step1Title: "Step 1",
      step1Desc: "Click the Download button above to start downloading the APK.",
      step2Title: "Step 2",
      step2Desc: "Click \"Download Anyway\" on your browser pop-up to confirm.",
      step3Title: "Step 3",
      step3Desc: "Allow \"Install Unknown Apps\" permission in your Android settings.",
      step4Title: "Step 4",
      step4Desc: "Complete installation, register your account, and join your favorite tournament!",
      warningAlert: "Warning alert",
      harmfulText: "File might be harmful. Do you want to download anyway?",
      anywayBtn: "Download Anyway",
      securitySettings: "Security Settings",
      allowSource: "Allow Source",
      success: "Success",
      regSuccess: "Registration successful!",
    },
    games: {
      tag: "Game Roster",
      title: "Popular Mobile Tournaments",
      subtitle: "Choose your game mode, participate in daily matches, and win real cash prizes.",
      liveTournament: "Live Tournaments Running",
      dailyFreeTitle: "Daily Free Match",
      dailyFreeDesc: "Daily free tournament! Join 100% free of charge and compete for cash rewards every day.",
      dailyFreePlayers: "15,000+ Active Players",
      dailyFreePrize: "Entry Fee: 100% Free (৳0)",
      dailyFreeMode: "Daily Free BR & CS",
      ffTitle: "Battle Royale",
      ffDesc: "Solo, Duo, and Squad Battle Royale matches. Get room codes and claim top survivor rewards.",
      ffPlayers: "10,000+ Active Players",
      ffPrize: "Daily Prize Pool: Up to ৳50,000",
      ffMode: "Solo, Duo & Squad BR",
      csTitle: "Clash Squad",
      csDesc: "4v4 Squad Fight custom matches. Compete head-to-head and win cash prizes.",
      csPlayers: "8,000+ Active Players",
      csPrize: "Daily Prize Pool: Up to ৳40,000",
      csMode: "Clash Squad 4v4",
      otherTitle: "Other Matches",
      otherDesc: "Ludo Star, Custom 1v1 & special premium tournaments! Download the app to explore all match modes.",
      otherPlayers: "5,000+ Active Players",
      otherPrize: "Special Prize Pool",
      otherMode: "Ludo & Custom 1v1",
      playNow: "Join Tournament",
    },
    whyUs: {
      tag: "Why Fast Gaming?",
      title: "Platform Key Features",
      subtitle: "Bangladesh's premier platform providing a 100% automated & secure competitive gaming environment.",
      feat1Title: "Instant Withdrawals",
      feat1Subtitle: "bKash, Nagad & Rocket Support",
      feat1Desc: "Withdraw your tournament winnings directly to your mobile financial wallet anytime automatically.",
      feat2Title: "Automated Room Credentials",
      feat2Subtitle: "Punctual Room ID & Password",
      feat2Desc: "Receive private Room IDs & Passwords automatically inside the app prior to match start times.",
      feat3Title: "Fair Play & Anti-Cheat",
      feat3Subtitle: "100% Honest & Fair Gameplay",
      feat3Desc: "Strict bans on emulators, hacks, and scripts to guarantee an equal playing field for every player.",
      feat4Title: "24/7 Dedicated Support",
      feat4Subtitle: "We are always here to help",
      feat4Desc: "Our dedicated support team is active on Telegram, WhatsApp, and live chat 24 hours a day.",
      feat5Title: "Transparent Prize Settlement",
      feat5Subtitle: "Instant wallet credits post-match",
      feat5Desc: "Match results are verified within minutes and winnings are instantly credited to player wallets.",
    },
    downloadCTA: {
      title: "Download Fast Gaming APK Today and Join the Battle",
      subtitle: "Compete with thousands of mobile gamers across Bangladesh on the #1 trusted eSports hub.",
      btnText: "Download App (APK)",
      androidSupport: "Android 6.0+ Supported | 100% Safe & Official APK",
    },
    footer: {
      subLogo: "Bangladesh's #1 eSports & Mobile Gaming Tournament App",
      copy: "Fast Gaming BD. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rules: "Rules of Play",
      about: "About Us",
      contact: "Contact Us",
      download: "Download App",
    },
    downloadPage: {
      title: "Fast Gaming APK Download & Setup Guide",
      subtitle: "Step-by-step instructions to download, install, and configure Fast Gaming on your Android phone.",
      prerequisites: "Prerequisites",
      prereqItems: [
        "Device running Android 6.0 (Marshmallow) or higher",
        "At least 50MB of free storage space",
        "Stable internet connection",
        "Permission to install third-party applications"
      ],
      steps: [
        {
          title: "Download the App",
          subtitle: "Download the APK file directly to your phone",
          details: [
            "Click the Download button below to start the file transfer",
            "The package is named fastgamingbd.apk",
            "Wait for the download progress to complete"
          ]
        },
        {
          title: "Confirm Download Warning",
          subtitle: "Select 'Download Anyway' on your browser prompt",
          details: [
            "Chrome or your default browser will display a security warning",
            "Tap \"Download Anyway\" or \"Keep\"",
            "This confirms your choice to save the installation file"
          ],
          warning: "This prompt is standard Android behavior for any application installed outside the Play Store."
        },
        {
          title: "Grant Install Permission",
          subtitle: "Enable 'Unknown Sources' in Android Settings",
          details: [
            "Navigate to Settings > Security > Install unknown apps",
            "Select your browser (Chrome/Firefox)",
            "Toggle \"Allow from this source\" ON",
            "Or tap the completed download notification to grant permission directly"
          ]
        },
        {
          title: "Install & Create Account",
          subtitle: "Complete setup and log into your profile",
          details: [
            "Tap \"Install\" to run the package manager",
            "Once installed, tap \"Open\" to launch Fast Gaming",
            "Register using your valid mobile phone number",
            "Complete OTP verification and set up your gamer ID"
          ]
        }
      ],
      tips: "Essential Security Tips",
      tipItems: [
        "Download exclusively from fastgamingbd.com to protect your device",
        "Contact 24/7 customer support for any installation queries",
        "Use a strong password to guard your tournament wallet",
        "Read match rules thoroughly before entering paid brackets"
      ],
      ctaTitle: "Ready to Compete? Download Now!",
      ctaBtn: "Download APK Now",
      backToHome: "Back to Homepage",
      faq: "Frequently Asked Questions",
      faqItems: [
        {
          q: "Is the APK package safe?",
          a: "Yes, our official APK package is completely virus-free, secure, and regularly audited."
        },
        {
          q: "What should I do if Play Protect blocks installation?",
          a: "Select 'Install Anyway' to proceed. Play Protect flags third-party APK downloads automatically."
        },
        {
          q: "Is my phone compatible?",
          a: "Fast Gaming requires Android 6.0 or higher with 3GB+ RAM recommended for smooth gameplay."
        },
        {
          q: "How can I contact player support?",
          a: "Reach our support team anytime via Telegram, WhatsApp, Facebook, or in-app live support."
        }
      ]
    },
    terms: {
      title: "Terms and Conditions",
      subtitle: "Terms of Use for Fast Gaming BD. Please read these terms carefully before participating.",
      lastUpdated: "Last updated: August 12, 2026",
      sections: [
        {
          id: "acceptance",
          title: "1. Acceptance of Terms",
          content: [
            "By accessing or using the Fast Gaming BD application, website, or services, you agree to be bound by these Terms and Conditions and our Privacy Policy.",
            "If you do not agree with any part of these terms, you must refrain from using Fast Gaming BD services."
          ]
        },
        {
          id: "age-requirement",
          title: "2. Age Requirement (18+)",
          content: [
            "You must be at least 18 years old to create an account, deposit funds, or participate in paid cash tournaments on Fast Gaming BD.",
            "Minors under 18 years of age are strictly prohibited from participating in real-money competitive matches without express parental consent."
          ]
        },
        {
          id: "regulations",
          title: "3. eSports & Gaming Regulations",
          content: [
            "Fast Gaming BD operates skill-based eSports tournaments in full compliance with applicable laws of the People's Republic of Bangladesh.",
            "Players are responsible for ensuring that their participation complies with all local laws regarding competitive gaming."
          ]
        },
        {
          id: "account-security",
          title: "4. Account and Security",
          content: [
            "Players must provide accurate registration details including a valid mobile number and in-game credentials.",
            "You are solely responsible for maintaining the confidentiality of your account credentials, PIN, and OTP.",
            "Creating duplicate or dummy accounts to manipulate tournament brackets is strictly forbidden."
          ]
        },
        {
          id: "prohibited-activities",
          title: "5. Prohibited Activities & Fair Play",
          content: [
            "Cheating, using third-party scripts, wallhacks, auto-aim, emulators (in mobile-only brackets), or teaming with opponent players is strictly prohibited.",
            "Sharing private Room IDs and Passwords with unregistered external players constitutes a severe policy violation.",
            "Any player caught engaging in illegal or fraudulent behavior will face permanent account suspension and forfeiture of all accumulated prize balances."
          ]
        },
        {
          id: "wallet-withdrawals",
          title: "6. Wallet Deposits & Instant Cash Withdrawals",
          content: [
            "Tournament entry fees and wallet top-ups are processed securely via authorized Mobile Financial Services in Bangladesh (bKash, Nagad, Rocket).",
            "Tournament winnings are credited to your Fast Gaming wallet immediately post-match and can be withdrawn directly to your MFS account.",
            "Fast Gaming BD is not liable for transaction delays resulting from incorrect player MFS numbers."
          ]
        },
        {
          id: "termination",
          title: "7. Account Suspension & Termination",
          content: [
            "We reserve the right to suspend or terminate your account access immediately without prior notice if you breach these Terms and Conditions or engage in abusive conduct."
          ]
        },
        {
          id: "disclaimer",
          title: "8. Disclaimers and Limitation of Liability",
          content: [
            "Fast Gaming BD is not responsible for server outages or maintenance issues originating from third-party game publishers (e.g., Garena).",
            "Losses or disconnections caused by a player's unstable internet connection or device hardware failure do not qualify for compensation."
          ]
        },
        {
          id: "governing-law",
          title: "9. Governing Law & Amendments",
          content: [
            "These Terms and Conditions are governed by and construed in accordance with the laws of Bangladesh.",
            "We reserve the right to modify these terms at any time. Continued use of the platform following published changes constitutes full acceptance."
          ]
        }
      ]
    },
    privacy: {
      title: "Privacy Policy",
      subtitle: "Fast Gaming BD is committed to safeguarding your personal privacy and transactional security.",
      lastUpdated: "Last updated: August 12, 2026",
      sections: [
        {
          id: "information-collection",
          title: "1. Information We Collect",
          content: [
            "Registration details: Name, mobile phone number, email address, and in-game usernames (IGN/ID).",
            "Transaction records: MFS deposit and withdrawal history (no PINs or secret credentials are ever stored).",
            "Technical telemetry: Device model, operating system version, and IP address for security and anti-fraud monitoring."
          ]
        },
        {
          id: "how-we-use",
          title: "2. How We Use Your Information",
          content: [
            "To deliver match room credentials (Room ID & Password) punctually.",
            "To process instant payout withdrawals to your bKash, Nagad, or Rocket account.",
            "To send essential tournament schedules, updates, and account security alerts.",
            "To detect, prevent, and penalize fraudulent or cheating attempts."
          ]
        },
        {
          id: "payment-security",
          title: "3. Payment & MFS Security",
          content: [
            "We never ask for or store your personal bKash, Nagad, or Rocket PINs. All financial requests execute via encrypted API integrations."
          ]
        },
        {
          id: "third-party",
          title: "4. Third-Party Disclosure",
          content: [
            "We do not sell, trade, or rent personal player data to external marketing companies.",
            "Data is disclosed only when mandated by law enforcement authorities under lawful process."
          ]
        },
        {
          id: "user-rights",
          title: "5. User Rights & Account Erasure",
          content: [
            "You have the right to inspect and update your profile details anytime.",
            "To request permanent account deletion, contact our support desk at support@fastgamingbd.com."
          ]
        }
      ]
    },
    rules: {
      title: "Rules of Play & Fair Play Guidelines",
      subtitle: "Fast Gaming BD টুর্নামেন্টের সার্বিক নিয়মাবলী, ইন-গেম নীতিমালা এবং ফেয়ার প্লে গাইডলাইন।",
      tag: "টুর্নামেন্ট নিয়মাবলী",
      generalTitle: "সাধারণ নিয়মাবলী (General Rules)",
      generalRules: [
        "ম্যাচ শুরু হওয়ার অন্তত 10 মিনিট পূর্বে অ্যাপে লগইন করে প্রস্তুত থাকুন।",
        "রুম কোড (ID & Password) ম্যাচ শুরুর 5-10 মিনিট আগে অ্যাপে প্রদান করা হবে।",
        "রুম কোড কোনো অপঞ্জীকৃত প্লেয়ার বা বাইরের বন্ধুদের সাথে শেয়ার করা কঠোরভাবে নিষিদ্ধ। শেয়ার করলে তাৎক্ষণিক টুর্নামেন্ট থেকে ডিসকোয়ালিফাই করা হবে।",
        "ইন-গেম নাম (IGN) ও প্লেয়ার আইডি অ্যাপে প্রদত্ত তথ্যের সাথে 100% মিল থাকতে হবে। মিল না থাকলে কিকে আউট করা হতে পারে।",
        "ম্যাচ শেষে বিজয়ীদের স্ক্রিনশট ও কিল কাউন্টের তথ্য অ্যাপে জমা দিন (সোলো/স্কোয়াড ম্যাচের ক্ষেত্রে)।"
      ],
      gamesTitle: "গেমভিত্তিক টুর্নামেন্ট নিয়ম (Game Wise Rules)",
      ffTitle: "Free Fire (Battle Royale & Clash Squad)",
      ffRules: [
        "শুধুমাত্র মোবাইল ডিভাইসের প্লেয়াররা অংশ নিতে পারবেন। পিসি বা ইমুলেটর সম্পূর্ণ নিষিদ্ধ।",
        "গন স্কিন এট্রিবিউট অন/অফ ম্যাচের বিস্তারিত তথ্যে উল্লেখ থাকবে।",
        "ক্লাশ স্কোয়াড ম্যাচে হ্যাকিং, ফ্লাই হ্যাক বা ওয়াল স্পিড ব্যবহার করলে সারা জীবনের জন্য ব্যান করা হবে।",
        "টিমিং বা শত্রু প্লেয়ারের সাথে অন্যায় সমঝোতা প্রমাণ হলে উভয় দলের পয়েন্ট বাতিল হবে।"
      ],
      fairPlayTitle: "ফেয়ার প্লে ও এন্টি-চিট পলিসি (Fair Play)",
      fairPlaySubtitle: "সবার জন্য নিরপেক্ষ ও বিশ্বস্ত টুর্নামেন্ট সুনিশ্চিত করতে আমাদের জিরো-টলারেন্স নীতি।",
      fairPlayRules: [
        "ইমুলেটর / পিসি প্লেয়ার সম্পূর্ণ নিষিদ্ধ (যদি না স্পেশাল ইমুলেটর টুর্নামেন্ট ঘোষণা করা হয়)।",
        "কোনো প্রকার স্ক্রিপ্ট, হ্যাক, অটোলক, এক্স-রে মড ব্যবহার কঠোরভাবে নিষিদ্ধ।",
        "আমাদের অটোমেটেড সিকিউরিটি অ্যালগরিদম ও মডারেটর টিম সার্বক্ষণিক ম্যাচ পর্যবেক্ষণ করে।"
      ],
      refundTitle: "ম্যাচ বাতিল ও রিফান্ড নীতিমালা (Refund Policy)",
      refundSubtitle: "প্রযুক্তিগত সমস্যা বা ম্যাচ বাতিলের ক্ষেত্রে রিফান্ড পদ্ধতি।",
      refundRules: [
        "যদি সার্ভার ত্রুটি বা কোনো অনিবার্য কারণে ম্যাচ বাতিল করা হয়, সকল প্লেয়ারের এন্ট্রি ফি 10 মিনিটের মধ্যে তাদের Fast Gaming ওয়ালেটে 100% রিফান্ড করে দেওয়া হবে।",
        "প্লেয়ারের নিজের ভুল বা দেরিতে রুমে প্রবেশ না করতে পারলে এন্ট্রি ফি রিফান্ড প্রযোজ্য হবে না।"
      ]
    },
    about: {
      tag: "আমাদের গল্প",
      title: "বাংলাদেশের #1 eSports ও টুর্নামেন্ট প্ল্যাটফর্ম",
      subtitle: "মোবাইল গেমারদের পেশাদার eSports জগতে যুক্ত করার এবং নিরাপদে প্রাইজ মানি অর্জনের প্ল্যাটফর্ম।",
      missionTitle: "আমাদের লক্ষ্য ও উদ্দেশ্য",
      missionDesc: "বাংলাদেশে কোটি কোটি ই-স্পোর্টস প্রেমী গেমার রয়েছেন। আমাদের লক্ষ্য হলো গেমারদের মেধা ও স্কিল প্রদর্শনের জন্য একটি 1 নম্বর সুরক্ষিত, স্বয়ংক্রিয় ও আধুনিক টুর্নামেন্ট ইকোসিস্টেম তৈরি করা, যেখানে প্রতিটি ম্যাচ হয় স্বচ্ছ এবং প্রাইজ উইথড্রয়াল হয় মুহূর্তেই।",
      stats: [
        { value: "50,000+", label: "সক্রিয় গেমার", desc: "বাংলাদেশের সকল প্রান্ত থেকে নিয়মিত প্লেয়ার" },
        { value: "৳10 লাখ+", label: "মোট পুরষ্কার বিতরণ", desc: "সাফল্যের সাথে প্লেয়ারদের কাছে হস্তান্তরিত" },
        { value: "100,000+", label: "সম্পন্ন ম্যাচ", desc: "Free Fire টুর্নামেন্ট" },
        { value: "99.9%", label: "ইনস্ট্যান্ট উইথড্রয়াল", desc: "bKash, Nagad ও Rocket স্বয়ংক্রিয় পেমেন্ট" }
      ],
      valuesTitle: "আমাদের মূল চালিকাশক্তি",
      values: [
        { title: "100% স্বচ্ছতা", desc: "প্রতিটি টুর্নামেন্টের পয়েন্ট টেবিল ও বিজয়ীদের তালিকা সর্বসাধারণের জন্য উন্মুক্ত।" },
        { title: "জিরো চিটিং টলারেন্স", desc: "অত্যাধুনিক এন্টি-চিট ও মডারেশন টিম দ্বারা সম্পূর্ণ হ্যাক-মুক্ত গেমপ্লে।" },
        { title: "প্লেয়ার-ফার্স্ট ডিজাইন", desc: "ব্যবহারকারীবান্ধব অ্যাপ ও ওয়েব ইন্টারফেস যেন যেকোনো গেমার মুহূর্তেই অংশ নিতে পারে।" },
        { title: "ইনস্ট্যান্ট ক্যাশ পেমেন্ট", desc: "কোনো জটিলতা ছাড়া সরাসরি মোবাইল ওয়ালেটে টাকা তোলার দ্রুততম ব্যবস্থা।" }
      ],
      trustTitle: "বাংলাদেশের গেমারদের আস্থা",
      trustDesc: "Fast Gaming BD শুধুমাত্র একটি অ্যাপ নয়, এটি বাংলাদেশের eSports কমিউনিটির জন্য একটি নির্ভরযোগ্য পরিবার।"
    },
    contact: {
      tag: "24/7 সহায়তা",
      title: "আমাদের সাথে যোগাযোগ করুন",
      subtitle: "আপনার কোনো প্রশ্ন, টুর্নামেন্ট সমস্যা বা ব্যবসায়িক পরামর্শ থাকলে যেকোনো সময় মেসেজ দিন।",
      channelsTitle: "আমাদের সাপোর্ট চ্যানেলসমূহ",
      channels: [
        {
          id: "telegram",
          name: "Telegram Channel & Support",
          handle: "@fastgamingbd_official",
          desc: "লাইভ নোটিশ, রুম কোড সাহায্য ও সরাসরি চ্যাট।",
          link: "https://t.me/fastgamingbd_official",
          actionText: "টেলিগ্রামে মেসেজ দিন"
        },
        {
          id: "whatsapp",
          name: "WhatsApp Support Hotline",
          handle: "+880 1400-389396",
          desc: "দ্রুততম ডিপোজিট ও উইথড্রয়াল হেল্পডেস্ক।",
          link: "https://wa.me/8801400389396",
          actionText: "হোয়াটসঅ্যাপে চ্যাট করুন"
        },
        {
          id: "email",
          name: "Official Support Email",
          handle: "support@fastgamingbd.com",
          desc: "যেকোনো অ্যাকাউন্ট বা প্রাতিষ্ঠানিক প্রশ্ন।",
          link: "mailto:support@fastgamingbd.com",
          actionText: "ইমেইল পাঠান"
        },
        {
          id: "facebook",
          name: "Facebook Community Group",
          handle: "Fast Gaming BD Official",
          desc: "বাংলাদেশের 50,000+ গেমারদের পরিবার।",
          link: "https://facebook.com/fastgamingbd",
          actionText: "গ্রুপে যোগ দিন"
        }
      ],
      formTitle: "সরাসরি বার্তা পাঠান",
      formSubtitle: "নিচের ফর্মটি পূরণ করুন, আমরা খুব দ্রুত আপনার সাথে যোগাযোগ করব।",
      nameLabel: "আপনার নাম",
      phoneLabel: "মোবাইল নম্বর",
      emailLabel: "ইমেইল ঠিকানা",
      subjectLabel: "বিষয় (Subject)",
      messageLabel: "আপনার বার্তা বা সমস্যা বিস্তারিত লিখুন",
      submitBtn: "বার্তা পাঠান",
      successToast: "ধন্যবাদ! আপনার বার্তাটি পাঠানো হয়েছে। আমাদের সাপোর্ট টিম শিগগিরই উত্তর দেবে।"
    }
  }
};
