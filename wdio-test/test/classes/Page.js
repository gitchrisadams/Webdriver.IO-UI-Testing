/* This class can be import by other classes
 * So need need to export like export default new Page
 * Other classes will extend this class
 */
class Page {
  open(path) {
    browser.url(path);
  }
}

export default Page;