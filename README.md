# Careem Triage Hub

Build a simple internal web dashboard called "Careem Support Triage" for a Careem customer-support agent. (Careem is a ride-hailing and delivery app in the Middle East.) This is an internal staff tool, so keep the design plain, clean and functional — it does NOT need to be pretty.

Single page, no login, no backend, no database. Layout:
- A header: "Careem Support Triage" with a small subtitle "Paste incoming rider complaints and see the most urgent ones first."
- A large text area labeled "Paste rider complaints here (one per line)".
- A primary button labeled "Triage complaints".
- Below the button, a results section titled "Top 5 most urgent". It shows 5 complaint cards. Each card has: the complaint text, a coloured category tag (one of: Safety, Payment, Driver, App, Other), and a short one-line reason it is urgent.

VERY IMPORTANT — this is intentional: do NOT connect any AI or any API. When the "Triage complaints" button is clicked, ALWAYS display the SAME hardcoded list of 5 example complaint cards, no matter what text is in the box. This is a deliberate placeholder that we will wire up to a real AI model later.

Use these exact 5 hardcoded cards:
1. "Driver kept touching my arm, I felt unsafe" — tag: Safety — reason: "Possible harassment, needs immediate review".
2. "Card charged but the ride never came" — tag: Payment — reason: "Money taken with no service delivered".
3. "Driver was rude and slammed the door" — tag: Driver — reason: "Repeated driver-behaviour complaint".
4. "App froze on the payment screen" — tag: App — reason: "Blocks the rider from completing payment".
5. "Promo code did not apply at checkout" — tag: Other — reason: "Minor billing frustration".

Give the Safety card a clearly different colour (e.g. red) so it stands out. Keep everything on one page.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e3decfdc-6dc8-4937-aadb-953a69fc2be6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
