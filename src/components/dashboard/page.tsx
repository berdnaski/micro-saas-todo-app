import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type DashboardPageGenericProps<T = unknown> = {
    children: ReactNode;
    className?: string;
} & T

export function DashboardPage({ className, children }: DashboardPageGenericProps) {
    return (
        <section className={cn(['h-screen', className])}>
            {children}
        </section>
    );
}

export function DashboardPageHeader({ className, children }: DashboardPageGenericProps) {
    return (
        <header className={cn(['px-6 py-3 border-b border-border', className])}>
            {children}
        </header>
    );
}

export function DashboardPageHeaderTitle({ className, children }: DashboardPageGenericProps) {
    return (
        <span className={cn(['text-md text-muted-foreground uppercase', className])}>
            {children}
        </span>
    );
}

export function DashboardPageHeaderNav({ className, children }: DashboardPageGenericProps) {
    return (
        <nav className={cn(['', className])}>
            {children}
        </nav>
    );
}

export function DashboardPageMain({ className, children }: DashboardPageGenericProps) {
    return (
        <main className={cn(['p-6 font-bold', className])}>
            {children}
        </main>
    );
}