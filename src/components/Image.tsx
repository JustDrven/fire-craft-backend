function Image(props: {src: string}) {

    return (
        <img src={props.src} alt="Error with source!"
        style=
        {{
            borderRadius: "4px",
            pointerEvents: "none",
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none"
        }} />
    )

}

export default Image;