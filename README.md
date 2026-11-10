# Barakat Al Jinan Company website

One-page site for Barakat Al Jinan Company (Erbil, since 2009). English, Kurdish (Sorani) and Arabic.

## Where things are

- `src/components/site/content.ts`: all copy, phone, links and the project list. Edit here to change text.
- `public/photos/`: the real photos (`.webp`) and `logo.webp`. They are plain files, so they work on any host. To swap a photo, replace the file with the same name or change its entry in `content.ts` (keep width and height correct).
- `public/og.jpg`, `favicon.*`, `apple-touch-icon.png`: share image and icons.
- `src/routes/index.tsx`: the page.

## Contact form

The site has no mail server. After the form is filled in and checked, the visitor presses "Send on WhatsApp", which opens WhatsApp with the message already written.

## Development

```sh
npm install
npm run dev
npm run build
npm test
```
