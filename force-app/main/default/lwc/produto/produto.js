import { LightningElement, api } from 'lwc';
import apagarRegistroProduto from '@salesforce/apex/GerenciadorProdutoController.apagarRegistroProduto';
import LightningConfirm from 'lightning/confirm';
import { NavigationMixin } from "lightning/navigation";

export default class Produto extends NavigationMixin(LightningElement) {
    @api produto;

    //Essa função manda uma mensagem de confirmação para o usuario e se confirmada ela apaga p registro e atualiza o componente
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

    //Essa função abre a parte de editar o produto após o botão Editar é clicado
    editarProduto(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.produto.Id,
                actionName: 'edit',
            },
        });
    }

}