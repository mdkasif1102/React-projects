let CurrentTime = () => {
    let time = new Date();
    return <p ClassName="lead">This is the current time:{time.toLocaleDateString()}-{" "}-{time.toLocaleTimeString()}</p>
}

export default CurrentTime;