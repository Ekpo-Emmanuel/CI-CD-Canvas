import ProtectedRoute from "@/app/_components/ProtectedRoute";


export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <ProtectedRoute>
        {children}
    </ProtectedRoute>
  );
}
