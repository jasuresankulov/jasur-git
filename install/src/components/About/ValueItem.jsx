function ValueItem(props) {
    return (
        <div className="item-wrapper">
            <div className="value-item">
                <img src={props.image}
                    width={80}
                    height={80}
                    alt=""
                />
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.subtitle}</p>
                </div>
            </div>
        </div>
    );
}

export default ValueItem;