export default {
  title: 'Profile/Level',
  argTypes: {
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
  devmode: false,
};