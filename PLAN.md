# Plan: React + Radix UI Migration with esbuild

## Overview

Migrate the JavaScript widget codebase from vanilla D3.js to React + Radix UI while maintaining esbuild as the bundler. The goal is to have reusable React components that integrate with the existing anywidget Python bindings.

## Current State

- **Build tool**: esbuild v0.19.11 (already in place)
- **JS framework**: Vanilla JavaScript + D3.v7
- **Widgets**: ScatterWidget, BarWidget (D3-based)
- **Output**: ESM modules in `drawdata/static/`
- **Python bindings**: anywidget-based classes

## Target State

- **Build tool**: esbuild (same, with React/JSX support)
- **JS framework**: React 18 + Radix UI
- **Visualization**: D3.v7 (kept for data viz, integrated with React)
- **Output**: ESM modules in `drawdata/static/` (same location)
- **Python bindings**: anywidget (unchanged)

---

## Implementation Steps

### Step 1: Set up package.json for React dependencies

Create a `package.json` with:
- react, react-dom (v18)
- @radix-ui/react-* (components as needed: slider, button, dropdown, etc.)
- D3.v7 as a proper npm dependency

```bash
npm init -y
npm install react react-dom
npm install @radix-ui/react-slider @radix-ui/react-button @radix-ui/themes
npm install d3
npm install --save-dev esbuild
```

### Step 2: Update Makefile with React/JSX esbuild configuration

Modify esbuild commands to support JSX:

```makefile
js-scatter:
	./esbuild --watch=forever --bundle --format=esm \
		--jsx=automatic \
		--loader:.js=jsx \
		--outfile=drawdata/static/scatter_widget.js \
		js/scatter_widget.jsx

js-bar:
	./esbuild --watch=forever --bundle --format=esm \
		--jsx=automatic \
		--loader:.js=jsx \
		--outfile=drawdata/static/bar_widget.js \
		js/bar_widget.jsx

js-all:
	./esbuild --bundle --format=esm \
		--jsx=automatic \
		--loader:.js=jsx \
		--outfile=drawdata/static/scatter_widget.js \
		js/scatter_widget.jsx
	./esbuild --bundle --format=esm \
		--jsx=automatic \
		--loader:.js=jsx \
		--outfile=drawdata/static/bar_widget.js \
		js/bar_widget.jsx
```

Key flags:
- `--jsx=automatic`: Uses React 17+ JSX transform (no manual import needed)
- `--loader:.js=jsx`: Treat .js files as JSX (or use .jsx extension)
- `--format=esm`: ESM output for anywidget compatibility

### Step 3: Create React/anywidget integration wrapper

Create `js/lib/anywidget-react.js`:

```javascript
import React from 'react';
import { createRoot } from 'react-dom/client';

export function createWidget(Component) {
  return {
    render({ model, el }) {
      const root = createRoot(el);

      // Render React component with model prop
      root.render(<Component model={model} />);

      // Return cleanup function
      return () => root.unmount();
    }
  };
}
```

### Step 4: Create base Radix UI theme/component structure

Create `js/lib/theme.js` for shared Radix theming:

```javascript
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

export function WidgetTheme({ children }) {
  return (
    <Theme accentColor="blue" radius="medium">
      {children}
    </Theme>
  );
}
```

### Step 5: Convert ScatterWidget to React

Create `js/scatter_widget.jsx`:

```jsx
import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as d3 from 'd3';
import * as Slider from '@radix-ui/react-slider';
import { createWidget, useModelState } from './lib/anywidget-react';
import { WidgetTheme } from './lib/theme';

function ScatterCanvas({ data, brushSize, selectedClass, onDraw }) {
  const svgRef = useRef(null);
  // D3 rendering logic here, integrated with React refs
  // ...
}

function ScatterWidget({ model }) {
  const [data, setData] = useModelState(model, 'data');
  const [brushSize, setBrushSize] = useModelState(model, 'brushsize');
  const [selectedClass, setSelectedClass] = useState('a');

  return (
    <WidgetTheme>
      <div className="scatter-widget">
        <ScatterCanvas
          data={data}
          brushSize={brushSize}
          selectedClass={selectedClass}
          onDraw={handleDraw}
        />
        <Controls
          brushSize={brushSize}
          onBrushSizeChange={setBrushSize}
          selectedClass={selectedClass}
          onClassChange={setSelectedClass}
        />
      </div>
    </WidgetTheme>
  );
}

export default createWidget(ScatterWidget);
```

### Step 6: Create shared Radix UI control components

Create `js/components/Controls.jsx`:

```jsx
import * as Slider from '@radix-ui/react-slider';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

export function BrushSizeSlider({ value, onChange }) {
  return (
    <Slider.Root value={[value]} onValueChange={([v]) => onChange(v)}>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumb />
    </Slider.Root>
  );
}

export function ClassSelector({ value, onChange, classes }) {
  return (
    <ToggleGroup.Root type="single" value={value} onValueChange={onChange}>
      {classes.map(cls => (
        <ToggleGroup.Item key={cls.id} value={cls.id}>
          {cls.label}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
}
```

### Step 7: Convert BarWidget to React

Similar pattern to ScatterWidget, using shared components.

### Step 8: Update CSS for Radix UI

- Keep existing CSS variables for theming
- Add Radix UI overrides for consistent styling
- Maintain dark/light mode support

### Step 9: Test integration

- Verify anywidget model sync works with React state
- Test in Jupyter, marimo, and VSCode
- Verify bundle size is reasonable

---

## File Structure After Migration

```
js/
├── lib/
│   ├── anywidget-react.js    # React/anywidget bridge
│   └── theme.js              # Radix theme wrapper
├── components/
│   ├── Controls.jsx          # Shared control components
│   ├── BrushSizeSlider.jsx
│   ├── ClassSelector.jsx
│   └── Canvas.jsx            # D3 canvas component
├── scatter_widget.jsx        # Main scatter widget
├── bar_widget.jsx            # Main bar widget
└── d3.v7.js                  # (removed, use npm instead)

drawdata/static/
├── scatter_widget.js         # Bundled output
├── scatter_widget.css
├── bar_widget.js             # Bundled output
└── bar_widget.css
```

---

## Key Decisions to Confirm

1. **Radix UI Themes vs Primitives?**
   - Themes: Pre-styled, faster to implement
   - Primitives: Unstyled, more control over look
   - Recommendation: Start with Primitives for better control over existing styles

2. **Keep D3 for visualization?**
   - Yes - D3 is still the best for data visualization
   - React handles UI components, D3 handles the canvas/SVG

3. **JSX file extension?**
   - Use `.jsx` for clarity, or configure esbuild to handle `.js` as JSX
   - Recommendation: Use `.jsx` for React components

4. **State management approach?**
   - Custom hook `useModelState` that syncs React state with anywidget model
   - Keeps bidirectional sync working

---

## Questions for User

1. Do you want to use Radix Themes (pre-styled) or Radix Primitives (unstyled)?
2. Should we keep the existing CSS styling or redesign with Radix?
3. Are there specific Radix components you want to prioritize (Slider, Button, Dialog, etc.)?
