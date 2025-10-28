export const updateConsent = (value: "granted" | "denied") => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: value,
    });
    return true;
  }
  return false;
};

export const waitForGtag = (callback: () => void, timeout = 5000) => {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    callback();
    return;
  }

  const startTime = Date.now();
  const interval = setInterval(() => {
    if (typeof window.gtag === "function") {
      callback();
      clearInterval(interval);
    } else if (Date.now() - startTime > timeout) {
      clearInterval(interval);
      console.warn("gtag not loaded within timeout");
    }
  }, 100);
};