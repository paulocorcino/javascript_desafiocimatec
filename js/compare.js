
//car
let carArr = [];

class Car {
    alturaCacamba = 0;
    alturaVeiculo = 0;
    alturaSolo = 0;
    capacidadeCarga = 0;
    motor = 0;
    potencia = 0;
    volumeCacamba = 0;
    roda;
    nome;
    preco = 0;
    image;

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.nome = nome;
        this.preco = preco;
        this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){

        if(el.checked){
            
            //Include object Array only if car not exist on array and array length down 2
            if(GetCarArrPosition(carArr, carClass) < 0 && carArr.length < 2)
                carArr.push(carClass);           
            
        } else {

            //find object on array if found remove
            let pos = GetCarArrPosition(carArr, carClass);
            if(pos > -1)
                carArr.splice(pos, 1);
        }  

    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    //inject value into compare table
    for(let i = 0; i < carArr.length; i++){
        document.getElementById("compare_image_" + i).innerHTML = "  <img src='" + carArr[i].image + "' width='180'>";
        document.getElementById("compare_modelo_" + i).innerHTML = carArr[i].nome;
        document.getElementById("compare_alturacacamba_" + i).innerHTML = carArr[i].alturaCacamba;
        document.getElementById("compare_alturaveiculo_" + i).innerHTML = carArr[i].alturaVeiculo;
        document.getElementById("compare_alturasolo_" + i).innerHTML = carArr[i].alturaSolo;
        document.getElementById("compare_capacidadecarga_" + i).innerHTML = carArr[i].capacidadeCarga;
        document.getElementById("compare_motor_" + i).innerHTML = carArr[i].motor;
        document.getElementById("compare_potencia_" + i).innerHTML = carArr[i].potencia;
        document.getElementById("compare_volumecacamba_" + i).innerHTML = carArr[i].volumeCacamba;
        document.getElementById("compare_roda_" + i).innerHTML = carArr[i].roda;
        document.getElementById("compare_preco_" + i).innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(carArr[i].preco);
    }
}
