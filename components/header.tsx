import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import styles from "/styles/header.module.scss";

function Header(): JSX.Element {
  const { data: session } = useSession();
  const user = session?.user;
  const userName = session?.user.name || "";
  const userImg =
    session?.user.image ||
    "/images/default-profile-picture-avatar-png-green.png";

  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        {/*<Image src='/images/logo.jpg' alt='Logo' width={70} height={50} />*/}
        <nav id={styles.hamburger_nav}>
          <label htmlFor={styles.hamburger}>&#9776;</label>
          <input type='checkbox' id={styles.hamburger} />

          <div className={styles.nav_items}>
            <Link href='/submit-vehicle'>Submit a vehicle</Link>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
            {!user && <Link href='/auth/signin'>Sign in</Link>}
          </div>

          {user && (
            <Link href='/account/profile' legacyBehavior passHref>
              <a className={styles.popup}>
                <Image
                  className='profile-image'
                  src={userImg}
                  width={35}
                  height={35}
                  alt='profile image'
                  style={{ borderRadius: "50%" }}
                />
                <div className={styles.popup_content}>
                  <Link href='/account/profile'>Profile</Link>
                  <Link href='/account/notifications'>Notifications</Link>
                  <Link href='/account/listings'>My Listings</Link>
                  <Link href='/account/bids-and-wins'>My Bids & Wins</Link>
                  <Link href='/account/shipments'>My Shipments</Link>
                  <button onClick={() => signOut()}>Sign Out</button>
                </div>
              </a>
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Header;
