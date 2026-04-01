function App() {
    return (
        <div>
        <h2>State vs Props Interview Questions</h2>

        <h5>
            Question 1: Explain state vs props in both class and functional components
        </h5>
        {/*
            Props -
            - Read-only data passed from a parent component to a child component.
            - Immutable and are used to communicate between components.
        */}
        <ParentComponent />
        {/*
            State
            - Mutable and represents the internal state of a component.
            - Managed and controlled within the component itself.
        */}

        {/*
            Difference:
            - Props are immutable data passed down from parent components.
            - State is mutable and represents the internal state of a component.
            - In class components, `this.props` and `this.state` are used to access props and state respectively.
            - In functional components, props are passed as an argument to the component function, and state is managed using hooks like `useState`.
        */}
        </div>
    );
}

function ParentComponent() {
    return(
        <div>
            <h1>state vs props</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("state"));
root.render(React.createElement(App));