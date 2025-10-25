import NoConnection from "../src/components/partials/container/NoCoonectio"

function NotFound() {
    return (
        <div>
            <NoConnection notFound={true} />
        </div>
    )
}

export default NotFound