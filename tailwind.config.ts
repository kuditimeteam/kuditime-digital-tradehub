import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
				display: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				lime: {
					DEFAULT: 'hsl(var(--lime))',
					foreground: 'hsl(var(--lime-foreground))'
				},
				ink: {
					DEFAULT: 'hsl(var(--ink))',
					foreground: 'hsl(var(--ink-foreground))'
				},
				success: 'hsl(var(--success))',
				warning: 'hsl(var(--warning))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'2xl': 'calc(var(--radius) + 6px)',
				'3xl': 'calc(var(--radius) + 14px)'
			},
			boxShadow: {
				/* Layered, low-opacity shadows — a single harsh shadow is the
				   fastest way to make a page look templated. */
				soft: '0 1px 2px hsl(158 24% 9% / 0.04), 0 2px 8px hsl(158 24% 9% / 0.04)',
				card: '0 1px 2px hsl(158 24% 9% / 0.04), 0 8px 24px -6px hsl(158 24% 9% / 0.08)',
				lifted: '0 2px 4px hsl(158 24% 9% / 0.04), 0 18px 40px -12px hsl(158 24% 9% / 0.16)',
				float: '0 24px 60px -18px hsl(158 24% 9% / 0.28)',
				glow: '0 0 0 1px hsl(var(--primary) / 0.12), 0 12px 32px -8px hsl(var(--primary) / 0.35)'
			},
			fontSize: {
				'display-sm': ['2.5rem', { lineHeight: '1.06', letterSpacing: '-0.03em' }],
				'display': ['3.25rem', { lineHeight: '1.02', letterSpacing: '-0.032em' }],
				'display-lg': ['4.25rem', { lineHeight: '0.98', letterSpacing: '-0.035em' }]
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				/* Marquee translates exactly -50% because the track renders its
				   children twice — that makes the loop seamless. */
				marquee: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-50%)' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-ring': {
					'0%': { transform: 'scale(0.9)', opacity: '0.7' },
					'70%': { transform: 'scale(1.6)', opacity: '0' },
					'100%': { transform: 'scale(1.6)', opacity: '0' }
				},
				'fade-up': {
					from: { opacity: '0', transform: 'translateY(14px)' },
					to: { opacity: '1', transform: 'none' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				marquee: 'marquee var(--marquee-duration, 40s) linear infinite',
				float: 'float 6s ease-in-out infinite',
				'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.24, 0, 0.38, 1) infinite',
				'fade-up': 'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
