// import React, { useEffect } from "react";
// import $ from "jquery";
// import "magnific-popup";

// // function MyComponent() {
// //   useEffect(() => {
// //     $(".gallery-lb").each(function () {
// //       $(this).magnificPopup({
// //         delegate: "a",
// //         type: "image",
// //         gallery: {
// //           enabled: true,
// //         },
// //         mainClass: "mfp-fade",
// //       });
// //     });
// //   }, []); // Empty dependency array ensures the effect runs only once after initial rendering

// // //   return <div className="gallery-lb">...</div>;
// // }
// function MyComponent() {
//   useEffect(() => {
//     $(".gallery-lb").each(function () {
//       $(this).magnificPopup({
//         delegate: "a",
//         type: "image",
//         gallery: {
//           enabled: true,
//         },
//         mainClass: "mfp-fade",
//       });
//     });
//   }, []);

//   return null; // Return null or an empty fragment if you don't want to render anything
// }

// function MyComponent1() {
//     useEffect(() => {
//         $('.js-pscroll').each(function () {
//             $(this).css('position', 'relative');
//             $(this).css('overflow', 'hidden');
//             const ps = new PerfectScrollbar(this, {
//                 wheelSpeed: 1,
//                 scrollingThreshold: 1000,
//                 wheelPropagation: false,
//             });

//             $(window).on('resize', function () {
//                 ps.update();
//             });
//         });
//     }, []);
// }
// export default MyComponent;
// export default MyComponent1;
