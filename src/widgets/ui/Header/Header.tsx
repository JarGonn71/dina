import { useEffect, useState } from "react";
import Link from "next/link";
import classNames from "classnames";

import styles from "./Header.module.css";

export const Header = () => {
  const [stickyHeader, setStickyHeader] = useState<boolean>(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setStickyHeader(position > 100);
  };

  useEffect(() => {
    if(window) {
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <header className={classNames(styles.Header, stickyHeader && styles.StickyHeader)}>
      <div className="flex justify-between items-center px-4 py-3 w-[1200px]">
        <div>Logo</div>
        <div className="flex space-x-3.5">
          <Link href={"/"}>
            Правовая помощь
          </Link>
          <Link href={"/"}>
            Наши преймущества
          </Link>
          <Link href={"/"}>
            Контакты
          </Link>
          <Link href={"/"}>
            Масс-Медиа
          </Link>
          <Link className="" href="tel:+7 (999) 999-99-99">
            +7 (999) 999-99-99
          </Link>
        </div>
      </div>
    </header>
  );
};