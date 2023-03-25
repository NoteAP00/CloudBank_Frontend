import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useRouter } from "next/router";

export default function MyApp() {
    const router = useRouter();
    return (
      <div>
        <div className={styles.menu}>
          <div className={styles.top} style={{ fontSize: "30px" }}>
            <div>Webbank</div>
          </div>
         </div>
         <div className={styles.btnmenu}>
            <div>
                <div style={{marginBottom:"100px"}}>
                    <button 
                    style={{
                  textAlign: "right",
                  paddingTop: "10px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  router.push("/deposit");
                }} 
                className={styles.btnmenuleft}>ฝากเงิน
                    </button>  
                </div>
                <div style={{marginBottom:"100px"}}>
                    <button
                    style={{
                        textAlign: "right",
                        paddingTop: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        router.push("/transfer");
                      }} 
                     className={styles.btnmenuleft}>โอนเงิน</button>
                </div>
            </div>
                <div>
                    <h2 className={styles.textmenu}>Menu</h2>
                </div>
            <div>
                <div style={{marginBottom:"100px"}}>
                    <button
                    style={{
                        textAlign: "right",
                        paddingTop: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        router.push("/withdraw");
                      }} 
                     className={styles.btnmenuright}>ถอนเงิน</button>
                </div>
                <div style={{marginBottom:"100px"}}>
                    <button className={styles.btnmenuright}>ดูประวัติ</button>
                </div>
            </div>
         </div>

      </div>
    );
  }