import { 
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Props {
	title: string
	description: string
	tags: readonly string[]
	link: string
}

export default function ProjectCard({ title, description, tags, link }: Props) {
	return (
		<Card className='flex flex-col overflow-hidden border border-muted pl-0.5 pr-0 px-1'>
			<CardHeader className='pb-4'>
				<div className='space-y-1'>
					<CardTitle className='text-base'>
						{link ? (
							<a
								href={link}
								target='_blank'
								className='inline-flex items-center gap-1 hover:underline'
								rel='noreferrer'
							>
								{title} <span className='h-1 w-1 rounded-full bg-green-500'></span>
							</a>
						) : (
							title
						)}
					</CardTitle>
					<div className='hidden font-mono text-xs underline print:visible'>
						{link?.replace('https://', '').replace('www.', '').replace('/', '')}
					</div>
					<CardDescription className='font-mono text-xs'>{description}</CardDescription>
				</div>
			</CardHeader>
			<CardContent>
				<div className='flex flex-wrap gap-1'>
					{tags.map((tag) => (
						<Badge className='px-1 py-0 text-[10px]' variant='secondary' key={tag}>
							{tag}
						</Badge>
					))}
				</div>
			</CardContent>
		</Card>
	)
}