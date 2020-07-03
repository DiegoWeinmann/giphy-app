import React from 'react';
import { Spinner } from 'components';

interface WithSpinnerProps {
  loading: boolean;
}

export const withSpinner = <P extends object>(
  WrappedComponent: React.FC<P>
) => {
  return ({
    loading,
    ...rest
  }: React.PropsWithChildren<P & WithSpinnerProps>) => {
    return loading ? <Spinner /> : <WrappedComponent {...(rest as P)} />;
  };
};
