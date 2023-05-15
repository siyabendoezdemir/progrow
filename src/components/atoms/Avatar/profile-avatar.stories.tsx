export default {
  title: 'Avatar',
  argTypes: {
    name: {
      name: 'name',
      defaultValue: 'SiyabendÖzdemir',
      control: {
        require: true,
        type: 'text'
      }
    },
    size: {
      name: 'size',
      defaultValue: 'medium',
      control: { 
        require: false, 
        type: 'select' 
      },
      options: ['small', 'medium', 'large'],
    },
  },
};
const template = args => `<profile-avatar name="${args.name}" size="${args.size}"></profile-avatar>`;

export const icon = template.bind({});
