const metadata = {
    title: 'suggestions',
    description: ''
}
interface IProps {
    children: React.ReactNode;
}

export default function SuggestionLayout({children}:IProps){
    return (
        <main className="overflow-scroll bg-zinc-100">
            {children}        
        </main>
    );
}