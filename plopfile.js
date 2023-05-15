module.exports = function (plop) {
    plop.setGenerator('component', {
      description: 'Generate a new Stencil component with Storybook integration',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Component name (in PascalCase):',
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'plop-templates/component.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
          templateFile: 'plop-templates/stories.hbs',
        },
        {
            type: 'add',
            path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.scss',
        },
      ],
    });
  };
  