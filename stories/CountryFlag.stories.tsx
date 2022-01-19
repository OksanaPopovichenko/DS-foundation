import { Meta, Story } from '@storybook/react'
import { CountryFlag, CountryFlagProps } from '../src/CountryFlag'

const meta: Meta = {
	title: 'Components/CountryFlag',
	component: CountryFlag,
	parameters: {
		controls: { expanded: true },
	},
}

export default meta

const Template: Story<CountryFlagProps> = args => <CountryFlag {...args} />

export const Default = Template.bind({})

Default.args = {}
