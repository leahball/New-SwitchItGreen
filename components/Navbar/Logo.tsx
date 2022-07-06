import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";

const Logo = (props: any) => {
  return (
    <Flex flexDirection="row" gap={2} alignItems="center" color="Natural.light" {...props}>
      <Image
        w="60px"
        src="/switch-it-icon.png"
        alt="Toggle Button with earth as the slider"
      />
      <Text fontSize="lg" fontWeight="bold">
        Switch It
      </Text>
    </Flex>
  );
};

export default Logo;
