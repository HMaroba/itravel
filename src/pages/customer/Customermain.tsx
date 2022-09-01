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
            3 results 8 August 22{" "}
          </Text>
          <Stack>
            <Tabs variant="soft-rounded" colorScheme="green">
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
  return <>Map</>;
};

const DriversCard = () => {
  return (
    <>
      <HStack>
        <Avatar name="Sasuke Uchiha" src="https://bit.ly/broken-link" />
        <Stack>
          <Text>Mokati School Bus</Text>
          <Stack>
            <HiOutlineLocationMarker />
            <Text>Mokati School Bus</Text>
            <Flex>
              <Button>Connect</Button>
              <Button>Profile</Button>
            </Flex>
          </Stack>
        </Stack>
      </HStack>
    </>
  );
};

export default Customermain;
