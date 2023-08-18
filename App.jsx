import { Provider, teamsTheme } from "@fluentui/react-northstar";
import { HashRouter as Router, Redirect, Route } from "react-router-dom";
// import Privacy from "./Privacy";
// import TermsOfUse from "./TermsOfUse";
// import Tab from "./Tab";
// import TabConfig from "./TabConfig";
import { useTeams } from "msteams-react-base-component"



import React from "react";
import "./App.css";
import Parent from "./codeEvolution/Emitter/Parent";
import EventHandlingClass from "./codeEvolution/EventHandlingClass";
import EventHandling from "./codeEvolution/EventHandlingFunction";
import Hey from "./codeEvolution/Hello";
import PropsExample from "./codeEvolution/props";
import StateExample from "./codeEvolution/stateClass";
import StateFunction from "./codeEvolution/stateFunction";
import Test from "./codeEvolution/test";
import Todo from "./codeEvolution/Todo";
import ConditionalRendering from "./codeEvolution/ConditionalRendering";
import Style from "./codeEvolution/StylingAndCss/Style";
import Form from "./codeEvolution/Form";
import UseState from "./codeEvolution/Hooks/UseState";
import { UpdatingLifeCycle } from "./codeEvolution/LifeCycles/UpdatingLifeCycle";
import Fragments from "./codeEvolution/Fragments";
import UseEffect from "./codeEvolution/Hooks/UseEffect";
import ConditionalyRunEffects from "./codeEvolution/Hooks/ConditionalyRunEffects";
import FetchData from "./codeEvolution/Hooks/FetchDataUsingAxios/FetchData";
import UseContext from "./codeEvolution/Hooks/UseContext/UseContext";
import UseReduce from "./codeEvolution/Hooks/UseReducer/UseReduce";
import UseContextandUseReducer from "./codeEvolution/Hooks/UseContextandUseReducer/UseContextandUseReducer";
import UseCallback from "./codeEvolution/UseCallback/UseCallback";
import Main from "./Test/Main";
import MainPage from "./Learning/Pages/MainPage";
// import MountingLifeCycle from "./codeEvolution/LifeCycles/MountingLifeCycle";


// export default function App(){
//   return (
//     <div>
//         <h1>helooi</h1>
//     </div>

//   )
// }
export const UserContext = React.createContext()
export const SampleContext = React.createContext()
export default function App() {

  const { theme } = useTeams({})[0];

  return (

    <Provider theme={theme || teamsTheme} styles={{ backgroundColor: "#eeeeee" }}>
      <Router>
        <Route exact path="/">
          <Redirect to="/tab" />
        </Route>

        {/* <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/termsofuse" component={TermsOfUse} />*/}
        {/* <Route exact path="/tab" component={Tab} />    */}
      </Router  >
      <div style={{ padding: "20px" }}>
        {/* <UseContext/>
        <UseCallback/>
        <UseContextandUseReducer/>
        <UseReduce/> 
        <SampleContext.Provider value={"Sample Text"}>
          <UserContext.Provider value={'Sarath'}>
            <UseContext />
          </UserContext.Provider>
        </SampleContext.Provider>

        <FetchData />
        <ConditionalyRunEffects />
        <UseEffect />
        <Fragments />
        <UpdatingLifeCycle />
        <UseState />
        <Form />
        <Style />
        <ConditionalRendering />
        <Parent />
        <EventHandling />
        <EventHandlingClass />
        <Todo />
        <StateFunction />
        <StateExample />
        <Test />
        <Hey />
        <h1>helooi class</h1>
        <PropsExample name="sarath" age="29">
          <h4>Children of Component</h4>
        </PropsExample> */}
        {/* <Main></Main> */}
        <MainPage/>
      </div >
    </Provider>



  );
}
// export const UserContext = React.createContext()
// export const SampleContext = React.createContext()
// export default class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <SampleContext.Provider value={"Sample Text"}>
//           <UserContext.Provider value={'Sarath'}>
//             <UseContext />
//           </UserContext.Provider>
//         </SampleContext.Provider>

//         <FetchData />
//         <ConditionalyRunEffects />
//         <UseEffect />
//         <Fragments />
//         <UpdatingLifeCycle />
//         {/* <MountingLifeCycle /> */}
//         <UseState />
//         <Form />
//         <Style />
//         <ConditionalRendering />
//         <Parent />
//         <EventHandling />
//         <EventHandlingClass />
//         <Todo />
//         <StateFunction />
//         <StateExample />
//         <Test />
//         <Hey />
//         <h1>helooi class</h1>
//         <PropsExample name="sarath" age="29">
//           <h4>Children of Component</h4>
//         </PropsExample>
//       </div >
//     )
//   }
// }