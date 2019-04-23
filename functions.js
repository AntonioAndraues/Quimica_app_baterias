
function ddp(temp,reagente1, reagente2, ddpInicial, eletrons){
    const R = 2.303;
    const F = 96490;

    var ddp = (ddpInicial - ((R*temp) / (eletrons*F)))*Math.log( (reagente1.concentracao)**(reagente1.ele) / (reagente2.concentracao)**(reagente2.n) );

    return ddp;
}


function capCarga(n){
    const C = 9.65 * 10**4;

    return (C*n) / 3600;
}

function correnteMax(ddp){
    return ddp / 0.0001;
}

function tempoDeUso(capCarga,amperUso){
    return capCarga/amperUso;
}

function densEnerg(ddp, mols){
    const P = ddp * (mols*96490);
    const V = 20 * 10 **-6;

    return P / V;
}

function densCarga(capCarga){
    const V = 20 * 10 **-6;

    return capCarga / V;
}
