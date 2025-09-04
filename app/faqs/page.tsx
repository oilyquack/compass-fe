import Section from "@/components/Section";

import styles from "./FaqsPage.module.css";

export default function FaqsPage() {
  return (
    <Section>
      <h1 className="mg-btm-lg">FAQs</h1>

      <dl className={`font-family-lato ${styles.FaqsPage}`}>
        <dt>Q: What does my ticket give me?</dt>
        <dd>
          <b>A: </b>Your One Day or Two-Day ticket is exchanged for a festival
          wristband, which gives you access to all shows in all venues for the
          day or days you choose. Access is subject to each venue’s capacity.
        </dd>

        <dt>Q: Where do I collect my wristband?</dt>
        <dd>
          <b>A: </b>Open Fri 17 Oct (12pm–10pm) and Sat 18 Oct (10am–10pm).
        </dd>

        <dt>Q: What happens if a venue is full?</dt>
        <dd>
          <b>A: </b>If a venue is full, it’s one in, one out. We recommend
          exploring another venue — all are a few minutes apart (5 on Friday, 6
          on Saturday), and bands will be alternating sets so there will always
          be something for you to go and watch!
        </dd>

        <dt>Q: What ticket types are available?</dt>
        <dd>
          <b>A: </b>We also have discounted Concessions for: Students/U25s +
          People on No/Very Low Income.
        </dd>

        <dt>Q: Are there age restrictions?</dt>
        <dd>
          <b>A: </b>Students and U25s can access discounted concessions tickets.
        </dd>

        <dt>Q: Why is everything ticketed this year?</dt>
        <dd>
          <b>A: </b>To uphold our values, i.e. pay artists and crew fairly, have
          good sound and keep tickets affordable, all shows need to be ticketed,
          although our pricing is very competitive. Tickets still average less
          than £1 per band, with concessions available.
        </dd>

        <dt>Q: Will tickets be available on the door?</dt>
        <dd>
          <b>A: </b>Our experience and those of similar organisations such as
          the Association of Independent Promoters which we are a part of, shows
          that nearly half of ticket buyers wait until 48hr before a show to buy
          a ticket, which sadly leads to a lot of cancellations of events, as it
          makes planning impossible and the financial risk too high to carry for
          grassroots orgs!
        </dd>

        <dt>Q: How else can I support Compass?</dt>
        <dd>
          <b>A: </b>Word of mouth and personal recommendations are still by far
          the very best marketing channel for events! And we’d rather give money
          to bands than to M*ta, quite frankly.
        </dd>
      </dl>
    </Section>
  );
}
