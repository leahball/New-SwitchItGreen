import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import styled from '@emotion/styled';
import SearchCard from "../SearchCard";

type SearchTabType = {
  tabOne: string;
  tabTwo: string;
  tabThree: string;
};

const StyledTab = styled(Tab)`
  font-weight: 700 !important;
  font-size: 16px !important;
`;

export default function SearchTabs({
  tabOne,
  tabTwo,
  tabThree,
}: SearchTabType) {
  return (
      <Tabs
        size="md"
        variant="enclosed"
        bg={"rgb(249, 248, 239)"}
        color={"#164046"}
        borderRadius={10}
      >
        <TabList>
          <StyledTab>{tabOne}</StyledTab>
          <StyledTab>{tabTwo}</StyledTab>
          <StyledTab>{tabThree}</StyledTab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SearchCard
              header="Coming May 2022"
              subHeader="Sign up to get notified"
              placeholder="Email"
              moreInfo="Click here to find out more"
            />
          </TabPanel>
          <TabPanel>
            <SearchCard
              header="Is your energy provider funding the climate crisis?"
              subHeader="Sign up to get notified"
              placeholder="Search your energy provider"
              moreInfo="A note on energy providers" 
            />
          </TabPanel>
          <TabPanel>
            <SearchCard
              header="Coming Fall 2022"
              subHeader="Sign up to get notified"
              placeholder="Email"
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
  );
}
