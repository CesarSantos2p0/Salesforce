public class StringArrayTest {
    
    private static List<String> generateStringArray(Integer N){
        List<String> TestList = new List<string>();
        for(Integer i = 0; i < N; i++){
            TestList.add('Test ' + i);
            system.debug(TestList[i]);
        }
        return TestList;
    }
    public static List<String> testeMetodoPublico(Integer numero) {
    return generateStringArray(numero);
}
}