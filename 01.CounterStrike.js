function solve(input){
    let energy = Number(input.shift())
    let distance = Number(input.shift())
    let winCounter = 0

    while(distance !== 'End of battle'){
        distance = Number(distance)
        if(energy - distance >= 0){
            energy -= distance
            winCounter++
            if(winCounter % 3 === 0){
                energy += winCounter
            }
        }else{
            console.log(`Not enough energy! Game ends with ${winCounter} won battles and ${energy} energy`)
            return
        }
        distance = input.shift()
    }

    console.log(`Won battles: ${winCounter}. Energy left: ${energy}`)
}

solve(["200",
"54",
"14",
"28",
"13",
"End of battle"])