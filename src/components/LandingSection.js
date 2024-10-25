import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Mohannad!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

// Avatar URL
const avatarUrl = "https://i.pravatar.cc/150?img=7";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar src={avatarUrl} size="2xl" />
    <VStack spacing={4} mt={4} color="white" textAlign="center">
      <Heading as="h1" fontSize="3xl">
        {greeting}
      </Heading>
      <Text fontSize="xl">{bio1}</Text>
      <Text fontSize="xl">{bio2}</Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
