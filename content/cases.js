// Тексты кейсов на английском. Коротко и только по делу: какая задача, что
// сделано и чем это полезно владельцу бизнеса. Без названий библиотек и приёмов.
export const CASES = {
  porohy: `## The problem

A handball club lives on two things: children signing up for the academy and local companies paying
to be seen. Both decisions start with the same question — is this club serious? A page that still
shows last season's table answers that question badly.

And nobody at a club wants to maintain a website. The coach has training to run.

## What I built

**A table nobody fills in.** The coach opens a match, types 31 and 20, and saves. The league table,
the goal difference, the top scorer list, the player pages and the "next match" block on the home
page all change by themselves. There is no second place where the same number could be wrong.

**A squad page that stays honest.** Goals and appearances come from the match reports, so the
numbers on a player's card always agree with the results page. Add up every player's goals and you
get exactly what the table says the team scored.

**The academy page as the main page.** Age groups, times, prices, what to bring to a first session,
and the questions parents actually ask. The sign-up form goes to the coach by email and is also
stored in the admin panel — email fails more often than people think, and a lost enquiry is a lost
child.

**Two languages without two sites.** Ukrainian for parents, English for European competitions.
Pages and news are translated; club and player names are not duplicated — a name is transliterated,
not translated, so one record serves both languages.

**An admin panel built for a coach, not an editor.** A match is a form, not an article: the score
and the squad stats sit at the top of the screen, before anything else.

## Result

A WordPress site with a theme written for this club rather than bought and adjusted — no page
builder, no bundled template. 79 pages across two languages, 56 fixtures, every text contrast checked
against WCAG AA, no horizontal scrolling at any width from 360 px up.

The club is invented for this portfolio piece, and every page says so.`,

  widnia: `## The problem

Since July 2025 developers in Poland must publish the price of every flat, keep the full history of
every price change and hand that list to the state every day. The fine reaches 10% of turnover. A
brochure site does not cover it: the company needs a catalogue its own staff run.

## What I built

**A catalogue that answers before the phone call.** Price, price per square metre, floor plan with
room areas, and the price history as a chart. Filters work even with JavaScript off, and the choice
stays in the address, so a link can be shared.

**A price history that cannot be rewritten.** Every change is stored with a date and an author, and
the database refuses to edit or delete those rows. That is the legal requirement, met technically
rather than by promise.

**A panel the team runs themselves.** The owner changes prices, a manager only statuses and
enquiries. Permissions are checked on the server at every action, and every change goes into a log.
A separate sandbox lets anyone try the panel without a password.

**A buyer's account.** Sign in with Google, see your enquiries and their status, and have your
details filled into forms automatically.

## Result

Accessibility 100, best practices 100, SEO 100 and speed 94 on the published site. 160 automated
tests and 19 browser scenarios run before every change.`,

  roy: `## The problem

School science explains a phenomenon with a picture and a paragraph. A picture cannot answer the one
question a curious child has: what happens if I change this?

## What I built

**Twenty-four lessons where the phenomenon runs.** A swarm, a wave, a growing crystal, a spreading
fire — each is a live simulation. Move a slider and the behaviour changes in front of you.

**Explanations that follow the experiment.** The text under each simulation reacts to the values the
child chose, so it describes what just happened rather than a generic case.

**A page for teachers.** What each lesson covers, how long it takes and what to ask the class — so
it works in a real classroom, not only at home.

Everything runs in the browser with no account and no install, and behaves the same on a slow phone
as on a laptop.`,

  takt: `## The problem

A tram dispatcher watches a line all day. When one tram runs late, the gap ahead of it grows and the
one behind catches up — a small delay bunches the whole line within half an hour. Demo dashboards
usually show a frozen picture and hide exactly this.

## What I built

**A map where trams move because time moves.** Every position is calculated from the timetable and
the current delay, so the picture at 09:14 differs from the one at 09:12. Speed the clock up and you
watch a delay spread down the line.

**A screen for each role.** The dispatcher sees the whole line, the depot sees which vehicles are
out, the driver gets a phone-sized screen with the next stop and the current gap.

**Incidents you can act on.** Block a stretch of track and the trams behind it respond; clear it and
the line recovers.

Polish, Ukrainian and English, with the switch keeping you on the same screen.`,

  zatvor: `## The problem

A shop selling second-hand film cameras cannot use an ordinary catalogue. There is one of each item,
every one is in a different condition, and once it is gone it is gone — but the page still has to
work, because people search for that model for years.

## What I built

**A page per camera, not per model.** Its own photographs, condition report and repair history: what
was replaced, what was cleaned, what still shows its age.

**Condition in words, not stars.** A scale from "as new" to "working, with marks", with close-ups of
the marks themselves.

**A comparison that decides it.** Two or three cameras side by side: format, weight, lens mount,
what is included, what needs servicing.

**Sold means sold.** The page stays, says so, and offers the closest alternatives in stock — nothing
is silently deleted, so search traffic is never lost.`,

  'midnight-zone': `## The problem

An exhibition about the deep sea has to convey what a photograph cannot: that going down is slow,
dark and heavy. A gallery with a paragraph says none of that.

## What I built

**The page behaves like the thing it describes.** You scroll and you descend: the light drains, the
pressure climbs and the creatures change with the depth — the surface, 200 metres, 1000 metres, the
trench floor at 11 000.

**Facts alongside the drama.** Each zone states its depth, temperature, pressure and what lives
there, so the effect never replaces the content.

**Tickets where they are needed.** Visit information, prices and opening hours sit at the end of the
descent and are one tap away from anywhere.

With reduced motion switched on the same content reads as a calm, ordinary page — nobody is locked
out because animation makes them ill.`,

  gul: `## The problem

Four rehearsal rooms in the basement of an old factory. Bands book by phone, so "is Thursday evening
free?" costs somebody a call — and the answer is only as good as the notebook it is written in.

## What I built

**Rooms you can actually see.** Real photographs of each room, its size, its gear and what to bring,
so a band knows whether the drum kit is included before they arrive.

**Booking with the price in front of you.** Pick a room, a date and an hour and the price appears at
once: evening and weekend rates differ, and the page says so instead of surprising anyone later.

**Three languages.** Polish, Ukrainian and English, with the switch keeping you on the room you were
looking at.`,

  zarya: `## The problem

A workshop bends neon signs by hand. The price depends on how much glass tube a word needs — which
the customer cannot guess and the workshop cannot quote without drawing it first.

## What I built

**A sign bent in front of you.** Type a word and it is drawn letter by letter in the workshop's own
hand-drawn alphabet, in the colour and mounting you pick.

**A price that follows the tube.** The length of glass is measured from the drawing itself, so the
number on screen is the number the workshop would quote.

**An enquiry that arrives ready.** It carries the word, the colour, the size and the calculated
length, so the workshop replies with a date instead of more questions.`,

  '30k30': `## The problem

A wishlist for a thirtieth birthday. Registry sites look like a shop and feel like an invoice — and
they cannot handle the gift that matters most: the expensive one several friends want to share.

## What I built

**A scrapbook, not a shop.** Thirty gifts laid out like a pinboard, with photographs and notes in
the margin. It reads like a person.

**Shared gifts.** Expensive items can be split: several people put in what they can and watch the
bar fill. Nobody sees who gave how much, only how far it got.

**Nothing bought twice.** Once a gift is taken it says so to everyone else immediately.`,
};
