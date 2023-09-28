export function openLinkInNewTab(url) {
  const newTab = window.open(url, "_blank");
  if (newTab) {
    newTab.focus();
  } else {
    // If the browser blocks pop-ups, you can open the link in the current tab as a fallback.
    window.location.href = url;
  }
}
