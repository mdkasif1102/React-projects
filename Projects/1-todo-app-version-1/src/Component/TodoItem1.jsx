function TodoItem1() {
    let TodoName = 'Buy Milk';
    let TodoDate = '04/10/2023';
    return (<div class="container ">

        <div class="row kg-row">
            <div class="col-sm-6">{TodoName}</div>
            <div class="col-sm-4"> {TodoDate} </div>
            <div class="col-sm-2">
                <button type="button" class="btn btn-danger kg-button">Delete</button>
            </div>
        </div>
    </div >
    );
}
export default TodoItem1;