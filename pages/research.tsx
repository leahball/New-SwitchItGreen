import type { NextPage } from "next";
import {
  VStack,
  Text,
  Heading,
  Box,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";
import * as React from "react";

const Research: NextPage = () => {
  return (
    <VStack color="Secondary.dark" p={20} display="flex">
      <Box maxWidth="900px" marginBlockEnd={10}>
        <Heading as="h1" fontSize="3xl" fontWeight={700} marginBottom={8}>
          Research
        </Heading>
        <Heading as="h2" fontSize="xl" fontWeight={500} marginBottom={4}>
          Uk Research
        </Heading>
        <Text fontWeight={700} marginBottom={2}>
          Energy Criteria
        </Text>
        <Text marginBottom={4}>
          We evaluated the green credentials of UK energy providers against
          three key criteria:
        </Text>
        <UnorderedList px={4} marginBottom={4}>
          <ListItem>
            What proportion of their electricity supply is from renewables?
          </ListItem>
          <ListItem>
            How do the energy suppliers procure their renewable energy?
          </ListItem>
          <ListItem>
            Do they supply green gas or carbon offset the gas they sell?
          </ListItem>
        </UnorderedList>
        <Text marginBottom={4}>
          The greenest companies, awarded 4 or 5 stars have the following
          characteristics:
        </Text>
        <UnorderedList px={4} marginBottom={4}>
          <ListItem>
            A high proportion of the electricity they sell, often 100% is
            classified as renewable i.e. wind, solar, hydro
          </ListItem>
          <ListItem>
            A significant proportion of the renewable energy they supply, often
            over 40%, will be from direct agreements they have with renewable
            energy producers. These agreements are known as PPA’s. We believe
            that energy suppliers that have a direct relationship with producers
            i.e. wind farm owner, are more effective in driving further growth
            of renewable energies.
          </ListItem>
          <ListItem>
            The gas they sell to consumers will either be renewable gas or
            carbon offset
          </ListItem>
        </UnorderedList>
        <Heading as="h3" fontSize="xl">
          Energy Sources (links)
        </Heading>
        <Link>
          Ofgem,</Link> <Link>Which,</Link> <Link>Electricity Info, Utility Week, Ethical consumer,
          Uswitch, This Is Money, The dirty secret behind your ‘clean’ energy
          deal, Baringa, Renewable tariffs in the UK: what makes a tariff
          green?, UNEP, Frankfurt School, Global Trends in Renewable Energy
          Investment 2020, Energy Intelligence, Green Utilities Report 2020
        </Link>
      </Box>
      <Box maxWidth="900px" marginBlockEnd={10}>
        <Heading marginBottom={6}>Energy Scoring </Heading>
        <Text>
          1 out of 5 – no or limited green tariff option, limited investment in
          renewable capacity, gas not offset{" "}
        </Text>
        <Text>
          2 out of 5 – less then 40% of electricity sourced either directly from
          generators or through the wholesale market, limited investment in
          renewable capacity, gas not offset
        </Text>
        <Text>
          3 out of 5 – over 40% of electricity sourced either directly from
          generators or through the wholesale market AND/OR moderate investment
          in renewable capacity, gas offset or recycled gas used
        </Text>
        <Text>
          4 out of 5 – over 60% of electricity sourced either directly from
          generators or through the wholesale market AND/OR high investment in
          renewable capacity, gas offset or recycled gas used
        </Text>
        <Text>
          5 out of 5 – over 70% of the electricity sourced directly from
          generators, high investment in renewable capacity, gas offset or
          recycled gas used
        </Text>
      </Box>
    </VStack>
  );
};

export default Research;
