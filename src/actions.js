import { ADD, ADD_CHEESE, ADD_MEAT, ADD_TAMATO, ADD_VEGETABLE, REMOVE, REMOVE_CHEESE, REMOVE_MEAT, REMOVE_TAMATO, REMOVE_VEGETABLE } from "./Types"

    export const MeatAdder = () =>({
    type: ADD_MEAT,

    });
    export const MeatRemover = () =>({
    type: REMOVE_MEAT,

    });



    export const CheeseAdder = () =>({
    type: ADD_CHEESE,

    });
    export const CheeseRemover = () =>({
    type: REMOVE_CHEESE,

    });



    export const VegetableAdder = () =>({
    type: ADD_VEGETABLE,

    });
    export const VegetableRemover = () =>({
    type: REMOVE_VEGETABLE,

    });



    export const TamatoAdder = () =>({
    type: ADD_TAMATO,

    });
    export const TamatoRemover = () =>({
    type: REMOVE_TAMATO,

    });




    export const Adder = () =>({
    type: ADD,

    });
    export const Remover = () =>({
    type: REMOVE,
   
   });
