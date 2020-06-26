import Head from 'next/head' 

export default function Home() {
  return (
    <>
      <Head>
        <title>Neverendx - Arthur Borges's never ending portfolio</title>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <section className="brand">
          <img src="/images/neverendx-logo-resized.svg" alt="Neverendx Logo" className="logo" />
          <h1>A journey that never ends</h1>
        </section>
        <section className="content">
          <div className="profile">
            <div className="photo-container">
              <img src="/images/avatar.jpeg" alt="Arthur Borges's profile photo" className="photo" />
            </div> 
            <div className="social">
              <div className="icons-container">
              
              </div>
            </div>  
          </div>
          <article className="about">
            <p>
              Hello!! My name is Arthur Borges and this is my portfolio that never ends.
              Here every page is a React Component like this one, developed using Next.js
              and served by Vercel's platform. Click on the arrow on the right to navigate 
              through pages. Enjoy! 
            </p>
          </article>
        </section>
      </main>
    </>
  );
}