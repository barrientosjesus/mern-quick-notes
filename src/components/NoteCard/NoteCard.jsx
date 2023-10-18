import "./NoteCard.css"

export default function NoteCard({ note }) {
    const { text, createdAt } = note;

    function formatTimestamp(timestamp) {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        };

        const date = new Date(timestamp);
        const formattedDate = date.toLocaleDateString('en-US', options);

        return `${formattedDate}`;
    }

    const updatedDT = formatTimestamp(createdAt);

    return (
        <div className="NoteCard">
            <h2>{text}</h2>
            <small>{updatedDT}</small>
        </div>
    );
}