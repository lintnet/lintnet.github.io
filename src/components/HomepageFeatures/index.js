import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Powered by Jsonnet',
    description: (
      <>
        <a href="https://jsonnet.org/" target="_blank">Jsonnet</a> is a simple and powerful configuration language for app and tool developers.
        If you're already familiar with Jsonnet, you can easily start lintnet.
        Even if you're not familiar with Jsonnet, no worries. Jsonnet is easy to understand and the learning cost is low.
        Jsonnet is widely used, so you can utilize the knowledge and experience of Jsonnet in not only lintnet but also other projects.
      </>
    ),
  },
  {
    title: 'Secure',
    description: (
      <>
        Jsonnet can't access filesystem and network so it's secure compared with common programming languages such as JavaScript
      </>
    ),
  },
  {
    title: 'Shareable',
    description: (
      <>
        lintnet provides Module system that you can share and reuse lint rules between other projects.
        You can develop lint rules as both OSS and internal libraries.
        Please see <a href="/docs/module/">Module</a> too.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
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
