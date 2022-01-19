import React, { ReactElement } from 'react'
export interface CountryFlagProps {
	country: string
	className?: string
}

export function CountryFlag(props: CountryFlagProps): ReactElement {
	const { country = 'UKR', className } = props

	return (
		<img
			className={`inline-block rounded-sm ${className}`}
            src={`https://verify.synaps.io/images/icons/flags/${country}.svg`}
			alt={country}
		/>
	)
}
