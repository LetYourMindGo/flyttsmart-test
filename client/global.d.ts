// Type declarations for importing CSS files in TypeScript
// Accepts global CSS imports and typed CSS modules

declare module '*.css';
declare module '*.scss';
declare module '*.sass';

// CSS Modules with typed class maps
declare module '*.module.css' {
  const classes: { readonly [className: string]: string };
  export default classes;
}
declare module '*.module.scss' {
  const classes: { readonly [className: string]: string };
  export default classes;
}
declare module '*.module.sass' {
  const classes: { readonly [className: string]: string };
  export default classes;
}
