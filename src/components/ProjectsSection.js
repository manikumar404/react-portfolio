import React from "react";
import { HStack, VStack, Image, Heading, Text, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      bg="white"
      borderRadius="md"
      boxShadow="md"
      p={4}
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.02)" }}
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <VStack spacing={2} align="start" mt={3}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text fontSize="sm">{description}</Text>
      </VStack>
      <HStack justify="space-between" mt={3}>
        <Text color="gray.500" fontSize="sm">
          Learn More
        </Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </Box>
  );
};

export default Card;
