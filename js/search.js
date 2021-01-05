function searchFn(){
    var searchInput = id("searchKeyword"),
    allCountriesDiv = document.querySelectorAll(".country");

    searchInput.onkeyup = function(){
        let keyword = this.value.toLowerCase();
        // console.log(keyword);
        allCountriesDiv.forEach(countryDiv=>{
            let name = countryDiv.title.toLowerCase();
            if( name.includes(keyword)){
                countryDiv.style.display = "flex";
            }else{
                countryDiv.style.display = "none";
            }
            if(keyword == "" || keyword == null){
                countryDiv.style.display = "flex";
            }
        })   
    }
}