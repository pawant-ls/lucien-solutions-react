import type { Config } from "tailwindcss";

const config = {
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
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        text: "hsl(var(--text))",
        background: "hsl(var(--background))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        accent: "hsl(var(--accent))",
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
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: "1.875rem", // text-3xl
              lineHeight: "2.25rem",
              fontWeight: "700",
            },
            h2: {
              fontSize: "1.5rem", // text-2xl
              lineHeight: "2rem",
              fontWeight: "600",
            },
            h3: {
              fontSize: "1.25rem", // text-xl
              lineHeight: "1.75rem",
              fontWeight: "600",
            },
            h4: {
              fontSize: "1.125rem", // text-lg
              lineHeight: "1.75rem",
              fontWeight: "600",
            },
            h5: {
              fontSize: "1rem", // text-base
              lineHeight: "1.5rem",
              fontWeight: "600",
            },
            h6: {
              fontSize: "0.875rem", // text-sm
              lineHeight: "1.25rem",
              fontWeight: "600",
            },
            p: {
              fontSize: "1rem", // text-base
              lineHeight: "1.5rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
