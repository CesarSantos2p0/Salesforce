import { LightningElement, api } from 'lwc';
import apagarRegistroProduto from '@salesforce/apex/GerenciadorProdutoController.apagarRegistroProduto';
import LightningConfirm from 'lightning/confirm';
import { RefreshEvent } from "lightning/refresh";

export default class Produto extends LightningElement {
    @api produto;

    async apagarProduto() {
        const result = await LightningConfirm.open({
            message: 'Tem certeza que deseja apagar o produto?',
            theme: 'error'
        });
        if(result){
            apagarRegistroProduto({idProduto: this.produto.Id}).then( resultado =>{
                this.dispatchEvent(new CustomEvent('atualizar'));
            });
        }
    }

}