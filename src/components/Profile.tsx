import {
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {

  const navigate = useNavigate();

const logout =() =>{
  navigate('/');
}
  return (
    <>
      <Menu closeOnSelect={true}>
        <MenuButton as={Avatar} colorScheme="blue"></MenuButton>
        <MenuList minWidth="240px">
          <MenuOptionGroup defaultValue="asc" title="User" type="radio">
            <MenuItemOption value="asc">Profile</MenuItemOption>
            <MenuItemOption value="desc"  onClick={logout}>Sing Out</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </>
  );
};

export default Profile;
