"use client";

import { useEffect } from "react";

import Section from "@/components/Section";

export default function TicketsPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://www.skiddle.com/infofeed/ticketpage.php?ilid=41322750&theme=%7B%22variant%22%3A%22light%22%2C%22primary%22%3A%7B%22main%22%3A%22%233a6ddf%22%7D%2C%22secondary%22%3A%7B%22light%22%3A%22%23ffc106%22%2C%22main%22%3A%22%23f5a622%22%2C%22dark%22%3A%22%23cd8723%22%2C%22contrastText%22%3A%22%23fff%22%7D%2C%22info%22%3A%22%23318200%22%2C%22white%22%3A%7B%22main%22%3A%22%23fff%22%7D%7D;type=embedded";
    document.getElementById("ticketbox_ph_41322750")?.appendChild(script);
  }, []);

  return (
    <Section>
      <p className="font-family-lato font-size-md mg-btm-lg">
        Join us 17–18 October 2025 for a weekend of unmissable new music, live
        across eight quirky independent venues in Folkestone’s Creative Quarter.
        Affordable day and two-day passes available, with{" "}
        <b>
          concessions for under-25s, students, and low-income attendees.
          Festival Support/Pay-it-forward tickets support the festival and wider
          C.I.C
        </b>
        , and allow us to add more low income tickets for our local community so
        that no one is excluded from live music. Affordable, accessible, and
        transparent: one wristband gives you access to all venues (subject to
        capacity) on your chosen day (Friday or Saturday), or get a 2-days pass
        for access on both days with a 30% discount compared to day prices!
      </p>
      <p className="font-family-lato font-size-md mg-btm-lg">Ticket options</p>
      <ul
        className="font-family-lato font-size-md mg-btm-lg"
        style={{ margin: "1em 0" }}
      >
        <li>
          <b>Low Income (limited availability):</b> Friday £5 / Saturday £10 /
          Weekend £11.90
        </li>
        <li>
          <b>Student / Under 25 (limited availability):</b> Friday £10 /
          Saturday £15 / Weekend £17.50
        </li>
        <li>
          <b>Super Early Bird (until 5th Sept only):</b> Friday £12 / Saturday
          £17 / Weekend £20.30
        </li>
        <li>
          <b>Early Bird (until 17th Sept):</b> Friday £15 / Saturday £20 /
          Weekend £24.50
        </li>
        <li>
          <b>Standard:</b> Friday £18 / Saturday £23 / Weekend £28.70
        </li>
        <li>
          <b>On The Door (if not sold out!):</b> Friday £20 / Saturday £25 /
          Weekend £33
        </li>
        <li>
          <b>Festival Supporter/Pay-It-Forward:</b> Friday £20 / Saturday £25 /
          Weekend £33 (allowing us to add an extra low income ticket in our
          allocation for the community)
        </li>
      </ul>
      <p className="font-family-lato font-size-md mg-btm-lg">
        All prices are excluding of booking fees charged by ticketing platforms.
      </p>
      <div
        id="ticketbox_ph_41322750"
        dangerouslySetInnerHTML={{
          __html: `
            <p className="font-family-lato font-size-md mg-btm-lg">To buy tickets for this event please visit our events page: 
              <a href="https://www.skiddle.com/whats-on/Canterbury/The-Workshop/Compass-Music-Festival-25/41322750/">
                <strong>Compass Music Festival '25 tickets from Skiddle</strong>
              </a>.
            </p>
          `,
        }}
      />
      <p style={{ marginTop: 0, fontSize: "8pt", lineHeight: "13px" }}>
        <a href="https://www.skiddle.com/" style={{ color: "#666" }}>
          Ticket sales powered by Skiddle
        </a>
      </p>
    </Section>
  );
}
