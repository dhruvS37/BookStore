import React from "react";

const userContext = React.createContext("Guest")

const UserProvider = userContext.Provider
const UserConsumer = userContext.Consumer


export {UserProvider,UserConsumer}
export default userContext