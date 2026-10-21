# Finan Dental — Patient Enquiry and Booking Redesign

## Goal

Apply Dr. Selam’s brief: help patients understand their needs, trust the clinic, request an appointment and attend. Keep the existing logo, real doctor photographs, clinic video and Vercel hosting.

## 1. Brand and homepage

- Refresh all pages with light blue and lime accents, readable normal-weight typography, clear spacing and restrained animation.
- Lead with the clinic name, Dr. Selamawit, Bole/Addis Ababa location and Book Appointment / WhatsApp actions.
- Follow with Meet Dr. Selamawit, Why Choose Finan, patient-friendly treatments, approved cases/reviews when available, visit steps, FAQs, location map and final booking/contact section.
- Retain Dr. Abenezer’s profile and clinic video without letting them overwhelm booking or founder information.
- Replace “free consultation” with “Book a Dental Consultation”; avoid unverified guarantees, rankings and prices.

## 2. Treatments and trust

- Organize services around needs: straighten teeth, save an infected tooth, restore damaged teeth, replace missing teeth, improve a smile and family dental care.
- Add dedicated treatment pages, including orthodontics and restorative/prosthodontic care, with suitable patients, options, visit expectations, FAQs and treatment-specific WhatsApp links.
- Explain that an examination determines the treatment plan and cost. Preserve payment-plan information subject to clinic verification.
- Show only genuine, approved reviews and consented patient cases. Omit those sections until the clinic supplies material; never fill them with invented patients or results.

## 3. Easier contact and booking

- Shorten the initial form to name, phone/WhatsApp, care need, preferred day and preferred time; remove mandatory age and retain only optional notes.
- Add a fixed mobile Call / WhatsApp / Book bar and consistent contact actions on every page.
- Preserve the clinic’s messaging choices, with WhatsApp as the prominent option and prefilled request details.
- Explain reception confirmation and what happens at the visit. A prepared WhatsApp message is not a received or confirmed appointment.
- Add a follow-up page with call/WhatsApp actions. Show “request received” only when delivery is actually acknowledged; otherwise explain that the patient must send the prepared message.
- Automatic receipt and reminders are a separate connected workflow requiring Lovable Cloud and a clinic-approved messaging service; do not claim delivery without that connection.

## 4. Location, search and measurement

- Make the map, directions, phone numbers and opening hours easy to find; verify inconsistent contact details against clinic-confirmed information.
- Give each page unique search/social titles and descriptions focused naturally on Bole and Addis Ababa.
- Track call, WhatsApp, directions and message-preparation actions separately from confirmed bookings. Capture campaign/service attribution without sending patient names, phone numbers or notes to analytics.
- Provide distinct campaign links for TikTok, Facebook, Instagram and Google. Use the existing analytics where supported; additional reporting depends on the connected analytics service.

## Clinic information needed

- Approved genuine reviews and patient-case photographs with consent.
- Confirmation of clinic phone/WhatsApp numbers, opening hours, credentials and payment offers where the current site differs from earlier instructions.
- A reception-approved service/account for automatic confirmations and reminders, if required.

## Technical details and checks

- Keep TanStack file-based routes, existing shared layout and semantic style tokens; preserve the static Vercel deployment.
- Use existing genuine clinic media rather than generated patient cases or hotlinked stock imagery.
- Add focused tests for form validation and contact-link/message rules.
- Check the full patient request flow, all contact links, maps and desktop/mobile layouts at iPhone and Android screen sizes. Do not send test enquiries to the clinic without permission.
- Verify analytics events distinguish enquiries from appointments and do not contain patient information.
