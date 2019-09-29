function foo(p1 = false, p2 = false) {
    if(p1&&p2){
        return "coffee with sugar and with milk";
    } else if(p1){
        return "coffee with sugar";
    } else if(p2){
        return "coffee with milk";
    } else {
        return "coffee";
    }
}
