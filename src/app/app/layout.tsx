"use client"; // Não se esqueça de incluir isso

import { PropsWithChildren } from "react";
import { SessionProvider } from "next-auth/react"; // Importe o SessionProvider
import { MainDashboardSidebar } from "./_components/main-sidebar";
import { useSession } from "next-auth/react";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <SessionProvider>
            <MainContent>{children}</MainContent>
        </SessionProvider>
    );
}

function MainContent({ children }: PropsWithChildren) {
    const { data: session } = useSession();

    console.log('Session:', session); // Para verificar a sessão

    return (
        <div className="grid grid-cols-[16rem_1fr]">
            <MainDashboardSidebar user={session?.user} />
            <main>{children}</main>
        </div>
    );
}
