import { Meta, Story } from '@storybook/react'
import { Step, StepProps } from '../src/Step'

const meta: Meta = {
	title: 'Components/Step',
	component: Step,
	argTypes: {
		state: {
			options: ['NOT_STARTED', 'VALIDATED', 'REJECTED', 'PENDING', 'RESUBMISSION_REQUIRED'],
			control: { type: 'select' },
		},
	},
	parameters: {
		controls: { expanded: true },
	},
}

export default meta

const Template: Story<StepProps> = args => <Step {...args} />

export const Default = Template.bind({})

Default.args = {}
