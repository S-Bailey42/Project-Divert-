/* import React, { createContext, useContext, useState } from 'react';

type Site = {
  id: string;
  name: string;
  postcode: string;
  siteName: string;
  projectManager: string;
  email: string;
  
};

type SiteContextType = {
  sites: Site[];
  addSite: (newSite: Site) => void;
};

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sites, setSites] = useState<Site[]>([
  
  ]);

  const addSite = (newSite: Site) => {
    setSites([...sites, newSite]);
  };

  const contextValue: SiteContextType = {
    sites,
    addSite,
  };

  return <SiteContext.Provider value={contextValue}>{children}</SiteContext.Provider>;
};

export const useSiteContext = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSiteContext must be used within a SiteProvider');
  }
  return context;
};
 */