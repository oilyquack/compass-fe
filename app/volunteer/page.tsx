import Banner from "@/components/Banner";
import Button from "@/components/Button";
import Section from "@/components/Section";

import styles from "./Volunteer.module.css";

export default function VolunteerPage() {
  return (
    <Section>
      <div className={`${styles.Volunteer} font-family-lato`}>
        <Banner className="mg-btm-lg">
          <h1 className="mg-btm-md">Volunteer at Compass Festival 2025</h1>
          <p className="mg-btm-sm">
            Compass Festival is not-for-profit and volunteer-run, and it
            couldn’t happen without its event volunteers! From welcoming
            audiences to supporting artists and keeping venues running smoothly,
            volunteers are the heart of the festival.
          </p>
          <p className="mg-btm-sm">
            We’re looking for confident, reliable, and friendly people to join
            our team for the second edition of Compass Festival taking place on{" "}
            <strong>Friday 17 & Saturday 18 October 2025</strong>. Whether
            you’re a student, an aspiring events professional, a musician, or
            simply a passionate music fan, volunteering is a brilliant way to
            get involved, meet new people, and support Folkestone’s grassroots
            music scene.
          </p>
        </Banner>

        <Banner className="mg-btm-lg">
          <h2 className="mg-btm-md">What you’ll get in return</h2>

          <ul className={styles["Volunteer-list"]}>
            <li className="mg-btm-xs">
              A free weekend wristband to enjoy the festival in your downtime
              outside of your volunteer shift(s).
            </li>
            <li className="mg-btm-xs">
              Behind-the-scenes experience of an independent, DIY festival to
              put on your CV.
            </li>
            <li className="mg-btm-xs">
              A chance to connect with artists, audiences, and like-minded music
              lovers.
            </li>
            <li className="mg-btm-xs">
              The satisfaction of helping create something truly special in your
              town.
            </li>
          </ul>
        </Banner>

        <Banner className="mg-btm-lg">
          <h2 className="mg-btm-md">Roles available include</h2>
          <ul className={styles["Volunteer-list"]}>
            <li className="mg-btm-xs">
              <strong>Venue Stewards (our biggest need):</strong> greeting
              audiences, checking wristbands, selling tickets on the door,
              supporting artists, keeping venues safe and welcoming.
            </li>
            <li className="mg-btm-xs">
              <strong>Street Marshals:</strong> helping audiences find their way
              between venues, giving out programmes.
            </li>
            <li className="mg-btm-xs">
              <strong>Social Media Content Creators:</strong> capturing and
              sharing the buzz of the weekend.
            </li>
            <li className="mg-btm-xs">
              <strong>Photographers & Videographers:</strong> documenting
              performances and festival moments (great portfolio opportunity for
              newcomers, and a way to help the festival grow for experienced
              ones!).
            </li>
            <li className="mg-btm-xs">
              <strong>Flyering & Promo Helpers:</strong> spreading the word
              locally in the run-up.
            </li>
          </ul>
          <p className="mg-btm-sm">
            Full role descriptions can be found{" "}
            <a href="https://docs.google.com/document/d/1CI4_9w5AvUB6LhCKHlLC-pg1JOQmxHB3DDD1MPyJ_bM/edit?usp=sharing">
              here
            </a>
            .
          </p>
        </Banner>

        <Banner className="mg-btm-lg">
          <h2 className="mg-btm-md">Essentials</h2>
          <ul className={styles["Volunteer-list"]}>
            <li className="mg-btm-xs">
              Volunteers must be 18+ (on or before 17 October 2025).
            </li>
            <li className="mg-btm-xs">
              Shifts last around 4-5 hours. The minimum commitment is one shift,
              but more is always welcome!
            </li>
            <li className="mg-btm-xs">
              We ask for reliability, positivity, and a willingness to muck in
              with the DIY spirit.
            </li>
          </ul>
        </Banner>

        <Banner className="mg-btm-lg">
          <h2 className="mg-btm-md">Ready to Join?</h2>

          <p className="mg-btm-sm">
            We’re hoping to recruit 25–30 volunteers this year to support our
            growing festival. If that sounds like you, register via the button
            below.
          </p>
        </Banner>

        <div className={styles["Volunteer-apply"]}>
          <div className="mg-btm-sm">
            <Button
              destination="outbound"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdckLMRkb3kXtSe2xH_LpOCSZE-Nm64eyF0Mxcrp3FnubmOWA/viewform?usp=sharing&ouid=117064886491309671158"
            >
              Apply to Volunteer
            </Button>
          </div>

          <p className="mg-btm-sm">
            Got questions? Drop us a line at{" "}
            <a href="mailto:info@compass-music.com">info@compass-music.com</a>.
          </p>
        </div>
      </div>
    </Section>
  );
}
