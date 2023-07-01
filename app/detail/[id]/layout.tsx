import { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Feedback detail',
    description: ''
}

interface IProps{
    children: React.ReactNode
}

export default function FeedDetailLayout({children}:IProps){
    return (
        <div className="bg-zinc-100">
            {children}
        </div>
    );
}

