"use client";
import { useState, useEffect } from 'react';
import {Quicksand} from 'next/font/google';
import "./page.module.css";
import styles from "./page.module.css";
import HomeComponent from "@/components/Home/HomeComponent";
import Spinner from '@/components/Spinner/Spinner';

  const font = Quicksand({ subsets: ['latin'] });

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula un retardo en la carga para mostrar el spinner
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Aquí puedes ajustar el tiempo de espera

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={styles.main}>
      {loading ? <Spinner/> :   <HomeComponent/>}
  
    </main>
  );
}


