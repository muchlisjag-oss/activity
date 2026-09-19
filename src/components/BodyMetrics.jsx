export default function BodyMetrics() {
  return (
    <div className="bg-surface-container rounded-xl p-space-md shadow-md space-y-space-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-tertiary text-[20px]">monitor_weight</span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">Metrik Tubuh</h3>
        </div>
        <span className="font-label-sm text-label-sm text-secondary bg-surface-container-high px-space-sm py-space-xs rounded-full">
          Kondisi Ideal
        </span>
      </div>
      <div className="grid grid-cols-3 gap-space-sm text-center">
        <div className="bg-surface-container-low p-space-sm rounded-xl flex flex-col justify-center">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Berat</span>
          <span className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">68.5</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">kg</span>
        </div>
        <div className="bg-surface-container-low p-space-sm rounded-xl flex flex-col justify-center">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">BMI</span>
          <span className="font-headline-sm text-headline-sm text-secondary font-bold mt-1">22.4</span>
          <span className="font-label-sm text-label-sm text-secondary">Normal</span>
        </div>
        <div className="bg-surface-container-low p-space-sm rounded-xl flex flex-col justify-center">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">BMR</span>
          <span className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">1,650</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">kkal/hari</span>
        </div>
      </div>
      <div className="p-space-sm bg-surface-container-high/60 rounded-xl flex items-center justify-between">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-[18px] text-tertiary">favorite</span>
          <span className="font-body-md text-label-sm text-on-surface">Detak Jantung Istirahat</span>
        </div>
        <span className="font-title-md text-body-md text-primary font-bold">54 BPM</span>
      </div>
    </div>
  )
}
