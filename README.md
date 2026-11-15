# Cyber News Dashboard — Wajahat Irfan

A static dashboard page of curated cybersecurity topics and practical safety tips. No live scraping, no news feed, no backend.

## What it does

- Shows six educational cards on: spotting phishing emails, strong passwords, two-factor authentication (2FA), software updates, public Wi-Fi safety, and phishing by text/call.
- Filter buttons show cards by topic (All / Phishing / Passwords / Two-Factor Auth / Software Updates / Public Wi-Fi).
- All content is generic educational guidance written for this project — no fake news dates and no invented headlines presented as real news.

## How to run

No build step and no backend. Either:

1. Open `index.html` directly in a browser, or
2. Serve it locally:

```bash
cd cyber-news-dashboard
python3 -m http.server 8000
```

Then visit http://localhost:8000 in a browser.

## Skills shown

- HTML (semantic article cards, accessible filter buttons)
- CSS (responsive grid, button states)
- JavaScript (filtering by data attributes, DOM updates)

## Author

Wajahat Irfan — BS Computer Science student (7th semester), GPGC No. 1 Abbottabad.
