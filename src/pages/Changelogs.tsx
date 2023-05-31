import Log from "../components/Log";

function Changelogs() {
    return (
        <div className="logs">
            <div className="title">
                <h1 style={{ textAlign: "center" }}>Changelogs</h1>
                <br />
                <div className="container" style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.9em"
                }}>
                    <Log title={"Server byl otevřen!"} category={"Dev log"} desc={
                        "Rádi vám oznamujeme, že server byl otevřen!"
                        }
                        auther="JustDrven" />

                       <Log title={"Website source"} category={"Dev log"} desc={
                        "Rádi vám oznamujeme, že webová stránka je nové optimalizovaná, pokud se najde nějaká chyba byli bychom rádí kdyby jste chybu nahlásili."
                        }
                        auther="JustDrven" />

                       <Log title={"GetDown"} category={"News"} desc={
                        "Rádi vám oznamujeme, že na serveru byla přidáná nová minihra, která nosí název GetDown. Pojd si zahrát s kamarády."
                        }
                        auther="JustDrven" />
                </div>
            </div>
        </div>
    )
}

export default Changelogs;