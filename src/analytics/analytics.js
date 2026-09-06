export function trackEvent(eventName, parameters = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", eventName, parameters);
}

export function trackProjectOpen(projectName, projectCategory) {
  trackEvent("open_project", {
    project_name: projectName,
    project_category: projectCategory,
  });
}

export function trackCVDownload() {
  trackEvent("download_cv");
}

export function trackGithubClick(projectName) {
    trackEvent("github_click", {
        project_name: projectName,
    });
}

export function trackLinkedinClick(location = "unknown") {
  trackEvent("linkedin_click", {
    location,
  });
}

export function trackContactClick(method = "email") {
  trackEvent("contact_click", {
    method,
  });
}

export function trackJourneyView() {
  trackEvent("view_journey");
}

export function trackPrototypeClick(projectName) {
  trackEvent("prototype_click", {
    project_name: projectName,
  });
}

export function trackSkyCatClick() {
  trackEvent("skycat_click");
}

export function trackGalleryInteraction(projectName, action, imageName) {
  trackEvent("gallery_interaction", {
    project_name: projectName,
    action,
    image_name: imageName,
  });
}