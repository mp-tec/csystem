import * as Input from '@/components/HomeForm/Input'

import * as Select from '@/components/HomeForm/Select'
import { Textarea } from './Textarea'

export function HomeForm() {
  return (
    <form
      id="settings"
      className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
    >
      <div className="grid grid-cols-form gap-3">
        <label
          htmlFor="firstName"
          className="text-sm font-medium text-zinc-700 dark:text-zinc-200"
        >
          Nome
        </label>
        <div className="grid grid-cols-2 gap-6">
          <Input.Root>
            <Input.Control id="firstName" defaultValue="Pedro" />
          </Input.Root>

          <Input.Root>
            <Input.Control defaultValue="Dias" />
          </Input.Root>
        </div>
      </div>

      <div className="grid grid-cols-form gap-3 pt-5">
        <label
          htmlFor="email"
          className="text-sm font-medium text-zinc-700 dark:text-zinc-200"
        >
          Endereço de Email
        </label>
        <Input.Root>
          <Input.Control
            id="email"
            type="email"
            defaultValue="pdr050203@gmail.com"
          />
        </Input.Root>
      </div>

      <label className="grid gap-3 pt-5 lg:grid-cols-form">
        <span className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-100">
          Carro
        </span>
        <Select.Root name="timezone">
          <Select.Trigger>
            <Select.Value placeholder="Selecione o seu carro..." />
          </Select.Trigger>

          <Select.Content>
            <Select.Item value="utc-3">
              <Select.ItemText>
                Chevette
                <span className="text-sm text-zinc-500">Chevrolet</span>
              </Select.ItemText>
            </Select.Item>
          </Select.Content>
        </Select.Root>
      </label>

      <div className="grid gap-3 pt-5 lg:grid-cols-form">
        <label
          htmlFor="description"
          className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-100"
        >
          Descrição
          <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400">
            Escreva uma descrição 
          </span>
        </label>
        <div className="flex flex-col gap-3">
          <Textarea
            name="description"
            id="description"
            defaultValue="Descreva aqui informações sobre o carro."
          />
        </div>
      </div>

      <div className="grid grid-cols-form gap-3 pt-5">
        <label
          htmlFor="firstValue"
          className="text-sm font-medium text-zinc-700 dark:text-zinc-200"
        >
          Gasto
        </label>
        <div className="grid gap-6">
          <Input.Root>
            <Input.Prefix className='text-gray-400'>R$</Input.Prefix>
            <Input.Control type="number" id="firstValue" defaultValue="500" />
          </Input.Root>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 pt-5">
        <button
          type="button"
          className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:text-zinc-200 dark:hover:bg-zinc-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700"
        >
          Save
        </button>
      </div>
    </form>
  )
}
