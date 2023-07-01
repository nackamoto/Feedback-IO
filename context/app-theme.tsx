'use client';

import { createContext, useContext, useEffect, useState} from "react";
import { FC, PropsWithChildren } from "react";
import metadata from '../data.json';



const AppContext = createContext(null);





export default function AppTheme({children}:{children: React.ReactNode}){

    // add toggle state to JSON file
    const database = metadata.productRequests.map(item => ({...item,isToggled:false, comments: !item.comments ? []: item.comments }))
    const {currentUser} = metadata
    const [datastore, setDatastore] = useState(database);

    const [Sortby, setSortby] = useState('Most Upvotes');
     
    useEffect(() => {
        switch (Sortby) {
            case 'Most Upvotes':
                setDatastore([...datastore].sort((a, b) => (b.upvotes - a.upvotes)))
                
                break;

            case 'Least Upvotes':
                setDatastore([...datastore].sort((a, b) => (a.upvotes - b.upvotes)))
                
                break;

            case 'Most Comments':
                setDatastore([...datastore].sort((a, b) => (b.comments.length - a.comments.length)))
                break;

            case 'Least Comments':
                setDatastore([...datastore].sort((a, b) => (a.comments.length - b.comments.length)))
                break;
        
            default:
                setDatastore([...datastore].sort((a, b) => (b.upvotes - a.upvotes)))
                break;
        }
    }, [Sortby]);

    const statics = {

        nLive: datastore.filter( item => item.status === "live").length,
        nPlanned: datastore.filter( item => item.status === "planned").length,
        nProgress: datastore.filter( item => item.status === "in-progress").length
    }




  


    return (
        <AppContext.Provider
            value={{
                datastore, setDatastore,
                statics, currentUser,
                setSortby, Sortby

            }}

        >
            {children}
        </AppContext.Provider>
    )
}


export const useProps = () => {
    return useContext(AppContext);
}



