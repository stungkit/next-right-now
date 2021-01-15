import {
  Meta,
  Story,
} from '@storybook/react/types-6-0';
import React from 'react';
import Btn, { Props } from '../../../components/utils/Btn';
import withChildrenMock from '../../shared/hocs/withChildrenMock';

type PropsWithChildrenMock = Props & {
  text?: string;
};

export default {
  title: 'Next Right Now/Form/Btn',
  component: Btn,
  argTypes: withChildrenMock({}),
} as Meta;

const Template: Story<PropsWithChildrenMock> = (props) => {
  const { text } = props;

  return (
    // @ts-ignore
    <Btn
      {...props}
      onClick={(): void => console.info('Click')}
    >
      {text || 'Default text'}
    </Btn>
  );
};

export const DynamicExample: Story<PropsWithChildrenMock> = Template.bind({});
DynamicExample.args = {
  text: 'Hello',
};
