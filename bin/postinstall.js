console.log(
  `thoughtbot/eslint-config installed! Use it by updating your ESLint configuration with:

  import { defineConfig } from "eslint/config";
  import thoughtbotConfig from "@thoughtbot/eslint-config";
  import thoughtbotTypescriptConfig from "@thoughtbot/eslint-config/typescript";

  export default defineConfig([
    {
      extends: [
        thoughtbotConfig,
        thoughtbotTypescriptConfig,
      ],
    },
  ]);

Don't forget to also add a script in your package.json file:

  "lint": "eslint --max-warnings=0 --ext js,jsx,ts,tsx .",
`,
);
