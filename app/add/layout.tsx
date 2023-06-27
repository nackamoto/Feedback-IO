import { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Add feedback',
    description: 'Add new feedback'
}

interface IProps {
    children: React.ReactNode;
}

export default function NewfeedLayout({children}:IProps){
    return (
        <div className="bg-zinc-100">
            {children}
        </div>
    );
}

