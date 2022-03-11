import React from "react";
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  args: {
    label: "Button",
    primary: false,
    variant: "pulsing",
  },
};

const createTemplate = (defaults) =>
  Object.assign((props) => <Button {...props} />, defaults);

export const Primary = createTemplate({
  args: {
    primary: true,
  },
});

export const Large = createTemplate({
  args: {
    size: "large",
  },
});

export const Secondary = createTemplate({});

export const Small = createTemplate({
  args: {
    size: "small",
  },
});
