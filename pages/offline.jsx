import NoConnection from "../src/components/partials/container/NoCoonectio";

export default function OfflinePage() {
    return (
        <div>
            <NoConnection notFound={false} />
        </div>
    );
}
