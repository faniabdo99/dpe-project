const TextSection = (props) => {
    // props = object
    return (
        <>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </>
    );
}
export default TextSection;