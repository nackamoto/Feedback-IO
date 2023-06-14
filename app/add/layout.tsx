const metadata = {
    title: 'Add Feedback',
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

