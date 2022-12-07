import Mylink from "./../my-link";

function Tabs() {
  let className = "tab-links";

  return (
    <>
      <div className='tabs'>
        <Mylink href='/account/profile'>
          <a className={className}>Profile</a>
        </Mylink>
        <Mylink href='/account/notifications'>
          <a className={className}>Notifications</a>
        </Mylink>
        <Mylink href='/account/listings'>
          <a className={className}>My Listings</a>
        </Mylink>
        <Mylink href='/account/bids-and-wins'>
          <a className={className}>My Bids & Wins</a>
        </Mylink>
        <Mylink href='/account/shipments'>
          <a className={className}>My Shipments</a>
        </Mylink>
      </div>
      <style jsx>{`
        .tabs {
          min-width: 145px;
          height: 300px;
          display: flex;
          flex-flow: column nowrap;
          align-items: flex-end;
          justify-content: flex-start;
          padding: 0 1em 0;

          .tab-links {
            display: block;
            padding: 15px 0 5px;
            color: rgb(0, 85, 72);
            border-bottom: 1px solid transparent;
            background: inherit;
            cursor: pointer;

            &:first-child {
              padding: 0 0 5px;
            }

            &:hover {
              color: #ff9900;
              border-bottom: 1px solid #000;
            }
          }

          .active {
            font-weight: bold;
          }
        }
      `}</style>
    </>
  );
}

export default Tabs;
