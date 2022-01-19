import React, { ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface ButtonProps {
    onClick(): void
    loading?: boolean
    disabled?: boolean
    full?: boolean
    label: string
    theme: string
    icon?: any
    className?: string
}

export function Button(props: ButtonProps): ReactElement {
	const { label = 'Button', icon, theme = 'primary', onClick, disabled = false, full, loading, className } = props

	const themeList = {
		primary: {
			normal: 'bg-primary-500 border-primary-500 text-white',
			hover: 'hover:bg-primary-400 hover:border-primary-400 ',
			focus: 'focus:bg-primary-300 focus:border-primary-300',
		},
		secondary: {
			normal: 'bg-white border-gray-200 text-gray-700',
			hover: 'hover:bg-gray-50 hover:border-gray-300',
			focus: 'focus:bg-gray-200 focus:border-gray-200',
		},
		success: {
			normal: 'bg-green-500 border-green-500 text-white',
			hover: 'hover:bg-green-400 hover:border-green-400',
			focus: 'focus:bg-green-300 focus:border-green-300',
		},
		error: {
			normal: 'bg-red-500 border-red-500 text-white',
			hover: 'hover:bg-red-400 hover:border-red-400',
			focus: 'focus:bg-red-300 focus:border-red-300',
		},
	} as any

	const btn = themeList[theme]

	return (
		<button
			type="button"
			onClick={onClick}
			disabled={loading || disabled}
			className={`px-4 flex transition ease-in duration-150 justify-center items-center py-3 border rounded shadow-sm text-sm font-medium focus:outline-none 
		 	${btn.normal} ${btn.focus} ${className}
			${full ? 'w-full' : ''} 
			${loading || disabled ? `opacity-50 cursor-not-allowed` : `opacity-1 cursor-pointer ${btn.hover} ${btn.borderhover}`}`}
		>
			{icon ? <FontAwesomeIcon className="relative top-0.5 mr-2" icon={icon} /> : null}
			<span>{label}</span>
		</button>
	)
}


