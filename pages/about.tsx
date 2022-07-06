import type { NextPage } from "next";
import {
  VStack,
  Text,
  Stack,
  Grid,
  Box,
  Button,
  Image,
  GridItem,
} from "@chakra-ui/react";
import * as React from "react";
import styled from "@emotion/styled";

const PageTitle = styled.h2`
  font-size: 24px;
  color: #f9f8ef;
`;
const GreenBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.Secondary.dark};
  color: ${({ theme }) => theme.colors.Natural.light};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Stacked = styled.div`
  padding: 4rem 4rem;
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
    <VStack>
      <GreenBackground>
        <Stack
          padding={20}
          textAlign="center"
          width={[
            "100%", // 0-30em
            "90%", // 30em-48em
            "75%", // 48em-62em
            "65%", // 62em+
          ]}
        >
          <PageTitle>About Switch It</PageTitle>
          <Text
            align="center"
            fontSize="7xl"
            lineHeight="80px"
            fontWeight={700}
          >
            You don’t have to change your life to
            <PinkStrong> change the world</PinkStrong>
          </Text>
        </Stack>
      </GreenBackground>
      <Stacked>
        <Text
          fontSize="8xl"
          align="center"
          lineHeight="96px"
          marginBottom={16}
          fontWeight={700}
        >
          Switch your money. <PinkStrong>Save the planet.</PinkStrong>
        </Text>
        <Grid
          templateColumns={{ sm: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          gap={30}
          marginBottom={20}
        >
          <GridItem fontSize="20" lineHeight="30px">
            <Text marginBottom={6}>
              Sure, there are sexier ways to make change than through banking
              and finance.
            </Text>
            <Text marginBottom={6}>
              But in a world where corporations can legally buy elections…
            </Text>
            <Text marginBottom={6}>Where protest is criminalized…</Text>
            <Text marginBottom={6}>
              Where Facebook posts swing the fate of democratic nations…
            </Text>
            <Text marginBottom={6}>
              And destructive fossil fuel extraction projects attract
              trillion-dollar investments…
            </Text>
            <Text marginBottom={6}>
              <strong>It’s time to re-think what change looks like.</strong>
            </Text>
            <Text marginBottom={6}>
              In the 6 years since the Paris Climate Agreement,banks have
              invested £2.7 trillion in fossil fuel companies, making one thing
              painfully clear…
            </Text>
          </GridItem>

          <GridItem>
            <Image
              src="/piggy_bank.jpg"
              alt="picture of a piggy bank with a leaf"
            />
          </GridItem>

          <GridItem>
            <Image
              src="/marcelo-vaz-768x960.jpg"
              alt="picture of human standing on top of mountain looking over marcelo vaz"
            />
          </GridItem>
          <GridItem fontSize="20" lineHeight="30px">
            <Text marginBottom={6}>
              The world’s leading financial and energy institutions are NOT
              going to change if we don’t force them to.
            </Text>
            <Text marginBottom={6}>
              And the easiest way we can force them to change is by taking our
              money elsewhere.
            </Text>
            <Text marginBottom={6}>
              Because when you take away their money, you take away their power
              to destroy the planet.
            </Text>
            <Text marginBottom={6}>
              And by giving that money to institutions that invest in
              alternative energy sources, you accelerate the rate of change
              exponentially.
            </Text>
            <Text marginBottom={6}>
              So use Switch It to learn how to easily turn your money green.
            </Text>
            <Text marginBottom={6}>
              And invest in change for a better future.
            </Text>
            <Button bg="Accent.base" color="Natural.light">
              Get Started Now
            </Button>
          </GridItem>
        </Grid>
      </Stacked>
      <GreenBackground>
        <Stack
          padding="2rem"
          width={[
            "100%", // 0-30em
            "90%", // 30em-48em
            "75%", // 48em-62em
            "65%", // 62em+
          ]}
        >
          <Text
            align="center"
            fontSize="56px"
            fontWeight={700}
            marginBottom={10}
          >
            What is Switch It?
          </Text>
          <Box fontSize="20" px={3} lineHeight="30px">
            <Text marginBottom={6}>
              Switch It is a not-for-profit organization that makes it easy for
              anyone to move their money out of institutions that fund fossil
              fuel companies.
            </Text>
            <Text marginBottom={6}>
              We believe that the global climate change crisis is leading us
              toward certain disaster and that immediate and drastic change is
              the only hope for the world.
            </Text>
            <Text marginBottom={6}>
              After reading study after study proving that moving your money is
              the most effective way to decrease the use of fossil fuels in our
              world…
            </Text>
            <Text marginBottom={6}>
              We dedicated all of our resources to exposing the banks, energy
              providers, and pension providers who use our money to fund climate
              and ecological breakdown.
            </Text>
            <Text marginBottom={6}>
              And to empowering individuals and businesses to switch to cleaner,
              greener providers.
            </Text>
            <Text marginBottom={6}>
              To date, we’ve helped individuals move over $180M and counting
              away from fossil fuels and into institutions that align with our
              vision for a clean energy future.
            </Text>
            <Text marginBottom={6}>
              It takes just 15 seconds to see if your money is funding climate
              destruction. So click below to find out.
            </Text>
            <Button bg="Accent.base" color="Natural.light" marginBottom={50}>
              Get Started Now
            </Button>
          </Box>
        </Stack>
      </GreenBackground>
      <Stacked>
        <Text align="center" fontSize="56px" fontWeight={700} marginBottom={10}>
          Who is Switch It?
        </Text>
        <Grid
          templateColumns={{ sm: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          gap="4rem"
          marginBottom={20}
        >
          <GridItem>
            <Image
              src="/anna-photo-768x768.jpg"
              alt="picture of long haired brunette"
            />
            <Box py={6}>
              <Text fontSize="36px" fontWeight={700}>
                Anna Chirico
              </Text>
              <Text fontSize="24px" fontWeight={500} marginBottom={10}>
                Creative director
              </Text>
              <Box fontSize="20" lineHeight="30px" fontWeight={200}>
                <Text marginBottom={6}>
                  For as long as I can remember, eco-consciousness has been a
                  part of my life. So when I went to my first climate protest, I
                  really couldn’t understand why everyone was screaming at me.
                </Text>
                <Text marginBottom={6}>
                  I mean, all I was doing was trying to save the world.
                </Text>
                <Text marginBottom={6}>
                  It shook me up a bit. I was dedicating my life to this, but…
                </Text>
                <Text marginBottom={6}>
                  After seeing the reaction of the world to what I was doing, it
                  became hard to understand how we were going to change the
                  world…when the whole world seemed to be against us.
                </Text>
                <Text marginBottom={6}>
                  That led me to rethink the best way to make meaningful change.
                </Text>
                <Text marginBottom={6}>
                  So when the opportunity to build Switch It came into my life,
                  for the first time it all seemed so obvious.
                </Text>
                <Text marginBottom={6}>
                  This was a path to change that was literally open to anybody–
                  and that’s what’s so exciting about the Switch It movement.
                </Text>
                <Text marginBottom={6}>
                  You don’t need to be an activist to have an impact.
                </Text>
                <Text marginBottom={6}>
                  <strong>
                    In just 5 minutes, you can dramatically change your impact
                    on the climate and our environment.
                  </strong>
                </Text>
                <Text marginBottom={6}>
                  It’s empowering. Inspiring. And liberating.
                </Text>
                <Text marginBottom={6}>And it’s So. Freaking. Easy.</Text>
                <Text marginBottom={6}>
                  Hi, I’m Anna. And I believe in the power of the switch. Join
                  us and experience it for yourself.
                </Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Image
              src="/SophieCowenHeadshot.jpg"
              alt="picture of shoulder length haired brunette"
            />
            <Box py={6}>
              <Text fontSize="36px" fontWeight={700}>
                Sophie Cowen
              </Text>
              <Text fontSize="24px" fontWeight={500} marginBottom={10}>
                Campaign Director
              </Text>

              <Box fontSize="20" lineHeight="30px" fontWeight={200}>
                <Text marginBottom={6}>
                  Much like you, I’ve supported banks that fund fossil fuels
                  without even realising it.
                </Text>
                <Text marginBottom={6}>
                  My first job after university was with a London advertising
                  agency, working on multi-million pound campaigns for a huge,
                  fossil-fuel-funding bank.
                </Text>
                <Text marginBottom={6}>
                  So I’ve been a BIG part of the problem.
                </Text>
                <Text marginBottom={6}>
                  But since then, I’ve worked hard to be part of the solution–
                  spending the last few years mass mobilising, living and
                  breathing the mission. Slowly changing the world one protest
                  at a time.
                </Text>
                <Text marginBottom={6}>
                  But it’s exhausting work, and it’s not for everyone… because
                  most of us don’t have the time, the will, or the passion to
                  throw ourselves into it hook, line and sinker.
                </Text>
                <Text marginBottom={6}>
                  And I’ve sometimes felt it so overwhelming to find out how to
                  make a difference, that I’ve felt like giving up.
                </Text>
                <Text marginBottom={6}>
                  So when I started to learn more about the nefarious dealings
                  of our high street banks, I saw the opportunity for simple,
                  tangible change. On a huge scale.
                </Text>
                <Text marginBottom={6}>
                  That’s why I was inspired to build SwitchIt.
                </Text>
                <Text marginBottom={6}>
                  Because the truth is you don’t need to change your life
                  entirely to make meaningful change in the world.
                </Text>
                <Text marginBottom={6}>
                  You just need to start with this one, simple thing.
                </Text>
                <Text marginBottom={6}>
                  Switch your money. It’s really that simple.
                </Text>
                <Text marginBottom={6}>
                  So I reckon we could all take 5 minutes to change the world,
                  together. Don’t you?
                </Text>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Stacked>
    </VStack>
  );
};

export default AboutSwitchIt;
