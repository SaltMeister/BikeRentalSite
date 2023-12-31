/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", 
            "./src/*.{html,js, jsx}"],
  theme: {
    fontSize: {
      info: '0.80em',
      display: '3.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '3rem',
      phone: '0.5rem'
      
    }, 
    backgroundColor: theme => ({
      'primary': '#8ECAE6',
      'secondary': '#219EBC',
      'danger': '#FB8500',
      'dim': '#8ECAE6'
    }),
    textColor: theme => ({
      'header': '#023047',
      'highlight':  '#FB8500'

    }),
    borderColor: theme => ({
      'highlight': '#FFB703',
    }),
    boxShadowColor: theme => ({
      'primary': '#8ECAE6',
      'secondary': '#219EBC',
      'danger': '#FB8500',
      'dim': '#8ECAE6'
    })
  },
}

