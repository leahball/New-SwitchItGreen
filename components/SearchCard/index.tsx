import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import * as React from "react";
import styled from "@emotion/styled";

type SearchCardType = {
  header: string;
  subHeader?: string;
  placeholder: string;
  moreInfo?: string;
};

export const SubmitBtn = styled(Button)`
  display: inline;
  background-color: ${({ theme }) => theme.colors.SIGreen.medium};
  border-radius: 20px;
  width: 33%;
  color: white;
`;

const StyledInput = styled(Input)`
  border-radius: 20px;
  border: none;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 10px 0px;
  margin: 8px 16px 8px 0;
`;

const SubHeader = styled(Text)`
  color: #164046;
`;

const DetailsLink = styled.a`
  text-decoration: underline;
  font-size: 14px;
  color: #164046;
`;

const index = ({
  header,
  subHeader,
  placeholder,
  moreInfo,
}: SearchCardType) => {
  return (
    <Box p="20px" bgColor={"rgb(249, 248, 239)"}>
      <Text color="#164046" fontSize="24px">{header}</Text>
      {subHeader && <SubHeader fontSize="14px">{subHeader}</SubHeader>}
      <Flex justifyItems="center" alignItems="center">
        <StyledInput placeholder={placeholder} />
        <SubmitBtn type="submit" >
          Search
        </SubmitBtn>
      </Flex>
      <DetailsLink href="#">{moreInfo}</DetailsLink>
    </Box>
  );
};

export default index;
