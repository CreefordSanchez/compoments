import Button from "./Button";

function Banner(props) {
    return (
        <section className="hero-banner section-break">
            <h1>{props.Title}</h1>
            <p>{props.Text}</p>
            <div className="button-list flex-center">
                <Button ClassName='secondary flex-center' Text='Secondary'/>
                <Button ClassName='primary flex-center' Text='Primary'/>
            </div>
        </section>
    )
}

export default Banner;