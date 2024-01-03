import { LightningElement} from 'lwc';
import buscarProdutos from '@salesforce/apex/GerenciadorProdutoController.buscarProdutos';
import { NavigationMixin } from 'lightning/navigation';

export default class GerenciadorProdutos extends NavigationMixin(LightningElement) {
    produtos = [];

    //Essa função cria um novo registro de produto quando o botão Novo Produto é clicado
    criarProduto(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Product2',
                actionName: 'new'                
            },
        });
    }

    //Essa função busca os produtos para serem mostrados no componente
    connectedCallback() {
        buscarProdutos().then(resultado =>{
            this.produtos = resultado;
        })
    }
    
    //Essa funão atualiza o componente sempre que um produto é apagado
    atualizarLista(){
        buscarProdutos().then(resultado =>{
            this.produtos = resultado;
        })
    }
}
