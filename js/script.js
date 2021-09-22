function fnAddCab(evt){
    obj = {}
    obj.id = document.querySelector("input[id='cab-id']").value
    obj.cabId = document.querySelector("input[id='cab-id']").value
    obj.cabType = document.querySelector("input[id='cab-type']").value
    obj.perKm = document.querySelector("input[id='per-km']").value
    console.log(obj);
    evt.preventDefault();

    fetch("http://localhost:3000/cabs", 
    {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(resp => resp.json())
    .then(data => {
        alert("Record Inserted Successfully"+  data)
        // window.location.href ="http://127.0.0.1:5500/";
        window.location.replace("http://127.0.0.1:5500/");
    } )
}


function getCabById(evt){
    let cabId = document.querySelector("input[id='cab-id']").value

    fetch("http://localhost:3000/cabs/" + cabId)
        .then(resp => resp.json())
        .then(data => {
            // rendering 
            console.log(data);
            // is to render on the dom 
        })
}