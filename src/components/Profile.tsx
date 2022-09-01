import {
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Avatar,
} from "@chakra-ui/react";
import React from "react";

const Profile = () => {
  return (
    <>
      <Menu closeOnSelect={true}>
        <MenuButton as={Avatar} colorScheme="blue"></MenuButton>
        <MenuList minWidth="240px">
          <MenuOptionGroup defaultValue="asc" title="User" type="radio">
            <MenuItemOption value="asc">Profile</MenuItemOption>
            <MenuItemOption value="desc">Sing Out</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </>
  );
};

export default Profile;
