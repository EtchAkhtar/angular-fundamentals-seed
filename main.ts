//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './app/app.module';

//platformBrowserDynamic().bootstrapModule(AppModule);

class ShoppingList {

    groceries: string[];
    
    constructor() {
        this.groceries = [];
    }

    addItem(item) {
        this.groceries = [...this.groceries, item];
    }

    removeItem(item) {
        this.groceries = this.groceries.filter(grocery => item !== grocery);
    }
}

const list = new ShoppingList();

list.addItem('Banana');
list.addItem('Orange');
console.log(list);

list.removeItem('Orange');
console.log(list);
