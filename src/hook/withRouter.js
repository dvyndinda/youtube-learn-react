import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function withRouter(WrappedComponent) {
  return function ComponentWithRouter(props) {
    const navigate = useNavigate();
    const params = useParams();

    return <WrappedComponent {...props} navigate={navigate} params={params} />;
  };
}