function AddTodo() {
    return <div class="row kg-row ">
        <div class="col-sm-6">
            <input type="text" placeholder=" Enter Todo here" />
        </div>
        <div class="col-sm-4">
            < input type="date" />
        </div>
        <div class="col-sm-2">
            <button type="button" class="btn btn-success kg-button">Add</button>
        </div>
    </div>
}
export default AddTodo;