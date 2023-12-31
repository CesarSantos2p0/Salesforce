public with sharing class GerenciadorProdutoController {
    
    @AuraEnabled
    public static List<Product2> buscarProdutos() {
        return [SELECT Name, ProductCode, Description, PrecoProduto__c, Id FROM Product2];
    }
}