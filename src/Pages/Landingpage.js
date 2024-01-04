// import React from "react";
// import "../Pages/Landingpage.css";
// import onelovelogo from "../SVGimages/onelovelogo.svg";
// import Homeimage from "../SVGimages/Homeimage.svg";
// import { FaCalendarAlt } from "react-icons/fa";

// const Landingpage = () => {
//   return (
//     <div className="maincontainer">
//       <div className="header">
//         <div className="logo">
//           <img src={onelovelogo} alt="Logo" />
//         </div>
//         <div className="aboutmenu">
//           <div className="brand">
//             <span>Brand</span>
//           </div>
//           <div className="brand">
//             <span>Contact us</span>
//           </div>
//           <div className="brand">
//             <span>T&C</span>
//           </div>
//           <div className="brand">
//             <span>FAQ</span>
//           </div>
//         </div>
//       </div>

//       <div className="homeimage">
//         <img className="image" src={Homeimage} alt="Logo" />
//       </div>
//       <div className="body">
//         <div className="body-title">
//           <h4>How does it works?</h4>
//         </div>
//         <div className="body-content">
//           <div className="body-icons">
//             <div className="svg">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="26"
//                 height="25"
//                 viewBox="0 0 26 25"
//                 fill="none"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   clip-rule="evenodd"
//                   d="M6.02159 11.4583C6.02159 10.6376 6.18326 9.82485 6.49735 9.06656C6.81144 8.30828 7.27181 7.61928 7.85218 7.03892C8.43254 6.45855 9.12154 5.99818 9.87982 5.68409C10.6381 5.36999 11.4508 5.20833 12.2716 5.20833C13.0924 5.20833 13.9051 5.36999 14.6634 5.68409C15.4217 5.99818 16.1106 6.45855 16.691 7.03892C17.2714 7.61928 17.7318 8.30828 18.0458 9.06656C18.3599 9.82485 18.5216 10.6376 18.5216 11.4583C18.5216 13.1159 17.8631 14.7056 16.691 15.8778C15.5189 17.0499 13.9292 17.7083 12.2716 17.7083C10.614 17.7083 9.02428 17.0499 7.85218 15.8778C6.68008 14.7056 6.02159 13.1159 6.02159 11.4583ZM12.2716 3.125C10.9454 3.12519 9.63842 3.44189 8.45924 4.04879C7.28007 4.65569 6.26277 5.53525 5.49189 6.61438C4.72101 7.69351 4.21882 8.94104 4.02704 10.2533C3.83527 11.5655 3.95945 12.9046 4.38928 14.1592C4.8191 15.4138 5.54215 16.5477 6.49833 17.4667C7.45451 18.3856 8.61621 19.0631 9.88688 19.4428C11.1576 19.8225 12.5005 19.8935 13.8041 19.6498C15.1077 19.4061 16.3343 18.8548 17.382 18.0417L20.9101 21.5698C21.1066 21.7595 21.3697 21.8645 21.6428 21.8622C21.916 21.8598 22.1772 21.7502 22.3704 21.5571C22.5635 21.364 22.673 21.1027 22.6754 20.8296C22.6778 20.5565 22.5728 20.2933 22.3831 20.0969L18.8549 16.5688C19.8113 15.3369 20.4028 13.8615 20.5622 12.3102C20.7216 10.7589 20.4425 9.19395 19.7567 7.79338C19.0708 6.39282 18.0057 5.2128 16.6825 4.38753C15.3593 3.56225 13.8311 3.12483 12.2716 3.125ZM12.2716 15.625C13.3767 15.625 14.4365 15.186 15.2179 14.4046C15.9993 13.6232 16.4383 12.5634 16.4383 11.4583C16.4383 10.3533 15.9993 9.29346 15.2179 8.51206C14.4365 7.73065 13.3767 7.29167 12.2716 7.29167C11.1665 7.29167 10.1067 7.73065 9.32532 8.51206C8.54392 9.29346 8.10493 10.3533 8.10493 11.4583C8.10493 12.5634 8.54392 13.6232 9.32532 14.4046C10.1067 15.186 11.1665 15.625 12.2716 15.625Z"
//                   fill="#2146C7"
//                 />
//               </svg>
//             </div>
//             <div className="calendar-icon">
//               <FaCalendarAlt />
//             </div>
//             <div className="svg">
//               <svg
//                 width="26"
//                 height="25"
//                 viewBox="0 0 26 25"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M15.24 15.6292L16.1337 17.551C16.1337 17.551 20.1514 18.4041 20.1514 20.4333C20.1514 21.875 18.3639 21.875 18.3639 21.875H13.6035L11.2598 20.5729"
//                   stroke="#2146C7"
//                   stroke-width="1.5"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//                 <path
//                   d="M9.88411 15.6292L8.99141 17.551C8.99141 17.551 4.97266 18.4041 4.97266 20.4333C4.97266 21.875 6.76016 21.875 6.76016 21.875H8.91641L11.2602 20.5729L14.1247 18.75"
//                   stroke="#2146C7"
//                   stroke-width="1.5"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//                 <path
//                   d="M3.1875 16.5896C3.1875 16.5896 5.41979 16.1094 6.75937 15.6292C8.09792 8.90208 12.1146 9.38229 12.5625 9.38229C13.0094 9.38229 17.0271 8.90208 18.3656 15.6292C19.7052 16.1083 21.9375 16.5896 21.9375 16.5896M12.5625 7.29167C13.115 7.29167 13.6449 7.07217 14.0356 6.68147C14.4263 6.29077 14.6458 5.76087 14.6458 5.20833C14.6458 4.6558 14.4263 4.12589 14.0356 3.73519C13.6449 3.34449 13.115 3.125 12.5625 3.125C12.01 3.125 11.4801 3.34449 11.0894 3.73519C10.6987 4.12589 10.4792 4.6558 10.4792 5.20833C10.4792 5.76087 10.6987 6.29077 11.0894 6.68147C11.4801 7.07217 12.01 7.29167 12.5625 7.29167Z"
//                   stroke="#2146C7"
//                   stroke-width="1.5"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//               </svg>
//             </div>
//           </div>
//           <div className="body-text">
//             <div>
//               <span className="text-1">
//                 Search pet Groomer by your location{" "}
//               </span>
//             </div>
//             <div>
//               <span className="text-2">Schedule your appointment at home</span>
//             </div>
//             <div>
//               <span className="text-3">Pet Groomer will come near to you</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Landingpage;

