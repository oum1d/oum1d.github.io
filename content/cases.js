// Тексты кейсов на английском. Один файл, чтобы править их рядом друг с другом
// и держать одинаковый тон. Разметка — обычный markdown.
export const CASES = {
  widnia: `## The problem

Since July 2025 property developers in Poland must publish the price of every flat, keep the full
history of every price change, and hand that list to the state as open data every day. The fine
reaches 10% of turnover.

A brochure site does not cover that. The company needs a living catalogue that its own staff run —
changing prices, marking flats as reserved, answering enquiries — plus a guarantee that the price
history cannot be quietly edited afterwards.

## What I built

**A catalogue that sells without a phone call.** Every flat shows its price, its price per square
metre, a floor plan with the area of each room, and its price history as a chart. Filters work even
with JavaScript switched off — the choice lives in the address, so a link can be sent to a friend.

**A price history that cannot be rewritten.** Every change is stored with a date and an author, and
the database itself refuses to edit or delete those rows. Not a promise — a technical impossibility.

**A panel for staff.** The owner changes prices; a manager may only change statuses and handle
enquiries. Permissions are checked on the server at every action, not by hiding buttons. Every
change goes into a log that managers see only their own part of.

**A panel you can try without a password.** A separate sandbox lets any visitor change prices and
switch between roles to see how the log works. The rules in the sandbox are the same files as on the
server, so the demo cannot drift from the real thing.

**A buyer's account.** Sign in with Google, see your own enquiries and their status, and have your
details filled into forms for you. Staff who are already signed in reach the panel in one click, but
the two sessions stay separate — a stolen visitor session does not open the panel.

## Result

160 automated tests and 19 full browser scenarios. On the published site: accessibility 100, best
practices 100, SEO 100, speed 94.`,

  roy: `## The problem

School science explains a phenomenon with a picture and a paragraph. A picture cannot answer the one
question a curious child actually has: *what happens if I change this?*

## What I built

**Twenty-four lessons where the phenomenon runs.** A swarm, a wave, a growing crystal, a spreading
fire — each one is a live simulation, not an animation on a loop. Move a slider and the behaviour
changes in front of you.

**Explanations that follow what you did.** The text under each simulation reacts to the values you
chose, so the lesson describes your experiment rather than a generic one.

**A page for teachers.** What each lesson covers, how long it takes and what to ask the class
afterwards — so it can be used in a real classroom, not only at home.

**Thirty-two pages, one system.** The lessons share one set of controls, one visual language and one
way of explaining, so the twentieth lesson feels familiar after the first.

## How it was made

Everything runs in the browser, with no libraries and no account. The simulations follow time rather
than frame rate, so a weak phone shows the same result as a laptop — only less smoothly.`,

  takt: `## The problem

A tram dispatcher watches a line all day. When one tram runs late, the gap ahead of it grows and the
one behind catches up: a small delay becomes a bunched line within half an hour. Most demo
dashboards show a frozen picture and hide exactly this.

## What I built

**A map where trams move because time moves.** Every vehicle has a position calculated from the
timetable and its current delay, so the picture at 09:14 is genuinely different from the picture at
09:12. Speed the clock up and you watch a delay spread down the line.

**A screen for each person who uses it.** The dispatcher sees the whole line; the depot sees which
vehicles are out; the driver gets a single phone-sized screen with the next stop and the current gap.

**Incidents, not just numbers.** Block a stretch of track and the trams behind it behave
accordingly — then watch the line recover once it is cleared.

**A landing page that sells it.** The system sits behind a page aimed at a transport operator: what
it solves, what it costs, how a pilot would run.

## Three languages

Polish, Ukrainian and English, with the switch keeping you on the same screen rather than sending
you back to the home page.`,

  zatvor: `## The problem

A shop selling second-hand film cameras cannot use an ordinary product catalogue. There is exactly
one of each item, every one is in a different condition, and once it is gone it is gone — but the
page still has to work, because people search for that model for years.

## What I built

**A page per camera, not per model.** Its own photographs, its own condition report, its own repair
history: what was replaced, what was cleaned, what still shows its age.

**Honest condition.** A scale from "as new" to "working, with marks", explained in words rather than
stars, with close-ups of the marks themselves.

**A comparison that helps you decide.** Put two or three cameras side by side and see format, weight,
lens mount, what is included and what needs servicing.

**Sold means sold.** When a camera goes, its page stays and says so — and offers the closest
alternatives in stock. Nothing is silently deleted.

**A cart that understands single items.** Add a camera and it is held for you. There is no quantity
field, because there is no quantity.`,

  'midnight-zone': `## The problem

An exhibition about the deep sea has to convey something a photograph cannot: that going down is
slow, dark and heavy. A page with a gallery and a paragraph says none of that.

## What I built

**The page behaves like the thing it describes.** You scroll and you descend. The light drains, the
colours narrow, the pressure figure climbs and the creatures change with the depth — the surface,
200 metres, 1000 metres, the trench floor at 11 000.

**Real depth markers.** Each zone states its depth, its temperature, its pressure and what actually
lives there, so the drama never replaces the facts.

**Tickets where you expect them.** Visit information, prices and opening hours sit at the bottom of
the descent and are one tap away from anywhere.

**It works without the effects.** With reduced motion switched on, the same content reads as a calm,
ordinary page — nobody is locked out of the exhibition because animation makes them ill.`,

  gul: `## The problem

Four rehearsal rooms in the basement of an old factory. Bands book by phone, so the question "is
Thursday evening free?" costs somebody a call — and the answer is only as good as the notebook it is
written in.

## What I built

**Rooms you can actually see.** Real photographs of each room, its size, its gear and what you need
to bring, so a band knows whether the drum kit is included before they arrive.

**Booking with the price in front of you.** Pick a room, a date and an hour and the price appears
immediately: evening and weekend rates differ, and the page says so instead of surprising you later.

**Three languages.** Polish, Ukrainian and English — Wrocław has bands from all three — and the
switch keeps you on the room you were looking at.

## Photography

The rooms are shown with seventeen real photographs from open archives, each credited with its
licence. No stock-photo musicians pretending to be a band.`,

  zarya: `## The problem

A workshop bends neon signs by hand. The price depends on how much glass tube a word needs — which
the customer cannot guess and the workshop cannot quote without drawing it first.

## What I built

**A sign that is bent in front of you.** Type a word and it is drawn letter by letter in the
workshop's own hand-drawn alphabet, in the colour and mounting you pick.

**A price that follows the tube.** The length of glass is measured from the drawing itself, so the
number on screen is the number the workshop would quote: a short word in one colour costs less than
a long one, exactly as it does in the shop.

**An alphabet drawn, not typed.** Every letter is a real bending path with its own curve, because a
neon letter is one continuous tube, not a font outline.

**The order goes out with the drawing.** The enquiry carries the word, the colour, the size and the
calculated length, so the workshop replies with a date rather than more questions.`,

  '30k30': `## The problem

A wishlist for a thirtieth birthday. The usual registry sites look like a shop and feel like an
invoice — and they cannot handle the one gift that actually matters: the expensive one that several
friends want to share.

## What I built

**A scrapbook, not a shop.** Thirty gifts laid out like a pinboard: photographs, notes in the margin,
tape, different sizes. It reads like a person, not a checkout.

**Shared gifts.** Expensive items can be split: several people put in what they can and watch the bar
fill. Nobody sees who gave how much — only how far it got.

**Nothing bought twice.** Once a gift is taken it says so to everyone else immediately.

**An anti-wishlist.** A short, funny list of what not to buy — the thing that makes people read the
page all the way to the end.`,
};
