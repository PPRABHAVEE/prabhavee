# P/ PRABHAVEE website

Next.js 15 (App Router), static export (`output: "export"`), plain CSS. Content lives in `src/content/`.

    npm ci
    npm run dev        # http://localhost:3000
    npm run build      # static site in out/

## Where things are
- `src/content/site.js`: copy taken from the pitch deck (services, approach, stats, flagship programmes, founder profile).
- `src/content/events.json`: the 57 engagements from the events sheet. Regenerate from the sheet rather than editing by hand.
- `src/content/deck.json`: collaboration list and PoSH client list from the deck.
- `src/app/*/page.js`: one file per route; routes keep the old addresses (`/background`, `/networking`, `/journey`, `/whoWeServe`, `/people/founder`, ...). `/stakeholder` now redirects into `/journey#stakeholder`.
- `src/app/globals.css`: the whole design system (tokens at the top).
- `public/img`, `public/docs`: photos, logos, brochures and reports supplied by the client.

## Environment variables
- `NEXT_PUBLIC_SHOW_PENDING=1`: show the dashed review markers and add `noindex`. Leave unset for production.
- `NEXT_PUBLIC_WEB3FORMS_KEY`: access key from web3forms.com, issued for the inbox that should receive enquiries. Enquiries are then emailed straight there with Reply-To set to the visitor. The key is safe to expose in the browser.
- `NEXT_PUBLIC_ENQUIRY_ENDPOINT`: alternative JSON form endpoint (for example Formspree).
- Neither set: the enquiry form opens a prepared email to the firm.

## Deploy
Render static site: build command `npm run build`, publish directory `out`. No server features are used.
