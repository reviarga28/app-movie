export default function AllButtons(props) {
    const {title, classname} = props
    return (
        <div>
            <button className={classname}>{title}</button>
        </div>
    );
}