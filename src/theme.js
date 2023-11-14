import { h, render } from "preact";

const HeadingTest = <h1>Hello, World!</h1>;

const element = document.getElementById('heading_test_container');

// Inject our app into the DOM
render(HeadingTest, element);