import { database } from './../data/data.store';
import { IResolvers } from '@graphql-tools/utils';
import _ from 'lodash';

const type: IResolvers = {
    Customer: {
        accounts: parent => {
            const accountList : Array<any> = [];
            parent.accounts.map((account: string) => {
                //console.log(account)
               // console.log(database.accounts)
                accountList.push(_.filter(database.accounts, ['iban',account])[0])
            });
            return accountList
        },
        promos: parent => {
            const promosList: Array<any> = [];
            parent.promos.map((promo: string) => {
                promosList.push(_.filter(database.promos, ['id', promo])[0])
            })
            return promosList
        }
    } 
}

export default type;