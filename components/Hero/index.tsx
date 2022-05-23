import React from "react";
import { VStack, Heading, Text, SimpleGrid, GridItem, Image } from "@chakra-ui/react";

const index = () => {
  const heroContent = {
    iconUrl: "/public/make-the-change-icon-1@2x.png",
    iconAlt: "Leaf icon",
    title: "Your Impact",
    text: "Moving your money out of banks, energy companies and pensions that finance fossil fuels is the most effective, simple action you can take to fight the climate crisis.",
  };
  return (
    <VStack w="full" h="full" spacing={4} align-items="flex-start">
      <SimpleGrid columns={3} columnGap={3} w="full">
        <GridItem colSpan={1}>
          <Image src={heroContent.iconUrl} alt={heroContent.iconAlt} />
        </GridItem>
        <GridItem colSpan={2}>
          <Heading size="2xl">{heroContent.title}</Heading>
        </GridItem>
        <GridItem colSpan={3}>
          <Text>{heroContent.text}</Text>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default index;
