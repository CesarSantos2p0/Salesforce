public class ContatoExitente {
        public contato() {

            List<Contact> conList = new List<Contact> {
            Contact josh = new Contact(FirstName='Josh',LastName='Kaplan',Department='Finance');       
            insert josh;
            josh.Description = 'Josh\'s record has been updated by the upsert operation.';
            Contact kathy = new Contact(FirstName='Kathy',LastName='Brown',Department='Technology');
            List<Contact> contacts = new List<Contact> { josh, kathy };
            upsert contacts;
        }
        System.debug(contacts)
 }       }