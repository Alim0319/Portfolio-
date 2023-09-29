import "../LanguageSwitch/LanguageSwitch.css";
import { useState, useEffect } from "react";
import { FaGlobe } from "react-icons/fa";

const LanguageSwitch = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language is English

  const handleLanguageChange = () => {
    setSelectedLanguage(selectedLanguage === "en" ? "no" : "en");
  };
  useEffect(() => {
    console.log("Language switched to:", selectedLanguage);
  }, [selectedLanguage]);

  return (
    <div className="language-switch-container">
      {" "}
      {/* Added a class for styling */}
      <select
        id="languageSwitch"
        onChange={handleLanguageChange}
        value={selectedLanguage}
      >
        <option value="en">EN</option>
        <option value="no">NO</option>
      </select>
      <FaGlobe className="globe-icon" /> {/* Added a class for styling */}
    </div>
  );
};

export default LanguageSwitch;
