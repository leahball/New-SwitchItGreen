import type { NextPage } from "next";
import { VStack, Text, Stack } from "@chakra-ui/react";
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
  font-weight: bolder;
`;
const GreenStrong = styled.span`
  color: ${({ theme }) => theme.colors.Accent.base};
  font-weight: bold;
`;

const WhySwitchIt: NextPage = () => {
  return (
    <VStack marginBlockEnd={20}>
      <GreenBackground>
        <Stack padding={20} textAlign="center">
          <PageTitle>Why Switch It</PageTitle>
          <Text fontSize="48px" lineHeight="64px">
            If you could slash your carbon footprint in 5 minutes without having
            to give up meat, sell your car, or cut out air travel forever…{" "}
            <PinkStrong>would you do it right now?</PinkStrong>
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
          Because doing nothing about the climate is no longer an option
        </Text>
        <Text fontSize="20" lineHeight="30px" marginBottom={6}>
          You already know the story— the earth is burning and nobody seems to
          care. <br /> CO2 is at the highest level in 3 million years. West
          London is buried in floods. Canada turns into a sauna. And the
          Maldives slowly sink into the sea…
          <br /> And, still, nothing changes. <br /> Six years after the Paris
          Climate Accords we’re still on a path to an increase of 2.8°C by
          2022—leading to even more chaotic weather, receding coastlines, and
          the mass extinction of insects, birds, amphibians… <br /> But hang on,
          you know all of this, right?
        </Text>
        <Text fontSize="26px" fontWeight={700}>
          The question is what can <GreenStrong>YOU</GreenStrong> do about it?
        </Text>
        <Text fontSize="20" lineHeight="30px">
          Because every day, you’re barraged with a never-ending list of
          must-do’s, never-ever’s, and don’t-even-think-about-its…
          <br /> Use reusable plastic bags. Buy a bicycle. Ditch the car. Take
          the bus. Unplug your phone charger. Don’t fly, ever, anywhere. Grow
          your own vegetables. Eat less meat. Eat no meat. Eat fake meat. And
          don’t touch those water-guzzling avocados.
          <br /> As if it’s your $8 avocado toast that’s going to kill us all.{" "}
          <br /> But here’s the thing— trying to live your life by those
          ever-changing standards will either drive you crazy or lead you to
          give up. <br /> And it’s not that those things aren’t important— many
          of them are.
          <br /> But there’s one simple change that you can make in 5 minutes
          that makes more of a difference than ALL of those things combined.{" "}
          <br /> You only need to do it once. <br /> And it will keep making an
          impact every day for the rest of your life.
        </Text>
      </Stacked>
      <GreenBackground>
        <Stacked>
          <Text
            fontSize="54px"
            lineHeight="66px"
            fontWeight={700}
            marginBottom={10}
          >
            Money talks- it's the cliché that ate the world
          </Text>
          <Text fontSize="20" lineHeight="30px">
            Meaningful change takes direct, collective action. <br /> But if you
            want giant corporations and financial institutions to change, you
            need to speak in the language they understand— and that’s the
            language of money. <br /> In fact, research shows that moving your
            money away from banks, energy providers, and pensions that fund the
            fossil fuel industry is the #1 most effective thing you can do to
            reduce your carbon footprint. <br /> More impactful than swearing
            off Uber. <br /> Or giving up beef. <br /> Or canceling your surf
            vacation to Costa Rica. <br /> Because when you give your money to a
            bank, energy company, or pension that supports fossil fuels, you’re
            giving them permission to make climate-destroying investments with
            your money. <br /> On the other hand, when you move your money to
            institutions that support renewable energy sources, you’re
            empowering them and their partners to grow their mission.
          </Text>
        </Stacked>
      </GreenBackground>
      <Stacked>
        <Text
          fontSize="56px"
          lineHeight="66px"
          marginBottom={10}
          fontWeight={700}
        >
          Change the world without changing your life
        </Text>
        <Text fontSize="20" lineHeight="30px" marginBottom={10}>
          Changing your bank might not feel easy. <br /> But, in most cases, it
          won’t take you more than 10-15 minutes. And that’s nothing compared to
          giving up hot showers (or hot dogs) for the rest of your life. <br />{" "}
          In fact, it’s kind of amazing that the best thing you can do for
          climate change is also the easiest. <br /> Sure, you should walk more.{" "}
          <br /> Or take the bus. <br /> And eat less meat. (Even none, if
          you’re up for it) <br /> But…
        </Text>
        <Text
          fontSize="26px"
          lineHeight="34px"
          fontWeight={700}
          marginBottom={10}
        >
          Changing your bank takes just minutes, and once you’ve done it you
          don’t need to do it (or even think about it) again.
        </Text>
        <Text fontSize="20" lineHeight="30px">
          Yet every time you make a deposit, or pay your bill, or fund your
          pension, you’ll be making real change in the world. <br /> Switch It’s
          simple online tool will tell you if your bank, energy provider, or
          pension provider supports the fossil fuel industry in just 10 seconds.{" "}
          <br /> And we’ll help you discover alternative providers in just a few
          seconds more. So you have all the info you need to put your money to
          work for good. <br /> Switch It has already helped individuals and
          organizations move over $180 million to climate-friendly alternatives
          in banking, energy, and pensions. <br /> So click below to find your
          best alternative providers right now. <br /> And then don’t forget to
          tell the world (and your bank) all about it!
          <br />
        </Text>
      </Stacked>
    </VStack>
  );
};

export default WhySwitchIt;
