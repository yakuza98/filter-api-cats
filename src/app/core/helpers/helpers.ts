import {IBreeds} from "../../shared/interfaces/interfaces";

export function getQuery(array: IBreeds[]): string {
  return array.reduce((accum: string, breed: IBreeds) => {
    accum += `${breed.id},`;
    return accum;
  }, '')
}
