import type { NextPage } from "next";
import { VStack, Text, Stack, Grid, Box, Button } from "@chakra-ui/react";
import * as React from "react";
import styled from "@emotion/styled";

const PageTitle = styled.h2`
  font-size: 24px;
  color: #f9f8ef;
`;
const GreenBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.Secondary.dark};
`;
const Stacked = styled.div`
  padding: 4rem 14rem;
  text-align: left;
  align-items: center;
  justify-content: center;
`;

const PinkStrong = styled.span`
  color: ${({ theme }) => theme.colors.Primary.base};
  font-weight: bold;
`;
const GreenStrong = styled.span`
  color: ${({ theme }) => theme.colors.Accent.base};
  font-weight: bold;
`;

const AboutSwitchIt: NextPage = () => {
  return (
    <VStack marginBlockEnd={20}>
      <GreenBackground>
        <Stack padding={20} textAlign="center">
          <PageTitle>About Switch It</PageTitle>
          <Text fontSize="48px" lineHeight="64px" fontWeight={700}>
            You don’t have to change your life to
            <PinkStrong> change the world</PinkStrong>
          </Text>
        </Stack>
      </GreenBackground>
      <Stacked>
        <Text
          fontSize="56px"
          lineHeight="66px"
          marginBottom={6}
          fontWeight={700}
        >
          Switch your money. <PinkStrong>Save the planet.</PinkStrong>
        </Text>
        <Grid templateColumns="repeat(2, 1fr)" marginBottom={20}>
          <Text fontSize="20" px={3} lineHeight="30px" marginBottom={6}>
            Sure, there are sexier ways to make change than through banking and
            finance. <br /> But in a world where corporations can legally buy
            elections… <br /> Where protest is criminalized… <br /> Where
            Facebook posts swing the fate of democratic nations… <br /> And
            destructive fossil fuel extraction projects attract trillion-dollar
            investments… <br />
            <strong>It’s time to re-think what change looks like.</strong>{" "}
            <br /> In the 6 years since the Paris Climate Agreement,banks have
            invested £2.7 trillion in fossil fuel companies, making one thing
            painfully clear…
          </Text>
          <Box bg="Primary.base"> here</Box>
          <Box bg="Primary.base"> here</Box>
          <Box>
            <Text fontSize="20" px={3} lineHeight="30px" marginBottom={6}>
              The world’s leading financial and energy institutions are NOT
              going to change if we don’t force them to. <br /> And the easiest
              way we can force them to change is by taking our money elsewhere.{" "}
              <br /> Because when you take away their money, you take away their
              power to destroy the planet. <br /> And by giving that money to
              institutions that invest in alternative energy sources, you
              accelerate the rate of change exponentially. <br /> So use Switch
              It to learn how to easily turn your money green. <br /> And invest
              in change for a better future.
            </Text>
            <Button>Get Started Now</Button>
          </Box>
        </Grid>
      </Stacked>
      <GreenBackground>
        <Stack padding={20}>
          <Text fontSize="56px" fontWeight={700} marginBottom={10}>
            What is Switch It?
          </Text>
          <Text fontSize="20" px={3} lineHeight="30px" marginBottom={6}>
            Switch It is a not-for-profit organization that makes it easy for
            anyone to move their money out of institutions that fund fossil fuel
            companies. We believe that the global climate change crisis is
            leading us toward certain disaster and that immediate and drastic
            change is the only hope for the world. After reading study after
            study proving that moving your money is the most effective way to
            decrease the use of fossil fuels in our world… We dedicated all of
            our resources to exposing the banks, energy providers, and pension
            providers who use our money to fund climate and ecological
            breakdown. And to empowering individuals and businesses to switch to
            cleaner, greener providers. To date, we’ve helped individuals move
            over $180M and counting away from fossil fuels and into institutions
            that align with our vision for a clean energy future. It takes just
            15 seconds to see if your money is funding climate destruction. So
            click below to find out.
          </Text>
        </Stack>
      </GreenBackground>
      <Stacked>
        <Text fontSize="56px" fontWeight={700} marginBottom={10}>
          Who is Switch It?
        </Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={8} marginBottom={20}>
          <Box bg="Primary.base"> here</Box>
          <Box bg="Primary.base"> here</Box>
          <Box>
            <Text fontSize="36px" fontWeight={700}>
              Anna Chirico
            </Text>
            <Text fontSize="24px" fontWeight={500}>Creative director</Text>
            <Text fontSize="20" lineHeight="30px" marginBottom={6}>
              For as long as I can remember, eco-consciousness has been a part
              of my life. So when I went to my first climate protest, I really
              couldn’t understand why everyone was screaming at me. I mean, all
              I was doing was trying to save the world. It shook me up a bit. I
              was dedicating my life to this, but… After seeing the reaction of
              the world to what I was doing, it became hard to understand how we
              were going to change the world…when the whole world seemed to be
              against us. That led me to rethink the best way to make meaningful
              change. So when the opportunity to build Switch It came into my
              life, for the first time it all seemed so obvious. This was a path
              to change that was literally open to anybody– and that’s what’s so
              exciting about the Switch It movement. You don’t need to be an
              activist to have an impact. In just 5 minutes, you can
              dramatically change your impact on the climate and our
              environment. It’s empowering. Inspiring. And liberating. And it’s
              So. Freaking. Easy. Hi, I’m Anna. And I believe in the power of
              the switch. Join us and experience it for yourself.
            </Text>
          </Box>
          <Box>
            <Text fontSize="36px" fontWeight={700}>
              Sophie Cowen
            </Text>
            <Text fontSize="24px" fontWeight={500}>Campaign Director</Text>

            <Text fontSize="20" lineHeight="30px" marginBottom={6}>
              Much like you, I’ve supported banks that fund fossil fuels without
              even realising it. My first job after university was with a London
              advertising agency, working on multi-million pound campaigns for a
              huge, fossil-fuel-funding bank. So I’ve been a BIG part of the
              problem. But since then, I’ve worked hard to be part of the
              solution– spending the last few years mass mobilising, living and
              breathing the mission. Slowly changing the world one protest at a
              time. But it’s exhausting work, and it’s not for everyone… because
              most of us don’t have the time, the will, or the passion to throw
              ourselves into it hook, line and sinker. And I’ve sometimes felt
              it so overwhelming to find out how to make a difference, that I’ve
              felt like giving up. So when I started to learn more about the
              nefarious dealings of our high street banks, I saw the opportunity
              for simple, tangible change. On a huge scale. That’s why I was
              inspired to build SwitchIt. Because the truth is you don’t need to
              change your life entirely to make meaningful change in the world.
              You just need to start with this one, simple thing. Switch your
              money. It’s really that simple. So I reckon we could all take 5
              minutes to change the world, together. Don’t you?
            </Text>
          </Box>
        </Grid>
      </Stacked>
    </VStack>
  );
};

export default AboutSwitchIt;
