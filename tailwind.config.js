module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./node_modules/flowbite-react/**/*.js",
  ],
  plugins: [
    //  require("flowbite/plugin")
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "black-100": " #101828",

      "gray-50": "#F9FAFB",
      "gray-700": "#344054",
      "gray-100": "#667085",

      "gray-200": "#EAECF0",
      "gray-300": "#D0D5DD",
      "gray-600": "##475467",
      "gray-700": "#344054",
      "gray-800": "#1D2939",

      "gray-900": "#101828",
      "gray-500": "#667085",
      "green-100": "#ECFDF3",
      "primary-300": "#D6BBFB",
      "primary-600": "#7F56D9",
      "primary-700": "#6941C6",
      "success-700": "#027A48",

      "primary-50": "#F9F5FF",
      white: "#fff",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        default: "0px 1px 7px rgba(0, 0, 0, 0.1)",
        form: "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
      },
      spacing: {
        90: "350px",
      },
    },
  },

  fontFamily: {
    sans: ["Inter", "sans-serif"],
  },

  plugins: [],
};
