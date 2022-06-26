import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
  useDisclosure,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SubmitBtn } from "components/SearchCard";
import styled from "@emotion/styled";

const StyledCTAHeader = styled("h2")`
  color: ${({ theme }) => theme.colors.Secondary.dark};
  font-size: 22px;
  font-weight: 700;
  text-shadow: -1px 1px 0px rgb(255 60 60 / 77%);
`;

export default function SwitchItModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SubmitBtn onClick={onOpen}>See My Results</SubmitBtn>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size="xl"
      >
        <ModalOverlay />
        <ModalContent align="center" justify="center" p={4}>
          <ModalHeader fontSize="xx-large">
            Do you want to take part in our next Switch Day?
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              With your support, we can hit our goal of switching £5 billion out
              of climate-harming banks, potentially removing up to £200 billion
              of funding opportunities for the fossil fuel industry.
            </p>
            <StyledCTAHeader>Join Us Now</StyledCTAHeader>
          </ModalBody>
          <ModalFooter flexDirection="row" align="center">
            <InputGroup size="lg">
              <Input placeholder="Email" />
              <InputRightElement width="auto" pr={1}>
                <Button
                  bg="Accent.base"
                  color="Natural.light"
                  onClick={onClose}
                >
                  Get Updated
                </Button>
              </InputRightElement>
            </InputGroup>
          </ModalFooter>
          <Button variant="link" color="Secondary.dark" mt={2} mb={2}>
            Show me the score
          </Button>
        </ModalContent>
      </Modal>
    </>
  );
}
