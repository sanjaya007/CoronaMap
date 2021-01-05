function id(id){
    return document.getElementById(id);
}
 
function formatNumberWithCommas(num) {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
}

function dynamicsort(property,order) {
    var sort_order = 1;
    if(order === "desc"){
        sort_order = -1;
    }
    return function (a, b){
        // a should come before b in the sorted order
        if(a[property] < b[property]){
                return -1 * sort_order;
        // a should come after b in the sorted order
        }else if(a[property] > b[property]){
                return 1 * sort_order;
        // a and b are the same
        }else{
                return 0 * sort_order;
        }
    }
}