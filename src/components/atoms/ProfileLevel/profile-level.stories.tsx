export default {
  title: 'Atoms/Profile/Level',
  argTypes: {
    devmode: {
      name: 'Developer Mode',
      defaultValue: false,
      control: 'boolean',
    }
  },
};

const Template = args => {
  return `<profile-level devmode="${args.devmode}" />`;
};

export const profileLevel = Template.bind({});
profileLevel.args = {
  devmode: false,
};