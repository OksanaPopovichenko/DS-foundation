import React, { ReactElement } from 'react'

function PrimaryColor(): ReactElement {
	const primary = [
		'bg-primary-50',
		'bg-primary-100',
		'bg-primary-200',
		'bg-primary-300',
		'bg-primary-400',
		'bg-primary-500',
		'bg-primary-600',
		'bg-primary-700',
		'bg-primary-800',
		'bg-primary-900',
	]
	const value = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

	return (
		<div className="flex flex-row items-center mb-5">
			<p className="capitalize font-semibold w-24">Primary</p>
			{primary.map((item, i) => {
				return (
					<div className="flex flex-col items-center mx-3">
						<div className={`h-12 w-12 rounded ${item}`}></div>
						<p className="text-sm font-light">{value[i]}</p>
					</div>
				)
			})}
		</div>
	)
}

function SecondaryColor(): ReactElement {
	const primary = [
		'bg-secondary-50',
		'bg-secondary-100',
		'bg-secondary-200',
		'bg-secondary-300',
		'bg-secondary-400',
		'bg-secondary-500',
		'bg-secondary-600',
		'bg-secondary-700',
		'bg-secondary-800',
		'bg-secondary-900',
	]
	const value = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

	return (
		<div className="flex flex-row items-center mb-5">
			<p className="capitalize font-semibold w-24">Secondary</p>
			{primary.map((item, i) => {
				return (
					<div className="flex flex-col items-center mx-3">
						<div className={`h-12 w-12 rounded ${item}`}></div>
						<p className="text-sm font-light">{value[i]}</p>
					</div>
				)
			})}
		</div>
	)
}

function SuccessColor(): ReactElement {
	const primary = [
		'bg-success-50',
		'bg-success-100',
		'bg-success-200',
		'bg-success-300',
		'bg-success-400',
		'bg-success-500',
		'bg-success-600',
		'bg-success-700',
		'bg-success-800',
		'bg-success-900',
	]
	const value = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

	return (
		<div className="flex flex-row items-center mb-5">
			<p className="capitalize font-semibold w-24">Success</p>
			{primary.map((item, i) => {
				return (
					<div className="flex flex-col items-center mx-3">
						<div className={`h-12 w-12 rounded ${item}`}></div>
						<p className="text-sm font-light">{value[i]}</p>
					</div>
				)
			})}
		</div>
	)
}

function ErrorColor(): ReactElement {
	const primary = [
		'bg-error-50',
		'bg-error-100',
		'bg-error-200',
		'bg-error-300',
		'bg-error-400',
		'bg-error-500',
		'bg-error-600',
		'bg-error-700',
		'bg-error-800',
		'bg-error-900',
	]
	const value = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

	return (
		<div className="flex flex-row items-center mb-5">
			<p className="capitalize font-semibold w-24">Error</p>
			{primary.map((item, i) => {
				return (
					<div className="flex flex-col items-center mx-3">
						<div className={`h-12 w-12 rounded ${item}`}></div>
						<p className="text-sm font-light">{value[i]}</p>
					</div>
				)
			})}
		</div>
	)
}

export function ColorPalette(): ReactElement {
	return (
		<div>
			<PrimaryColor />
			<SecondaryColor />
			<SuccessColor />
			<ErrorColor />
		</div>
	)
}
