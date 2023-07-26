declare module '*.scss' {
  interface IClassNames {
      [className: string]: string
  }
  const classnames: IClassNames;
  export = classnames;
}


declare module '*.svg' {
  import { FunctionComponent, SVGProps } from 'react';

  const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
  export { ReactComponent };
}