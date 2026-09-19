function SliderRow({ label, display, unit, min, max, step, value, onChange, id }) {
  return (
    <div className="flex flex-col gap-space-sm">
      <div className="flex justify-between items-center text-body-md">
        <span className="font-body-md text-on-surface-variant">{label}</span>
        <div className="flex items-baseline gap-1">
          <span className="font-headline-sm text-headline-sm text-primary font-bold">{display}</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">{unit}</span>
        </div>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-primary h-1.5 bg-surface-container-highest rounded-lg cursor-pointer"
      />
    </div>
  )
}

export default function BiometricsCard({
  gender,
  onGenderChange,
  weight,
  onWeightChange,
  height,
  onHeightChange,
  age,
  onAgeChange,
  bmi,
  bmiBadge,
  bmr,
}) {
  return (
    <div className="rounded-xl bg-surface-container-low/90 backdrop-blur-xl p-space-md md:p-space-lg shadow-xl flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-xs text-on-surface font-title-md text-title-md">
          <span className="material-symbols-outlined text-tertiary text-[20px]">monitor_heart</span>
          <span>Kalkulator Terintegrasi BMI &amp; BMR</span>
        </div>
        <span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-tertiary uppercase">
          Bio-Metrik
        </span>
      </div>

      <div className="grid grid-cols-2 gap-space-xs bg-surface-container-lowest p-1 rounded-xl">
        {[
          { id: 'male', label: 'Pria' },
          { id: 'female', label: 'Wanita' },
        ].map((g) => (
          <button
            key={g.id}
            type="button"
            onClick={() => onGenderChange(g.id)}
            className={
              gender === g.id
                ? 'py-1.5 rounded-lg bg-surface-container-high text-primary font-label-md text-label-md uppercase transition-all'
                : 'py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md uppercase transition-all'
            }
          >
            {g.label}
          </button>
        ))}
      </div>

      <SliderRow label="Berat Badan" display={weight.toFixed(1)} unit="KG" id="slider-weight" min={40} max={150} step={0.5} value={weight} onChange={onWeightChange} />
      <SliderRow label="Tinggi Badan" display={height} unit="CM" id="slider-height" min={120} max={215} step={1} value={height} onChange={onHeightChange} />
      <SliderRow label="Usia Atlet" display={age} unit="THN" id="slider-age" min={15} max={85} step={1} value={age} onChange={onAgeChange} />

      <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
        <div className="bg-surface-container-lowest rounded-xl p-space-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Skor BMI</span>
            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase ${bmiBadge.classes}`}>
              {bmiBadge.label}
            </span>
          </div>
          <span className="font-display-stat text-headline-lg text-secondary font-bold">{bmi.toFixed(1)}</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">Rentang sehat 18.5 - 24.9</span>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-space-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">BMR Harian</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase bg-tertiary/20 text-tertiary">
              Basal
            </span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-display-stat text-headline-lg text-tertiary font-bold">{Math.round(bmr)}</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">kkal</span>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant">Kalori dasar istirahat</span>
        </div>
      </div>
    </div>
  )
}
