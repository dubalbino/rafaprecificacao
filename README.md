# Real Price Calculator

This project is a simple React application that computes the real price of products based on various input parameters. It features a user-friendly interface with a form for data entry, allowing users to input the necessary values to calculate the final price of a product.

## Features

- **Input Fields**: Users can enter the following data:
  - Cost Price
  - Fixed Costs
  - Tax Rate
  - Commission Rate
  - Desired Profit Margin

- **Calculation Button**: A button labeled "Calcular o Preço Real do Produto" triggers the calculation of the real price.

- **Responsive Design**: The application is designed to be responsive and user-friendly.

- **Gradient Background**: The background features a visually appealing gradient using gold, white, and petroleum green colors.

## Project Structure

```
real-price-calculator
├── public
│   ├── index.html        # Main HTML file
│   └── logo.svg          # Logo image
├── src
│   ├── components         # React components
│   │   ├── CalculatorForm.jsx
│   │   ├── TitleSection.jsx
│   │   └── Logo.jsx
│   ├── css                # CSS styles
│   │   ├── App.css
│   │   ├── CalculatorForm.css
│   │   ├── TitleSection.css
│   │   └── Logo.css
│   ├── scripts            # JavaScript functions
│   │   └── calculatePrice.js
│   ├── App.jsx            # Main application component
│   └── index.js          # Entry point of the application
├── package.json           # npm configuration file
└── README.md              # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd real-price-calculator
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

## Usage

Once the application is running, navigate to `http://localhost:3000` in your web browser. You will see the calculator interface where you can enter the required values and calculate the real price of the product.

## License

This project is open-source and available under the MIT License.