import {useState} from "react";

export default function AdDesigner() {
    const [flavor, setFlavor] = useState("Choose a Flavor");
    const [useLightTheme, setUseLightTheme] = useState(true);
    const [size, setSize] = useState(16)

    const [pb, setPb] = useState("");
    const [disablePb, setDisablePb] = useState(false);
    
    const [vanilla, setVanilla] = useState("");
    const [disableVanilla, setDisableVanilla] = useState(false);
    
    const [pecan, setPecan] = useState("");
    const [disablePecan, setDisablePecan] = useState(false);

    // const [disableDark, setDisableDark] = useState(false);
    // const [disableLight, setDisableLight] = useState(false);

    const chooseFlavor = (choice: string) => {
        setFlavor(choice);

        if (choice === "Peanut Butter") {
            setPb("selected-button");
            setDisablePb(true);
            setVanilla("");
            setDisableVanilla(false);
            setPecan("");
            setDisablePecan(false);
        } else if (choice === "Vanilla") {
            setVanilla("selected-button");
            setDisableVanilla(true);
            setPecan("");
            setDisablePecan(false);
            setPb("");
            setDisablePb(false);
        } else {
            setPecan("selected-button");
            setDisablePecan(true);
            setPb("");
            setDisablePb(false);
            setVanilla("");
            setDisableVanilla(false);
        }
    }

    let themeClass = "display-ad";

    if (!useLightTheme) {
        themeClass = "display-ad-dark";
    } else {
        themeClass = "display-ad";
    };

        
    let styles = {fontSize: size + "px"};

    const shouldDisableThemeButton = (buttonName: string) => {
        return (useLightTheme && buttonName === "light") || (!useLightTheme && buttonName === "dark");
    };
    return (
        <>
            <h2>Ad Designer</h2>
            <div className={themeClass}>
                <h3>Vote For</h3>
                <p className="display-ad__flavor" style={styles}>{flavor}</p>
            </div>
            <div className="flavor-choices">
                <h3>What To Support</h3>
                <button className={pb} disabled={disablePb} onClick={(event) => {chooseFlavor("Peanut Butter")}}>Peanut Butter</button>
                <button className={vanilla} disabled={disableVanilla} onClick={(event) => {chooseFlavor("Vanilla")}}>Vanilla</button>
                <button className={pecan} disabled={disablePecan} onClick={(event) => {chooseFlavor("Butter Pecan")}}>Butter Pecan</button>
            </div>
            <div className="color-choices">
                <h3>Color Theme</h3>
                <button className="themeButton" disabled={shouldDisableThemeButton("light")} onClick={(event) => {setUseLightTheme(true)}}>Light</button>
                <button className="themeButton" disabled={shouldDisableThemeButton("dark")} onClick={(event) => {setUseLightTheme(false)}}>Dark</button>
            </div>
            <div className="select-font-size">
                <h3>Font Size</h3>
                <div className="select-font-size__options">
                    <button onClick={() => {setSize(prv => prv + 1)}}>Up</button>
                    <p>{size}</p>
                    <button onClick={() => {setSize(prv => prv - 1)}}>Down</button>
                </div>
            </div>
        </>
    )
};