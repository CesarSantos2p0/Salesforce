import { LightningElement} from 'lwc';
import buscarProdutos from '@salesforce/apex/GerenciadorProdutoController.buscarProdutos';

export default class GerenciadorProdutos extends LightningElement {
    produtos = [];

    connectedCallback() {
        buscarProdutos().then(resultado =>{
            this.produtos = resultado;
        })
    }
}
