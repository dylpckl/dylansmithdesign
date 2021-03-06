import React from 'react'
import classNames from 'classnames'
import { ExternalLinkIcon } from '@heroicons/react/outline'

function ExternalButton({ href, size, children }) {
    return (
        <a href={href} target="_blank" rel='noreferrer'>
            <button
                className={classNames(
                    `all flex items-center rounded border-4 border-black bg-skin-el-button py-4 px-4 text-sm font-bold text-skin-el-button-text transition hover:translate-y-[-.25rem] hover:rotate-1 hover:drop-shadow-neu-light-sm dark:hover:drop-shadow-neu-dark-sm lg:px-8 lg:text-base`,
                    {
                        "text-xs": size === "sm",
                        "text-xl": size === "lg",
                    }
                )}
            >
                {children}
                <ExternalLinkIcon className='ml-4 h-6'/>
            </button>
        </a>
  )
}

export default ExternalButton