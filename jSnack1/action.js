$(document).ready(function(){
    var bicicletta = [
        {
            'nome': 'Bici da città',
            'peso': 7
        },

        {
            'nome': 'Bici da corsa',
            'peso': 7.5
        },

        {
            'nome': 'Bici elettrica',
            'peso': 11
        },

        {
            'nome': 'Bici pieghevole',
            'peso': 3
        },

        {
            'nome': 'mountain bike',
            'peso': 6
        }
    ];

    stampa(bicicletta);
})


function stampa(x){

    var min = x[0].peso; //Inizializzo il peso minimo in una variabile 'min'.
    var index = 0; //Inizializzo un index che terrà traccia della bici con peso minore.

    for (var i = 0; i < x.length; i++) {
        var bici_corrente = x[i]; //Salvo la bici corrente ogni volta che la i incrementa.
        var peso_bici = bici_corrente.peso; //Assegno ad una variabile il peso della bici corrente.

        if(peso_bici < min) { //Confronto con min.
            min = peso_bici;
            index = i; //Mi salvo l'indice.
        }
    }

    //Stampo.
    console.log(x[index].nome);
    console.log(x[index].peso);


}
