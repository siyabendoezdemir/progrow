export default {
  title: 'Level',
  argTypes: {
    level: {
      name: 'Level',
      defaultValue: 1,
      control: {
        type: 'number',
        min: 1,
        max: 250,
      },
    },
    xp: {
      name: 'XP',
      defaultValue: 0,
      control: {
        type: 'number',
        min: 0,
        max: 100,
      },
    },
    devmode: {
      name: 'Developer Mode',
      defaultValue: false,
      control: 'boolean',
    }
  },
};

const Template = args => {
  return `<profile-level xp="${args.xp}" devmode="${args.devmode}" level="${args.level}"/>`;
};

export const profileLevel = Template.bind({});
profileLevel.args = {
  level: 1,
  xp: 0,
  devmode: false,
};