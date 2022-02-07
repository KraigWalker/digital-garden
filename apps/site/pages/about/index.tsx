import { GetStaticProps } from 'next';
import './index.module.css';

export interface AboutProps {
  name: string;
}

export function About({ name }: AboutProps) {
  return (
    <div>
      <h1>Welcome to About {name} !</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  return {
    props: {
      name: 'Kraig',
    },
  };
};

export default About;
