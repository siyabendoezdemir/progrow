export default {
  title: 'Atoms/Code Battles/Editor',
  argTypes: {
    width: {
      name: 'width',
      defaultValue: 80,
      control: {
        require: true,
        type: 'number',
      },
    },
    height: {
      name: 'height',
      defaultValue: 80,
      control: {
        require: true,
        type: 'number',
      },
    },
  },
};
const template = args => `<battle-editor width="${args.width}" height="${args.height}"></battle-editor>`;

export const battleEditor = template.bind({});
battleEditor.args = {
  width: 80,
  height: 80,
};
