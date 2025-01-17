import CustomContainer from "@/components/ui/custom_container/custom_container";
import React, { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import styles from "./header.module.scss";
// import PAGES from "@/constants/pages";
import Link from "next/link";
import { useRouter } from "next/router";
import HeaderDrawer from "./header_drawer/header_drawer";
import { Grid, List } from "react-bootstrap-icons";
import CustomButton from "@/components/ui/custom_button/custom_button";

const Header = () => {
  const router = useRouter();

  const isHome = router.pathname === "/";

  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 0);
    });
  }, []);

  const PAGES = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Who We Are",
      href: "/about",
    },
    {
      title: "What We Do",
      href: "/services",
    },
   
    
    {
      title: "Get In Touch",
      href: "/contact",
    },
  ];

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
        isHome ? styles.isHome : ""
      }`}
    >
      <HeaderDrawer
        setShow={setShow}
        show={show}
        router={router}
        PAGES={PAGES}
      />
      <CustomContainer>
        <div className={styles.wrap}>
          <div className={styles.logo}>
            <Image src="/logo/logo_main.png" alt="logo" width={200}/>
          </div>
          <nav>
            <ul>
              {PAGES.map((page) => {
                return (
                  <li
                    key={page.title}
                    className={
                      router.pathname === page.href ? styles.active : ""
                    }
                  >
                    <Link href={page.href}>{page.title}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className={styles.cta}>
            <CustomButton>Join with us</CustomButton>
          </div>

          <div
            className={styles.menu}
            onClick={() => {
              setShow(true);
            }}
          >
            <Grid />
          </div>
        </div>
      </CustomContainer>
    </header>
  );
};

export default Header;
