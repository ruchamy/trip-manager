import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProvider } from "../context/AppContext";

const queryClient = new QueryClient();

export const Providers = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        {children}
      </AppProvider>
    </QueryClientProvider>
  );
};