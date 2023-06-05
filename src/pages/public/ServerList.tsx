import { Link } from "react-router-dom";
import servers from "../../json/BungeeServers";

export default function ServerList() {


    return (
        <>
        <h1 style={{ textAlign: "center" }}>Servers</h1>
        <br />
        {servers.map((server) => (
        <div key={server.id}>
            <p style={{ margin: "1rem 0.8rem", padding: "0", textAlign: "center" }}>{server.name} | <Link to={`id/${server.id}`} style=
            {{ textDecoration: "none",
               background: "#c32323",
               color: "white",
               margin: "0.9rem 0.5rem",
               borderRadius: "9px",
               padding: "0.3rem 1rem",
               cursor: "pointer"

                 }}
            >Information</Link></p>
          {}
        </div>
      ))}
        </>
    )
}