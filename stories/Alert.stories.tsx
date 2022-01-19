import { Meta, Story } from '@storybook/react'
import { Alert, AlertProps } from '../src/Alert'

const meta: Meta = {
	title: 'Components/Alert',
	component: Alert,
	argTypes: {
		state: {
			options: ['success', 'error', 'warning'],
			control: { type: 'select' },
		},
        size: {
            options: ['extend', 'regular'],
			control: { type: 'select' },
        }
	},
	parameters: {
		controls: { expanded: true },
	},
}

export default meta

const Template: Story<AlertProps> = args => <Alert {...args} />

export const Default = Template.bind({})

Default.args = {}

export function AllAlerts() {
	return (
		<div className="flex flex-col">
            <Alert state="success" title="This is a success" className="mb-4" />
            <Alert state="success" title="This is a success" description='and this is a desciption' className="mb-4" />
            <Alert state="warning" title="This is a warning" className="mb-4" />
            <Alert state="warning" title="This is a warning" description='and this is a desciption' className="mb-4" />
            <Alert state="error" title="This is an error" className="mb-4" />
            <Alert state="error" title="This is a error" description='and this is a desciption' className="mb-4" />
		</div>
	)
}

