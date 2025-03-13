import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  // Classes reutilizáveis para os botões
  const buttonBase = clsx(
    'button button--lg',
    'transition-transform duration-200 ease-in-out',
    'hover:scale-105 hover:no-underline'
  );

  const buttonVariant = (primary = false) => clsx(
    primary ? 'button--primary' : 'button--secondary',
    'flex-1 p-8 flex justify-center items-center',
    'rounded-lg shadow-md hover:shadow-lg'
  );

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.container)}>
        <Heading as="h1" className={clsx('hero__title', styles.title)}>
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle"></p>
        
        <div className={clsx('flex gap-8 justify-center mt-8', styles.buttonsContainer)}>
          {/* Seção Blog */}
          <Link
            className={clsx(buttonBase, buttonVariant(), styles.blogButton)}
            to="/blog">
            <span className={styles.buttonContent}>
              📝 Blog
            </span>
          </Link>

          {/* Seção DOC */}
          <Link
            className={clsx(buttonBase, buttonVariant(true), styles.docButton)}
            to="/docs/intro">
            <span className={styles.buttonContent}>
              📚 Documentação
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
