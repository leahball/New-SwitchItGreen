import * as React from "react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, List, ListIcon, ListItem } from "@chakra-ui/react";

type ListType = {
  listCheck?: string;
  listNone?: string;
};

export default function list({ listCheck, listNone }: ListType) {
  return (
    <Box mb={6}>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          {listCheck}
        </ListItem>
        <ListItem>
          <ListIcon as={CloseIcon} color="gray.400" />
          {listNone}
        </ListItem>
      </List>
    </Box>
  );
}
