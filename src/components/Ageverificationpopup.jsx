import { useState, useEffect } from "react";

const AgeVerificationPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const isAgeVerified = localStorage.getItem("ageVerified");
    if (isAgeVerified === "true") {
      setIsVisible(false);
    }
  }, []);

  const confirmAge = () => {
    localStorage.setItem("ageVerified", "true");
    setIsVisible(false);
  };

  const denyAccess = () => {
    alert("Vous devez avoir 18 ans ou plus pour accéder à ce site.");
    window.location.href = "https://www.google.com"; // Redirection (à modifier)
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center max-w-md w-80">
        <h2 className="text-xl font-bold">Vérification d'âge</h2>
        <p className="text-gray-600 my-4">
          Vous devez avoir au moins <b>18 ans</b> pour accéder à ce site.
        </p>
        <button
          onClick={confirmAge}
          className="bg-green-600 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-700"
        >
          J'ai 18 ans ou plus
        </button>
        <button
          onClick={denyAccess}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          J'ai moins de 18 ans
        </button>
      </div>
    </div>
  );
};

export default AgeVerificationPopup;
