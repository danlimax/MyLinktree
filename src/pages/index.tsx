/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import {
  BsDiscord,
  BsGithub,
  BsInstagram,
  BsTiktok,
  BsTwitch,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

export default function Home() {
  return (
    <div className={styles.mainContent}>
      <Head>
        <title>DanLimaX | Linktree</title>
      </Head>
      <div className={styles.socialContent}>
        <div className={styles.profileContent}>
          <img
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/884cd9e0-087b-4537-8e5e-ce5a35af2cb8-profile_image-70x70.png"
            alt="twitch avatar"
            className={styles.imgLogo}
          />
          <h3 className={styles.titleSocial}>@danlimax</h3>
          <p className={styles.contactTitle}>
            Contato:{" "}
            <a href="mailto:contatodanlimax@gmail.com">
              contatodanlimax@gmail.com
            </a>
          </p>
        </div>
        <div className={styles.socialButtons}>
          <a
            href="https://github.com/danlimax"
            className={styles.socialLinks}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub /> GitHub
          </a>
          <a
            href="https://twitch.tv/danlimax"
            className={styles.socialLinks}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitch /> Twitch
          </a>
          <a
            href="http://youtube.com/danlimax"
            className={styles.socialLinks}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsYoutube /> Youtube
          </a>
          <a
            href="https://www.instagram.com/danlimaax/"
            className={styles.socialLinks}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram /> Instagram
          </a>
          <a
            href="https://www.tiktok.com/@danlimax"
            className={styles.socialLinks}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTiktok /> TikTok
          </a>
          <a
            href="https://discord.gg/7SE3MuXCDB"
            className={styles.socialLinks}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsDiscord />
            Discord
          </a>
          <a
            href="https://twitter.com/DanLimaaX"
            className={styles.socialLinks}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitter />
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
