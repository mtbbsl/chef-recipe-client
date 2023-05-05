import React from "react";
import { Page, Text, Document, StyleSheet } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 18,
    textAlign: "justify",
    fontFamily: "Tahoma",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDFFile = () => {
  return (    
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          <h1 className="text-3xl pb-4">
            Tell us the differences between uncontrolled and controlled
            components.
          </h1>
        </Text>
        <Text style={styles.text}>
          <h2 className="font-bold mb-2">Controlled Components:</h2>
          <p className="mb-2">
            A controlled component is a component that is controlled by React
            using state. In other words, its value is stored in state and the
            component re-renders every time the state changes. In this way, the
            component has a single source of truth, which is the state, and all
            changes to the component are made through state. Controlled
            components are commonly used for forms and other interactive
            components that need to handle user input.
          </p>
          <h2 className="font-bold mb-2">Uncontrolled Components:</h2>
          <p className="mb-2">
            An uncontrolled component is a component where the value is handled
            by the DOM. In other words, the value of an uncontrolled component
            is read directly from the DOM rather than from state. Uncontrolled
            components are commonly used for form inputs that dont need to be
            validated or dont require any special handling.
          </p>
          <p className="mb-2">
            In summary, controlled components use state to manage the value of
            the component, while uncontrolled components rely on the DOM to
            manage the value. Controlled components provide a more predictable
            behavior, while uncontrolled components are easier to use in simple
            cases. Its important to choose the right approach based on the
            specific requirements of your component.
          </p>
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>

      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          <h1 className="text-3xl pb-4">
            How to validate React props using PropTypes
          </h1>
        </Text>
        <Text style={styles.text}>
          <p className="mb-2">
            In React, PropTypes is a way to validate the data types of the props
            passed to a component. It is used to check if the data type of a
            prop matches with the data type expected by the component.
          </p>
          <p className="mb-2">
            If the props passed to the component do not match the defined
            propTypes, React will throw a warning in the console.
          </p>
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>

      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          <h1 className="text-3xl pb-4">
            Tell us the difference between nodejs and express js.
          </h1>
        </Text>
        <Text style={styles.text}>
          <p className="mb-2">
            Node.js and Express.js are both server-side technologies used in web
            development, but they serve different purposes.
          </p>
          <p className="mb-2">
            Node.js is a JavaScript runtime that allows developers to run
            JavaScript code outside of a web browser. With Node.js, developers
            can write server-side applications in JavaScript, including APIs,
            command-line tools, and other types of servers.
          </p>
          <p className="mb-2">
            Express.js, on the other hand, is a web application framework built
            on top of Node.js. It provides a set of features and tools for
            building web applications, including routing, middleware, and
            templating.
          </p>
          <p className="mb-2">
            In essence, Node.js is the underlying platform for running
            JavaScript code on the server-side, while Express.js is a framework
            that simplifies the development of web applications on top of
            Node.js by providing a set of pre-built features and tools.
          </p>
          <p className="mb-2">
            While it is possible to build web applications using only Node.js,
            using a framework like Express.js can save a significant amount of
            time and effort by providing pre-built functionality for common web
            development tasks.
          </p>
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>

      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          <h1 className="text-3xl pb-4">
            What is a custom hook, and why will you create a custom hook?
          </h1>
        </Text>
        <Text style={styles.text}>
          <p className="mb-2">
            A custom hook is a JavaScript function that uses one or more
            built-in hooks and potentially other custom hooks to enable a
            specific piece of functionality that can be reused throughout a
            React application. A custom hook is like any other React function
            component, except that it can use hooks and return additional
            stateful logic.
          </p>
          <p className="mb-2">
            Custom hooks can be created for various reasons, but the most common
            reason is to extract and reuse some common logic in multiple
            components, reducing the duplication of code. It allows developers
            to simplify complex logic, abstracting it into smaller, more
            manageable components.
          </p>
          <p className="mb-2">
            Custom hooks are also useful in separating concerns, making code
            easier to test, and can improve the readability and maintainability
            of an application. They can be used to manage state, perform side
            effects, and encapsulate complex functionality.
          </p>
          <p className="mb-2">Some examples of custom hooks include:</p>
          <ul>
            <li className="mb-2">
              UseLocalStorage: a hook that reads and writes values to
              localStorage
            </li>
            <li className="mb-2">
              UseToggle: a hook that toggles between two values
            </li>
            <li className="mb-2">
              UseKeyPress: a hook that listens for and returns a pressed key
            </li>
            <li className="mb-2">
              UseFetch: a hook that fetches data from an API
            </li>
          </ul>
          <p className="mb-2">
            Overall, creating custom hooks can make code more modular and
            reusable, resulting in more efficient development and
            easier-to-maintain codebases.
          </p>
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
      
    </Document>
  );
};

export default PDFFile;
