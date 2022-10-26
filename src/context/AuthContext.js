import React from 'react';

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = React.useState(false);

    return (
        <AuthContext.Provider value={{
            authenticated,
            setAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
};