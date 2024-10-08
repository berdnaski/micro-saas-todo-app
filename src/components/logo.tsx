import { RocketIcon } from "@radix-ui/react-icons";

export function Logo() {
    return (
        <div className="flex bg-primary h-6 w-6 items-center justify-center rounded-md">
            <RocketIcon className="w-3 h-3 text-primary-foreground" />
        </div>
    )
}