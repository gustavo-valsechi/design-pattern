abstract class ContactComponent {
    abstract show(indent?: string): void;
    abstract search(name: string): ContactComponent | null;
}

class Person extends ContactComponent {
    constructor(private name: string) {
        super();
    }

    show(indent: string = ""): void {
        console.log(`${indent}- Pessoa: ${this.name}`);
    }

    search(name: string): ContactComponent | null {
        return this.name.toLowerCase() === name.toLowerCase() ? this : null;
    }
}

class Group extends ContactComponent {
    private children: ContactComponent[] = [];

    constructor(private name: string) {
        super();
    }

    add(child: ContactComponent): void {
        this.children.push(child);
    }

    remove(child: ContactComponent): void {
        this.children = this.children.filter(c => c !== child);
    }

    show(indent: string = ""): void {
        console.log(`${indent}+ Grupo: ${this.name}`);
        for (const child of this.children) {
            child.show(indent + "  ");
        }
    }

    search(name: string): ContactComponent | null {
        if (this.name.toLowerCase() === name.toLowerCase()) {
            return this;
        }

        for (const child of this.children) {
            const result = child.search(name);
            if (result) return result;
        }

        return null;
    }
}

const root = new Group("Minha Rede de Contatos");

const familia = new Group("Família");
familia.add(new Person("João"));
familia.add(new Person("Maria"));

const primos = new Group("Primos");
primos.add(new Person("Carlos"));
familia.add(primos);

const colegas = new Group("Colegas de Trabalho");
const devs = new Group("Equipe de Desenvolvimento");
devs.add(new Person("Ana"));
devs.add(new Person("Bruno"));
colegas.add(devs);

root.add(familia);
root.add(colegas);
root.add(new Person("Amigo Pessoal: Pedro"));

root.show();

const resultado = root.search("Ana");
if (resultado) {
    console.log("\nContato encontrado:");
    resultado.show("  ");
} else {
    console.log("\nContato não encontrado.");
}
