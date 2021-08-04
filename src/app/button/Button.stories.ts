import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../button/button.component';
import { componentWrapperDecorator } from '@storybook/angular';

export default {
  title: 'Button',
  component: ButtonComponent,
  decorators: [componentWrapperDecorator((story) => `<div style="margin: 3em">${story}</div>`)],
  parameters: {
    // docs: { 
    //   page: null 
    // },
    // creevey: { captureElement: null }
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
  buttonConfig: {
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
    updatedAt: new Date(2021, 0, 1, 9, 0),
    state: 'PRIMARY'
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonConfig: {
    ...Primary.args.buttonConfig,
    id: '2',
    buttonTitle: 'Secondary Button',
    state: 'SECONDARY',
    ad_txt: 'This button has additional unique text.'
  },
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  buttonConfig: {
    ...Primary.args.buttonConfig,
    id: '3',
    buttonTitle: 'Tertiary Button',
    updatedAt: new Date(2000, 5, 1, 5, 1),
    state: 'TERTIARY'
  },
};