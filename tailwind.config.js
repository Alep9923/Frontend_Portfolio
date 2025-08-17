 tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#0A2463',
                        secondary: '#3E92CC',
                        accent: '#FFFAFF',
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'gradient-x': 'gradient-x 8s ease infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        },
                        'gradient-x': {
                            '0%, 100%': { 'background-position': '0% 50%' },
                            '50%': { 'background-position': '100% 50%' },
                        }
                    }
                }
            }
        }
        