import cx from "classnames";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";

import { Navbar } from "@/shared/ui";

import backgroundGradientBottom from "../../public/background-gradient-bottom.png";
import backgroundGradientTop from "../../public/background-gradient-top.png";
import "../global/globals.scss";
import styles from "./styles.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Главная",
   description: "General",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
   <html lang="ru">
      <body className={cx(inter.className, styles.body)}>
         <Navbar />
         <main>
            {children}
            <Image
               className={styles.backgroundTopGradient}
               src={backgroundGradientTop}
               alt="background-gradient"
            />
            <Image
               className={styles.backgroundBottomGradient}
               src={backgroundGradientBottom}
               alt="background-gradient"
            />
         </main>
      </body>
   </html>
);

export default RootLayout;