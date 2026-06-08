import { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils"

type SectionTitleProps = HTMLAttributes<HTMLDivElement> & {
    eyebrow?: string;
    title: string;
    action?: ReactNode;
};

export function SectionTitle({
    eyebrow,
    title,
    action,
    className,
    ...props
}: SectionTitleProps) {
    return (
        <div
            className={cn(
                "mb-4 flex items-end justify-between gap-4",
                className,
            )}
            {...props}
        >
            <div>
                {eyebrow && (
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-red-500" >
                        {eyebrow}
                    </p>
                )}

                <h2 className="text-xl font-bold text-zinc-50 sm:text-2xl" >
                    {title}
                </h2>
            </div>

            {action}
        </div>
    );
    
}