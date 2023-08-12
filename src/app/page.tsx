import { SettingsTabs } from '@/components/SettingsTabs'

export default function Home() {
  return (
    <>
      <div className="text-4xl font-medium text-zinc-900 dark:text-zinc-200 flex">
        <h1>Sistema</h1>
      </div>

      <SettingsTabs />
    </>
  )
}