// *********************************************************************

// import React from "react";
// import "../Pages/Landingpage.css";
// import onelovelogo from "../SVGimages/onelovelogo.svg";
// import Homeimage from "../SVGimages/Homeimage.svg";
// import { FaCalendarAlt } from "react-icons/fa";

// const Landingpage = () => {
//   return (
//     <div className="maincontainer">
//       <div className="header">
//         <div className="logo">
//           <img src={onelovelogo} alt="Logo" />
//         </div>
//         <div className="aboutmenu">
//           <div className="brand">
//             <span> Brand </span>
//           </div>
//           <div className="brand">
//             <span> Contact us </span>
//           </div>
//           <div className="brand">
//             <span> T&C </span>
//           </div>
//           <div className="brand">
//             <span> FAQ</span>
//           </div>
//         </div>
//       </div>

//       <div className="homeimage">
//         <img className="image" src={Homeimage} alt="Logo" />
//       </div>
//       <div className="main-line"></div>
//       <div className="body">
//         <div className="body-title">
//           <h4>How does it works?</h4>
//         </div>
//         <div className="body-content">
//           <div className="body-icons">
//             <div className="svg">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="26"
//                 height="25"
//                 viewBox="0 0 26 25"
//                 fill="none"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   clip-rule="evenodd"
//                   d="M6.02159 11.4583C6.02159 10.6376 6.18326 9.82485 6.49735 9.06656C6.81144 8.30828 7.27181 7.61928 7.85218 7.03892C8.43254 6.45855 9.12154 5.99818 9.87982 5.68409C10.6381 5.36999 11.4508 5.20833 12.2716 5.20833C13.0924 5.20833 13.9051 5.36999 14.6634 5.68409C15.4217 5.99818 16.1106 6.45855 16.691 7.03892C17.2714 7.61928 17.7318 8.30828 18.0458 9.06656C18.3599 9.82485 18.5216 10.6376 18.5216 11.4583C18.5216 13.1159 17.8631 14.7056 16.691 15.8778C15.5189 17.0499 13.9292 17.7083 12.2716 17.7083C10.614 17.7083 9.02428 17.0499 7.85218 15.8778C6.68008 14.7056 6.02159 13.1159 6.02159 11.4583ZM12.2716 3.125C10.9454 3.12519 9.63842 3.44189 8.45924 4.04879C7.28007 4.65569 6.26277 5.53525 5.49189 6.61438C4.72101 7.69351 4.21882 8.94104 4.02704 10.2533C3.83527 11.5655 3.95945 12.9046 4.38928 14.1592C4.8191 15.4138 5.54215 16.5477 6.49833 17.4667C7.45451 18.3856 8.61621 19.0631 9.88688 19.4428C11.1576 19.8225 12.5005 19.8935 13.8041 19.6498C15.1077 19.4061 16.3343 18.8548 17.382 18.0417L20.9101 21.5698C21.1066 21.7595 21.3697 21.8645 21.6428 21.8622C21.916 21.8598 22.1772 21.7502 22.3704 21.5571C22.5635 21.364 22.673 21.1027 22.6754 20.8296C22.6778 20.5565 22.5728 20.2933 22.3831 20.0969L18.8549 16.5688C19.8113 15.3369 20.4028 13.8615 20.5622 12.3102C20.7216 10.7589 20.4425 9.19395 19.7567 7.79338C19.0708 6.39282 18.0057 5.2128 16.6825 4.38753C15.3593 3.56225 13.8311 3.12483 12.2716 3.125ZM12.2716 15.625C13.3767 15.625 14.4365 15.186 15.2179 14.4046C15.9993 13.6232 16.4383 12.5634 16.4383 11.4583C16.4383 10.3533 15.9993 9.29346 15.2179 8.51206C14.4365 7.73065 13.3767 7.29167 12.2716 7.29167C11.1665 7.29167 10.1067 7.73065 9.32532 8.51206C8.54392 9.29346 8.10493 10.3533 8.10493 11.4583C8.10493 12.5634 8.54392 13.6232 9.32532 14.4046C10.1067 15.186 11.1665 15.625 12.2716 15.625Z"
//                   fill="#2146C7"
//                 />
//               </svg>
//             </div>{" "}
//             <div className="line"></div>
//             <div className="calendar-icon">
//               <FaCalendarAlt />
//             </div>{" "}
//             <div className="line"></div>
//             <div className="svg">
//               <svg
//                 width="26"
//                 height="25"
//                 viewBox="0 0 26 25"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M15.24 15.6292L16.1337 17.551C16.1337 17.551 20.1514 18.4041 20.1514 20.4333C20.1514 21.875 18.3639 21.875 18.3639 21.875H13.6035L11.2598 20.5729"
//                   stroke="#2146C7"
//                   stroke-width="1.5"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//                 <path
//                   d="M9.88411 15.6292L8.99141 17.551C8.99141 17.551 4.97266 18.4041 4.97266 20.4333C4.97266 21.875 6.76016 21.875 6.76016 21.875H8.91641L11.2602 20.5729L14.1247 18.75"
//                   stroke="#2146C7"
//                   stroke-width="1.5"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//                 <path
//                   d="M3.1875 16.5896C3.1875 16.5896 5.41979 16.1094 6.75937 15.6292C8.09792 8.90208 12.1146 9.38229 12.5625 9.38229C13.0094 9.38229 17.0271 8.90208 18.3656 15.6292C19.7052 16.1083 21.9375 16.5896 21.9375 16.5896M12.5625 7.29167C13.115 7.29167 13.6449 7.07217 14.0356 6.68147C14.4263 6.29077 14.6458 5.76087 14.6458 5.20833C14.6458 4.6558 14.4263 4.12589 14.0356 3.73519C13.6449 3.34449 13.115 3.125 12.5625 3.125C12.01 3.125 11.4801 3.34449 11.0894 3.73519C10.6987 4.12589 10.4792 4.6558 10.4792 5.20833C10.4792 5.76087 10.6987 6.29077 11.0894 6.68147C11.4801 7.07217 12.01 7.29167 12.5625 7.29167Z"
//                   stroke="#2146C7"
//                   stroke-width="1.5"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//               </svg>
//             </div>
//           </div>
//           <div className="body-text">
//             <div className="text">
//               <span>Search pet Groomer by your location </span>
//             </div>
//             <div className="text">
//               <span>Schedule your appointment at home</span>
//             </div>
//             <div className="text">
//               <span>Pet Groomer will come near to you</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Landingpage;

