import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/dist/client/image";

const Dash = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/signin");
    },
  });
  const router = useRouter();
  const user = session?.user;

  function openTab(id, e) {
    // Declare all variables
    console.log(e.currentTarget.className);
    let i, tabContent, tabLinks;

    // Get all elements with class="tabcontent" and hide them
    tabContent = document.querySelectorAll(".tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }

    //Get all elements with class="tablinks" and remove the class "active"
    tabLinks = document.querySelectorAll(".tab-links");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.querySelector(`#${id}`).style.display = "block";
    e.currentTarget.className += " active";
  }

  return (
    <>
      <div id='dash'>
        <div id='dash-header'>
          <h1>Account</h1>
          <div>Your account settings.</div>
        </div>
        <div id='tabs-container'>
          <div className='tab'>
            <button
              className='tab-links active'
              onClick={(e) => openTab("profile", e)}>
              Profile
            </button>
            <button
              className='tab-links'
              onClick={(e) => openTab("notifications", e)}>
              Notifications
            </button>
            <button
              className='tab-links'
              onClick={(e) => openTab("listings", e)}>
              My Listings
            </button>
            <button
              className='tab-links'
              onClick={(e) => openTab("bids-and-wins", e)}>
              My Bids & Wins
            </button>
            <button
              className='tab-links'
              onClick={(e) => openTab("shipments", e)}>
              My Shipments
            </button>
          </div>
          <div className='content'>
            <div id='profile' className='tab-content'>
              {user && (
                <>
                  <h2>Info</h2>
                  <div className='info-container'>
                    <Image
                      src={user?.image}
                      width={100}
                      height={100}
                      alt='profile image'
                    />
                    <div className='info'>
                      <p>Name: {user?.name}</p>
                      <p>Email: {user?.email}</p>
                      <p>Password: **********</p>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div id='notifications' className='tab-content'>
              notifications
            </div>
            <div id='listings' className='tab-content'>
              listings
            </div>
            <div id='bids-and-wins' className='tab-content'>
              bids and wins
            </div>
            <div id='shipments' className='tab-content'>
              shipments
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        #dash {
          display: flex;
          flex-flow: column wrap;
          align-items: center;

          #dash-header {
            width: 53%;
            text-align: left;
            margin: 0 0 150px;
          }

          #tabs-container {
            width: 90%;
            display: flex;
            flex-flow: row nowrap;

            .tab {
              width: 20%;
              display: flex;
              flex-flow: column nowrap;
              align-items: flex-end;
              justify-content: space-between;
              padding: 0 10px 0;

              .tab-links {
                display: block;

                padding: 5px;
                color: rgb(0, 85, 72);
                border: none;
                background: inherit;
                cursor: pointer;
                border-bottom: 1px solid transparent;

                &:hover {
                  color: orange;
                  border-bottom: 1px solid #000;
                }
              }

              .active {
                font-weight: bold;
              }
            }

            .content {
              width: 75%;
              border: 1px solid #000;

              .tab-content {
                display: none;
                padding: 10px;
              }

              .tab-content:first-child {
                display: block;
              }

              #profile {
                h2 {
                  text-align: left;
                  border-bottom: 3px solid #000;
                  padding: 0 0 0 10px;
                }

                .info-container {
                  display: flex;
                  padding: 10px;

                  .info {
                    text-align: left;
                    padding-left: 10px;

                    p {
                      padding-bottom: 10px;
                    }
                  }
                }
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default Dash;
