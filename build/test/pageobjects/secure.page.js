const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert() {
        return $('#flash');
    }
}
module.exports = new SecurePage();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJlLnBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90ZXN0L3BhZ2VvYmplY3RzL3NlY3VyZS5wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUUvQjs7R0FFRztBQUNILE1BQU0sVUFBVyxTQUFRLElBQUk7SUFDekI7O09BRUc7SUFDSCxJQUFJLFVBQVU7UUFDVixPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QixDQUFDO0NBQ0o7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUMifQ==