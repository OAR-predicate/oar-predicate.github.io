# TAD Project Page

A lightweight static academic project page for:

> **Not All Relations Rotate Alike: Transformation-Aware Decoupling for Viewpoint-Robust 3D Scene Graph Generation**

This starter is designed to work with **plain HTML, CSS, and JavaScript**. No framework, build tool, or server is required.

---

## 1. Open locally

From this directory:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

---

## 2. Replace anonymous metadata

Open `index.html` and edit:

- `<title>`
- the title/subtitle in the Hero section
- author names and affiliations
- the Paper / Code / Supplementary button URLs
- BibTeX
- conference/year

During anonymous review, do **not** expose authors, affiliations, public code, account names, or identifying URLs.

---

## 3. Insert your media

The page intentionally uses visible placeholders so it renders cleanly before assets are ready.

Suggested asset paths:

```text
assets/
├── demos/
│   ├── hero.mp4
│   ├── scene-01.mp4
│   ├── scene-02.mp4
│   └── scene-03.mp4
├── figures/
│   ├── motivation.png
│   ├── method.png
│   ├── robustness-curve.png
│   └── qualitative.png
└── pdf/
    ├── paper.pdf
    └── supplementary.pdf
```

### Hero video

Find `INSERT HERO VIDEO` in `index.html`, then replace that placeholder `<div>` with:

```html
<video class="hero-video" autoplay muted loop playsinline poster="assets/figures/hero-poster.jpg">
  <source src="assets/demos/hero.mp4" type="video/mp4" />
</video>
```

### Figure placeholders

For a figure slot, replace the placeholder `<div class="media-slot ...">...</div>` with:

```html
<img class="figure-image" src="assets/figures/method.png"
     alt="Transformation-Aware Decoupling framework" />
```

For best appearance, add this CSS to `style.css` if needed:

```css
.figure-image {
  width: 100%;
  border-radius: 16px;
  border: 1px solid #dbe2ec;
  box-shadow: 0 10px 26px rgba(34, 51, 84, 0.07);
}
```

### Demo videos

Replace each demo placeholder with:

```html
<video class="demo-video" autoplay muted loop playsinline controls
       poster="assets/figures/scene-01-poster.jpg">
  <source src="assets/demos/scene-01.mp4" type="video/mp4" />
</video>
```

Then add this CSS if desired:

```css
.demo-video {
  width: 100%;
  border-radius: 16px;
  border: 1px solid #dbe2ec;
  background: #17233d;
}
```

Use MP4/H.264 instead of GIF for fast loading and good visual quality.

---

## 4. Deploy with GitHub Pages

1. Create a GitHub repository, e.g. `TAD-3DSGG`.
2. Upload all files in this folder.
3. In the repository, open:

   ```text
   Settings → Pages
   ```

4. Choose:

   ```text
   Source: Deploy from a branch
   Branch: main
   Folder: /(root)
   ```

5. Save. Your URL will be similar to:

   ```text
   https://YOUR-USERNAME.github.io/TAD-3DSGG/
   ```

---

## 5. Recommended media

- Hero teaser: 8–12 second muted loop, 1280×720 or 1440×810.
- Demo videos: 10–18 second muted loops, preferably with labels embedded.
- Figures: export at least 1800 px wide for sharp retina display.
- Video size: target less than 8–12 MB per demo if possible.

---

## 6. Design notes

The page intentionally centers the paper's central message:

- **Yaw-invariant predicates** should remain stable.
- **Directional predicates** should transform with the observation frame.
- **TAD** separates these relation behaviors.

Keep the same colors and terminology across your paper figures and page:
- Green = invariant relations
- Orange = directional relations
- Red = baseline failure / incorrect prediction
