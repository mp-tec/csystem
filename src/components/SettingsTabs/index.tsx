'use client'

import { useState } from 'react'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { HomeForm } from '../HomeForm'
import { PricingTable } from '../PricingTable'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 ">
        <TabItem
          value="tab1"
          title="Informações"
          isSelected={currentTab === 'tab1'}
        />
        <TabItem
          value="tab2"
          title="Gastos"
          isSelected={currentTab === 'tab2'}
        />
        <TabItem
          value="tab3"
          title="Ganhos"
          isSelected={currentTab === 'tab3'}
        />
        <TabItem value="tab4" title="Total" isSelected={currentTab === 'tab4'} />
      </Tabs.List>
      
      <Tabs.Content value="tab1">
       <HomeForm />
      </Tabs.Content>

      <Tabs.Content value="tab2">
       <PricingTable />
      </Tabs.Content>
    </Tabs.Root>
  )
}
