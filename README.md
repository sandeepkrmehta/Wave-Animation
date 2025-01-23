

```bash
# Wave Grid Component

This is a dynamic wave grid component built using React and styled with Tailwind CSS.  
It creates a grid of cells that animate in a wave pattern, with colors changing periodically.  
The grid can be customized by adjusting the number of rows, columns, and the speed of the wave.

## Features

- **Wave Animation**: Cells animate from left to right and change colors every 5 seconds.
- **Customization**: Configure the number of rows, columns, and speed of animation.
- **Responsive Design**: The grid is responsive, and the cells resize based on the screen size.
- **Color Cycling**: The wave color cycles through different colors like green, blue, red, yellow, and cyan every 5 seconds.

## Installation

To use the Wave Grid component in your React project, follow these steps:

1. **Clone or Download the Repository**:
    ```bash
    git clone https://github.com/sandeepkrmehta/Wave-Animation/
    ```

2. **Install Dependencies**:
    If you haven’t installed TailwindCSS already in your project, follow these steps.

    Install TailwindCSS via npm:
    ```bash
    npm install tailwindcss
    ```

    Create a `tailwind.config.js` file and configure it as needed. More info can be found here:  
    [TailwindCSS Installation](https://tailwindcss.com/docs/installation)

3. **Add Tailwind CSS to Your Project**:
    Add the following lines to your `index.css` (or `App.css` depending on your setup):
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

## Usage

### Props:
- `rows` (default: 15): The number of rows in the grid.
- `cols` (default: 17): The number of columns in the grid.
- `speed` (default: 200): The speed of the wave animation (in milliseconds).

### Example Usage:
```javascript
import React from 'react';
import Grid from './Grid';

const App = () => {
  return (
    <div className='App'>
      <Grid rows={15} cols={17} speed={200} />
    </div>
  );
};

export default App;
```

This will render a grid with 15 rows and 17 columns, with the wave animation speed set to 200ms.

## How It Works

### 1. **Wave Animation**:
- The grid consists of cells that animate in a wave pattern.
- Each cell in the active row lights up one by one from left to right, and the animation resets after completing the row.
- The color of the wave changes every 5 seconds, cycling through a list of colors: green, blue, red, yellow, and cyan.

### 2. **Responsiveness**:
- The grid uses Tailwind's utility classes to make the cells responsive.
- The cell size adjusts based on screen size (e.g., `w-5`, `sm:w-6`, `md:w-7`, etc.).
- The number of columns is fixed to the value specified by the `cols` prop (default: 17), and the grid layout will adjust accordingly.

## Styling

The component is styled using Tailwind CSS classes for responsiveness and design.  
The grid layout is set using `grid-template-columns`, and the wave animation effect is achieved through CSS transitions.  
The active cells in the grid have a glowing effect to highlight the animation.

### Custom Styling (Optional):
If you want to customize the appearance of the grid further, you can modify the `App.css` or add more Tailwind classes as needed.

#### Custom Styling:
```css
/*  Custom Styling */
.grid {
  background-color: #222;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
}
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
```
