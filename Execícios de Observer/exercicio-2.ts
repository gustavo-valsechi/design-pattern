enum NotificationType {
    LOW_STOCK,
    RESTOCKED,
    OUT_OF_STOCK
}

interface SecondObserver {
    notify(productName: string, type: NotificationType, quantity: number): void;
    getSubscribedTypes(): NotificationType[];
}

class Product {
    private observers: SecondObserver[] = [];
    private quantity: number;

    constructor(private name: string, private minStock: number, initialStock: number) {
        this.quantity = initialStock;
    }

    subscribe(observer: SecondObserver): void {
        if (!this.observers.includes(observer)) {
            this.observers.push(observer);
        }
    }

    unsubscribe(observer: SecondObserver): void {
        this.observers = this.observers.filter(o => o !== observer);
    }

    changeStock(amount: number): void {
        const prevQuantity = this.quantity;
        this.quantity += amount;

        if (prevQuantity > 0 && this.quantity <= 0) {
            this.notifyObservers(NotificationType.OUT_OF_STOCK);
        } else if (prevQuantity <= this.minStock && this.quantity > this.minStock) {
            this.notifyObservers(NotificationType.RESTOCKED);
        } else if (this.quantity > 0 && this.quantity <= this.minStock && prevQuantity > this.minStock) {
            this.notifyObservers(NotificationType.LOW_STOCK);
        }
    }

    private notifyObservers(type: NotificationType): void {
        for (const observer of this.observers) {
            if (observer.getSubscribedTypes().includes(type)) {
                observer.notify(this.name, type, this.quantity);
            }
        }
    }
}

class SalesDepartment implements SecondObserver {
    getSubscribedTypes(): NotificationType[] {
        return [NotificationType.LOW_STOCK, NotificationType.OUT_OF_STOCK];
    }

    notify(productName: string, type: NotificationType, quantity: number): void {
        console.log(`[Vendas] Produto: ${productName} - ${NotificationType[type]} - Estoque: ${quantity}`);
    }
}

class PurchasingDepartment implements SecondObserver {
    getSubscribedTypes(): NotificationType[] {
        return [NotificationType.LOW_STOCK, NotificationType.OUT_OF_STOCK, NotificationType.RESTOCKED];
    }

    notify(productName: string, type: NotificationType, quantity: number): void {
        console.log(`[Compras] Produto: ${productName} - ${NotificationType[type]} - Estoque: ${quantity}`);
    }
}

class ManagementDepartment implements SecondObserver {
    getSubscribedTypes(): NotificationType[] {
        return [NotificationType.RESTOCKED, NotificationType.OUT_OF_STOCK];
    }

    notify(productName: string, type: NotificationType, quantity: number): void {
        console.log(`[Gerência] Produto: ${productName} - ${NotificationType[type]} - Estoque: ${quantity}`);
    }
}

const produto = new Product("Detergente", 10, 15);

const vendas = new SalesDepartment();
const compras = new PurchasingDepartment();
const gerencia = new ManagementDepartment();

produto.subscribe(vendas);
produto.subscribe(compras);
produto.subscribe(gerencia);

produto.changeStock(-6);
produto.changeStock(-5);
produto.changeStock(10);
  