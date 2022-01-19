import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ColorPalette } from '../src/ColorPalette'
const meta: Meta = {
	title: 'Design Tokens/Colors',
	component: ColorPalette,
}

export default meta

const Template: Story = args => <ColorPalette {...args} />

export const Default = Template.bind({})

Default.args = {}
