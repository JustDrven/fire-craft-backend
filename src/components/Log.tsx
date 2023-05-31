function Log(props: {title: string, category: string, desc: string, auther: string}) {
    return (
        <div className="log">
            <div className="title" style={{
                background: "#d7473c",
                color: "white",
                height: "14rem",
                borderRadius: "6px",
                width: "16rem",
                padding: "0.2em 0.9em"
            }}>
                <h3>{props.title} | {props.category}</h3>
                <span>{props.desc}</span>
                <br />
                <br />
                <span>Děkuji za přečtení <br />
                S pozdravem {props.auther}</span> <img src={`https://minotar.net/avatar/${props.auther}`} alt="JustDrven" style={
                    {
                        position: "relative",
                        left: "0.4em",
                        top: "0.5em",
                        maxWidth: "1.5em"
                    }
                } />
            </div>
        </div>
    
    )
}

export default Log;