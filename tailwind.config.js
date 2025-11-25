module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "variable-collection-basic-black":
          "var(--variable-collection-basic-black)",
        "variable-collection-basic-white":
          "var(--variable-collection-basic-white)",
        "variable-collection-BG-03-f4f7fd":
          "var(--variable-collection-BG-03-f4f7fd)",
        "variable-collection-BG-09-dfe3ec":
          "var(--variable-collection-BG-09-dfe3ec)",
        "variable-collection-blue-01-0d1458":
          "var(--variable-collection-blue-01-0d1458)",
        "variable-collection-error-color-red":
          "var(--variable-collection-error-color-red)",
        "variable-collection-grayscale-01-0b0c0e":
          "var(--variable-collection-grayscale-01-0b0c0e)",
        "variable-collection-grayscale-02-1c253f":
          "var(--variable-collection-grayscale-02-1c253f)",
        "variable-collection-grayscale-03-5e616b":
          "var(--variable-collection-grayscale-03-5e616b)",
        "variable-collection-grayscale-05-717682":
          "var(--variable-collection-grayscale-05-717682)",
        "variable-collection-grayscale-06-85888e":
          "var(--variable-collection-grayscale-06-85888e)",
        "variable-collection-grayscale-07-a3a8bf":
          "var(--variable-collection-grayscale-07-a3a8bf)",
        "variable-collection-grayscale-10-d3d6e2":
          "var(--variable-collection-grayscale-10-d3d6e2)",
        "variable-collection-primary-primary-0d56e4":
          "var(--variable-collection-primary-primary-0d56e4)",
        "variable-collection-sub-title01-003fbb":
          "var(--variable-collection-sub-title01-003fbb)",
        border: "hsl(var(--border))",
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
      },
      fontFamily: {
        "body-14-b": "var(--body-14-b-font-family)",
        "body-14-r": "var(--body-14-r-font-family)",
        "body-14-SB": "var(--body-14-SB-font-family)",
        "body-16-r": "var(--body-16-r-font-family)",
        "body-bold": "var(--body-bold-font-family)",
        "caption-title-13-b": "var(--caption-title-13-b-font-family)",
        "caption-title-13-r": "var(--caption-title-13-r-font-family)",
        "navigation-12-r": "var(--navigation-12-r-font-family)",
        "navigation-12-SB": "var(--navigation-12-SB-font-family)",
        "title-16-b": "var(--title-16-b-font-family)",
        "title-18-b": "var(--title-18-b-font-family)",
        "title-20-b": "var(--title-20-b-font-family)",
        "title-24-b": "var(--title-24-b-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
