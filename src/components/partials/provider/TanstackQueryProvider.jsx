import { QueryClient, QueryClientProvider } from "react-query"


const queryClient = new QueryClient()

function TanstackQueryProvider({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default TanstackQueryProvider