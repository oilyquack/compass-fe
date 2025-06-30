export default function MusicPlayer({embedString}: { embedString: string }) {
    return (
        <div dangerouslySetInnerHTML={{ __html: embedString }} />
    );
 }