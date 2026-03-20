// app/types/css.d.ts
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module 'aos/dist/aos.css' {
  const content: string;
  export default content;
}