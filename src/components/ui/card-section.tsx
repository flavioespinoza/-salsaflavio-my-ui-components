import React from 'react'

export interface CardSectionProps {
  title: string
  children: React.ReactNode
}

export const CardSection: React.FC<CardSectionProps> = ({ title, children }) => {
  return (
    <div className="border-t pt-4 mt-4">
      <h3 className="font-medium text-sm mb-2">{title}</h3>
      {children}
    </div>
  )
}
