import "../LanguageSwitch/LanguageSwitch.css";

import { FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const LanguageSwitch = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="language-switch-container">
      <select
        id="languageSwitch"
        onChange={(e) => handleLanguageChange(e.target.value)}
        value={i18n.language}
      >
        <option value="en">EN</option>
        <option value="no">NO</option>
      </select>
      <FaGlobe className="globe-icon" /> {/* Added a class for styling */}
      <div>{t("")}</div>
    </div>
  );
};

export default LanguageSwitch;

/*const LanguageSwitch = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const translations =
    selectedLanguage === "en" ? enTranslations : noTranslations;

  const handleLanguageChange = () => {
    setSelectedLanguage(selectedLanguage === "en" ? "no" : "en");
  };

  useEffect(() => {
    console.log("Language switched to:", selectedLanguage);
  }, [selectedLanguage]);

  return (
    <div className="language-switch-container">
      <select
        id="languageSwitch"
        onChange={handleLanguageChange}
        value={selectedLanguage}
      >
        <option value="en">EN</option>
        <option value="no">NO</option>
      </select>
      <FaGlobe className="globe-icon" />
      <p>{translations.greeting}</p>
      {/* Add more elements with translations here */
/* </div>
  );
};

export default LanguageSwitch;
*/
