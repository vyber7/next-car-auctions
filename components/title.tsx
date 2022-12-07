import { useRouter } from "next/router";

function Title() {
  const router = useRouter();
  let path = router.pathname.match(/[a-z\-]+/g)?.toString();

  path = path == null ? "home" : path[0];

  let title =
    path == "home"
      ? "Welcome Home"
      : path == "about"
      ? "About Us"
      : path == "contact"
      ? "Get in Touch"
      : path == "auth"
      ? "Car Auctions"
      : path == "register"
      ? "Car Auctions"
      : path == "account"
      ? "Account"
      : path == "reset"
      ? "Password Reset"
      : "";

  let subtitle =
    path == "home"
      ? "A friendly place to sell or buy a car!"
      : path == "about"
      ? "A few words about who we are."
      : path == "contact"
      ? "Feel free to drop us a line whenever you have any questions or concerns."
      : path == "auth"
      ? "Please sign in to your account."
      : path == "register"
      ? "Please register your account with us."
      : path == "account"
      ? "Your account settings"
      : path == "reset"
      ? "Password nowhere to be found? No worries, we are here to help."
      : "";

  return (
    <>
      <div id='page-title'>
        <h1>{title}</h1>
        <div>{subtitle}</div>
      </div>
      <style jsx>{`
        #page-title {
          text-align: left;
          /*background: #cccc26;*/
          width: 100%;

          @media (max-width: 500px) {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default Title;
