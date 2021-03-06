import React from 'react'
import { AlgoliaContext } from './algolia-context';
import { useInitAlgoliaIndex } from './hooks/use-init-algolia-index';

const AlgoliaProvider = ({
  children,
  applications
}) => {
  const indexes = useInitAlgoliaIndex(applications);

  return (
    <AlgoliaContext.Provider value={indexes}>
      {children}
    </AlgoliaContext.Provider>
  )
};

export { AlgoliaProvider };