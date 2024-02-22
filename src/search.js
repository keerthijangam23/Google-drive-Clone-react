export default function SearchBar(){
    return(
        <>
        <div className="search">
        <input
          style={{ width: "500px", height: "20px" }}
          type="text"
          placeholder="Search.."
        />
        <button style={{ width: "70px", height: "25px" }} type="submit">
          <i class="fa fa-search"></i>
        </button>
      </div>
        </>
    );
}