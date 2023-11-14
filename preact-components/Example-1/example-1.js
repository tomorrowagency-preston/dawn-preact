import { h, render } from "preact";

const ExampleOne = <h1>Example 1 - Preact is working!</h1>;

const element = document.getElementById('example_1_container');

render(ExampleOne, element);

export default ExampleOne;