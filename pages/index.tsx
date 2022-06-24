import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Grid, Box } from "@chakra-ui/react";
import SearchTabs from '../components/SearchTabs';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <Grid templateColumns='repeat(2, 1fr)'>
      <Box>
        <Hero/>
        <Hero 
        title="MAKE THE CHANGE TODAY"
        subTitle="Search in the green box to find out if your providers support the fossil fuel industry in under 1 minute. And find the best alternatives for switching your money to a greener provider."
        />
      </Box>
      <Box>
        <SearchTabs 
          tabOne="Banks" 
          tabTwo="Energy Providers"
          tabThree="Pensions"
        />
      </Box>
    </Grid>
  )
}

export default Home
