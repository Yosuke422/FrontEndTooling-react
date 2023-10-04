import React from 'react'
import { Button } from '../stories/Button'

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button primary>Primary Button</Button>
export const Secondary = () => <Button backgroundColor={'yellow'}>Secondary Button</Button>
