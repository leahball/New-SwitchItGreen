import React from "react";
import { VStack, Heading, Text, SimpleGrid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import styled from "@emotion/styled";

type HeroProps = {
  title?: string;
  subTitle?: string;
};

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.SIPink.base};
  display: inline-flex;
  padding: 10px;
  text-transform: uppercase;
`;

const StyledSubtitle = styled(Text)`
  line-height: 24px;
  font-weight: 300;
`;

const Hero = ({ title, subTitle }: HeroProps) => {
  const heroContent = {
    iconUrl: "/leaf.png",
    iconAlt: "Leaf icon",
    title: title || "Your Impact",
    subTitle:
      subTitle ||
      "Moving your money out of banks, energy companies and pensions that finance fossil fuels is the most effective, simple action you can take to fight the climate crisis.",
  };

  return (
    <VStack w="full" h="full" spacing={4} align-items="flex-start">
      <SimpleGrid columns={2} columnGap={3} w="full">
        <GridItem colSpan={1}>
          <Image
            width={28}
            height={29}
            src="/cursor.png"
            alt={heroContent.iconAlt}
          />
          <StyledHeading as="h3" size="md">
            {heroContent.title}
          </StyledHeading>
        </GridItem>
        <GridItem colSpan={2}>
          <StyledSubtitle fontSize="lg">{heroContent.subTitle}</StyledSubtitle>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Hero;
