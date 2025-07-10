import React from 'react';
import { useNavigate } from 'react-router-dom';

export function withNavigation(WrappedComponent) {
  return function ComponentWithNavigation(props) {
    const navigate = useNavigate();
    return <WrappedComponent {...props} navigate={navigate} />;
  };
}