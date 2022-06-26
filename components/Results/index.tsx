import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import * as React from "react";
import styled from "@emotion/styled";
import { SubmitBtn } from "components/SearchCard";

type ResultsType = {
  result: string;
  resultScore: string;
  resultHeader: string;
  resultCopy: string;
};

export default function Results({
  result,
  resultScore,
  resultHeader,
  resultCopy,
}: ResultsType) {
  return (
    <VStack textAlign="center">
      <Text as="i" fontSize="xl" mb={10}>
        {result}
      </Text>
      <Box bg="Result.base" color="white" borderRadius={120} mb={20}>
        <Text fontSize="80px" py={6} px={20} fontWeight={700}>
          {resultScore}
        </Text>
      </Box>
      <Box
        bg="Natural.light"
        borderRadius={20}
        width="80%"
        color="Secondary.dark"
      >
        <Text fontSize="5xl" lineHeight="2.75rem" p={6} fontWeight={700}>
          {resultHeader}
        </Text>
        <Text fontSize="lg" p={6}>
          {resultCopy}
        </Text>
        <SubmitBtn mb={30}>Show My Alternatives</SubmitBtn>
      </Box>
    </VStack>
  );
}
