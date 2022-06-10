import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function SearchTabs() {
  return (
    <Box bg={"#72aa3c"} p={6} borderRadius={20}>
      <Tabs
        size="md"
        variant="unstyled"
        bg={"rgb(249, 248, 239)"}
        color={"#164046"}
      >
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
