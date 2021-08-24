import React from 'react';
import Input from '../components/forms/Input/input';

export default {
  title: 'Components/Forms/Input',
  component: Input,
  subcomponents: { InputWithIcon, FullInput },
  args: {
    labelName: 'Label',
    subLabel: <span className="optional ml-1">(Sublabel)</span>,
    subtitle: 'subtitle',
    inputClassName: 'channel-name-input',
    icon: <div className="input-icon-storybook">★</div>,
    onChange: () => {},
  },
};

export const Default = (args) => <Input labelName={args.labelName} onChange={args.onChange} />;

export const InputWithIcon = args => <Input labelName={args.labelName} onChange={args.onChange} icon={args.icon} inputClassName={args.inputClassName} />

export const FullInput = args => <Input {...args}  />
