import { AgeGroup } from '@/lib/types'

const config: Record<string, { label: string; className: string }> = {
  '3-6':   { label: '3–6 år',   className: 'bg-green-100 text-green-700 border-green-200' },
  '7-10':  { label: '7–10 år',  className: 'bg-sky-100 text-sky-700 border-sky-200' },
  '10-12': { label: '10–12 år', className: 'bg-orange-100 text-orange-700 border-orange-200' },
  'voksen':{ label: 'Voksen',   className: 'bg-slate-100 text-slate-700 border-slate-200' },
}

export default function AgeBadge({ ageGroup, size = 'sm' }: { ageGroup: AgeGroup; size?: 'sm' | 'md' | 'lg' }) {
  const cfg = config[ageGroup] ?? config['voksen']
  const sizeClass = size === 'lg' ? 'text-sm px-3 py-1.5' : size === 'md' ? 'text-xs px-2.5 py-1' : 'text-xs px-2 py-0.5'
  return (
    <span className={`inline-flex items-center font-bold rounded-full border ${cfg.className} ${sizeClass}`}>
      {cfg.label}
    </span>
  )
}
