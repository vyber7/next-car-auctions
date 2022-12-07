import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "/styles/footer.module.scss";

function Footer(props) {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <h3>Sign up for our weekly newsletter!</h3>
          <label htmlFor={styles.sign_up_email}></label>
          <input
            id={styles.sign_up_email}
            name='email'
            type='email'
            placeholder='Email'
            required
          />
          <button id={styles.sign_up_btn} type='submit'>
            Sign up
          </button>
        </div>
        <div className={styles.middle}>
          <div className={styles.footer_nav_bar}>
            <Link href='/' className={styles.link}>
              Home
            </Link>
            <Link href='/about' className={styles.link}>
              About
            </Link>
            <Link href='/faq' className={styles.link}>
              FAQ
            </Link>
            <Link href='/contact' className={styles.link}>
              Contact
            </Link>
          </div>
          <div className={styles.social_links_footer}>
            <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
            <a href='https://www.twitter.com' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <a
              href='https://www.instagram.com'
              target='_blank'
              rel='noreferrer'>
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a href='https://www.youtube.com' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={["fab", "youtube"]} />
            </a>
          </div>
        </div>
        <div className={styles.bottom}>
          <pre>
            <FontAwesomeIcon icon='copyright' /> Copyright 2021. All rights
            reserved.
          </pre>
          <pre>
            <Link href='/terms'>Terms</Link>|
            <Link href='/privacy'>Privacy</Link>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Footer;
