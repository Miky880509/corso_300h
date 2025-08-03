
import { chunk, difference, xorArrays } from "../src/my_lodash.js";
import _ from "lodash";
// import {strict as assert} from "node:assert"

const my_array= [50, 60, 10, 25, 30, 45, 5];
const arrayword=["ciao","come", "stai"]
const arraydobble=["ciao","ciao", "viola","viola", 10,10]
const arraycolor=["rosso","giallo","blu","viola","bianco","nero"];


const [expected, actual] = [_.chunk(my_array, 3), chunk(my_array, 3)]
console.log(expected, '\n', actual)


