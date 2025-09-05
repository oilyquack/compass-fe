import Banner from "@/components/Banner";
import Section from "@/components/Section";

import styles from "./FaqsPage.module.css";

function Question({ children }: { children: React.ReactNode }) {
  return (
    <dt className={`${styles["FaqsPage-question"]} font-weight-bold`}>
      <div>{children}</div>
    </dt>
  );
}

function Answer({ children }: { children: React.ReactNode }) {
  return (
    <dd className={`${styles["FaqsPage-answer"]}`}>
      <div>{children}</div>
    </dd>
  );
}

export default function FaqsPage() {
  return (
    <Section>
      <h1 className={`${styles["FaqsPage-title"]} mg-btm-lg`}>FAQs</h1>

      <dl className={`font-family-lato ${styles.FaqsPage}`}>
        <Banner className="mg-btm-lg">
          <Question>What does my ticket give me?</Question>
          <Answer>
            Your One Day or Two-Day ticket is exchanged for a festival
            wristband, which gives you access to all shows in all venues for the
            day or days you choose. Access is subject to each venue’s capacity.
          </Answer>
        </Banner>

        <Banner className="mg-btm-lg">
          <Question>Where do I collect my wristband?</Question>
          <Answer>
            At our new Festival Hub, The Workshop (32-40 Tontine Street) in the
            heart of Folkestone’s Creative Quarter, right in the middle of our
            participating venues!
            <br />
            Open Fri 17 Oct (12pm–10pm) and Sat 18 Oct (10am–10pm).
          </Answer>
        </Banner>

        <Banner className="mg-btm-lg">
          <Question>What happens if a venue is full?</Question>
          <Answer>
            If a venue is full, it’s one in, one out. We recommend exploring
            another venue — all are a few minutes apart (5 on Friday, 6 on
            Saturday), and bands will be alternating sets so there will always
            be something for you to go and watch!
          </Answer>
        </Banner>

        <Banner className="mg-btm-lg">
          <Question>What ticket types are available?</Question>
          <Answer>
            We have very limited <b>Super Early Bird</b> (on sale for 3 days
            only), limited Early Bird until 17 Sept, Regular, and{" "}
            <b>Festival Support</b>/Pay It Forward if you can afford it, which
            allow us to release more concessions.
            <br />
            We also have discounted <b>Concessions</b> for: Students/U25s +
            People on No/Very Low Income.
          </Answer>
        </Banner>

        <Banner className="mg-btm-lg">
          <Question>Are there age restrictions?</Question>
          <Answer>
            U18s (14+) must be with an adult, and most venues will only allow
            them to stay until 9pm to comply with their license. We’d love to
            have younger audiences still, but it adds an extra layer we cannot
            sustain at our grassroots level.
            <br />
            Students and U25s can access discounted concessions tickets.
          </Answer>
        </Banner>

        <Banner className="mg-btm-lg">
          <Question>Why is everything ticketed this year?</Question>
          <Answer>
            Last year’s free afternoons with donations unfotunately didn’t cover
            costs, as we only receive minimal project local funding, which is
            also down 20% this year from last year!
            <br />
            To upheld our values, ie. pay artists and crew fairly, have good
            sound and keep tickets affordable, all shows needs to be ticketed,
            although our pricing is very competitive. Tickets still average less
            than £1 per band, with concessions available.
          </Answer>
        </Banner>

        <Banner className="mg-btm-lg">
          <Question>Will tickets be available on the door?</Question>
          <Answer>
            Possibly — but only if not sold out. Buying early helps us survive
            and reduces risk for grassroots festivals like ours.
            <br />
            Our experience and those of similar organisations such as the
            Association of Independent Promoters which we are a part of, shows
            that nearly half of ticket buyers wait until 48hr before a show to
            buy a ticket, which leads sadly to a lot of cancellations of events,
            as it makes planning impossible and the financial risk to high to
            carry for grassroots orgs!
          </Answer>
        </Banner>

        <Banner className="mg-btm-lg">
          <Question>How else can I support Compass?</Question>
          <Answer>
            Buy your ticket early if you intend to come, consider a Festival
            Support/Pay It Forward ticket if you can afford it, or share info
            about Compass with friends and family, and on social media !
            <br />
            Word of mouth and personal recommendations are still by far the very
            best marketing channel for events! And we’d rather give money to
            bands than to M*ta, quite frankly.
          </Answer>
        </Banner>
      </dl>
    </Section>
  );
}
