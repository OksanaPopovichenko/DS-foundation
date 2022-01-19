import React, { ReactElement } from 'react'

export interface StepProps {
	state: string
	title: string
	description: string
	number: number
}

export function Step(props: StepProps): ReactElement {
	const { state = 'NOT_STARTED', title = 'Title', description = 'This is a description', number = 1 } = props


	const themeList = {
		'NOT_STARTED': {
			color: 'text-neutral-500',
			description: description
		},
        'VALIDATED': {
			color: 'text-success-300',
			description: 'Verified'
		},
        'REJECTED': {
			color: 'text-error-500',
			description: 'Rejected'
		},
        'PENDING':  {
			color: 'text-warning-500',
			description: 'Pending'
		},
		'RESUBMISSION_REQUIRED':  {
			color: 'text-warning-500',
			description: 'Resubmission required'
		},
	} as any

	const step = themeList[state]

	return (
		<div className="flex justify-start">
			<div className="flex-shrink mr-3">
				<div className="h-10 w-10 relative bg-neutral-100 rounded flex flex-col justify-center items-center">
					<p className="text-center text-neutral-500 font-medium text-sm">{number}</p>
				</div>
			</div>
			<div>
				<p className="text-sm text-neutral-600 font-medium">{title}</p>
				<p className={`text-sm ${step.color}`}>{step.description}</p>
			</div>
		</div>
	)
}
