/* eslint-disable jsx-a11y/iframe-has-title */
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
import { MapContainer, Popup, TileLayer, useMap, Marker } from 'react-leaflet'
//import { Marker } from "@react-google-maps/api";
  const Drivermain = () => {
    
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
              Deliveries and Pickups
            </Text>
         
            <Stack>
              <Tabs variant="soft-rounded" colorScheme="green">
                <TabList>
                  <Tab>Deliveries</Tab>
                  <Tab>Pickups</Tab>
                  <Tab>Requests</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <CustomersCard />
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
  
  const CustomersCard = () => {
  
    return (
      <>
        <HStack>
          <Avatar name="Sasuke Uchiha" src="https://bit.ly/broken-link" />
          <Stack>
            <Text>Thabang</Text>
            <Stack>
              <HiOutlineLocationMarker />
              <Text>Thabang</Text>
              <Flex>
                
                <Button>Drop of</Button>
            
              </Flex>
            </Stack>
          </Stack>
        </HStack>
      </>
    );
  };
  
  export default Drivermain;


  