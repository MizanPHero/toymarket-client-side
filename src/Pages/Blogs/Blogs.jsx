import React from "react";
import useTitle from "../../useTitle/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="my-container">
      <div className="flex flex-col items-center min-h-screen bg-gray-100">
        <header className="w-full py-6 bg-gray-200">
          <div className="container px-4 mx-auto">
            <h1 className="text-3xl font-bold text-red-600">
              Assignment Questions
            </h1>
          </div>
        </header>

        <main className="container px-4 mx-auto mt-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <article className="p-6 bg-white rounded shadow-md">
              <h2 className="mb-2 text-xl font-bold text-gray-800">
                What is an access token and refresh token? How do they work and
                where should we store them on the client-side?
              </h2>
              <p className="text-gray-600">
                Access token: A credential for authentication and authorization,
                granting access to protected resources in an application. It's a
                short-lived token.
                <br />
                <br />
                Refresh token: A token used to obtain a new access token without
                requiring the user to reauthenticate. It has a longer lifespan
                than the access token.
                <br />
                <br />
                They are stored securely on the client-side, usually in the
                browser's memory or a secure storage mechanism. e.g., HTTP-only
                cookies, local storage. to prevent unauthorized access.
              </p>
            </article>

            <article className="p-6 bg-white rounded shadow-md">
              <h2 className="mb-2 text-xl font-bold text-gray-800">
                Compare SQL and NoSQL databases?
              </h2>
              <p className="text-gray-600">
                SQL: Relational data model, predefined schemas, strict
                consistency. Vertically scalable.
                <br /> <br />
                NoSQL: Flexible data model, dynamic schemas, handles
                unstructured data. Horizontally scalable.
                <br /> <br />
                SQL focuses on structured data and ensures data integrity. NoSQL
                provides flexibility and scalability for handling unstructured
                data and can scale horizontally.
              </p>
            </article>

            <article className="p-6 bg-white rounded shadow-md">
              <h2 className="mb-2 text-xl font-bold text-gray-800">
                What is express js? What is Nest JS?
              </h2>
              <p className="text-gray-600">
                Express.js: Lightweight web application framework for Node.js,
                provides routing, middleware, and request/response handling.
                <br /> <br />
                Nest.js: Progressive Node.js framework built on Express.js,
                offers a structured and scalable architecture using decorators
                and dependency injection.
              </p>
            </article>

            <article className="p-6 bg-white rounded shadow-md">
              <h2 className="mb-2 text-xl font-bold text-gray-800">
                What is MongoDB aggregate and how does it work?
              </h2>
              MongoDB's aggregate is a method for advanced data aggregation. It
              processes data in a collection using a pipeline of stages. Each
              stage performs specific operations or transformations on the data.
              Stages are executed sequentially, passing data from one stage to
              the next. It allows filtering, grouping, projecting, and sorting
              operations, among others.
            </article>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Blogs;
