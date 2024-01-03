public with sharing class GerenciadorProdutoController {
    
    @AuraEnabled
    // Essa função busca o nome, codigo, descrição e preço dos produtos e retorna o valor deles.
    public static List<Product2> buscarProdutos() {
        return [SELECT Name, ProductCode, Description, PrecoProduto__c, Id FROM Product2];
    }

    @AuraEnabled
    // O metodo recebe o id do produto e o deleta
    public static void apagarRegistroProduto(String idProduto){
        delete [SELECT Id FROM Product2 WHERE Id =: idProduto];
    }
}