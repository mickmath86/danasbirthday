import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>It's Dana's Birthday!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
     
      
        <div>
          <h1>Its Danas Birthday!!!</h1>
        </div>
        <h3>MA WAFE! -  on this special day I want to remind you how much you mean to me. You are my rock, my best friend, and the love of my life. I am so grateful to be spending another year of your life with you, and I am beyond excited to start this new chapter as parents to our son. I love you with all my heart and I cant wait to see all the amazing things we will accomplish together. Happy birthday my love, Im looking forward to many more to come.</h3>
        

        <div className={styles.grid}>
        <Script type="text/javascript" src="https://MyCrosswordMaker.com/embedjs?puzzle_id=1144657" />
          <a
            href="https://mycrosswordmaker.com/1144662"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              A puzzle for mlady <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
             Do this one first
            </p>
          </a>

          <a
            href="https://vimeo.com/789956993"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Someone wants to say happy birthday ?? <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
Who could it be            </p>
          </a>

      

          
        </div>
        <div>
        
        </div>
      </main>
    </>
  )
}
