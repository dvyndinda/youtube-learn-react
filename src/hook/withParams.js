import React from 'react';
import { useParams } from 'react-router-dom';

export function withParams(WrappedComponent) {
  return function ComponentWithParams(props) {
    const params = useParams();
    return <WrappedComponent {...props} params={params} />;
  };
}