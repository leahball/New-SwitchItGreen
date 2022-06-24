import * as React from 'react';
import { FaCheck } from "react-icons/fa";
import {
  Box,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";

export const unstyledWithIcon = () => (
  <Box mb={6}>
    <Text fontSize="sm" color="gray.600">
      .list-none
    </Text>
    <List spacing={3}>
      <ListItem>
        <ListIcon as={FaCheck} color="green.500" />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </ListItem>
      <ListItem>
        <ListIcon as={FaCheck} color="green.500" />
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </ListItem>
      <ListItem>
        <ListIcon as={FaCheck} color="green.500" />
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
    </List>
  </Box>
)