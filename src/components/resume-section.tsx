import { cn } from "../lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function ResumeSection({
  className, ...props
}: Props) {
  return (
    <section className={cn('flex min-h-0 flex-col gap-y-3')} {...props} />
  )
}
