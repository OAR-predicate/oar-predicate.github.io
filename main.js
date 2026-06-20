/* =========================================================
   TAD Project Page — Minimal interactions
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Demo scene tabs
  const tabs = document.querySelectorAll(".demo-tab");
  const panels = document.querySelectorAll(".demo-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.dataset.demo;

      tabs.forEach((item) => {
        const active = item === tab;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-selected", String(active));
      });

      panels.forEach((panel) => {
        const active = panel.id === targetId;
        panel.classList.toggle("is-active", active);
        panel.hidden = !active;
      });
    });
  });

  // Copy BibTeX
  const copyButton = document.querySelector("[data-copy-target]");
  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      const target = document.getElementById(copyButton.dataset.copyTarget);
      if (!target) return;

      const originalText = copyButton.textContent;
      try {
        await navigator.clipboard.writeText(target.textContent.trim());
        copyButton.textContent = "Copied!";
      } catch (error) {
        copyButton.textContent = "Copy manually";
      }

      window.setTimeout(() => {
        copyButton.textContent = originalText;
      }, 1600);
    });
  }

  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
