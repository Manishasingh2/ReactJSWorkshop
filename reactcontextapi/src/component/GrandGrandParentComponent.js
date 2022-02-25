import React, { useState, useContext } from "react";
var AppContext = React.createContext(
    {   nativeVillage : "Bihar",
        setNativeVillage : () => {}
    }
    );
export default function GrandGrandParent() {
    var [nativeVillage,setNativeVillage] = useState("Bihar");
    const value = {nativeVillage,setNativeVillage };
    return (
        <AppContext.Provider value={value}>
            <h1 style={{color:"blue"}}>This is Grand Grand Parent {nativeVillage}</h1><hr/>
            <GrandParent></GrandParent>
        </AppContext.Provider>
        )
    }
    
    function GrandParent() {
        const { nativeVillage,setNativeVillage } = useContext(AppContext);
        setNativeVillage("Karnataka")
        return (
            <div>
                <h1 style={{color:"red"}}>This is Grand Parent and Changing the Native Village to {nativeVillage} from Bihar</h1><hr/>
                <Parent></Parent>
            </div>
        )
    }
    
    function Parent() {
        return (
            <div>
                <h1 style={{color:"green"}}>This is Parent</h1><hr/>
                <Children></Children>
            </div>
        )
    }
    
    function Children() {
        return (
            <div>
                <h1 style={{color:"pink"}}>This is Children</h1><hr/>
                <GrandChildren></GrandChildren>
            </div>
        )
    }
    
    function GrandChildren() {
        const { nativeVillage} = useContext(AppContext);
        debugger;
        return (
            <div>
                <h1 style={{color:"yellow"}}>This is Grand Children and his Native Village is: {nativeVillage}</h1><hr/>
            </div>
        )
}

