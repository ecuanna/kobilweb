## Logo düzeltmesi

Logoların sünmemesi için `app/globals.css` içinde logolarda `object-fit: contain`, `height: auto`, `max-width` ve responsive `clamp()` değerleri kullanıldı. Arka plan/kart fotoğrafları `object-fit: cover`, logolar ise `object-fit: contain` kullanır.

## Son logo düzeltmesi

Figma'nın export ettiği bazı logo asset'lerinin intrinsic canvas oranı hatalı göründüğü için header ve kart logoları artık `<img>` olarak değil, `KobilLogo` ve `BrandLogo` component'leriyle render ediliyor. Bu sayede hiçbir logoda browser'ın hatalı image ratio hesaplamasına bağlı sünme/taşma oluşmaz.

Değişen dosyalar:

- `app/page.tsx`: `KobilLogo` ve `BrandLogo` component'leri eklendi; logo `<img>` kullanımları bu component'lere çevrildi.
- `app/globals.css`: `.kobilLogo`, `.brandSlot`, `.logoFrame`, `.forbesLogo`, `.sparkLogo`, `.esappLogo`, `.caareLogo`, `.skorLogo` stilleri eklendi.
