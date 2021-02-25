### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
*  A front-end framework that has a very modular feel due to the fact that it breaks out code into reusable components.    

- What is Babel?
* A JavaScript complier used to make newer code compatible with older browsers/environments.  

- What is JSX?
* JavaScript eXtension.  A React extension that allows you to write JavaScript that looks like HTML.  

- How is a Component created in React?
* Code is moved into its own file, usually with just 1 function per file.  These files/functions accept props and return elements describing what should appear on screen or helper functions like storing something in local state.   

- What are some difference between state and props?
* A prop is an object of arbitrary inputs a React function component accepts as the first argument. State is data that changes over the lifetime of a specific instance of a React component   

- What does "downward data flow" refer to in React?
* Any object can be changed without effect to parent data by simple modification of its state and application of updates.  In general child components recieve props from parent components.   

- What is a controlled component?
* Where form data is handled by React  

- What is an uncontrolled component?
* Where form data is handled by the DOM itself.  

- What is the purpose of the `key` prop when rendering a list of components?
* A key prop gives you the ability to control component instances by creating a unique identifier.  

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
* Arrays are mutable, which could cause mismatches for key/values.  

- Describe useEffect.  What use cases is it used for in React components?
* useEffect is a hook that lets you pass in a callback function to run when a component render or re-render happens. It can be used for API calls to fetch data or if you need to perform an action when a piece of state changes.  

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
* It returns a mutable object whose valuie is equal to the intial value passed into the hook. It persists across renders. A change to a ref value does not cause a re-render of a component.  

- When would you use a ref? When wouldn't you use one?
* It is commonly used for accessing underlying DOM elements, and setting up/clearing timers. You don't use it to access/update DOM elements that can be be controlled by React or if the data does not need to persist across renders.  

- What is a custom hook in React? When would you want to write one?
* A custom hook is a wrapper function you define that surrounds existing hook. You would write one to reuse stateful logic between components.  
