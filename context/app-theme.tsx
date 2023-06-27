'use client';

import { createContext, useContext, useState} from "react";
import metadata from '../data.json';



const AppContext = createContext(null);





export default function AppTheme({children}:{children: React.ReactNode}){

    // add toggle state to JSON file
    const database = metadata.productRequests.map(item => ({...item,isToggled:false, comments: !item.comments ? []: item.comments }))
    const {currentUser} = metadata
    const [datastore, setDatastore] = useState(database);
     


    const statics = {

        nLive: datastore.filter( item => item.status === "live").length,
        nPlanned: datastore.filter( item => item.status === "planned").length,
        nProgress: datastore.filter( item => item.status === "in-progress").length
    }




  


    return (
        <AppContext.Provider
            value={{
                datastore, setDatastore,
                statics, currentUser

            }}

        >
            {children}
        </AppContext.Provider>
    )
}


export const useProps = () => {
    return useContext(AppContext);
}



