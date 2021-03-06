import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container} >
      <Head>
        <title>Ashik-next.js</title>
        
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<h2 style={{fontSize: "2rem"}}>
  <svg width="221" height="65" viewBox="0 0 221 65" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M76.333 20.5005H82.8185L96.5631 42.4764V20.5005H102.55V51.6393H96.1087L82.3198 29.7091V51.6393H76.333V20.5005Z" fill="currentColor">
  </path>
  <path d="M129.311 51.6393H123.732V48.1611C122.462 50.6089 119.877 51.9871 116.612 51.9871C111.441 51.9871 108.083 48.3393 108.083 43.0894V29.2178H113.662V41.9416C113.662 45.0111 115.568 47.1459 118.425 47.1459C121.555 47.1459 123.732 44.7437 123.732 41.4524V29.2178H129.311V51.6393Z" fill="currentColor">
  </path>
<path d="M148.724 51.2848L143.372 43.811L138.019 51.2848H132.076L140.333 39.5849L132.712 28.8633H138.79L143.372 35.3154L147.906 28.8633H154.031L146.364 39.5849L154.62 51.2848H148.724Z" fill="currentColor"></path>

  </svg>
</h2>

<div>
  <div>
    <h3><svg className="w-6 h-6 text-cloud-dark dark:text-cloud-light" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>Documentation</h3>
    <p>We highly recommend you take a look at the Nuxt
       documentation, whether you are new
       or have previous experience with the framework.</p>
  <a src="https://v3.nuxtjs.org/" target="_blank">Documentation</a>
  </div>
<div>

  <h3><svg className="w-6 h-6 text-cloud-dark dark:text-cloud-light" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h3>
<p>Follow the Nuxt Twitter account to get latest
   news about releases, new modules, tutorials and tips.</p>
   <a src="https://twitter.com/nuxt_js" target="_blank">@nuxt_js</a>
</div>
</div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
