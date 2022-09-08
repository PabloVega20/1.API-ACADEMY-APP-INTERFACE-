import { database } from "./../data/data.store";
import { IResolvers } from "@graphql-tools/utils";

const query: IResolvers = {
  Query: {
    customer(__: void, { id }): any {
      const resultado = database.customers.filter(
        (customer) => customer.id === id
      )[0];
      if (resultado == undefined) {
        return {
          id: "-1",
          name: `No se ha encontrado el usuario con el ID ${id}`,
          alias: "",
          accounts: [],
          promos: []
        }
      } else {
        return resultado
      }
    },
    customers(): any{
      return database.customers
    } 
  }
};

export default query;
