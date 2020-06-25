import Head from 'next/head' 

export default function Home() {
  return (
    <>
      <Head>
        <title>Neverendx - Arthur Borges's never ending portfolio</title>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet" />
      </Head>
      <div className="col-4">

      </div>
      <div className="brand col-4">
        <img src="/images/neverendx-logo-resized.svg" alt="Neverendx Logo" className="logo" />
        <h1>A journey that never ends</h1>
      </div>
      <div className="col-4">

      </div>
    </>
  );
}