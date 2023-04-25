import { ProjectProps } from '@/components/Project';

const TopSchool: ProjectProps = {
	title: 'TOP 校园',
	desc: '为在校大学生提供表白墙交友、超市外卖、兼职跑腿等综合服务平台，是学生时代的一些想法与实践。',
	githubUrl: 'https://github.com/LittleSource/top_school_uni',
};

const Bolt: ProjectProps = {
	title: '开源作品 · 博客',
	desc: '有空会写一些文章，所以写了一个基于nuxt.js服务端渲染的博客，拥有良好的SEO。采用markdown文件编写，无需服务器以及数据库。',
	githubUrl: 'https://github.com/LittleSource/bolt',
};

const Resume: ProjectProps = {
	title: '开源作品 · React简历',
	desc: '用React做的简历模板，也就是您看到的这个简历。没错，它是由代码写成的而非word。',
	githubUrl: 'https://github.com/LittleSource/resume',
};
// 个人作品
export const Projects: ProjectProps[] = [TopSchool, Bolt, Resume];
