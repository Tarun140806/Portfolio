# Tarun — Portfolio

A personal portfolio site built with plain HTML, CSS, and JavaScript — no frameworks, no build step.

**Live site:** _add your GitHub Pages link here once enabled (Settings → Pages)_

## About

A multi-page portfolio with a bold, dark, terminal-inspired design. The homepage features a typing-animation terminal window, and project entries are styled like `git log` output to match the theme.

## Pages

| File            | Description                                   |
| --------------- | --------------------------------------------- |
| `index.html`    | Home — intro, terminal animation, quick stats |
| `about.html`    | Background, education, and experience         |
| `projects.html` | Project write-ups in a git-log style layout   |
| `skills.html`   | Skills grouped by category                    |
| `contact.html`  | Ways to get in touch                          |

## Tech

- HTML5
- CSS3 (custom properties, flexbox, grid, responsive layout)
- Vanilla JavaScript (typing animation, mobile nav toggle)
- Fonts: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) + [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts

## Running locally

No build tools or dependencies needed — just open `index.html` in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Structure

```
.
├── index.html
├── about.html
├── projects.html
├── skills.html
├── contact.html
├── styles.css
└── script.js
```
