import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Logo = (props: any) => {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Switch It
      </Text>
    </Box>
  );
};

export default Logo;
