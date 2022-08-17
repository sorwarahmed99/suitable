const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.js',
    ],

    theme: {
        extend: {
            // fontFamily: {
            //     sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            // },
            backgroundImage: () => ({
                'login-background':
                    "linear-gradient(rgba(230,91,90, 0.2), rgba(230,91,90, 0.1)), url('/assets/images/login.svg')",
                'register-background':
                    "linear-gradient(rgba(230,91,90, 0.2), rgba(230,91,90, 0.1)), url('/assets/images/register.svg')",
                'onboarding-background':
                    "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('https://images.unsplash.com/photo-1614287893397-67d3e6137c56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80')",
                'location-background':
                    "linear-gradient(rgba(0,0,0, 0.10), rgba(0,0,0, 0.10)), url('/assets/images/location.svg')",
                'rel-background':
                    "linear-gradient(rgba(255, 182, 182, 0.10), rgba(255, 182, 182, 0.70)), url('/assets/images/rel.svg')",
                'career-background':
                    "linear-gradient(rgba(255, 182, 182, 0.30), rgba(255, 182, 182, 0.30)), url('/assets/images/career.svg')",
                'family-background':
                    "linear-gradient(rgba(255, 182, 182, 0.30), rgba(255, 182, 182, 0.30)), url('/assets/images/familu.svg')",
                'plan-background':
                    "linear-gradient(rgba(0,0,0, 0.10), rgba(0,0,0, 0.10)), url('/assets/images/plan.svg')",
                'empty-background':
                    "linear-gradient(rgba(0,0,0, 0.10), rgba(0,0,0, 0.10)), url('/assets/images/empty.svg')",
                'landing-background':
                    'linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80)',
                'profile-background':
                    "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/background-1920x1080.jpg')",
            }),
        },
    },

    plugins: 
    [require('@tailwindcss/forms')],
    
};

require("tailwind-heropatterns")({
    // as per tailwind docs you can pass variants
    variants: [],
  
    // the list of patterns you want to generate a class for
    // the names must be in kebab-case
    // an empty array will generate all 87 patterns
    patterns: ["polka-dots", "signal"],
  
    // The foreground colors of the pattern
    colors: {
      default: "#9C92AC",
      "blue-dark": "#000044" //also works with rgb(0,0,205)
    },
  
    // The foreground opacity
    opacity: {
      default: "0.4",
      "100": "1.0"
    }
  });
