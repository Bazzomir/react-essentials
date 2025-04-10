import './Header.css';
import reactCoreImg from '../../assets/image/react-core-concepts.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

const genRandomInt = (max) => {
    return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    let description = reactDescriptions[genRandomInt(2)];

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