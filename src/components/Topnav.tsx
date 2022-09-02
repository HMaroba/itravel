import {
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Button,
} from "@chakra-ui/react";
import React from "react";
import {
  HiOutlineSearch,
  HiOutlineChatAlt,
  HiOutlineBell,
  HiOutlineHeart,
} from "react-icons/hi";

import Profile from "./Profile";

const Topnav = () => {
  return (
    <>
      <HStack
        py="1rem"
        px="5rem"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link
          fontStyle="normal"
          fontWeight={700}
          fontSize="30px"
          lineHeight="35px"
        >
          Itravel
        </Link>

        <HStack>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
            />
            <Input
              placeholder="Search"
              w="25rem"
              border="none"
              bg="#F4F7FF"
              size="lg"
            />
            <InputRightElement
              py="1.5rem"
              px="2rem"
              children={
                <Button bg="#090C9B">
                  <HiOutlineSearch color="#FFFFFF" fontSize="20rem"/>
                </Button>
              }
            />
          </InputGroup>
        </HStack>

        <HStack spacing="2rem">
          {/*
          <Link>
            <HiOutlineChatAlt fontSize="30px" color="#2B67F6" />
          </Link>
          <Link>
            <HiOutlineBell fontSize="30px" color="#2B67F6" />
          </Link>
          <Link>
            <HiOutlineHeart fontSize="30px" color="#2B67F6" />
          </Link>
            */}
        </HStack>

        <HStack>
          <Profile />
          <Link
            fontSize="20px"
            color="#2B67F6"
            _hover={{ textDecoration: "none" }}
          >
            Gogo
          </Link>
        </HStack>
      </HStack>
    </>
  );
};

export default Topnav;
