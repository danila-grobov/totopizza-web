export default props => {
    const { src, title, desc } = props;
    return (
        <div className="sandwichInfo">
            <span className="sandwichInfo__title">{title}</span>
            <span className="sandwichInfo__desc">{desc}</span>
            <img src={src} alt="" className="sandwichInfo__img" />
        </div>
    )
}