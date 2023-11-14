import { h, render } from "preact";

const HeadingTestCopy = <h1>Hello, World!</h1>;

const element = document.getElementById('heading_test_copy_container');

render(HeadingTestCopy, element);

export default HeadingTestCopy;