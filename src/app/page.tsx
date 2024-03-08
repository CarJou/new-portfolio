import {Quicksand} from 'next/font/google';
import "./page.module.css";
import styles from "./page.module.css";
import HomeComponent from "@/components/Home/HomeComponent";

  const font = Quicksand({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
    <HomeComponent/>
    </main>
  );
}


