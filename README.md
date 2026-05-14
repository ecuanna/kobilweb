## Logo düzeltmesi

Logoların sünmemesi için `app/globals.css` içinde logolarda `object-fit: contain`, `height: auto`, `max-width` ve responsive `clamp()` değerleri kullanıldı. Arka plan/kart fotoğrafları `object-fit: cover`, logolar ise `object-fit: contain` kullanır.

## Son logo düzeltmesi

Değişen dosyalar:

- `app/page.tsx`: `KobilLogo` ve `BrandLogo` component'leri eklendi; logo `<img>` kullanımları bu component'lere çevrildi.
- `app/globals.css`: `.kobilLogo`, `.brandSlot`, `.logoFrame`, `.forbesLogo`, `.sparkLogo`, `.esappLogo`, `.caareLogo`, `.skorLogo` stilleri eklendi.
