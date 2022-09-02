import {
  Avatar,
  Button,
  Flex,
  HStack,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Topnav from "../../components/Topnav";
const Customermain = () => {
  
  return (
    <>
      <Topnav />
      <Flex py="5rem" px="5rem" justifyContent="space-between">
        <Stack py="1rem">
          <Text
            fontStyle="normal"
            fontWeight="500"
            fontSize="28px"
            lineHeight="33px"
          >
            Drivers Near You
          </Text>
          <Text
            fontStyle="normal"
            fontWeight="400"
            fontSize="20px"
            lineHeight="23px"
            color=" #6B6F7B"
          >
            3 results 8 August 22
          </Text>
          <Stack>
            <Tabs variant="outlined" colorScheme="green">
              <TabList>
                <Tab>Price</Tab>
                <Tab>Location</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <DriversCard />
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack>
        </Stack>
        <Map />
      </Flex>
    </>
  );
};
const Map = () => {
  return <>
     <iframe style={{width: "800px", height: "400px", borderRadius: "20px"}}src="https://maps.google.com/maps?q=Maseru%20lesotho&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" ></iframe>
  </>;
};

const DriversCard = () => {

  return (
    <>
      <HStack
        py="1rem"
        shadow="md"
        px="10rem"
        display="flex"
        spacing="2rem"
        justifyContent="space-between"
      >
        <Box>
          <Avatar name="Tlotliso Mokati" src="https://bit.ly/broken-link" />
        </Box>
        <Stack>
          <Text>Mokati School Bus</Text>
          <Stack>
            <HiOutlineLocationMarker />
            <Text>Mokati School Bus</Text>
            <HStack spacing="1rem">
              <Button bg="#2B67F6">Connect</Button>
              <Button bg="green.100">Profile</Button>
            </HStack>
          </Stack>
        </Stack>
      </HStack>
    </>
  );
};

export default Customermain;
