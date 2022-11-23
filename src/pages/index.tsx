/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.mainContent}>
      <Head>
        <title>DanLimaX</title>
      </Head>
      <div className={styles.socialContent}>
        <div className={styles.profileContent}>
          <img
            src="danlimax.png"
            alt="danlimax logo"
            className={styles.imgLogo}
          />
          <h3 className={styles.titleSocial}>@danlimax</h3>
          <p className={styles.contactTitle}>
            Contato: <a href="mailto:">contatodanlimax@gmail.com</a>
          </p>
        </div>
        <div className={styles.socialButtons}>
          <a
            href="https://www.betbrx.com?faff=1420"
            className={styles.socialLinks}
            target="_blank"
            rel="noopener noreferrer"
          >
            BetBRX
          </a>
          <a
            href="https://twitch.tv/danlimax"
            className={styles.socialLinks}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitch
          </a>
          <a
            href="http://youtube.com/danlimax"
            className={styles.socialLinks}
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.instagram.com/danlimaax/"
            className={styles.socialLinks}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@danlimax"
            className={styles.socialLinks}
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>
          <a
            href="https://discord.gg/7SE3MuXCDB"
            className={styles.socialLinks}
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
          <a
            href="https://twitter.com/DanLimaaX"
            className={styles.socialLinks}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.kooapp.com/profile/danlimax"
            className={styles.socialLinks}
            target="_blank"
            rel="noopener noreferrer"
          >
            Koo
          </a>
        </div>
      </div>
    </div>
  );
}
