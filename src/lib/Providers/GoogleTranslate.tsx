// "use client"
// import { useEffect } from 'react';
// // import { languagesCodes } from '../const/languageList';

// const GoogleTranslate = () => {
//   useEffect(() => {
//     // Load Google Translate script
//     const addGoogleTranslateScript = () => {
//       const script = document.createElement('script');
//       script.src =
//         '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//       script.async = true;
//       document.body.appendChild(script);
//     };

//     // Initialize Google Translate
//     window.googleTranslateElementInit = () => {
//       const savedLanguage = localStorage.getItem('selectedLanguage') || 'sv';

//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: 'sv', // Default language
//           //   includedLanguages: languagesCodes, // Available languages
//           //   layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//           autoDisplay: true,
//           // layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//         },
//         'google_translate_element'
//       );

//       // Automatically apply the saved language
//       if (savedLanguage !== 'en') {
//         const select = document.querySelector('.goog-te-combo');
//         if (select) {
//           select.value = savedLanguage;
//           select.dispatchEvent(new Event('change'));
//         }
//       }

//       // Hide the Google Translate toolbar
//       const style = document.createElement('style');
//       style.innerHTML = `
//         .goog-te-banner-frame {
//           display: none !important;
//         }
//         .google_translate_element{
//         //  z-index:20!important;
//         background-color:red !important;
//          }
//         #web-header{
//         // margin-top: 10rem !important;
//          position:static !important;
//          width:100% !important;
//          top:0 !important;
//          z-index:999 !important;
//         }
     
//         body {
//           margin-top: 0 !important;
//         }
//       `;
//       document.head.appendChild(style);
//       document.getElementById('goog-te-banner-frame').style.display = 'none';
//     };

//     addGoogleTranslateScript();

//     // Monitor language selection and save it to localStorage
//     const observer = new MutationObserver(() => {
//       const select = document.querySelector('.goog-te-combo');
//       if (select) {
//         select.addEventListener('change', () => {
//           localStorage.setItem('selectedLanguage', select.value);
//         });
//       }
//     });

//     observer.observe(document.body, { childList: true, subtree: true });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       id="google_translate_element"
//       //   className="bg-white text-black flex items-center gap-3 p-2 rounded-lg shadow-md"
//     ></div>
//   );
// };

// export default GoogleTranslate;
