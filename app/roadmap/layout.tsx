import { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Roadmap',
    description: 'Suggestions queued waiting for development'
}

interface IProps {
    children: React.ReactNode
}

export default function RoadmapLayout({children}:IProps){
    return (
        <div className="bg-zinc-100">
            {children}
        </div>
    );
}