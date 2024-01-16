export type NoUndefinedField<T> = {
	[P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>>;
};

export type SocialLink = {};

export type Feature = {
	name: string;
	description: string;
	image: string;
};

export type BlogPost = {
	tags: string[];
	keywords: string[];
	hidden: boolean;
	slug: string;
	title: string;
	date: string;
	updated: string;
	excerpt: string;
	html: string | undefined;
	readingTime: string;
	relatedPosts: BlogPost[];
	coverImage: string | undefined;
};
