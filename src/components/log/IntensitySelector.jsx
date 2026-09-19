import { INTENSITIES } from '../../data/logActivity.js'

export default function IntensitySelector({ intensityId, onSelect }) {
  return (
    <div className="flex flex-col gap-space-sm">
      <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">
        Tingkat Intensitas &amp; Beban Kardio
      </span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-xs">
        {INTENSITIES.map((opt) => {
          const active = opt.id === intensityId
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onSelect(opt.id)}
              className={
                active
                  ? 'flex flex-col p-space-sm rounded-xl bg-primary text-on-primary text-left transition-all'
                  : 'flex flex-col p-space-sm rounded-xl bg-surface-container hover:bg-surface-container-high text-left transition-all'
              }
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span className={`font-title-md text-title-md ${active ? 'text-on-primary font-bold' : 'text-on-surface'}`}>
                  {opt.title}
                </span>
                <span className={`w-2.5 h-2.5 rounded-full ${active ? 'bg-on-primary' : opt.dot}`}></span>
              </div>
              <span className={`font-body-md text-body-md leading-tight ${active ? 'text-on-primary-container' : 'text-on-surface-variant'}`}>
                {opt.desc}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
