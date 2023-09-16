/*const canDrive = function(age, pays) {
    if (
        (age >= 18 && pays === "FR") ||
        (age >= 16 && pays === "US")
    ) {
        return true
    }
    return false
}

Si on souhaite utiliser une fonction avec une portée globale on utilise function [nom] {}.
Si on veut au contraire une portée plus limité, par exemple dans le cas d'une seule utilisation dans une boucle etc.. Alors la méthode avec const est mieux.

console.log(canDrive(17, "FR"));
----
function greeting(name) {
    console.log(`Bonjour ${name}`);
}

console.log(greeting('Narek'));*/

function maFonction() {
    console.log(this);
}
maFonction();