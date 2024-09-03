

const SubnavDisplay = ({user}) => {
    const {name, photo} = user;
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default SubnavDisplay;