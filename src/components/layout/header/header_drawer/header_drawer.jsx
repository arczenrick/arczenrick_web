import React from "react";
import { Offcanvas } from "react-bootstrap";
import styles from "./header_drawer.module.scss";
import Link from "next/link";
import CustomButton from "@/components/ui/custom_button/custom_button";

const HeaderDrawer = ({ show, setShow, router, PAGES }) => {
  return (
    <Offcanvas
      show={show}
      placement="start"
      className={styles.c}
      onHide={() => {
        setShow(false);
      }}
    >
      <Offcanvas.Header
        className={styles.head}
        closeButton
        onHide={() => {
          setShow(false);
        }}
      >
        <div></div>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className={styles.body}>
          <h1>LOGO</h1>
          <nav>
            {PAGES.map((page) => {
              return (
                <Link
                  href={page.href}
                  key={page.title}
                  onClick={() => {
                    setShow(false);
                  }}
                  className={`/${router?.pathname?.split('/')[1]}` === page.href ? styles.active : ""}
                >
                  {page.title}
                </Link>
              );
            })}
          </nav>

          <div>
            <CustomButton>Join With Us</CustomButton>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default HeaderDrawer;
