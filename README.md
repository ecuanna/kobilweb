# KOBIL Ventures Next.js

## Kurulum

```bash
npm install
npm run dev
```

## Figma görsel linklerini gerçek local path yapmak

Figma MCP asset linkleri geçicidir. Linkler çalışırken şu komutu çalıştır:

```bash
npm run localize-assets
```

Bu komut:

1. `app/page.tsx` içindeki `https://www.figma.com/api/mcp/asset/...` görsellerini indirir.
2. Dosyaları `public/assets/` içine kaydeder.
3. `app/page.tsx` içindeki URL'leri `/assets/dosya-adı.ext` path'lerine çevirir.

Next.js içinde `public/assets/logo.svg` dosyası tarayıcıda `/assets/logo.svg` olarak kullanılır.

Örnek:

```tsx
<img src="/assets/logo.svg" alt="Logo" />
```

## Logo düzeltmesi

Logoların sünmemesi için `app/globals.css` içinde logolarda `object-fit: contain`, `height: auto`, `max-width` ve responsive `clamp()` değerleri kullanıldı. Arka plan/kart fotoğrafları `object-fit: cover`, logolar ise `object-fit: contain` kullanır.
