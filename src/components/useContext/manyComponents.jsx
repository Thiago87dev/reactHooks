import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export default function ManyComponents() {
  const [user, setUser] = useState("Thiago Alves");

  return (
    <UserContext.Provider value={user}>
        <hr />
      <h1>Component 1</h1>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
    return (
        <>
          <h1>Component 3</h1>
          <Component4 />
        </>
      );
}

function Component4() {
    return (
        <>
          <h1>Component 4</h1>
          <Component5 />
        </>
      );
}

function Component5() {
    const user = useContext(UserContext)

    return (
        <>
          <h1>Component 5</h1>
          <h2>{`Hello ${user} again!`}</h2>
        </>
      );
}
