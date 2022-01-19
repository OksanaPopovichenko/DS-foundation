import React, { ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faExclamationTriangle, faTimesCircle } from '@fortawesome/pro-duotone-svg-icons'

export interface AlertProps {
	state: string
	title: string
	description?: string
    size?: string
    className?: string
}

export function Alert(props: AlertProps): ReactElement {
	const { state = 'success', title = "This is an alert", description, size = 'extend', className } = props

	const theme = {
        success: {
			bg: 'bg-success-50',
			icon: faCheckCircle,
			title: 'text-success-500',
			description: 'text-success-900',
			iconColor: 'text-success-500',
		},
		error: {
			bg: 'bg-error-50',
			icon: faTimesCircle,
			title: 'text-error-500',
			description: 'text-error-900',
			iconColor: 'text-error-500',
		},
		warning: {
			bg: 'bg-warning-50',
			icon: faExclamationTriangle,
			title: 'text-warning-500',
			description: 'text-warning-900',
			iconColor: 'text-warning-500',
		},
	} as any

	const alert = theme[state]

	return (
		<>
			<div className={`${className}  rounded p-3 mx-0 ${alert.bg}`}>
				<div className="flex items-start">
					<div>
						<p className="leading-5">
							<FontAwesomeIcon className={`text-md mx-2 mr-3 ${alert.iconColor}`} icon={alert.icon} />
						</p>
					</div>
                    {size === 'extend' ? (
						<div>
							<h3 className={`text-sm font-medium ${alert.title}`}>{title}</h3>
							<h3 className={`text-sm font-regular ${alert.description}`}>{description}</h3>
						</div>
					) : (
						<div>
							<h3 className={`text-sm font-medium ${alert.title}`}>
								{title} {description ? `: ${description}` : null}
							</h3>
						</div>
					)}
				</div>
			</div>
		</>
	)
}
