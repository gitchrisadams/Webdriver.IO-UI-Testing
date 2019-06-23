/* Tests will use this class directly
 * So export as new OpenPage
 */
import Page from './Page';

class OpenPage extends Page {
  open() {
    super.open('http://localhost:3000');
  }
}

export default new OpenPage();