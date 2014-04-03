/**
 * Created by Davis on 4/2/14.
 */

function isAMult(n, x){
    return n % x === 0;
}

function isSmlMultofLrg(n1, n2){
    return isAMult(Math.max(n1,n2),Math.min(n1,n2));
}

function getMultsfromlist(n, xs){
    var res = [];
    for(var i = 0; i < xs.length; i++){
        if(isAMult(n, xs[i])){
            res.push(xs[i]);
        }
    }
    return res;
}

function shareComMultinList(n1, n2, xs){
    for(var i = 0; i < xs.length; i++){
        if(isAMult(n1,xs[i])&&isAMult(n2,xs[i])){
            return true;
        }
    }
    return false;
}
