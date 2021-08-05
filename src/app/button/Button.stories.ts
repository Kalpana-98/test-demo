import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../button/button.component';
import { componentWrapperDecorator } from '@storybook/angular';

export default {
  title: 'Button',
  component: ButtonComponent,
  decorators: [componentWrapperDecorator((story) => `<div style="margin: 3em">${story}</div>`)],
  argTypes: {
    variant: {
      options: ['Start', 'Stop'],
      control: { type: 'radio' }
    },
  },
  parameters: {
    // creevey: { captureElement: '#root' }
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
    styles: {
      position: 'relative',
      width: '150px',
      height: '60px',
      backgroundColor: '#0000ff',
      color: '#fff',
      fontFamily: 'sans-serif',
      fontSize: '20px',
      borderRadius: '10px',
      marginTop: '10px'
    },
    text: 'Click',
    id: '1',
    buttonTitle: 'Primary Button',
    state: 'PRIMARY',
    updatedAt: new Date(2021, 0, 1, 9, 0),
};

export const Secondary = Template.bind({});
Secondary.args = {
    ...Primary.args,
    id: '2',
    buttonTitle: 'Secondary Button',
    state: 'SECONDARY',
    ad_txt: 'This button has additional text.'
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    ...Primary.args,
    id: '3',
    buttonTitle: 'Tertiary Button',
    state: 'TERTIARY',
    updatedAt: new Date(2000, 5, 1, 5, 1),
};
