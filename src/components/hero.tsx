import React from "react";
import Navbar from "@/components/Navbar";

interface NavbarProps {
  language: "bn" | "en";
  setLanguage: (lang: "bn" | "en") => void;
  onDownloadClick?: () => void;
}

export default function HeroNavbar({ language, setLanguage, onDownloadClick }: NavbarProps) {
  return (
    <Navbar
      language={language}
      setLanguage={setLanguage}
      currentPage="home"
      onDownloadClick={onDownloadClick}
    />
  );
}
