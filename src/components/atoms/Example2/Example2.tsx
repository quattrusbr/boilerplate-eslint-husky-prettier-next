import { ReactNode } from 'react';

type ExampleProps = {
  children?: ReactNode;
};

export const Example2 = ({ children }: ExampleProps) => (
  <div className="bg-yellow-500">
    <h1>{children}</h1>
  </div>
);
