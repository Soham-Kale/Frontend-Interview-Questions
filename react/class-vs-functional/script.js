function App() {
    return (
        <div>
            <h1>Class vs Functional Components</h1>
            <h3>Question 1: Explain Class based components in React</h3>
            {/*
                - Way to create components using ES6 classes.
                - Older way of writing components compared to functional components.
                - Can contain state and have access to lifecycle methods, 
                which get executed at various points in a component life cycle.
            */}
            <Counter/>

            <h5>Question 2: Explain constructor and super keywords here</h5>
            {/* constructor -
                1- Initializing State: It's used to initialize the component's state by assigning an initial value to this.state.
                2- Binding Event Handlers or Methods: It's also used to bind event handlers or methods to component instance.
                
                super -
                - Used inside the constructor to call the constructor of the parent class. 
            */}

            <h5>Question 3: What is functional Components and explain hooks</h5>
            <PhotoSection/>
        </div>
    )
}

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:  0,
        };
    }

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decrementCount = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return(
            <div>
                <h3>Count: {this.state.count}</h3>
                <button onClick={this.incrementCount}>Increment</button> <br/><br/>
                <button onClick={this.decrementCount}>Decrement</button>
            </div>
        )
    }
}

function PhotoSection() {
    const [photos, setPhotos] = React.useState([]);

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res) => res.json())
        .then((data) => setPhotos(data))

        .catch((err) => console.error(err))

        return () => {}
    }, [])

    return(
        <div>
            <h1>Photo Section</h1>
            {photos.splice(0, 5).map((photo) => {
                return <h4 key={photo.id}>{photo.title}</h4>
            })}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("components"));
root.render(React.createElement(App));