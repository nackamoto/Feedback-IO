import { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Edit feedback',
    description: 'Edit feedback',

}

interface IProps {
    children: React.ReactNode
}

export default function EditfeedLayout({children}:IProps){
    return (
        <div className="bg-zinc-100">
            {children}
        </div>
    );
}