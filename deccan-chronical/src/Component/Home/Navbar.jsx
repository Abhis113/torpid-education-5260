import React, { useEffect } from 'react'
import styles from "./Navbar.module.css";
import {MenuButton,Menu,MenuItem,MenuList,Button} from "@chakra-ui/react"; 
import {ChevronDownIcon} from "@chakra-ui/icons";
export default function Navbar() {
   
  return (
    <>
        <div className={styles.navbar}>
          <div className={styles.box1}>
              <div className={styles.box2}>
                <img src="https://www.deccanchronicle.com/images/DeccanChronicle_Logo.jpg" alt="logo1"/>
              </div>
              <div className={styles.box3}>
                <div><p>Wednesday,Sep 28,2022 |</p></div>
                <div><p>Last Update :08:28 PM IST</p></div>
              </div>
          </div>
          <div className={styles.box4}>
            <div className={styles.box5}><img src="data:image/png;base64,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" alt="logo2" /></div>
            <div><p>Nation</p></div>
            <div><p>South</p></div>
            <div><p>World</p></div>
            <div><p>Entertainment</p></div>
            <div><p>Jobs & Education</p></div>
            <div><p>Sports</p></div>
            <div><p>Technology</p></div>
            <div><p>Lifestyle</p></div>
            <div><p>Gallery</p></div>
            
            <div><Menu>
  <MenuButton bg="white" as={Button} rightIcon={<ChevronDownIcon />}>
    More...
  </MenuButton>
  <MenuList>
    <MenuItem>Business</MenuItem>
    <MenuItem>Opinion</MenuItem>
    <MenuItem>Sunday Chronicle</MenuItem>
    <MenuItem>Featured</MenuItem>
    <MenuItem>Hyderabad Chronicle</MenuItem>
    <MenuItem>Science</MenuItem>
    <MenuItem>Editors Picks</MenuItem>
    <MenuItem>Just In</MenuItem>
    <MenuItem>Astroguide</MenuItem>
  </MenuList>
</Menu></div>
          </div>
        </div>
    </>
  )
}
