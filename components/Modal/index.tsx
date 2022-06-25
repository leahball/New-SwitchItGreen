import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { SubmitBtn } from "../SearchCard/index";
// import styled from "@emotion/styled";

export default function SwitchItModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="pink" onClick={onOpen}>
        See My Results
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        p={6}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Do you want to take part in our next Switch Day?
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              With your support, we can hit our goal of switching £5 billion out
              of climate-harming banks, potentially removing up to £200 billion
              of funding opportunities for the fossil fuel industry.
            </p>
          </ModalBody>
          <Textarea placeholder="Here is a sample placeholder" />
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Get Updated
            </Button>
            <Button variant="ghost">Show me the score</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
