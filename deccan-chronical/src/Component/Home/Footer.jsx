import React from 'react';
import styles from "./Navbar.module.css";
function Footer(){
    return(
        <div className={styles.f1}>
            <div className={styles.f2}>
                <div className={styles.f9}>
                    <input type="text" placeholder="ENHANCED BY Google"/>
                    <div className={styles.f10}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnry0gJ0BlznlNOxPocQsBK5g2reUgBn08Q&usqp=CAU" alt="logo1" /></div>
                </div>
            </div>
            <div className={styles.f3}>
                <div className={styles.f4}>
                    <div><h1>HOME</h1></div>
                    <div><h1>ASIAN AGE</h1></div>
                    <div><h1>ANDHRABHOOMI</h1></div>
                    <div><h1>FINANCIAL CHRONICLE</h1></div>
                    <div><h1>ABOUT US</h1></div>
                    <div><h1>CONTACT US POLICY</h1></div>
                    <div><h1>CLASSIFIEDS</h1></div>
                    <div><h1>BOOK CLASSIFIEDS</h1></div>
                    <div><h1>FEEDBACK</h1></div>
                    <div><h1>CAREERS</h1></div>
                    <div><h1>E-PAPERS</h1></div>
                    <div><h1>PRIVACY</h1></div>
                </div>
               
                <div className={styles.f5}><h1>Copyright © 2015- 2022 Deccan Chronicle.</h1></div>
                <div className={styles.f6}><h1>Designed,Developed & Maintained By Daksham</h1></div>
                
            </div>
        </div>
    )
}
export default Footer;