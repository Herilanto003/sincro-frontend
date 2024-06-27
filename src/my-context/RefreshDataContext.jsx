import React from "react";

const RefreshDataContext = React.createContext();

const RefreshDataContextProvider = ({ children }) => {
  const [refreshData, setRefreshData] = React.useState(false);

  return (
    <RefreshDataContext.Provider value={{ refreshData, setRefreshData }}>
      {children}
    </RefreshDataContext.Provider>
  );
};

export { RefreshDataContext };
export default RefreshDataContextProvider;
