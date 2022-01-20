import { Cliente } from "./cliente";
import { Produite } from "./produite";


export class Ventee {
    id: number;
    date: string;
    produite: Produite;
    client: Cliente;
}
