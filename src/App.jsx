import { CORE_CONCEPTS } from './data';
import reactCoreImg from './assets/image/react-core-concepts.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

const genRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  let description = reactDescriptions[genRandomInt(2)]
  return (
    <header>
      <img src={reactCoreImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

const CoreConcept = ({ image, title, description }) => {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              // {...CORE_CONCEPTS[0]}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
