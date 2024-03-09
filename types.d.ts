declare module '*module.css' {
  const styles: {
    [className: string]: string;
  };
  export default styles;
}
export type SinglePost = typeof import('./mainPost.json')