import { CalendarIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

type HoverCardDemoProps = {
    username: string
}

export function HoverCardDemo({ username }: HoverCardDemoProps) {
    return (
        <>
            <HoverCard>
                <HoverCardTrigger asChild>
                    <Button className="py-1 h-5" variant="link">@{username}</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                        <div >
                            <p className="text-sm">
                                {"say something about yourself"}
                            </p>
                            <div className="flex items-center pt-2">
                                <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                                <span className="text-xs text-muted-foreground">
                                    Joined December 2021
                                </span>
                            </div>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        </>
    )
}
