# @salsaflavio/my-ui-components

A collection of reusable UI components for React and Next.js using Tailwind CSS.

## ✨ Installation

```bash
npm install @salsaflavio/my-ui-components
```

## 🧩 Usage

```tsx
import { Button, HomeIcon } from '@salsaflavio/my-ui-components'

export default function Example() {
  return (
    <div>
      <Button className="bg-blue-500 text-white">Click Me</Button>
      <HomeIcon className="w-6 h-6 text-gray-700" />
    </div>
  )
}
```

## 🎨 Tailwind Setup Required

Make sure your project has Tailwind CSS installed and includes the module in `content`:

**tailwind.config.js**
```js
module.exports = {
  content: [
    './node_modules/@salsaflavio/my-ui-components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}' // or your project paths
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
```

And include this in your global CSS:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 📜 License

MIT
