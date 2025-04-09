module.exports = {
    // ...
    theme: {
        extend: {
            boxShadow: {
                'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
            },
            transitionDuration: {
                '200': '200ms',
            },
            transitionProperty: {
                'border': 'border-color',
                'shadow': 'box-shadow',
            },
            spacing: {
                'inline-start': 'inline-start',
                'inline-end': 'inline-end',
            },
            borderRadius: {
                DEFAULT: 'var(--radius)'
            },
            colors: {
                primary: 'hsl(var(--primary) / <alpha-value>)',
                'primary-foreground': 'hsl(var(--primary-foreground) / <alpha-value>)',
                zinc: {
                    500: 'hsl(var(--zinc-primary))',
                },
                slate: {
                    500: 'hsl(var(--slate-primary))',
                },
                stone: {
                    500: 'hsl(var(--stone-primary))',
                },
                gray: {
                    500: 'hsl(var(--gray-primary))',
                },
                neutral: {
                    500: 'hsl(var(--neutral-primary))',
                },
                red: {
                    500: 'hsl(var(--red-primary))',
                },
                rose: {
                    500: 'hsl(var(--rose-primary))',
                },
                orange: {
                    500: 'hsl(var(--orange-primary))',
                },
                green: {
                    500: 'hsl(var(--green-primary))',
                },
                blue: {
                    500: 'hsl(var(--blue-primary))',
                },
                yellow: {
                    500: 'hsl(var(--yellow-primary))',
                },
                violet: {
                    500: 'hsl(var(--violet-primary))',
                },
            }

        }
    },
    corePlugins: {
        textAlign: false, // Disable default text-align utilities
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.text-start': { 'text-align': 'start' },
                '.text-end': { 'text-align': 'end' },
                '.ms-4': { 'margin-inline-start': '1rem' },
                '.me-4': { 'margin-inline-end': '1rem' },
            })
        }
    ]
}