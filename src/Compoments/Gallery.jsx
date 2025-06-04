function Gallery(props) {
    return (
        <section className="book-list section-break">
            <div className="book-collection flex-between">
                {props.Links.map(book => (
                <div className="book-cover">
                    <img src={book} alt={book}></img>
                </div>
                ))}
            </div>            
        </section>
    )
}

export default Gallery;