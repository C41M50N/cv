import { GlobeIcon } from "lucide-react";
import { Merriweather, Bitter } from 'next/font/google';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Section from '@/components/resume-section';
import ProjectCard from '@/components/project-card';
import CommandMenu from '@/components/command-menu';
import ResumeLinkButton from "@/components/resume-link";
import { processResumeExperienceBullet } from "@/lib/utils";
import { RESUME_DATA as resume } from "@/resume-data";

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['700', '900']
})

const bitter = Bitter({
  subsets: ['latin'],
  weight: ['700', '800', '900']
})

export default function Home() {
  return (
    <main className='container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16'>
			<section className='mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6'>
				<div className='flex items-center justify-between'>
					<div className='flex-1 space-y-1.5'>
						<h1 className={`text-xl xs:text-2xl ${bitter.className} font-extrabold whitespace-nowrap`}>{resume.name}</h1>
						<p className='max-w-md text-pretty font-mono text-sm leading-none text-muted-foreground'>
							{resume.about}
						</p>
						<p className='max-w-md items-center text-pretty font-mono text-xs text-muted-foreground'>
							<a
								className='mt-1 inline-flex gap-x-1.5 align-baseline leading-none hover:underline'
								href={resume.locationLink}
								target='_blank'
								rel='noreferrer'
							>
								<GlobeIcon className='size-3' />
								{resume.location}
							</a>
						</p>

						<div className="flex flex-row print:flex-col gap-x-1 font-mono text-sm text-muted-foreground">
              {resume.links.map((link) => <ResumeLinkButton key={link.name} {...link} />)}
            </div>
					</div>

					<a href={resume.links.find((link) => link.name === 'Portfolio')!.url} target='_blank' rel='noreferrer'>
						<Avatar className='size-28 rounded-lg'>
							<AvatarImage alt={resume.name} src={resume.avatar} />
							<AvatarFallback className='font-mono font-bold rounded-lg'>{resume.initials}</AvatarFallback>
						</Avatar>
					</a>
				</div>

				{/* <Section>
					<h2 className='text-xl font-bold'>About</h2>
					<p className='sm:text-sm text-xs text-pretty font-mono text-gray-700'>{resume.summary}</p>
				</Section> */}

				<Section>
					<h2 className='text-xl font-bold'>Work Experience</h2>
					{resume.experience.map((work) => {
						return (
							<Card key={work.company}>
								<CardHeader className="p-0">
									<div className='flex items-center justify-between gap-x-2 text-base'>
										<h3 className='inline-flex items-center justify-center gap-x-1 font-semibold leading-none'>
											{work.link ? (
												<a
													className='hover:underline'
													href={work.link}
													target='_blank'
													rel='noreferrer'
												>
													{work.company}
												</a>
											) : (
												<p>{work.company}</p>
											)}
										</h3>
										<div className='text-sm tabular-nums text-neutral-500'>
											{work.timeline}
										</div>
									</div>

									<h4 className='font-mono text-xs leading-none'>{work.title}</h4>
								</CardHeader>
								<CardContent className='mt-2 p-0 text-sm'>
									<div className="flex flex-col space-y-1">
										{work.bullets.map((item, index) => (
											<div key={`work-bullet-${index}`} className="ml-0.5 flex flex-row space-x-2">
												<span className="font-bold">•</span>
												<span>
													{processResumeExperienceBullet(item)}
												</span>
											</div>
										))}
									</div>
								</CardContent>

                <div className='mt-3 flex flex-wrap gap-1'>
                  {work.skills.map((skill) => (
                    <Badge variant='secondary' className='text-xs' key={skill}>
                      {skill}
                    </Badge>
                  ))}
                </div>
							</Card>
						)
					})}
				</Section>

				<Section>
					<h2 className='text-xl font-bold'>Education</h2>
					{resume.education.map((education) => {
						return (
							<Card key={education.name}>
								<CardHeader className="p-0">
									<div className='flex items-center justify-between gap-x-2 text-base'>
										<h3 className='font-semibold leading-none'>{education.name}</h3>
										{/* <div className='text-sm tabular-nums text-neutral-500'>
											{education.timeline}
										</div> */}
									</div>
								</CardHeader>
								<div className='mt-2 font-mono text-xs leading-none'>{education.degree}</div>
                <div className="mt-3 flex flex-row flex-wrap gap-1">
                  {education.courses.map((course) => <Badge key={course} variant={'secondary'}>{course}</Badge>)}
                </div>
							</Card>
						)
					})}
				</Section>

				<Section>
					<h2 className='text-xl font-bold'>Skills</h2>
					<div className='flex flex-wrap gap-1'>
						{resume.skills.map((skill) => {
							return <Badge key={skill}>{skill}</Badge>
						})}
					</div>
				</Section>

				<Section className='print-force-new-page scroll-mb-16'>
					<h2 className='text-xl font-bold'>Projects</h2>
					<div className='-mx-3 grid grid-cols-1 gap-3 print:grid-cols-2 print:gap-2 md:grid-cols-2'>
						{resume.projects.map((project) => {
							return (
								<ProjectCard
									key={project.title}
									title={project.title}
									description={project.description}
									tags={project.techstack}
									link={project.link}
								/>
							)
						})}
					</div>
				</Section>
			</section>

			<CommandMenu
				links={[
					{
            title: 'Portfolio Site',
            url: resume.links.find((l) => l.name === 'Portfolio')!.url,
					},
					{
            title: 'LinkedIn',
            url: resume.links.find((l) => l.name === 'LinkedIn')!.url,
					},
          {
            title: 'GitHub',
            url: resume.links.find((l) => l.name === 'GitHub')!.url,
          },
          {
            title: 'Email',
            url: resume.links.find((l) => l.name === 'Email')!.url,
          },
				]}
			/>
		</main>
  );
}
