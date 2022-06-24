import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Modal from ".";

export default {
  title: "Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const ModalStorybook: ComponentStory<typeof Modal> = (args) => <Modal />;
