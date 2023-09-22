"use strict"; //signifie on va travailler avec java strict pour avoir aucune erreur

/**            BOUCLE
 *              FOR
 * Declarer une variable a qui est egale à un entier positif
 * 
 * Faire un console log de 'OKLM' autant de fois que le valeur de a
 * 
 * 
 */





let a=4; //variable a déclarer avec la valeur 4
for(let i=0;i<a;i++){  //boucle for qui initialise la variable i à 0 et qui rajoute +1 à chaque tour tant que la variable a reste supérieur à la variable i
    console.log('Ok'); //chaque tour sa affiche le mot ok
}


//          WHILE
/**
 * Declarer une varaible a qui est egale a 3
 * tant que a est plus petit que 9 
 * incremente a de 1
 * si a est egal a 8 on arrete la boucle 
 * si a est egal a 7 on revient au debut de la boucle 
 * on console log(a)
 */



 
let aa=3; //variable aa déclarer avec la valeur 3
while(aa<9){  //boucle while fait que tant que aa est inférieur à 9 on continue à tourner tout en affichant le nombre à chaque tour et on ajoute 1 et si c'est égale à 7 on revient au debut de la boucle sans afficher le tour et si c'est égal à 8 on stop la boucle 
    aa++
    if(aa==7){
        continue
    }
    if(aa==8){
        break
    }
    console.log(aa);
}
console.log('J ai cassé la boucle au bout de '+aa+" tours"); //à la fin sa affiche à combien de tours la boucle c'est cassé