// **********************************************************

// import React from "react";
// import "../Pages/Landingpage.css";
// import onelovelogo from "../SVGimages/onelovelogo.svg";
// import Homeimage from "../SVGimages/Homeimage.svg";
// import { FaCalendarAlt } from "react-icons/fa";

// const Landingpage = () => {
//   return (
//     <div className="maincontainer  ">
//       <nav className="navbar header navbar-expand-lg fixed-top  bg-body-tertiary">
//         <div className="container-fluid">
//           <div className="d-flex flex-row">
//             <img className="logo" src={onelovelogo} alt="logo" />
//           </div>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
//               <li className="nav-item ">
//                 <a className="nav-link active" aria-current="page" href="/">
//                   Brand
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" aria-current="page" href="/contact">
//                   Conatct Us
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link  " aria-current="page" href="/tc">
//                   T&C
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link  " aria-current="page" href="/faq ">
//                   FAQ
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <div className="homeimage">
//         <img className="image" src={Homeimage} alt="Logo" />
//       </div>
//       <div className="main-line"></div>
//       <div className="body">
//         <div className="body-title">
//           <h4>How does it works?</h4>
//         </div>
//         <div className="body-content">
//           <div className="body-icons">
//             <div className="svg">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="26"
//                 height="25"
//                 viewBox="0 0 26 25"
//                 fill="none"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   clip-rule="evenodd"
//                   d="M6.02159 11.4583C6.02159 10.6376 6.18326 9.82485 6.49735 9.06656C6.81144 8.30828 7.27181 7.61928 7.85218 7.03892C8.43254 6.45855 9.12154 5.99818 9.87982 5.68409C10.6381 5.36999 11.4508 5.20833 12.2716 5.20833C13.0924 5.20833 13.9051 5.36999 14.6634 5.68409C15.4217 5.99818 16.1106 6.45855 16.691 7.03892C17.2714 7.61928 17.7318 8.30828 18.0458 9.06656C18.3599 9.82485 18.5216 10.6376 18.5216 11.4583C18.5216 13.1159 17.8631 14.7056 16.691 15.8778C15.5189 17.0499 13.9292 17.7083 12.2716 17.7083C10.614 17.7083 9.02428 17.0499 7.85218 15.8778C6.68008 14.7056 6.02159 13.1159 6.02159 11.4583ZM12.2716 3.125C10.9454 3.12519 9.63842 3.44189 8.45924 4.04879C7.28007 4.65569 6.26277 5.53525 5.49189 6.61438C4.72101 7.69351 4.21882 8.94104 4.02704 10.2533C3.83527 11.5655 3.95945 12.9046 4.38928 14.1592C4.8191 15.4138 5.54215 16.5477 6.49833 17.4667C7.45451 18.3856 8.61621 19.0631 9.88688 19.4428C11.1576 19.8225 12.5005 19.8935 13.8041 19.6498C15.1077 19.4061 16.3343 18.8548 17.382 18.0417L20.9101 21.5698C21.1066 21.7595 21.3697 21.8645 21.6428 21.8622C21.916 21.8598 22.1772 21.7502 22.3704 21.5571C22.5635 21.364 22.673 21.1027 22.6754 20.8296C22.6778 20.5565 22.5728 20.2933 22.3831 20.0969L18.8549 16.5688C19.8113 15.3369 20.4028 13.8615 20.5622 12.3102C20.7216 10.7589 20.4425 9.19395 19.7567 7.79338C19.0708 6.39282 18.0057 5.2128 16.6825 4.38753C15.3593 3.56225 13.8311 3.12483 12.2716 3.125ZM12.2716 15.625C13.3767 15.625 14.4365 15.186 15.2179 14.4046C15.9993 13.6232 16.4383 12.5634 16.4383 11.4583C16.4383 10.3533 15.9993 9.29346 15.2179 8.51206C14.4365 7.73065 13.3767 7.29167 12.2716 7.29167C11.1665 7.29167 10.1067 7.73065 9.32532 8.51206C8.54392 9.29346 8.10493 10.3533 8.10493 11.4583C8.10493 12.5634 8.54392 13.6232 9.32532 14.4046C10.1067 15.186 11.1665 15.625 12.2716 15.625Z"
//                   fill="#2146C7"
//                 />
//               </svg>
//             </div>{" "}
//             <div className="line"></div>
//             <div className="calendar-icon">
//               <FaCalendarAlt />
//             </div>{" "}
//             <div className="line"></div>
//             <div className="svg">
//               <svg
//                 width="26"
//                 height="25"
//                 viewBox="0 0 26 25"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M15.24 15.6292L16.1337 17.551C16.1337 17.551 20.1514 18.4041 20.1514 20.4333C20.1514 21.875 18.3639 21.875 18.3639 21.875H13.6035L11.2598 20.5729"
//                   stroke="#2146C7"
//                   stroke-width="1.5"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//                 <path
//                   d="M9.88411 15.6292L8.99141 17.551C8.99141 17.551 4.97266 18.4041 4.97266 20.4333C4.97266 21.875 6.76016 21.875 6.76016 21.875H8.91641L11.2602 20.5729L14.1247 18.75"
//                   stroke="#2146C7"
//                   stroke-width="1.5"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//                 <path
//                   d="M3.1875 16.5896C3.1875 16.5896 5.41979 16.1094 6.75937 15.6292C8.09792 8.90208 12.1146 9.38229 12.5625 9.38229C13.0094 9.38229 17.0271 8.90208 18.3656 15.6292C19.7052 16.1083 21.9375 16.5896 21.9375 16.5896M12.5625 7.29167C13.115 7.29167 13.6449 7.07217 14.0356 6.68147C14.4263 6.29077 14.6458 5.76087 14.6458 5.20833C14.6458 4.6558 14.4263 4.12589 14.0356 3.73519C13.6449 3.34449 13.115 3.125 12.5625 3.125C12.01 3.125 11.4801 3.34449 11.0894 3.73519C10.6987 4.12589 10.4792 4.6558 10.4792 5.20833C10.4792 5.76087 10.6987 6.29077 11.0894 6.68147C11.4801 7.07217 12.01 7.29167 12.5625 7.29167Z"
//                   stroke="#2146C7"
//                   stroke-width="1.5"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//               </svg>
//             </div>
//           </div>
//           <div className="body-text">
//             <div className="text">
//               <span>Search pet Groomer by your location </span>
//             </div>
//             <div className="text">
//               <span>Schedule your appointment at home</span>
//             </div>
//             <div className="text">
//               <span>Pet Groomer will come near to you</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Landingpage;
// ***********************************************************

