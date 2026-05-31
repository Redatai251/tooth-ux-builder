# Finan Speciality Dental Clinic — Full Rebuild Plan

## 1. Branding & Global

- Copy uploaded clinic logo (image-1) and Dr. Selamawit photo (image-3) into `src/assets/`.
- Copy uploaded hero/home image to `src/assets/home-hero.jpg`.
- Update site name everywhere: **Finan Speciality Dental Clinic**.
- New header style (like image-4): white pill nav, centered links, logo left, "Book Appointment" button right. Logo displayed large/clear, mobile hamburger menu.
- Remove all bold heavy display fonts; use normal weight Inter / system font.
- Update `styles.css` color tokens (clean medical teal/blue from image-3 CTA).

## 2. Routes (TanStack file-based)

- `/` Home
- `/about` About Dr. Selamawit
- `/services` Services list
- `/payment-plans` Payment Plans
- `/contact` Contact
- `/book` Book Appointment (form + Telegram/WhatsApp send)
- `/follow-us` Social links
- `/testimonials` Testimonials (Ethiopian names)

Header nav shows: Home, About Us, Services, Payment Plans, Contact Us, Book Appointment.

## 3. Home page (rewrite)

Remove: "15k Satisficed Patients" badge, all team avatar pills, denture-hero.png, denture-clinic.jpg block, info strip (Emergency/Hours/Rating), "Trusted Experts/Gentle Care/140+", denture-doctor card section, Special Offer card, Case Studies, Core Features, Doctors, Blog, old Testimonials, "Our 5k+ Patient Worldwide".

Keep / new sections:

- Hero with uploaded home image only. Headline: "Healthy teeth, happy life starts here". Buttons: **Book Appointment**, **Our Services** (links to `/services`). "500+ patients treated".
- Services preview grid (7 cards from list with provided image URLs, each has "Book Appointment" button → `/book?service=...`).
- Why choose (kept, simplified, no discount card).
- Steps (kept).
- Testimonials preview (Ethiopian names).
- Free Consultation CTA strip above footer.

## 4. Services page

7 services with provided external image URLs:

- Preventive Care, Cosmetic Dentistry, Dental Implants, Braces, Pediatric Dentistry, Oral Surgery, Root Canal Therapy.
  Each card includes "Book Appointment" button.

## 5. Book Appointment page

Form fields: Full Name, Age, Phone Number, Service (select with 9 options listed by user), Preferred Date, Preferred Time (12-hour AM/PM picker), Additional Notes.

On submit:

- Validate via Zod.
- Send formatted message to Telegram chat `https://t.me/abenezerzewedu` via Telegram Bot API.
- Open WhatsApp `https://wa.me/25191105655?text=...` in new tab with same info.

**Telegram approach**: Since there's no bot token configured, use the simplest reliable client-only path: open both `https://t.me/share/url?url=...&text=...` and `https://wa.me/...?text=...` after submit. (No backend secrets needed.) Show success toast.

Display clinic phone numbers: +251 91 105 5655, +251 94 803 3831, +251 98 447 0444. Show map iframe and uploaded interior images.

## 6. About page (Dr. Selamawit)

- Photo (image-3), name "Dr. Selamawit Abraham Mesfin, HO, MPH, DDM".
- Founded 2016, "10+ years experience" stat card.
- Bio about her practice, team approach, patient care style.
- "Book Visit" button → `/book`.

## 7. Payment Plans page

- Hero: "Care that fits your budget".
- Two cards: Flexible Payment Plans, Student Discount (bullets from user).
- Teal gradient CTA card matching image-3: "Have questions about payment? — Talk to us".

## 8. Follow Us page

4 cards (TikTok, Facebook, Telegram, Instagram) using provided icon URLs.

## 9. Testimonials page

6+ cards with Ethiopian names (Selam, Abenezer, Hanna, Yonas, Meron, Dawit, etc.), feedback tied to specific services. Style like image-6 (soft cards on light gradient).

## 10. Footer (style like image-2)

- Rounded white container on light gradient bg.
- Newsletter signup (email + Submit pill).
- Columns: Pages (Home, About Us, Services, Payment Plans, Contact Us, Book Appointment), Opening Hours (full week schedule), Contact (3 phone numbers, address: Abrams Building, Cameroon St, Addis Ababa, Behind Bole Medhanialem Church, 5th floor), small embedded map.
- Social icons.
- Bottom: "Copyright © 2026 Finan Speciality Dental Clinic" + "Website Developed By [BloomUp Technologies](https://bloomuptech.com/)".

## 11. Contact page

Big landscape map iframe (the provided Google Maps embed), 3 phone numbers, address, opening hours, WhatsApp + Telegram quick-contact buttons.

## 12. SEO

Per-route `head()` with unique title/description/og:title/og:description for each page; canonical at `https://tooth-ux-builder.lovable.app/<route>`.

## Technical notes

- All external image URLs (services, social icons, map) used directly via `<img src>` / `<iframe>` — no need to download.
- Logo from upload copied to `src/assets/finan-logo.png`.
- Dr. photo → `src/assets/dr-selamawit.jpg`.
- Home hero → `src/assets/home-hero.jpg` (downloaded via curl from the chatgpt url; if it fails, fall back to a generated dental hero image).
- Booking submission uses `window.open` for both `wa.me` and `t.me/share/url` — pure frontend, no secrets/backend needed.
- Replace existing components in place; delete unused asset imports.
- Keep current Vercel SPA build config untouched.

Ready to implement.
