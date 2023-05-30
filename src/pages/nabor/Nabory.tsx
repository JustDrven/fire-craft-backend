function Nabory(props: { helper: boolean, builder: boolean}) {

    function isHelper() {
        if(props.helper) {
            return <li>V momentální chvíli probýhá helper nábor: <a href="/nabor/helper">Zde</a></li>
        } else {
            return <span>V momentální chvíli neprobýhá helper nábor</span>
        }
    }

    function isBuilder() {
        if(props.builder) {
            return <li>V momentální chvíli probýhá builder nábor: <a href="/nabor/builder">Zde</a></li>
        } else {
            return <span>V momentální chvíli neprobýhá builder nábor</span>
        }
    }


    return (
        <>
        <div className="helper">
            <h3>Helper</h3>
            { isHelper() }
        </div>
        <div className="builder">
            <h3>Builder</h3>
            { isBuilder() }
        </div>
        </>
    )
}

export default Nabory;