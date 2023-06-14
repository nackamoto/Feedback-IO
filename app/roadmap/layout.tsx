const metadata = {
    title: 'roadmap',
    description: 'Roadmap'
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