export default {
  title: 'Time Tracker',
  argTypes: {
    username: {
      name: 'Username',
      defaultValue: '',
      control: {
        require: true,
        type: 'text'
      }
    }
  }
};
const template = args => `<tracking-time username="${args.username}"></tracking-time>`;

export const timeTracking = template.bind({});
timeTracking.args = {
  username: ''
}