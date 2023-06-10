'use client';

import { createContext, useContext} from "react";


const AppContext = createContext(null);





export default function AppTheme({children}:{children: React.ReactNode}){




    return (
        <AppContext.Provider
            value={{}}

        >
            {children}
        </AppContext.Provider>
    )
}


export const useProps = () => {
    return useContext(AppContext);
}



