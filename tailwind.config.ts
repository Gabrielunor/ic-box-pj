/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: { sans: ["Inter", "sans-serif"] },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        ic: "990px",
        print: { raw: "print" },
      },
      fontSize: {
        h1: ["2rem", "2.375rem"],
        md: ["1.125rem", "1.625rem"],
      },
      colors: {
        border: "hsl(var(--border))",
        button: "hsl(var(--button))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        h2: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        unavaliable: {
          foreground: "hsl(var(--unavaliable-foreground))",
        },
        "best-profile": {
          foreground: "hsl(var(--best-profile-foreground))",
        },
        "good-profile": {
          foreground: "hsl(var(--good-profile-foreground))",
        },
        "average-profile": {
          foreground: "hsl(var(--average-profile-foreground))",
        },
        "risk-profile": {
          foreground: "hsl(var(--risk-profile-foreground))",
        },
        "high-risk-profile": {
          foreground: "hsl(var(--high-risk-profile-foreground))",
        },
        evaluate: {
          DEFAULT: "hsla(var(--evaluate))",
        },
        deny: {
          DEFAULT: "hsla(var(--deny))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 8px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: ["tailwindcss-animate"],
};
