public with sharing class GerenciadorProdutoController {
    
    @AuraEnabled
    public static List<Product2> buscarProdutos() {
        return [SELECT Name, ProductCode, Description, PrecoProduto__c, Id FROM Product2];
    }

    @AuraEnabled
    public static void apagarRegistroProduto(String idProduto){
        delete [SELECT Id FROM Product2 WHERE Id =: idProduto];
    }
}