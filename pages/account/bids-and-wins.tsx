import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Tabs from "../../components/account/tabs";
import Title from "../../components/title";
import Head from "next/head";
/*
import styled from "styled-components";

const StyledTitle = styled.h1`
  text-align: left;
  border-bottom: 3px solid #000;
  padding: 0 0 0 10px;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  padding: 10px;
`;

const StyledInfo = styled.div`
  text-align: left;
  padding-left: 10px;

  & p {
    padding-bottom: 10px;
  }
`;
*/
function BidsAndWins() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/");
    },
  });
  const router = useRouter();
  const user = session?.user;

  let id = router.pathname.match(/[a-z\-]+$/g)[0];
  console.log(id);
  /*
  if (user) {
    return (
      <>
        <StyledTitle>Profile</StyledTitle>
        <StyledInfoContainer>
          <Image
            src={user?.image}
            width={100}
            height={100}
            alt='profile image'
          />
          <StyledInfo>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
            <p>Password: **********</p>
          </StyledInfo>
        </StyledInfoContainer>
      </>
    );
  }
  */
  return (
    <>
      <div id={id}>
        <Head>
          <title>Bids and Wins</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main className='main'>
          <Title />
          <div className='wrapper'>
            <h2>Bids and Wins</h2>
            <div id='tabs-container'>
              <Tabs />
              <div className='tab-content'></div>
            </div>
          </div>
        </main>
      </div>
      <style jsx>{`
        #bids-and-wins {
          display: flex;
          flex-flow: column wrap;
          align-items: center;

          .main {
            /*background: #aaaa1e;*/
            min-height: 60vh;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            width: 80%;

            .wrapper {
              width: 100%;

              h2 {
                text-align: center;
                border-bottom: 3px solid #000;
                padding: 10px 0;
                margin: 0 0 20px;
              }

              #tabs-container {
                display: flex;
                flex-flow: row nowrap;

                .tab-content {
                  padding: 0 1em 0;
                }
              }
            }
          }
        }
      `}</style>
    </>
  );
}

export default BidsAndWins;
