import { ResumeLink } from "@/types";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

type Props = ResumeLink;

export default function ResumeLinkButton(link: Props) {
  return (
    <>
      <div className="print:hidden">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className='size-8' variant='outline' size='icon' asChild>
              <a href={link.url} target='_blank' rel='noreferrer' aria-label={link.name}>
                <link.icon className='size-4' />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p className='text-xs'>{link.name}</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="hidden print:flex">
        <a key={link.name} href={link.url} target='_blank' rel='noreferrer'>
          <span className='underline'>{link.url}</span>
        </a>
      </div>
    </>
  )
}
