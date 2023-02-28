// DESCRIPTION:

// args_count(1, 2, 3) -> 3
// args_count(1, 2, 3, 10) -> 4
//
// SOLUTION:

function args_count(...args){
    return args.length;
}