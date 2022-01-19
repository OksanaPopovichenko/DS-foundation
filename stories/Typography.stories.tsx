import React from 'react'
import { Meta, Story } from '@storybook/react'
import { TypographyProps, Typography } from '../src/Typography'

const meta: Meta = {
	title: 'Components/Typography',
	component: Typography,
	argTypes: {
		variant: {
			options: [
				'display-1-extra-bold',
				'display-1-bold',
				'display-1-semibold',
				'display-2-extra-bold',
				'display-2-bold',
				'display-2-semibold',
				'heading-h1-extrabold',
				'heading-h1-bold',
				'heading-h1-semibold',
				'heading-h2-extrabold',
				'heading-h2-bold',
				'heading-h2-semibold',
				'heading-h1-small-extrabold',
				'heading-h1-small-bold',
				'heading-h1-small-semibold',
				'heading-h2-small-extrabold',
				'heading-h2-small-bold',
				'heading-h2-small-semibold',
			],
			control: { type: 'select' },
		},
	},
	parameters: {
		controls: { expanded: true },
	},
}

export default meta

const Template: Story<TypographyProps> = args => <Typography {...args} />

export const Default = Template.bind({})

Default.args = {}

export const AllTypography = () => {
	const options = [
		'display-1-extrabold',
		'display-1-bold',
		'display-1-semibold',
		'display-1-normal',
		'display-1-light',
		'display-2-extrabold',
		'display-2-bold',
		'display-2-semibold',
		'display-2-normal',
		'display-2-light',
		'heading-h1-extrabold',
		'heading-h1-bold',
		'heading-h1-semibold',
		'heading-h1-normal',
		'heading-h1-light',
		'heading-h1-small-extrabold',
		'heading-h1-small-bold',
		'heading-h1-small-semibold',
		'heading-h1-small-normal',
		'heading-h1-small-light',
		'heading-h2-extrabold',
		'heading-h2-bold',
		'heading-h2-semibold',
		'heading-h2-normal',
		'heading-h2-light',
		'heading-h2-small-extrabold',
		'heading-h2-small-bold',
		'heading-h2-small-semibold',
		'heading-h2-small-normal',
		'heading-h2-small-light',
		'heading-h3-extrabold',
		'heading-h3-bold',
		'heading-h3-semibold',
		'heading-h3-normal',
		'heading-h3-light',
		'heading-h3-small-extrabold',
		'heading-h3-small-bold',
		'heading-h3-small-semibold',
		'heading-h3-small-normal',
		'heading-h3-small-light',
		'heading-p-extrabold',
		'heading-p-bold',
		'heading-p-semibold',
		'heading-p-normal',
		'heading-p-light',
		'heading-p2-extrabold',
		'heading-p2-bold',
		'heading-p2-semibold',
		'heading-p2-semibold',
		'heading-p2-normal',
		'heading-p2-light',
	]

	return (
		<div className="flex flex-col">
			{options.map((el, i) => {
				return (
					<div className="py-4" key={i}>
						<Typography variant="heading-p-normal" text={el} className="text-neutral-600" />
						<Typography variant={el} text="Typography" />
					</div>
				)
			})}
		</div>
	)
}
