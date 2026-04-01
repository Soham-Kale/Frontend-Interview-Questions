
const products = [
    { name: 'Laptop', price: 1000, category: 'Electronics' },
    { name: 'Phone', price: 500, category: 'Electronics' },
    { name: 'Shirt', price: 50, category: 'Clothing' },
    { name: 'Pants', price: 80, category: 'Clothing' },
    { name: 'Headphones', price: 200, category: 'Electronics' },
]


function PrintAllProducts() {
    return (
        <div>
            <h1>Question 1: Rerendering Conditions and Operations</h1>
            {
                products.map((product, index) => { // id
                    return (
                        <h4 key={index}>Product name: {product.name} with price {product.price} and category is {product.category}</h4>
                    )
                })
            }

            <h2>Question 2: How can filter products with specific category</h2>
            {
                products.filter((product) => (product.category === 'Electronics')).map((product, index) => {
                    return (
                        <h4 key={index}>Product name: {product.name} with price {product.price} and category is {product.category}</h4>
                    )
                })
            }

            <h2>Question 3: How can you summery of total prices for products</h2>
            {
                products.reduce((acc, product) => { 
                    return acc + product.price
                }, 0)
            }

            {/* Conditional Operator */}
            <h2>Question 4: Difference between && vs ||</h2> {/* and return true, when both conditions true */}
            <LogicalAnd/>
            
        </div>
    )
}

function LogicalAnd() {
    let x = 12;
    let y = 21;

    if(x > 0 && y > 10) {
        return <span>Both are greater that 0.</span>
    } else return <></>
}

const root = ReactDOM.createRoot(document.getElementById("title"));
root.render(React.createElement(PrintAllProducts));