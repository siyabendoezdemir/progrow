export default {
  title: 'Molecules/Profile/Profile Card',
  argTypes: {
    devmode: {
      name: 'Developer Mode',
      defaultValue: false,
      control: 'boolean',
    }
  }
};
const template = args => `<profile-card devmode="${args.devmode}"></profile-card>`;

export const profileCard = template.bind({});
profileCard.args = {
  devmode: false,
}