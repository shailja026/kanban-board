import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

import AppsIcon from "@mui/icons-material/Apps";

import styles from "./Navbar.module.css";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,

} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

// import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <AppsIcon className={styles.appIcon} />
      <h1>Trello</h1>
      <div className={styles.lists}>
        <Menu className={styles.menu} mr="12px">
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            m="16px"
            className={styles.btn}
          >
            Workspaces
          </MenuButton>
          <MenuList className={styles.ul}>
            <MenuItem p="10px" background="black" color="white">
              Download
            </MenuItem>
            <MenuItem p="10px" background="black" color="white">
              Create a Copy
            </MenuItem>
            <MenuItem p="10px" background="black" color="white">
              Mark as Draft
            </MenuItem>
            <MenuItem p="10px" background="black" color="white">
              Delete
            </MenuItem>
            <MenuItem p="10px" background="black" color="white">
              Attend a Workshop
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            m="16px"
            className={styles.btn}
          >
            Recent
          </MenuButton>
          <MenuList className={styles.ul}>
            <MenuItem p="10px" background="black" color="white">
              Download
            </MenuItem>
            <MenuItem p="10px" background="black" color="white">
              Create a Copy
            </MenuItem>
            <MenuItem p="10px" background="black" color="white">
              Mark as Draft
            </MenuItem>
            <MenuItem p="10px" background="black" color="white">
              Delete
            </MenuItem>
            <MenuItem p="10px" background="black" color="white">
              Attend a Workshop
            </MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            m="16px"
            className={styles.btn}
          >
            Starred
          </MenuButton>
          <MenuList className={styles.ul}>
            <MenuItem p="10px" background="black" color="white">
              Download
            </MenuItem>
            <MenuItem p="10px" background="black" color="white">
              Create a Copy
            </MenuItem>
            <MenuItem p="10px" background="black" color="white">
              Mark as Draft
            </MenuItem>
            <MenuItem p="10px" background="black" color="white">
              Delete
            </MenuItem>
            <MenuItem p="10px" background="black" color="white">
              Attend a Workshop
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            m="16px"
            className={styles.btn}
          >
            templete keybord
          </MenuButton>
          <MenuList className={styles.ul}>
            <MenuItem p="10px" background="black" color="white">
              Download
            </MenuItem>
            <MenuItem p="10px" background="black" color="white">
              Create a Copy
            </MenuItem>
            <MenuItem p="10px" background="black" color="white">
              Mark as Draft
            </MenuItem>
            <MenuItem p="10px" background="black" color="white">
              Delete
            </MenuItem>
            <MenuItem p="10px" background="black" color="white">
              Attend a Workshop
            </MenuItem>
          </MenuList>
        </Menu>
        <Button
          colorScheme="teal"
          variant="solid"
          m="16px"
          fontSize="25px"
          background="transparent"
          color="white"
          border="none"
          fontWeight="800"
        >
          create
        </Button>
      </div>

      <div className={styles.icons}>
        <span style={{ display: "flex" }}>
          <input type="text" />
          <SearchIcon />
        </span>
        <div>
          <div className={styles.notification}>
            <NotificationsActiveIcon />
            <HelpCenterIcon />
            <DarkModeIcon />
            <PermIdentityIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