import React from "react";
import "../Pages/Landingpage.css";
import onelovelogo from "../SVGimages/onelovelogo.svg";
import Homeimage from "../SVGimages/Homeimage.svg";
import { FaCalendarAlt } from "react-icons/fa";

const Landingpage = () => {
  return (
    <div>
      <nav className="navbar header navbar-expand-lg fixed-top  bg-body-tertiary">
        <div className="container-fluid">
          <div className="d-flex flex-row">
            <img className="logo" src={onelovelogo} alt="logo" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="/">
                  Brand
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/contact">
                  Conatct Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  " aria-current="page" href="/tc">
                  T&C
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  " aria-current="page" href="/faq ">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className=" ">
        <div className="maincontainer  ">
          <div className="homeimage">
            <img className="img-fluid" src={Homeimage} alt="Logo" />
          </div>
          <div className="main-line"></div>
          <div className="body">
            <div className="body-title">
              <h4>How does it works?</h4>
            </div>
            <div className="body-content">
              <div className="body-icons">
                <div className="svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="25"
                    viewBox="0 0 26 25"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.02159 11.4583C6.02159 10.6376 6.18326 9.82485 6.49735 9.06656C6.81144 8.30828 7.27181 7.61928 7.85218 7.03892C8.43254 6.45855 9.12154 5.99818 9.87982 5.68409C10.6381 5.36999 11.4508 5.20833 12.2716 5.20833C13.0924 5.20833 13.9051 5.36999 14.6634 5.68409C15.4217 5.99818 16.1106 6.45855 16.691 7.03892C17.2714 7.61928 17.7318 8.30828 18.0458 9.06656C18.3599 9.82485 18.5216 10.6376 18.5216 11.4583C18.5216 13.1159 17.8631 14.7056 16.691 15.8778C15.5189 17.0499 13.9292 17.7083 12.2716 17.7083C10.614 17.7083 9.02428 17.0499 7.85218 15.8778C6.68008 14.7056 6.02159 13.1159 6.02159 11.4583ZM12.2716 3.125C10.9454 3.12519 9.63842 3.44189 8.45924 4.04879C7.28007 4.65569 6.26277 5.53525 5.49189 6.61438C4.72101 7.69351 4.21882 8.94104 4.02704 10.2533C3.83527 11.5655 3.95945 12.9046 4.38928 14.1592C4.8191 15.4138 5.54215 16.5477 6.49833 17.4667C7.45451 18.3856 8.61621 19.0631 9.88688 19.4428C11.1576 19.8225 12.5005 19.8935 13.8041 19.6498C15.1077 19.4061 16.3343 18.8548 17.382 18.0417L20.9101 21.5698C21.1066 21.7595 21.3697 21.8645 21.6428 21.8622C21.916 21.8598 22.1772 21.7502 22.3704 21.5571C22.5635 21.364 22.673 21.1027 22.6754 20.8296C22.6778 20.5565 22.5728 20.2933 22.3831 20.0969L18.8549 16.5688C19.8113 15.3369 20.4028 13.8615 20.5622 12.3102C20.7216 10.7589 20.4425 9.19395 19.7567 7.79338C19.0708 6.39282 18.0057 5.2128 16.6825 4.38753C15.3593 3.56225 13.8311 3.12483 12.2716 3.125ZM12.2716 15.625C13.3767 15.625 14.4365 15.186 15.2179 14.4046C15.9993 13.6232 16.4383 12.5634 16.4383 11.4583C16.4383 10.3533 15.9993 9.29346 15.2179 8.51206C14.4365 7.73065 13.3767 7.29167 12.2716 7.29167C11.1665 7.29167 10.1067 7.73065 9.32532 8.51206C8.54392 9.29346 8.10493 10.3533 8.10493 11.4583C8.10493 12.5634 8.54392 13.6232 9.32532 14.4046C10.1067 15.186 11.1665 15.625 12.2716 15.625Z"
                      fill="#2146C7"
                    />
                  </svg>
                </div>{" "}
                <div className="line"></div>
                <div className="calendar-icon">
                  <FaCalendarAlt />
                </div>{" "}
                <div className="line"></div>
                <div className="svg">
                  <svg
                    width="26"
                    height="25"
                    viewBox="0 0 26 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.24 15.6292L16.1337 17.551C16.1337 17.551 20.1514 18.4041 20.1514 20.4333C20.1514 21.875 18.3639 21.875 18.3639 21.875H13.6035L11.2598 20.5729"
                      stroke="#2146C7"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.88411 15.6292L8.99141 17.551C8.99141 17.551 4.97266 18.4041 4.97266 20.4333C4.97266 21.875 6.76016 21.875 6.76016 21.875H8.91641L11.2602 20.5729L14.1247 18.75"
                      stroke="#2146C7"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.1875 16.5896C3.1875 16.5896 5.41979 16.1094 6.75937 15.6292C8.09792 8.90208 12.1146 9.38229 12.5625 9.38229C13.0094 9.38229 17.0271 8.90208 18.3656 15.6292C19.7052 16.1083 21.9375 16.5896 21.9375 16.5896M12.5625 7.29167C13.115 7.29167 13.6449 7.07217 14.0356 6.68147C14.4263 6.29077 14.6458 5.76087 14.6458 5.20833C14.6458 4.6558 14.4263 4.12589 14.0356 3.73519C13.6449 3.34449 13.115 3.125 12.5625 3.125C12.01 3.125 11.4801 3.34449 11.0894 3.73519C10.6987 4.12589 10.4792 4.6558 10.4792 5.20833C10.4792 5.76087 10.6987 6.29077 11.0894 6.68147C11.4801 7.07217 12.01 7.29167 12.5625 7.29167Z"
                      stroke="#2146C7"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="body-text">
                <div className="text">
                  <span>Search pet Groomer by your location </span>
                </div>
                <div className="text">
                  <span>Schedule your appointment at home</span>
                </div>
                <div className="text">
                  <span>Pet Groomer will come near to you</span>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Landingpage;
