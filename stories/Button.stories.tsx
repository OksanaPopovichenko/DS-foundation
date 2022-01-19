import { Meta, Story } from '@storybook/react'
import { Button, ButtonProps } from '../src/Button'

const meta: Meta = {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		theme: {
			options: ['primary', 'secondary', 'success', 'error'],
			control: { type: 'select' },
		},
	},
	parameters: {
		controls: { expanded: true },
	},
}

export default meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Default = Template.bind({})

Default.args = {}

export function AllButtons() {
	return (
		<div className="flex flex-row">
			<Button className="mr-2" theme="primary" label="Button" onClick={() => console.log('Click primary!')} />
			<Button className="mr-2" theme="secondary" label="Button" onClick={() => console.log('Click secondary!')} />
			<Button className="mr-2" theme="success" label="Button" onClick={() => console.log('Click success!')} />
			<Button className="mr-2" theme="error" label="Button" onClick={() => console.log('Click error!')} />
		</div>
	)
}
