import { ReactNode } from 'react';

type ExampleProps = {
  children?: ReactNode;
};

export const Example = ({ children }: ExampleProps) => (
  <div className="bg-red-900">
    <h1>{children}</h1>
  </div>
);
