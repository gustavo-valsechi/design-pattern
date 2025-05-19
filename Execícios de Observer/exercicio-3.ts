enum AlertType {
    PRICE_CHANGE,
    VOLUME_SPIKE,
    MARKET_EVENT
}

enum Priority {
    HIGH,
    MEDIUM,
    LOW
}

type TNotification = {
    stockSymbol: string;
    type: AlertType;
    priority: Priority;
    message: string;
    timestamp: Date;
};

interface Observer {
    notify(notification: TNotification): void;
    isInterested(notification: TNotification): boolean;
}

abstract class Notifier {
    abstract notify(notification: TNotification): void;
}

class NotificationHistory {
    private history: TNotification[] = [];

    add(notification: TNotification): void {
        this.history.push(notification);
    }

    getAll(): TNotification[] {
        return [...this.history];
    }
}

class Investor extends Notifier implements Observer {
    constructor(
        public name: string,
        private filters: Set<AlertType>,
        private minPriority: Priority,
        private history: NotificationHistory
    ) {
        super();
    }

    isInterested(notification: TNotification): boolean {
        return (
            this.filters.has(notification.type) &&
            notification.priority <= this.minPriority
        );
    }

    notify(notification: TNotification): void {
        if (this.isInterested(notification)) {
            console.log(`[${this.name}] ALERTA: ${notification.message}`);
            this.history.add(notification);
        }
    }
}

class Stock {
    private observers: Observer[] = [];

    constructor(public symbol: string) {}

    subscribe(observer: Observer): void {
        if (!this.observers.includes(observer)) {
            this.observers.push(observer);
        }
    }

    unsubscribe(observer: Observer): void {
        this.observers = this.observers.filter(o => o !== observer);
    }

    triggerNotification(notification: Omit<TNotification, 'timestamp' | 'stockSymbol'>): void {
        const fullNotification: TNotification = {
            ...notification,
            stockSymbol: this.symbol,
            timestamp: new Date()
        };

        for (const observer of this.observers) {
            if (observer.isInterested(fullNotification)) {
                observer.notify(fullNotification);
            }
        }
    }
}
  
const history1 = new NotificationHistory();
const history2 = new NotificationHistory();

const investor1 = new Investor("Alice", new Set([AlertType.PRICE_CHANGE]), Priority.MEDIUM, history1);
const investor2 = new Investor("Bob", new Set([AlertType.PRICE_CHANGE, AlertType.VOLUME_SPIKE]), Priority.HIGH, history2);

const stockAAPL = new Stock("AAPL");
const stockTSLA = new Stock("TSLA");

stockAAPL.subscribe(investor1);
stockAAPL.subscribe(investor2);
stockTSLA.subscribe(investor2);

stockAAPL.triggerNotification({
    type: AlertType.PRICE_CHANGE,
    priority: Priority.HIGH,
    message: "AAPL caiu 5% em 10 minutos"
});

stockTSLA.triggerNotification({
    type: AlertType.VOLUME_SPIKE,
    priority: Priority.MEDIUM,
    message: "Volume de TSLA subiu 300% acima da média"
});

console.log("\n🔎 Histórico de Alice:");
console.log(history1.getAll());

console.log("\n🔎 Histórico de Bob:");
console.log(history2.getAll());
