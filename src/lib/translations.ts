export interface TranslationDict {
  navbar: {
    howToStart: string;
    howToPlay: string;
    games: string;
    features: string;
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
    ffTitle: string;
    ffDesc: string;
    pubgTitle: string;
    pubgDesc: string;
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
}

export const translations: Record<"bn" | "en", TranslationDict> = {
  bn: {
    navbar: {
      howToStart: "কিভাবে শুরু করবেন?",
      howToPlay: "কিভাবে খেলবেন?",
      games: "গেমস সমূহ",
      features: "আমাদের সুবিধাসমূহ",
      downloadBtn: "অ্যাপ ডাউনলোড",
      mobileDownloadBtn: "অ্যাপ ডাউনলোড করুন",
    },
    hero: {
      badge: "প্রিমিয়াম গেমিং অভিজ্ঞতা",
      bangladeshMost: "বাংলাদেশের সবচেয়ে",
      adjectives: ["নিরাপদ", "বিশ্বস্ত", "অটোমেটেড", "প্রিমিয়াম", "সেরা"],
      gamingPlatform: "গেমিং প্ল্যাটফর্ম",
      subtitle: "Fast Gaming অ্যাপের মাধ্যমে খেলুন আপনার প্রিয় গেমস এবং জিতে নিন আকর্ষণীয় সব প্রাইজ। নিরাপদ ও বিশ্বস্ত টুর্নামেন্ট প্ল্যাটফর্মে জয়েন করুন আজই।",
      downloadBtn: "অ্যাপ ডাউনলোড করুন",
      howToPlayBtn: "কিভাবে খেলবেন দেখুন",
      downloadToast: "ডাউনলোড শুরু হয়েছে! নিচে দেওয়া ৪টি স্টেপ অনুসরণ করে অ্যাপটি ইনস্টল করুন।",
    },
    howToStart: {
      tag: "Get Started",
      title: "কিভাবে শুরু করবেন?",
      subtitle: "সহজ ৪টি ধাপে Fast Gaming অ্যাপ ডাউনলোড ও ইনস্টল করে গেম খেলা শুরু করুন",
      step1Title: "ধাপ ১",
      step1Desc: "অ্যাপ ডাউনলোড করতে উপরের ডাউনলোড বাটনে ক্লিক করুন।",
      step2Title: "ধাপ ২",
      step2Desc: "ডাউনলোড কনফার্ম করতে পপ-আপ মেসেজে \"Download Anyway\" ক্লিক করুন।",
      step3Title: "ধাপ ৩",
      step3Desc: "অ্যাপটি ইনস্টল করতে সেটিংস থেকে \"Install Unknown Apps\" সোর্স পারমিশন এলাউ করুন।",
      step4Title: "ধাপ ৪",
      step4Desc: "ইনস্টল সম্পন্ন করে রেজিস্ট্রেশন করুন এবং আপনার পছন্দের গেমে যোগ দিন!",
      warningAlert: "Warning alert",
      harmfulText: "File might be harmful. Do you want to download anyway?",
      anywayBtn: "Download Anyway",
      securitySettings: "Security Settings",
      allowSource: "Allow Source",
      success: "Success!",
      regSuccess: "রেজিস্ট্রেশন সম্পন্ন হয়েছে",
    },
    games: {
      tag: "সমর্থিত গেমস",
      title: "Available Games",
      subtitle: "আমাদের প্ল্যাটফর্মে উপলব্ধ সব গেমের টুর্নামেন্ট খেলুন এবং বড় পুরস্কার জিতে নিন",
      liveTournament: "লাইভ টুর্নামেন্ট",
      ffTitle: "Free Fire",
      ffDesc: "দৈনিক ফ্রি ও পেইড ম্যাচ খেলুন",
      pubgTitle: "PUBG Mobile",
      pubgDesc: "প্রতিদিন একাধিক রুম ম্যাচ ও প্রাইজ",
    },
    whyUs: {
      tag: "সুবিধাসমূহ",
      title: "কেন আমাদের প্ল্যাটফর্ম বেছে নিবেন?",
      subtitle: "বাংলাদেশের সবচেয়ে বিশ্বস্ত এবং নিরাপদ গেমিং প্ল্যাটফর্ম",
      feat1Title: "Instant Deposits",
      feat1Subtitle: "Quick & Automated",
      feat1Desc: "বিকাশ, রকেট বা নগদের মাধ্যমে যেকোনো সময় ইনস্ট্যান্ট ডিপোজিট করুন খুব সহজেই।",
      feat2Title: "Secure & Safe",
      feat2Subtitle: "100% Trusted",
      feat2Desc: "আমাদের টুর্নামেন্ট সিকিউরিটি ও পেমেন্ট গেটওয়ে সম্পূর্ণ নিরাপদ ও সুরক্ষিত।",
      feat3Title: "Instant Withdrawal",
      feat3Subtitle: "Zero Delay Payouts",
      feat3Desc: "আপনার জেতা প্রাইজ মানি কোনো ঝামেলা ছাড়াই সরাসরি বিকাশে ইনস্ট্যান্ট উইথড্র করে নিন।",
      feat4Title: "24/7 Support",
      feat4Subtitle: "Always Here For You",
      feat4Desc: "২৪/৭ হেল্পলাইন এবং ডেডিকেটেড সাপোর্ট টিমের মাধ্যমে যেকোনো সমস্যার তাৎক্ষণিক সমাধান।",
      feat5Title: "Active Community",
      feat5Subtitle: "100K+ Active Players",
      feat5Desc: "বাংলাদেশের সবচেয়ে বড় ও বিশ্বস্ত মোবাইল গেমিং টুর্নামেন্ট প্ল্যাটফর্মে অংশ নিয়ে জিতে নিন আকর্ষণীয় সব প্রাইজ।",
    },
    downloadCTA: {
      title: "এখনই Fast Gaming অ্যাপ ডাউনলোড করুন",
      subtitle: "বাংলাদেশ জুড়ে হাজারো খেলোয়াড়ের সাথে যোগ দিন। অ্যাপটি ইনস্টল করে আজই প্রথম টুর্নামেন্টে অংশগ্রহণ করুন!",
      btnText: "অ্যাপ ডাউনলোড করুন (APK)",
      androidSupport: "Compatible with Android 6.0+ devices • Verified Safe & Secure",
    },
    footer: {
      subLogo: "প্রিমিয়াম গেমিং অভিজ্ঞতা",
      copy: "Fast Gaming BD. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rules: "Rules of Play",
    },
    downloadPage: {
      title: "Fast Gaming অ্যাপ ডাউনলোড ও ইনস্টলেশন গাইড",
      subtitle: "আপনার অ্যান্ড্রয়েড ডিভাইসে Fast Gaming অ্যাপ ডাউনলোড, ইনস্টল ও সেটআপ করার বিস্তারিত নির্দেশিকা।",
      prerequisites: "প্রয়োজনীয় শর্তসমূহ",
      prereqItems: [
        "Android 6.0 (Marshmallow) বা তার উপরে চালিত ডিভাইস",
        "অন্তত ৫০MB ফ্রি স্টোরেজ স্পেস",
        "স্থিতিশীল ইন্টারনেট সংযোগ",
        "থার্ড-পার্টি অ্যাপ ইনস্টল করার অনুমতি"
      ],
      steps: [
        {
          title: "অ্যাপ ডাউনলোড করুন",
          subtitle: "সরাসরি আপনার ডিভাইসে APK ফাইল ডাউনলোড করুন",
          details: [
            "নিচের ডাউনলোড বাটনে ক্লিক করে অ্যাপ ডাউনলোড শুরু করুন",
            "ফাইলটির নাম হবে gamezonebd.apk",
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
        "ইনস্টলেশনের সময় যেকোনো সমস্যায় আমাদের ২৪/৭ সাপোর্ট টিমের সাথে যোগাযোগ করুন",
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
          a: "Fast Gaming অ্যাপ Android 6.0 (Marshmallow) বা তার উপরে চালিত ডিভাইসে সাপোর্ট করে। সর্বোত্তম পারফরম্যান্সের জন্য কমপক্ষে ৩GB RAM থাকা সুপারিশ করা হয়।"
        },
        {
          q: "কিভাবে আমি সহায়তা পেতে পারি?",
          a: "আপনি আমাদের ২৪/৭ হেল্পলাইন, অ্যাপের লাইভ চ্যাট সাপোর্ট, অথবা আমাদের ফেসবুক পেজে মেসেজ দিয়ে সহায়তা পেতে পারেন।"
        }
      ]
    },
  },
  en: {
    navbar: {
      howToStart: "How to Start",
      howToPlay: "How to Play",
      games: "Available Games",
      features: "Our Features",
      downloadBtn: "Download App",
      mobileDownloadBtn: "Download App",
    },
    hero: {
      badge: "Premium Gaming Experience",
      bangladeshMost: "Bangladesh's Most",
      adjectives: ["Secure", "Trusted", "Automated", "Premium", "Best"],
      gamingPlatform: "Gaming Platform",
      subtitle: "Play your favorite games (Free Fire, PUBG, Ludo) and win exciting cash rewards on Fast Gaming. Join Bangladesh's safest, most trusted automated game tournament platform today.",
      downloadBtn: "Download App (APK)",
      howToPlayBtn: "Watch How to Play",
      downloadToast: "Download started! Follow the 4 steps below to install the app.",
    },
    howToStart: {
      tag: "Get Started",
      title: "How to Start?",
      subtitle: "Download and install the Fast Gaming app in 4 easy steps to start playing game tournaments.",
      step1Title: "Step 1",
      step1Desc: "Click the download button above to download the gamezonebd.apk installation file.",
      step2Title: "Step 2",
      step2Desc: "Click \"Download Anyway\" in the browser pop-up to confirm your game apk download.",
      step3Title: "Step 3",
      step3Desc: "Allow \"Install Unknown Apps\" source permission in your Android settings to begin installation.",
      step4Title: "Step 4",
      step4Desc: "Complete installation, register your account, and join your favorite gaming tournaments!",
      warningAlert: "Warning alert",
      harmfulText: "File might be harmful. Do you want to download anyway?",
      anywayBtn: "Download Anyway",
      securitySettings: "Security Settings",
      allowSource: "Allow Source",
      success: "Success!",
      regSuccess: "Registration Complete",
    },
    games: {
      tag: "Supported Games",
      title: "Available Games",
      subtitle: "Play daily tournaments for popular games (Free Fire, PUBG) and win big cash rewards.",
      liveTournament: "Live Tournament",
      ffTitle: "Free Fire Tournaments",
      ffDesc: "Play daily free and paid Free Fire matches",
      pubgTitle: "PUBG Mobile Tournaments",
      pubgDesc: "Daily custom room matches with high prize pools",
    },
    whyUs: {
      tag: "Features",
      title: "Why Choose Fast Gaming?",
      subtitle: "The most trusted, secure, and automated mobile game tournament platform in Bangladesh.",
      feat1Title: "Instant Deposits",
      feat1Subtitle: "Quick & Automated",
      feat1Desc: "Instantly add money to your account via bKash, Rocket, or Nagad payments with zero delay.",
      feat2Title: "Secure & Safe",
      feat2Subtitle: "100% Trusted",
      feat2Desc: "Our advanced game tournament security systems and secure payments protect your account.",
      feat3Title: "Instant Withdrawal",
      feat3Subtitle: "Zero Delay Payouts",
      feat3Desc: "Withdraw your tournament winnings directly to your personal bKash wallet in minutes.",
      feat4Title: "24/7 Support",
      feat4Subtitle: "Always Here For You",
      feat4Desc: "Dedicated customer support and 24/7 hotline to resolve any gaming or payment queries instantly.",
      feat5Title: "Active Community",
      feat5Subtitle: "100K+ Active Players",
      feat5Desc: "Join over 100,000 active players in Bangladesh's largest game tournament community.",
    },
    downloadCTA: {
      title: "Download Fast Gaming App Now",
      subtitle: "Join thousands of players in Bangladesh. Install the Fast Gaming APK and enter your first game tournament today!",
      btnText: "Download App (APK)",
      androidSupport: "Compatible with Android 6.0+ devices • Verified Safe & Secure",
    },
    footer: {
      subLogo: "Premium Gaming Experience",
      copy: "Fast Gaming BD. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rules: "Rules of Play",
    },
    downloadPage: {
      title: "Fast Gaming App Download & Installation Guide",
      subtitle: "A complete step-by-step guide to download, install, and set up the Fast Gaming app on your Android device.",
      prerequisites: "Prerequisites",
      prereqItems: [
        "Android 6.0 (Marshmallow) or higher device",
        "At least 50MB of free storage space",
        "A stable internet connection",
        "Permission to install third-party apps"
      ],
      steps: [
        {
          title: "Download the App",
          subtitle: "Download the APK file directly to your device",
          details: [
            "Click the Download button below to start downloading the app",
            "The file will be named gamezonebd.apk",
            "Wait for the download to complete"
          ]
        },
        {
          title: "Confirm the Download",
          subtitle: "Select 'Download Anyway' when prompted by your browser",
          details: [
            "Your browser (Chrome, etc.) will show a warning message",
            "Click the \"Download Anyway\" or \"Keep\" button",
            "This confirms you want to download the file"
          ],
          warning: "This warning is normal. Browsers show this for any APK file downloaded outside the Play Store."
        },
        {
          title: "Enable Installation Permission",
          subtitle: "Allow 'Unknown Sources' in your Android settings",
          details: [
            "Go to Settings > Security > Install unknown apps",
            "Select your browser (Chrome/Firefox)",
            "Toggle \"Allow from this source\" ON",
            "Alternatively, tap the notification after download to grant permission directly"
          ]
        },
        {
          title: "Install & Register",
          subtitle: "Complete installation and create your account",
          details: [
            "Tap the \"Install\" button to complete the installation",
            "Once installed, tap \"Open\" to launch the app",
            "Register using your mobile phone number",
            "Complete OTP verification and set up your profile"
          ]
        }
      ],
      tips: "Important Tips",
      tipItems: [
        "Download the app only from our official website for security",
        "Contact our 24/7 support team for any installation issues",
        "Use a strong password to secure your account",
        "Read the tournament rules carefully before participating"
      ],
      ctaTitle: "Download Now to Start Playing",
      ctaBtn: "Download App (APK)",
      backToHome: "Back to Home",
      faq: "Frequently Asked Questions",
      faqItems: [
        {
          q: "Is the APK file safe?",
          a: "Yes, our APK file is completely safe. You are downloading from our official website which is virus-free and malware-free. We run regular security checks."
        },
        {
          q: "What if 'Blocked by Play Protect' appears during installation?",
          a: "This is a standard Android security feature. Click 'Install Anyway' to proceed. This appears because the app is not from the Google Play Store."
        },
        {
          q: "Does the app work on all Android phones?",
          a: "Fast Gaming supports Android 6.0 (Marshmallow) and above. For best performance, we recommend at least 3GB of RAM."
        },
        {
          q: "How can I get help?",
          a: "You can reach us through our 24/7 helpline, the in-app live chat support, or by messaging our Facebook page."
        }
      ]
    },
  },
};
