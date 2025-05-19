interface FirstObserver {
    update(articleTitle: string, comment: string): void;
}

class User implements FirstObserver {
    constructor(public name: string) {}

    update(articleTitle: string, comment: string): void {
        console.log(`👤 ${this.name} foi notificado: Novo comentário em "${articleTitle}": "${comment}"`);
    }
}

class Article {
    private observers: FirstObserver[] = [];
    private comments: string[] = [];

    constructor(public title: string) {}

    subscribe(observer: FirstObserver): void {
        if (!this.observers.includes(observer)) {
            this.observers.push(observer);
        }
    }

    unsubscribe(observer: FirstObserver): void {
        this.observers = this.observers.filter(o => o !== observer);
    }

    addComment(comment: string): void {
        this.comments.push(comment);
        this.notifyObservers(comment);
    }

    private notifyObservers(comment: string): void {
        for (const observer of this.observers) {
            observer.update(this.title, comment);
        }
    }
}

const article = new Article("Entendendo o Padrão FirstObserver");

const user1 = new User("Ana");
const user2 = new User("Carlos");

article.subscribe(user1);
article.subscribe(user2);

article.addComment("Ótimo artigo! Muito bem explicado.");

article.unsubscribe(user1);

article.addComment("Gostaria de ver um exemplo em código.");
  