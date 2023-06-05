import { useParams } from "react-router-dom";
import BungeeServers from "../../json/BungeeServers";

const Servers = () => {
    const {serverID} = useParams();

    const oneSpecificServer = BungeeServers.find(s => s.id.toString() == serverID)

    const getServer = () => {
        if (!(oneSpecificServer == null)) {
            return (
                <div className="server" style={{ padding: "0", margin: "0" }}>
                    <p style={{ padding: "0", margin: "0" }} >Server: { oneSpecificServer.name }</p>
                    <p style={{ padding: "0", margin: "0" }} >ID: { oneSpecificServer.id }</p>
                    <p style={{ padding: "0", margin: "0" }} >Max Players: { oneSpecificServer.max }</p>
                </div>
            )
        } else {
            return (
                <div id="error-wrapper" style={{
                    padding: "1.1em"
                }}>
                    <p style={{ textAlign: "center" }}>This server is not exist or not in database!</p>
                </div>
            )
        }
    }

    return (
        <>
            { getServer() }
        </>
    )
}

export default Servers;