import { useMDXComponents as getThemeComponents } from "nextra-theme-docs";

const themeComponents = getThemeComponents();

export const useMdxComponents = (components: React.FC[] = []) => {
  return {
    ...themeComponents,
    ...components,
  };
};

export { useMdxComponents as useMDXComponents };
