import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          padding: 0,
        }}
      >
        <Link href={'/'} passHref>
          <a>Home</a>
        </Link>
        <Link href={'/subscribe'} passHref>
          <a>Subscribe</a>
        </Link>
        <Link href={'/about'} passHref>
          <a>About</a>
        </Link>
      </ul>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
