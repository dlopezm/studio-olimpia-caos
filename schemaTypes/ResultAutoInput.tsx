import { useEffect } from 'react'
import { set, useFormValue } from 'sanity'
import type { InputProps } from 'sanity'

/**
 * Calculates result if both scores are set, otherwise (for legacy data) shows the stored result value.
 */
export default function ResultAutoInput(props: InputProps) {
    const { value, onChange } = props

    // Get scores from the form state
    const localScore = useFormValue(['localScore']) as number | undefined
    const awayScore = useFormValue(['awayScore']) as number | undefined

    useEffect(() => {
        if (typeof localScore === 'number' && typeof awayScore === 'number') {
            let result: 'white' | 'dark' | 'draw' = 'draw'
            if (localScore > awayScore) result = 'white'
            else if (awayScore > localScore) result = 'dark'
            onChange(set(result))
        }
    }, [localScore, awayScore, onChange])

    const label =
        value === 'white'
            ? 'Victòria ◻️'
            : value === 'dark'
                ? 'Victòria ◼️'
                : value === 'draw'
                    ? 'Empat'
                    : '—'

    return (
        <div style={{ opacity: 0.5, pointerEvents: 'none', padding: '0.5em 0' }}>
            {label}
        </div>
    )
}
