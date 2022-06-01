
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react' 
  
  import { FaHome } from "react-icons/fa";
  import { MdTrendingUp } from "react-icons/md"
  import { BiCompass } from "react-icons/bi"
  import { FiStar } from "react-icons/fi" 
  import { FiSettings } from "react-icons/fi"
  import styles from "./drawer.module.css"
  
  import React from 'react'
  
  function Drawer1() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
                <h3>Logo</h3>
            </DrawerHeader>
  
            <DrawerBody >

                <div className={styles.bodydiv}>
                    <div className={styles.iconDiv}><FaHome/><div>Home</div></div>
                    <div className={styles.iconDiv}><MdTrendingUp/><div>Trending</div></div>
                    <div className={styles.iconDiv}><BiCompass/><div>Explore</div></div>
                    <div className={styles.iconDiv}><FiStar/><div>Favourites</div></div>
                    <div className={styles.iconDiv}><FiSettings/><div>Settings</div></div>
                </div>
                
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  
  export default Drawer1