mkdir -p src/components/ui

cat > src/components/ui/button.tsx <<'JSX'
import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button className={`rounded-full bg-gray transition text-sm p-8 ${className}`} {...props}>
      {children}
    </button>
  )
}
JSX

cat > src/components/ui/card.tsx <<'JSX'
import React from 'react'

export interface CardProps {
  title: string
  children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div>{children}</div>
    </div>
  )
}
JSX

cat > src/components/ui/card-section.tsx <<'JSX'
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
JSX

cat > src/components/ui/chart.tsx <<'JSX'
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 20 },
  { name: 'Mar', value: 40 }
]

export const Chart = () => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
JSX

cat > src/components/ui/chart-bar.tsx <<'JSX'
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'A', value: 24 },
  { name: 'B', value: 18 },
  { name: 'C', value: 32 }
]

export const ChartBar = () => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
JSX

cat > src/components/ui/header.tsx <<'JSX'
import React from 'react'

export const Header = () => {
  return <header className="p-4 bg-gray-100 text-sm">Header</header>
}
JSX

cat > src/components/ui/header-mobile.tsx <<'JSX'
import React from 'react'

export const HeaderMobile = () => {
  return <div className="p-4 bg-gray-50 text-sm">Mobile Header</div>
}
JSX

cat > src/components/ui/input.tsx <<'JSX'
import React from 'react'

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} className="border rounded px-3 py-2 w-full" />
}
JSX

cat > src/components/ui/popover.tsx <<'JSX'
import React from 'react'

export const Popover = ({ trigger, children }: { trigger: React.ReactNode; children: React.ReactNode }) => {
  return (
    <div className="relative inline-block">
      {trigger}
      <div className="absolute left-0 top-full mt-2 p-4 bg-white rounded shadow">{children}</div>
    </div>
  )
}
JSX
