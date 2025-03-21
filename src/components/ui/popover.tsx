import React from 'react'

export const Popover = ({ trigger, children }: { trigger: React.ReactNode; children: React.ReactNode }) => {
  return (
    <div className="relative inline-block">
      {trigger}
      <div className="absolute left-0 top-full mt-2 p-4 bg-white rounded shadow">{children}</div>
    </div>
  )
}
