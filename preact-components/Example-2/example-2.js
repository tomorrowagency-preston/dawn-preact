import { h, render } from "preact";

const ExampleTwo = <h1>Example 2 - Preact is working!</h1>;

const element = document.getElementById('example_2_container');

render(ExampleTwo, element);

export default ExampleTwo;