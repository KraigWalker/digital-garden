import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { join } from 'path';
import { readdirSync } from 'fs';
export interface ArticleProps extends ParsedUrlQuery {
  slug: string;
}

const POSTS_PATH = join(process.cwd(), '_articles');

export function Article(props: ArticleProps) {
  return (
    <div>
      <h1>Visiting {props.slug}</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params,
}: {
  params: ArticleProps;
}) => {
  return {
    props: {
      slug: params.slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
  const paths = readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default Article;
