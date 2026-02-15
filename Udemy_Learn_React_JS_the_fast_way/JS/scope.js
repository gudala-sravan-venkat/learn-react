function main(){
    console.log("Hello World!");
    // var
    var variableName = 10;
    variableName = 20;
    if(true){
        var variableName = 40;
        var secondVariable = 50
    }
    console.log("variableName: " + variableName);
    console.log("secondVariable: " + secondVariable);

    // let
    let x = 10;
    if(true){
        let x = 20;
        x = 40;
    }
    console.log("x: " +  x)

    // const
    const constanVariable = 10;
    const constantVariable = 20;
    console.log("constantVariable: " + constantVariable);
}

main();