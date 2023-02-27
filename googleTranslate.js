import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
function GoogleTranslate() {
  const googleTranslateElementInit = ()=>{
new window.google.translate.TranslateElement(
  {
    pageLanguage: "en",
    autoDisplay: false
  },
  "google_translate_element"
);
  };
  useEffect(() => {
    var addScript= document.createElement("script");
    addScript.setAttribute(
    "src",
    "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
},[])
  return (
    <div className="App">
            <div id="google_translate_element">  </div>
      <h4>Start building your app. Happy Coding!</h4></div>
  
  );
}

export default GoogleTranslate;
