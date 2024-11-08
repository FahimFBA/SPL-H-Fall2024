import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Visit Regularly',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Visit this website regularly so that you don't miss any updates on the course content! If you don't see the updates that others are getting, then reload or clear the browsing history so that it clears the cache and downloads all the data directly from the server!
      </>
    ),
  },
  {
    title: 'Learn and Practice',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Learn, Practice and Practice. You saw correctly! Practice more than just reading solutions or videos. There is no alternative to it if you want to become better at programming.
      </>
    ),
  },
  {
    title: 'Collaborate with Friends',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Collaborate with your friends to learn programming. It is always a fun thing to learn something together. But don't apply this method during exams, assignments and other assessments! You'll get a direct ZERO.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
