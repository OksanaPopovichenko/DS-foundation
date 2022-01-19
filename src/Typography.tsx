import React, { ReactElement } from 'react'

export interface TypographyProps {
	variant: string
	text: string
	className?: string
}

export function Typography(props: TypographyProps): ReactElement {
	const { variant = 'heading-h1-bold', text = 'Typography', className } = props

	const variantList = {
		'display-1-extrabold': 'text-9xl font-extrabold',
		'display-1-bold': 'text-9xl font-bold',
		'display-1-semibold': 'text-9xl font-semibold',
		'display-1-normal': 'text-9xl font-normal',
		'display-1-light': 'text-9xl font-light',
		'display-2-extrabold': 'text-8xl font-extrabold',
		'display-2-bold': 'text-8xl font-bold',
		'display-2-semibold': 'text-8xl font-semibold',
		'display-2-normal': 'text-8xl font-normal',
		'display-2-light': 'text-8xl font-light',
		'heading-h1-extrabold': 'text-7xl font-extrabold',
		'heading-h1-bold': 'text-7xl font-bold',
		'heading-h1-semibold': 'text-7xl font-semibold',
		'heading-h1-normal': 'text-7xl font-normal',
		'heading-h1-light': 'text-7xl font-light',
		'heading-h1-small-bold': 'text-6xl font-bold',
		'heading-h1-small-semibold': 'text-6xl font-semibold',
		'heading-h1-small-extrabold': 'text-6xl font-extrabold',
		'heading-h1-small-normal': 'text-6xl font-normal',
		'heading-h1-small-light': 'text-6xl font-light',
		'heading-h2-extrabold': 'text-5xl font-extrabold',
		'heading-h2-bold': 'text-5xl font-bold',
		'heading-h2-semibold': 'text-5xl font-semibold',
		'heading-h2-normal': 'text-5xl font-normal',
		'heading-h2-light': 'text-5xl font-light',
		'heading-h2-small-bold': 'text-4xl font-bold',
		'heading-h2-small-semibold': 'text-4xl font-semibold',
		'heading-h2-small-extrabold': 'text-4xl font-extrabold',
		'heading-h2-small-normal': 'text-4xl font-normal',
		'heading-h2-small-light': 'text-4xl font-light',
		'heading-h3-bold': 'text-3xl font-bold',
		'heading-h3-semibold': 'text-3xl font-semibold',
		'heading-h3-extrabold': 'text-3xl font-extrabold',
		'heading-h3-normal': 'text-3xl font-normal',
		'heading-h3-light': 'text-3xl font-light',
		'heading-h3-small-bold': 'text-2xl font-bold',
		'heading-h3-small-semibold': 'text-2xl font-semibold',
		'heading-h3-small-extrabold': 'text-2xl font-extrabold',
		'heading-h3-small-normal': 'text-2xl font-normal',
		'heading-h3-small-light': 'text-2xl font-light',
		'heading-h4-bold': 'text-xl font-bold',
		'heading-h4-semibold': 'text-xl font-semibold',
		'heading-h4-extrabold': 'text-xl font-extrabold',
		'heading-h4-normal': 'text-xl font-normal',
		'heading-h4-light': 'text-xl font-light',
		'heading-h4-small-bold': 'text-lg font-bold',
		'heading-h4-small-semibold': 'text-lg font-semibold',
		'heading-h4-small-extrabold': 'text-lg font-extrabold',
		'heading-h4-small-normal': 'text-lg font-normal',
		'heading-h4-small-light': 'text-lg font-light',
		'heading-p-bold': 'text-base font-bold',
		'heading-p-semibold': 'text-base font-semibold',
		'heading-p-extrabold': 'text-base font-extrabold',
		'heading-p-normal': 'text-base font-normal',
		'heading-p-light': 'text-base font-light',
		'heading-p2-bold': 'text-sm font-bold',
		'heading-p2-semibold': 'text-sm font-semibold',
		'heading-p2-extrabold': 'text-sm font-extrabold',
		'heading-p2-normal': 'text-sm font-normal',
		'heading-p2-light': 'text-sm font-light',
	} as any

	const textStyle = variantList[variant]

	return <p className={`${textStyle} ${className ? className : ''}`}>{text}</p>
}
