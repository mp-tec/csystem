import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type TextareaProps = ComponentProps<'textarea'>

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      className={twMerge(
        'flex min-h-[120px] w-full resize-y items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400',
        'focus-visible:border-green-300 focus-visible:ring-4 focus-visible:ring-green-100 dark:focus-visible:border-green-500 dark:focus-visible:ring-green-500/10',
        props.className,
      )}
      {...props}
    />
  )
}
